(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{129:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return v}));var n=t(0),c=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=c.a.createContext({}),u=function(e){var r=c.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=u(e.components);return c.a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},b=c.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),b=n,v=d["".concat(a,".").concat(b)]||d[b]||p[b]||o;return t?c.a.createElement(v,i(i({ref:r},s),{},{components:t})):c.a.createElement(v,i({ref:r},s))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=b;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<o;s++)a[s]=t[s];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},53:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return u}));var n=t(2),c=t(6),o=(t(0),t(129)),a={id:"core-services-event",title:"Event Reactor"},i={unversionedId:"core/services/core-services-event",id:"core/services/core-services-event",isDocsHomePage:!1,title:"Event Reactor",description:"Filters",source:"@site/docs/core/services/event_reactor.md",slug:"/core/services/core-services-event",permalink:"/docs/core/services/core-services-event",version:"current",sidebar:"coreSidebar",previous:{title:"Ec2X Manager",permalink:"/docs/core/services/core-services-ec2x"},next:{title:"OBD Manager",permalink:"/docs/core/services/core-services-obd"}},l=[{value:"Filters",id:"filters",children:[{value:"<code>alternating_cache_event</code>",id:"alternating_cache_event",children:[]}]},{value:"Handlers",id:"handlers",children:[{value:"<code>cache</code>",id:"cache",children:[]},{value:"<code>context</code>",id:"context",children:[]}]},{value:"Returners",id:"returners",children:[{value:"<code>module_result_cache</code>",id:"module_result_cache",children:[]}]}],s={rightToc:l};function u(e){var r=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"filters"},"Filters"),Object(o.b)("h3",{id:"alternating_cache_event"},Object(o.b)("inlineCode",{parentName:"h3"},"alternating_cache_event")),Object(o.b)("p",null,"Filter that only returns alternating/changed events from cache."),Object(o.b)("h2",{id:"handlers"},"Handlers"),Object(o.b)("h3",{id:"cache"},Object(o.b)("inlineCode",{parentName:"h3"},"cache")),Object(o.b)("p",null,"Manages cached data."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"context"},Object(o.b)("inlineCode",{parentName:"h3"},"context")),Object(o.b)("p",null,"Queries or manipulatea context instance of this engine."),Object(o.b)("h2",{id:"returners"},"Returners"),Object(o.b)("h3",{id:"module_result_cache"},Object(o.b)("inlineCode",{parentName:"h3"},"module_result_cache")),Object(o.b)("p",null,"Stores/caches a module result in context."))}u.isMDXComponent=!0}}]);