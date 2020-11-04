(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var d=c.a.createContext({}),u=function(e){var t=c.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return c.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,s=b["".concat(o,".").concat(m)]||b[m]||p[m]||r;return n?c.a.createElement(s,l(l({ref:t},d),{},{components:n})):c.a.createElement(s,l({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(2),c=n(6),r=(n(0),n(129)),o={id:"core-cmd-cloud",title:"Cloud"},l={unversionedId:"core/commands/core-cmd-cloud",id:"core/commands/core-cmd-cloud",isDocsHomePage:!1,title:"Cloud",description:"cloud.cache",source:"@site/docs/core/commands/cloud.md",slug:"/core/commands/core-cmd-cloud",permalink:"/docs/core/commands/core-cmd-cloud",version:"current",sidebar:"coreSidebar",previous:{title:"Clock",permalink:"/docs/core/commands/core-cmd-clock"},next:{title:"Dac",permalink:"/docs/core/commands/core-cmd-dac"}},i=[{value:"<code>cloud.cache</code>",id:"cloudcache",children:[]},{value:"<code>cloud.help</code>",id:"cloudhelp",children:[]},{value:"<code>cloud.manage</code>",id:"cloudmanage",children:[]},{value:"<code>cloud.status</code>",id:"cloudstatus",children:[]},{value:"<code>cloud.upload</code>",id:"cloudupload",children:[]},{value:"<code>cloud.upload_batch</code>",id:"cloudupload_batch",children:[]}],d={rightToc:i};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"cloudcache"},Object(r.b)("inlineCode",{parentName:"h2"},"cloud.cache")),Object(r.b)("p",null,"Queries/calls a given cache function."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"cloudhelp"},Object(r.b)("inlineCode",{parentName:"h2"},"cloud.help")),Object(r.b)("p",null,"Shows this help information."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"cloudmanage"},Object(r.b)("inlineCode",{parentName:"h2"},"cloud.manage")),Object(r.b)("p",null,"Runtime management of the underlying service instance."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"SUPPORTED COMMANDS")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"hook list|call <name> [argument]... [<key>=<value>]...")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"worker list|show|start|pause|resume|kill <name>")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"run <key>=<value>..."))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"EXAMPLES")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cloud.manage hook list")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cloud.manage hook call status_handler")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cloud.manage worker list *")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cloud.manage worker show *")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cloud.manage worker start *")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cloud.manage worker pause *")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cloud.manage worker resume *")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cloud.manage worker kill *")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'cloud.manage run handler="cache" args="[\\"list_queues\\"]"'))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"cloudstatus"},Object(r.b)("inlineCode",{parentName:"h2"},"cloud.status")),Object(r.b)("p",null,"Gets current status."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"cloudupload"},Object(r.b)("inlineCode",{parentName:"h2"},"cloud.upload")),Object(r.b)("p",null,"Uploads cached data to cloud."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"cloudupload_batch"},Object(r.b)("inlineCode",{parentName:"h2"},"cloud.upload_batch")),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"DEPRECATED"),"\nThis will no longer upload anything."))),Object(r.b)("p",null,"Uploads next batch of logged data to the cloud server."))}u.isMDXComponent=!0}}]);