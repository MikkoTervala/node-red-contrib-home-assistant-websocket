import { NodeMessage } from 'node-red';

import InputOutputController, {
    InputOutputControllerOptions,
    InputProperties,
} from '../../common/controllers/InputOutputController';
import InputError from '../../common/errors/InputError';
import NoConnectionError from '../../common/errors/NoConnectionError';
import { IntegrationEvent } from '../../common/integration/Integration';
import ValueEntityIntegration from '../../common/integration/ValueEntityIntegration';
import { ValueIntegrationMode } from '../../const';
import { EntityBaseNodeProperties, OutputProperty } from '../../types/nodes';
import { EntityConfigNode } from '../entity-config';
import { NumberNode } from '.';

export interface NumberNodeProperties extends EntityBaseNodeProperties {
    mode: ValueIntegrationMode;
    value: string;
    valueType: string;
    outputProperties: OutputProperty[];
}

type NumberNodeOptions = InputOutputControllerOptions<
    NumberNode,
    NumberNodeProperties
>;

export default class NumberController extends InputOutputController<
    NumberNode,
    NumberNodeProperties
> {
    protected integration?: ValueEntityIntegration;
    #entityConfigNode?: EntityConfigNode;

    constructor(props: NumberNodeOptions) {
        super(props);
        this.#entityConfigNode = this.integration?.getEntityConfigNode();

        // listen for value changes if we are in listening mode
        if (this.node.config.mode === ValueIntegrationMode.In) {
            this.#entityConfigNode?.addListener(
                IntegrationEvent.ValueChange,
                this.#onValueChange.bind(this)
            );
        }
    }

    protected async onInput({
        done,
        message,
        parsedMessage,
        send,
    }: InputProperties) {
        if (!this.integration?.isConnected) {
            throw new NoConnectionError();
        }
        if (!this.integration?.isIntegrationLoaded) {
            throw new InputError(
                'home-assistant.error.integration_not_loaded',
                'home-assistant.status.error'
            );
        }

        let value = this.typedInputService.getValue(
            parsedMessage.value.value,
            parsedMessage.valueType.value,
            {
                message,
            }
        );

        if (typeof value !== 'number') {
            throw new InputError(
                'ha-number.error.value_not_number',
                'home-assistant.status.error'
            );
        }

        value = this.#getValidatedValue(value);

        // get previous value before updating
        const previousValue = this.#entityConfigNode?.state?.getLastPayload()
            ?.state as number | undefined;
        await this.#prepareSend(message, value);
        // send value change to all number nodes
        this.#entityConfigNode?.emit(
            IntegrationEvent.ValueChange,
            value,
            previousValue
        );

        send(message);
        done();
    }

    async #onValueChange(value: number, previousValue?: number) {
        if (isNaN(value)) return;

        const message: NodeMessage = {};
        await this.#prepareSend(message, value, previousValue);

        this.node.send(message);
    }

    // keep the number in range if min/max is set in the entity config
    #getValidatedValue(value: number): number {
        const min = Number(
            this.integration?.getEntityHomeAssistantConfigValue('min_value')
        );
        const max = Number(
            this.integration?.getEntityHomeAssistantConfigValue('max_value')
        );
        if (min && value < min) {
            value = min;
        }
        if (max && value > max) {
            value = max;
        }

        return value;
    }

    // Take care of repetative code in onInput and #onValueChange
    async #prepareSend(
        message: NodeMessage,
        value: number,
        previousValue?: number
    ): Promise<void> {
        await this.integration?.updateHomeAssistant(value);
        this.status.setSuccess(value.toString());
        if (!previousValue) {
            previousValue = this.#entityConfigNode?.state?.getLastPayload()
                ?.state as number | undefined;
        }
        this.setCustomOutputs(this.node.config.outputProperties, message, {
            config: this.node.config,
            value,
            previousValue,
        });
        this.#entityConfigNode?.state?.setLastPayload({
            state: value,
            attributes: {},
        });
    }
}