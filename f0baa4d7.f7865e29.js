(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{122:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return c})),a.d(e,"rightToc",(function(){return i})),a.d(e,"default",(function(){return O}));var n=a(2),r=a(6),b=(a(0),a(129)),l={id:"cloud-config-wifi",title:"Wifi"},c={unversionedId:"cloud/configuration/cloud-config-wifi",id:"cloud/configuration/cloud-config-wifi",isDocsHomePage:!1,title:"Wifi",description:"Client",source:"@site/docs/cloud/configuration/wifi.md",slug:"/cloud/configuration/cloud-config-wifi",permalink:"/docs/cloud/configuration/cloud-config-wifi",version:"current",sidebar:"cloudSidebar",previous:{title:"Update Release",permalink:"/docs/cloud/configuration/cloud-config-update"},next:{title:"System",permalink:"/docs/cloud/events/cloud-events-system"}},i=[{value:"Client",id:"client",children:[]},{value:"Hotspot",id:"hotspot",children:[]}],o={rightToc:i};function O(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:e,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"client"},"Client"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unit"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ENABLED"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable connection to WiFi networks?"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"True"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ALLOW SSH"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allow incoming SSH connections on port 22 from the WiFi client network?"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"False"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(b.b)("h2",{id:"hotspot"},"Hotspot"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unit"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SSID"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name of the hotspot. Length must be between 1 and 32 characters."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AutoPi-XXXXXXXXXXXX"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"HIDE SSID"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Should the hotspot name be broadcasted?"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"False"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PASS"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The password to access the hotspot. Length must be between 8 and 63 characters."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"XXXXXXXX-XXXX"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CHANNEL"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Which channel to use for the hotspot. If connected to a WiFi access point, due to hardware limits, the hotspot will use the same channel as the connected WiFi access point."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"6"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(b.b)("h4",{id:"dhcp"},"Dhcp"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unit"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RANGE"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specify the range of addresses available for lease and optionally a lease time."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"192.168.4.2,192.168.4.20,255.255.255.0,24h"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"HOSTS"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Supply parameters for specified hosts using DHCP. Note that IP addresses do not have to be in the specified range, they just need to be on the same network."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(b.b)("h4",{id:"dns"},"Dns"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unit"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"HOSTS"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specify additional host entries."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"192.168.4.1 local.autopi.io"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}O.isMDXComponent=!0},129:function(t,e,a){"use strict";a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){b(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},b=Object.keys(t);for(n=0;n<b.length;n++)a=b[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);for(n=0;n<b.length;n++)a=b[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=r.a.createContext({}),O=function(t){var e=r.a.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},p=function(t){var e=O(t.components);return r.a.createElement(o.Provider,{value:e},t.children)},j={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},u=r.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,b=t.originalType,l=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),p=O(a),u=n,d=p["".concat(l,".").concat(u)]||p[u]||j[u]||b;return a?r.a.createElement(d,c(c({ref:e},o),{},{components:a})):r.a.createElement(d,c({ref:e},o))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var b=a.length,l=new Array(b);l[0]=u;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:n,l[1]=c;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);