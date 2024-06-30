import{_ as r,r as a,o as s,c as d,a as e,d as t,b as n,e as c}from"./app-CV8varBB.js";const h={},l={class:"custom-container warning"},u=e("p",{class:"custom-container-title"},"WARNING",-1),p={href:"https://github.com/zachowj/hass-node-red",target:"_blank",rel:"noopener noreferrer"},b=e("h1",{id:"binary-sensor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#binary-sensor","aria-hidden":"true"},"#"),t(" Binary Sensor")],-1),_=e("p",null,"Creates a binary sensor in Home Assistant which can be manipulated from this node.",-1),f=e("h2",{id:"configuration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#"),t(" Configuration")],-1),m={id:"state",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#state","aria-hidden":"true"},"#",-1),y=c('<ul><li>Type: <code>boolean</code></li></ul><p>The state of the entity should be updated to</p><h3 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h3><ul><li>Type: <code>Object</code></li></ul><p>Key/Value pair of attributes to update. The key should be a string and the value can be a [string | number | boolean | object]</p><h3 id="input-override" tabindex="-1"><a class="header-anchor" href="#input-override" aria-hidden="true">#</a> Input Override</h3><ul><li>Type: <code>string</code></li><li>Values: <code>accept | merge | block</code></li></ul><p>Determine how input values will be handled. When merge is selected the message object values will override the configuration values.</p><h2 id="inputs" tabindex="-1"><a class="header-anchor" href="#inputs" aria-hidden="true">#</a> Inputs</h2><p>properties of <code>msg.payload</code></p><h3 id="state-1" tabindex="-1"><a class="header-anchor" href="#state-1" aria-hidden="true">#</a> state</h3><ul><li>Type: <code>string | number | boolean</code></li></ul><p>The value of the entity state will be updated.</p><h3 id="attributes-1" tabindex="-1"><a class="header-anchor" href="#attributes-1" aria-hidden="true">#</a> attributes</h3><ul><li>Type: <code>Object</code></li></ul><p>Key/Value pair of attributes to update. The key should be a string and the value can be a <code>[string | number | boolean | object]</code></p>',16);function x(v,T){const o=a("ExternalLinkIcon"),i=a("Badge");return s(),d("div",null,[e("div",l,[u,e("p",null,[e("em",null,[t("Needs "),e("a",p,[t("Custom Integration"),n(o)]),t(" installed in Home Assistant for this node to function")])])]),b,_,f,e("h3",m,[g,t(" State "),n(i,{text:"required"})]),y])}const w=r(h,[["render",x],["__file","binary-sensor.html.vue"]]);export{w as default};
