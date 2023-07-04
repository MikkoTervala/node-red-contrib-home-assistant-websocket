import Joi from 'joi';

import { createControllerDependencies } from '../../common/controllers/helpers';
import Events from '../../common/events/Events';
import InputService, { NodeInputs } from '../../common/services/InputService';
import State from '../../common/State';
import Status from '../../common/status/Status';
import { TypedInputTypes, ValueIntegrationMode } from '../../const';
import { RED } from '../../globals';
import { migrate } from '../../helpers/migrate';
import { getConfigNodes } from '../../helpers/node';
import { getHomeAssistant } from '../../homeAssistant/index';
import {
    BaseNode,
    EntityBaseNodeProperties,
    OutputProperty,
} from '../../types/nodes';
import TextController from './TextController';

export interface TextNodeProperties extends EntityBaseNodeProperties {
    mode: ValueIntegrationMode;
    value: string;
    valueType: string;
    outputProperties: OutputProperty[];
}

export interface TextNode extends BaseNode {
    config: TextNodeProperties;
}

export const inputs: NodeInputs = {
    value: {
        messageProp: 'payload.text',
        configProp: 'value',
        default: 'payload',
    },
    valueType: {
        messageProp: 'payload.valueType',
        configProp: 'valueType',
        default: TypedInputTypes.Message,
    },
};

export const inputSchema: Joi.ObjectSchema = Joi.object({
    value: Joi.alternatives().try(Joi.string(), Joi.number()).required(),
    valueType: Joi.string()
        .valid(
            TypedInputTypes.Message,
            TypedInputTypes.Flow,
            TypedInputTypes.Global,
            TypedInputTypes.JSONata,
            TypedInputTypes.Number
        )
        .required(),
});

export default function textNode(this: TextNode, config: TextNodeProperties) {
    RED.nodes.createNode(this, config);
    this.config = migrate(config);

    const { entityConfigNode, serverConfigNode } = getConfigNodes(this);
    const homeAssistant = getHomeAssistant(serverConfigNode);
    const nodeEvents = new Events({ node: this, emitter: this });
    const state = new State(this);
    const status = new Status({
        config: serverConfigNode.config,
        nodeEvents,
        node: this,
        state,
    });

    const controllerDeps = createControllerDependencies(this, homeAssistant);
    const inputService = new InputService<TextNodeProperties>({
        inputs,
        nodeConfig: this.config,
        schema: inputSchema,
    });

    entityConfigNode.integration.setStatus(status);
    // eslint-disable-next-line no-new
    new TextController({
        inputService,
        integration: entityConfigNode.integration,
        node: this,
        status,
        ...controllerDeps,
        state,
    });
}