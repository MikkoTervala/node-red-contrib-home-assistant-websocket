import{_ as s,o as n,c as a,e as t}from"./app-CV8varBB.js";const p="/node-red-contrib-home-assistant-websocket/assets/motion-triggered-light_01-_ryc2wuv.png",o="/node-red-contrib-home-assistant-websocket/assets/motion-triggered-light_02-Cnf1c8VK.png",e={},u=t('<h1 id="motion-triggered-light" tabindex="-1"><a class="header-anchor" href="#motion-triggered-light" aria-hidden="true">#</a> Motion Triggered Light</h1><h2 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example 1</h2><p>A motion sensor that always sends an <code>on</code> event when any motion is detected and continues sending an update on each detection. This example turns a light on when motion is detected and waits 5 minutes for no motion and turns off the light.</p><p><img src="'+p+`" alt="screenshot"></p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;20f6aead.8b5d52&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;server-state-changed&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;z&quot;</span><span class="token operator">:</span><span class="token string">&quot;cf5fa59f.b4f528&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;version&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token property">&quot;exposeToHomeAssistant&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;haConfig&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;property&quot;</span><span class="token operator">:</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;property&quot;</span><span class="token operator">:</span><span class="token string">&quot;icon&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token property">&quot;entityidfilter&quot;</span><span class="token operator">:</span><span class="token string">&quot;sensor.motion&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;entityidfiltertype&quot;</span><span class="token operator">:</span><span class="token string">&quot;exact&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;outputinitially&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;state_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;str&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;haltifstate&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;halt_if_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;str&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;halt_if_compare&quot;</span><span class="token operator">:</span><span class="token string">&quot;is&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;outputs&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token property">&quot;output_only_on_state_change&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token property">&quot;x&quot;</span><span class="token operator">:</span><span class="token number">224</span><span class="token punctuation">,</span><span class="token property">&quot;y&quot;</span><span class="token operator">:</span><span class="token number">1560</span><span class="token punctuation">,</span><span class="token property">&quot;wires&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;11c7e80d.388958&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;11c7e80d.388958&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;trigger&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;z&quot;</span><span class="token operator">:</span><span class="token string">&quot;cf5fa59f.b4f528&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;op1&quot;</span><span class="token operator">:</span><span class="token string">&quot;{\\&quot;service\\&quot;: \\&quot;turn_on\\&quot;}&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;op2&quot;</span><span class="token operator">:</span><span class="token string">&quot;{\\&quot;service\\&quot;: \\&quot;turn_off\\&quot;}&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;op1type&quot;</span><span class="token operator">:</span><span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;op2type&quot;</span><span class="token operator">:</span><span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;duration&quot;</span><span class="token operator">:</span><span class="token string">&quot;5&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;extend&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token property">&quot;units&quot;</span><span class="token operator">:</span><span class="token string">&quot;min&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;reset&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;bytopic&quot;</span><span class="token operator">:</span><span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;topic&quot;</span><span class="token operator">:</span><span class="token string">&quot;topic&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;outputs&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token property">&quot;x&quot;</span><span class="token operator">:</span><span class="token number">460</span><span class="token punctuation">,</span><span class="token property">&quot;y&quot;</span><span class="token operator">:</span><span class="token number">1560</span><span class="token punctuation">,</span><span class="token property">&quot;wires&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;371465f9.46b39a&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;371465f9.46b39a&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;api-call-service&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;z&quot;</span><span class="token operator">:</span><span class="token string">&quot;cf5fa59f.b4f528&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;Kitchen Light&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;version&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token property">&quot;debugenabled&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;service_domain&quot;</span><span class="token operator">:</span><span class="token string">&quot;light&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;service&quot;</span><span class="token operator">:</span><span class="token string">&quot;turn_on&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;entityId&quot;</span><span class="token operator">:</span><span class="token string">&quot;light.kitchen&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;dataType&quot;</span><span class="token operator">:</span><span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;mergecontext&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;output_location&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;output_location_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;mustacheAltTags&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;x&quot;</span><span class="token operator">:</span><span class="token number">652</span><span class="token punctuation">,</span><span class="token property">&quot;y&quot;</span><span class="token operator">:</span><span class="token number">1560</span><span class="token punctuation">,</span><span class="token property">&quot;wires&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre></div><h2 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2" aria-hidden="true">#</a> Example 2</h2><p>A motion sensor that only sends an <code>on</code> event once then an <code>off</code> event when motion is no longer detected.</p><p><img src="`+o+`" alt="screenshot"></p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;9e2a08f5.4634b8&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;server-state-changed&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;z&quot;</span><span class="token operator">:</span><span class="token string">&quot;ffbd7f06.4a014&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;version&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token property">&quot;exposeToHomeAssistant&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;haConfig&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;property&quot;</span><span class="token operator">:</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;property&quot;</span><span class="token operator">:</span><span class="token string">&quot;icon&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token property">&quot;entityidfilter&quot;</span><span class="token operator">:</span><span class="token string">&quot;sensor.motion&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;entityidfiltertype&quot;</span><span class="token operator">:</span><span class="token string">&quot;exact&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;outputinitially&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;state_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;str&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;haltifstate&quot;</span><span class="token operator">:</span><span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;halt_if_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;str&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;halt_if_compare&quot;</span><span class="token operator">:</span><span class="token string">&quot;is&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;outputs&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token property">&quot;output_only_on_state_change&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token property">&quot;x&quot;</span><span class="token operator">:</span><span class="token number">250</span><span class="token punctuation">,</span><span class="token property">&quot;y&quot;</span><span class="token operator">:</span><span class="token number">1008</span><span class="token punctuation">,</span><span class="token property">&quot;wires&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;6a54b527.806bec&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&quot;c066de8f.8a0e2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;6a54b527.806bec&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;api-call-service&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;z&quot;</span><span class="token operator">:</span><span class="token string">&quot;ffbd7f06.4a014&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;Kitchen Light On&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;version&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token property">&quot;debugenabled&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;service_domain&quot;</span><span class="token operator">:</span><span class="token string">&quot;light&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;service&quot;</span><span class="token operator">:</span><span class="token string">&quot;turn_on&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;entityId&quot;</span><span class="token operator">:</span><span class="token string">&quot;light.kitchen&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;dataType&quot;</span><span class="token operator">:</span><span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;mergecontext&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;output_location&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;output_location_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;mustacheAltTags&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;x&quot;</span><span class="token operator">:</span><span class="token number">666</span><span class="token punctuation">,</span><span class="token property">&quot;y&quot;</span><span class="token operator">:</span><span class="token number">1008</span><span class="token punctuation">,</span><span class="token property">&quot;wires&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;c066de8f.8a0e2&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;ha-wait-until&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;z&quot;</span><span class="token operator">:</span><span class="token string">&quot;ffbd7f06.4a014&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;outputs&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token property">&quot;entityId&quot;</span><span class="token operator">:</span><span class="token string">&quot;sensor.motion&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;property&quot;</span><span class="token operator">:</span><span class="token string">&quot;state&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;comparator&quot;</span><span class="token operator">:</span><span class="token string">&quot;is&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;valueType&quot;</span><span class="token operator">:</span><span class="token string">&quot;str&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;timeout&quot;</span><span class="token operator">:</span><span class="token string">&quot;5&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;timeoutUnits&quot;</span><span class="token operator">:</span><span class="token string">&quot;minutes&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;entityLocation&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;entityLocationType&quot;</span><span class="token operator">:</span><span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;checkCurrentState&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token property">&quot;blockInputOverrides&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token property">&quot;x&quot;</span><span class="token operator">:</span><span class="token number">476</span><span class="token punctuation">,</span><span class="token property">&quot;y&quot;</span><span class="token operator">:</span><span class="token number">1056</span><span class="token punctuation">,</span><span class="token property">&quot;wires&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&quot;28f00104.71e9de&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;28f00104.71e9de&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;api-call-service&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;z&quot;</span><span class="token operator">:</span><span class="token string">&quot;ffbd7f06.4a014&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;Kitchen Light Off&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;version&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token property">&quot;debugenabled&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;service_domain&quot;</span><span class="token operator">:</span><span class="token string">&quot;light&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;service&quot;</span><span class="token operator">:</span><span class="token string">&quot;turn_off&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;entityId&quot;</span><span class="token operator">:</span><span class="token string">&quot;light.kitchen&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;dataType&quot;</span><span class="token operator">:</span><span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;mergecontext&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;output_location&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;output_location_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;mustacheAltTags&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;x&quot;</span><span class="token operator">:</span><span class="token number">656</span><span class="token punctuation">,</span><span class="token property">&quot;y&quot;</span><span class="token operator">:</span><span class="token number">1056</span><span class="token punctuation">,</span><span class="token property">&quot;wires&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre></div>`,9),c=[u];function r(l,k){return n(),a("div",null,c)}const q=s(e,[["render",r],["__file","motion-triggered-light.html.vue"]]);export{q as default};
