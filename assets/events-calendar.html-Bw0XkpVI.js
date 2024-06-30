import{_ as l,r as a,o as d,c as r,a as e,d as t,b as n,w as c}from"./app-CV8varBB.js";const h={},u=e("h1",{id:"events-calendar",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#events-calendar","aria-hidden":"true"},"#"),t(" Events: calendar")],-1),_=e("p",null,"Outputs calendar item events similar to the calendar automation in Home Assistant",-1),f=e("h2",{id:"configuration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#"),t(" Configuration:")],-1),m={id:"entity-id",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#entity-id","aria-hidden":"true"},"#",-1),b=e("ul",null,[e("li",null,[t("Type: "),e("code",null,"string")])],-1),x=e("p",null,"The entity_id for the calendar that contains triggerable calendar items.",-1),g={id:"relative-to",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#relative-to","aria-hidden":"true"},"#",-1),y=e("ul",null,[e("li",null,[t("Type: "),e("code",null,"start | end")]),e("li",null,[t("Default: "),e("code",null,"start")])],-1),w=e("p",null,"Whether to trigger an event at the start or end of each matching calendar item.",-1),T={id:"offset",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#offset","aria-hidden":"true"},"#",-1),A=e("ul",null,[e("li",null,[t("Type: "),e("code",null,"number")]),e("li",null,"Default: 0 seconds")],-1),C=e("p",null,"A negative or positive amount of time to allow the event to be triggered before or after the calendar item's start/end time.",-1),E=e("h3",{id:"conditions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#conditions","aria-hidden":"true"},"#"),t(" Conditions")],-1),B=e("p",null,'This node has two default outputs "allowed" and "blocked". If all the conditions are true the calendar item will be sent to the output.',-1),H=e("p",null,[e("strong",null,"See Also:")],-1),I=e("h3",{id:"expose-to-home-assistant",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#expose-to-home-assistant","aria-hidden":"true"},"#"),t(" Expose to Home Assistant")],-1),q=e("ul",null,[e("li",null,[t("Type: "),e("code",null,"boolean")])],-1),D={href:"https://github.com/zachowj/hass-node-red",target:"_blank",rel:"noopener noreferrer"},L=e("h2",{id:"outputs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#outputs","aria-hidden":"true"},"#"),t(" Outputs")],-1),N=e("p",null,"Value types:",-1),R=e("ul",null,[e("li",null,[e("code",null,"calendar item"),t(": the calendar item object as provided by the Home Assistant API")])],-1);function V(O,j){const o=a("Badge"),s=a("RouterLink"),i=a("ExternalLinkIcon");return d(),r("div",null,[u,_,f,e("h3",m,[p,t(" Entity ID "),n(o,{text:"required"})]),b,x,e("h3",g,[v,t(" Relative To "),n(o,{text:"required"})]),y,w,e("h3",T,[k,t(" Offset "),n(o,{text:"required"})]),A,C,E,B,H,e("ul",null,[e("li",null,[n(s,{to:"/guide/conditionals.html"},{default:c(()=>[t("Conditionals")]),_:1})])]),I,q,e("p",null,[t("Creates a switch within Home Assistant to enable/disable this node. This feature requires "),e("a",D,[t("Node-RED custom integration"),n(i)]),t(" to be installed in Home Assistant")]),L,N,R])}const P=l(h,[["render",V],["__file","events-calendar.html.vue"]]);export{P as default};
