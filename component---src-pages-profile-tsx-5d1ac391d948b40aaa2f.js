(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"6vW2":function(e,t,n){"use strict";e.exports={Timeline:n("qG8u").default,TimelineItem:n("hmVj").default}},I3WY:function(e,t,n){},TSYQ:function(e,t,n){var r;n("MIFh"),function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},"aqT/":function(e,t,n){var r;n("pJf4"),n("LagC"),n("n7j8"),n("pS08"),n("m210"),n("4DPX"),n("R48M"),r=function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){e.exports=n(5)()},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=function(e,t,n){var r=e.direction,o=e.value;switch(r){case"top":return n.top+o<t.top&&n.bottom>t.bottom&&n.left<t.left&&n.right>t.right;case"left":return n.left+o<t.left&&n.bottom>t.bottom&&n.top<t.top&&n.right>t.right;case"bottom":return n.bottom-o>t.bottom&&n.left<t.left&&n.right>t.right&&n.top<t.top;case"right":return n.right-o>t.right&&n.left<t.left&&n.top<t.top&&n.bottom>t.bottom}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var r=n(1),o=n.n(r),a=n(2),i=n.n(a),l=n(0),c=n.n(l),u=n(3),s=n.n(u);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=d(t).call(this,e),n=!o||"object"!==f(o)&&"function"!=typeof o?m(r):o,b(m(n),"getContainer",(function(){return n.props.containment||window})),b(m(n),"addEventListener",(function(e,t,r,o){var a;n.debounceCheck||(n.debounceCheck={});var i=function(){a=null,n.check()},l={target:e,fn:o>-1?function(){a||(a=setTimeout(i,o||0))}:function(){clearTimeout(a),a=setTimeout(i,r||0)},getLastTimeout:function(){return a}};e.addEventListener(t,l.fn),n.debounceCheck[t]=l})),b(m(n),"startWatching",(function(){n.debounceCheck||n.interval||(n.props.intervalCheck&&(n.interval=setInterval(n.check,n.props.intervalDelay)),n.props.scrollCheck&&n.addEventListener(n.getContainer(),"scroll",n.props.scrollDelay,n.props.scrollThrottle),n.props.resizeCheck&&n.addEventListener(window,"resize",n.props.resizeDelay,n.props.resizeThrottle),!n.props.delayedCall&&n.check())})),b(m(n),"stopWatching",(function(){if(n.debounceCheck)for(var e in n.debounceCheck)if(n.debounceCheck.hasOwnProperty(e)){var t=n.debounceCheck[e];clearTimeout(t.getLastTimeout()),t.target.removeEventListener(e,t.fn),n.debounceCheck[e]=null}n.debounceCheck=null,n.interval&&(n.interval=clearInterval(n.interval))})),b(m(n),"check",(function(){var e,t,r=n.node;if(!r)return n.state;if(e=function(e){return void 0===e.width&&(e.width=e.right-e.left),void 0===e.height&&(e.height=e.bottom-e.top),e}(n.roundRectDown(r.getBoundingClientRect())),n.props.containment){var o=n.props.containment.getBoundingClientRect();t={top:o.top,left:o.left,bottom:o.bottom,right:o.right}}else t={top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth};var a=n.props.offset||{};"object"===f(a)&&(t.top+=a.top||0,t.left+=a.left||0,t.bottom-=a.bottom||0,t.right-=a.right||0);var i={top:e.top>=t.top,left:e.left>=t.left,bottom:e.bottom<=t.bottom,right:e.right<=t.right},l=e.height>0&&e.width>0,c=l&&i.top&&i.left&&i.bottom&&i.right;if(l&&n.props.partialVisibility){var u=e.top<=t.bottom&&e.bottom>=t.top&&e.left<=t.right&&e.right>=t.left;"string"==typeof n.props.partialVisibility&&(u=i[n.props.partialVisibility]),c=n.props.minTopValue?u&&e.top<=t.bottom-n.props.minTopValue:u}"string"==typeof a.direction&&"number"==typeof a.value&&(console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",a.direction,a.value),c=s()(a,e,t));var p=n.state;return n.state.isVisible!==c&&(p={isVisible:c,visibilityRect:i},n.setState(p),n.props.onChange&&n.props.onChange(c)),p})),n.state={isVisible:null,visibilityRect:{}},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.node=i.a.findDOMNode(this),this.props.active&&this.startWatching()}},{key:"componentWillUnmount",value:function(){this.stopWatching()}},{key:"componentDidUpdate",value:function(e){this.node=i.a.findDOMNode(this),this.props.active&&!e.active?(this.setState({isVisible:null,visibilityRect:{}}),this.startWatching()):this.props.active||this.stopWatching()}},{key:"roundRectDown",value:function(e){return{top:Math.floor(e.top),left:Math.floor(e.left),bottom:Math.floor(e.bottom),right:Math.floor(e.right)}}},{key:"render",value:function(){return this.props.children instanceof Function?this.props.children({isVisible:this.state.isVisible,visibilityRect:this.state.visibilityRect}):o.a.Children.only(this.props.children)}}])&&p(n.prototype,r),a&&p(n,a),t}(o.a.Component);b(y,"defaultProps",{active:!0,partialVisibility:!1,minTopValue:0,scrollCheck:!1,scrollDelay:250,scrollThrottle:-1,resizeCheck:!1,resizeDelay:250,resizeThrottle:-1,intervalCheck:!0,intervalDelay:100,delayedCall:!1,offset:{},containment:null,children:o.a.createElement("span",null)}),b(y,"propTypes",{onChange:c.a.func,active:c.a.bool,partialVisibility:c.a.oneOfType([c.a.bool,c.a.oneOf(["top","right","bottom","left"])]),delayedCall:c.a.bool,offset:c.a.oneOfType([c.a.shape({top:c.a.number,left:c.a.number,bottom:c.a.number,right:c.a.number}),c.a.shape({direction:c.a.oneOf(["top","right","bottom","left"]),value:c.a.number})]),scrollCheck:c.a.bool,scrollDelay:c.a.number,scrollThrottle:c.a.number,resizeCheck:c.a.bool,resizeDelay:c.a.number,resizeThrottle:c.a.number,intervalCheck:c.a.bool,intervalDelay:c.a.number,containment:"undefined"!=typeof window?c.a.instanceOf(window.Element):c.a.any,children:c.a.oneOfType([c.a.element,c.a.func]),minTopValue:c.a.number})},function(e,t,n){"use strict";var r=n(6);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])},e.exports=r(n("q1tI"),n("i8i4"))},cf5j:function(e,t,n){},hmVj:function(e,t,n){"use strict";n("n7j8"),n("LagC"),n("pS08"),n("E5k/"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n("q1tI"),i=s(a),l=s(n("17x9")),c=s(n("TSYQ")),u=s(n("aqT/"));function s(e){return e&&e.__esModule?e:{default:e}}n("cf5j");var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onVisibilitySensorChange=n.onVisibilitySensorChange.bind(n),n.state={visible:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"onVisibilitySensorChange",value:function(e){e&&this.setState({visible:!0})}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.children,o=e.dateText,l=e.dateStyle,s=e.dateComponent,f=e.dateInnerStyle,p=e.bodyContainerStyle,d=e.style,m=e.className,h=e.visibilitySensorProps,b=this.state.visible;return i.default.createElement("div",{id:t,className:(0,c.default)(m,"entry",{"timeline-item--no-children":""===n}),style:d},i.default.createElement(u.default,r({},h,{onChange:this.onVisibilitySensorChange}),i.default.createElement(a.Fragment,null,i.default.createElement("div",{className:"title"},i.default.createElement("div",{className:b?"bounce-in":"is-hidden"},null!==s?s:i.default.createElement("span",{style:l,className:"timeline-item-date"},i.default.createElement("time",{style:f,className:"timeline-item-dateinner",title:o},o)))),i.default.createElement("div",{className:"body"},i.default.createElement("div",{className:"body-container "+(b?"bounce-in":"is-hidden"),style:p},n)))))}}]),t}(a.Component);f.propTypes={id:l.default.string,children:l.default.oneOfType([l.default.arrayOf(l.default.node),l.default.node]),className:l.default.string,dateStyle:l.default.shape({}),dateInnerStyle:l.default.shape({}),bodyContainerStyle:l.default.shape({}),style:l.default.shape({}),dateText:l.default.string,dateComponent:l.default.oneOfType([l.default.string,l.default.func,l.default.node]),visibilitySensorProps:l.default.shape({})},f.defaultProps={id:"",children:"",dateComponent:null,className:"",dateStyle:null,bodyContainerStyle:null,dateInnerStyle:null,style:null,dateText:"",visibilitySensorProps:{partialVisibility:!0,offset:{bottom:50}}},t.default=f},huF4:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n("6vW2"),a=n("A7pH"),i=n("cTkS"),l=n("qR4i"),c=n("I8t/"),u=n("0B6X"),s=n("AgwA"),f=n("EVGc"),p=n("bi9C"),d=function(e){return r.createElement("div",null,r.createElement(s.a,null,e.header),r.createElement(u.a,null,r.createElement("ul",null,r.createElement("li",null,r.createElement("b",null,"Tech stack:")," ",e.techStack),r.createElement("li",null,r.createElement("b",null,"Skills:")," ",e.skills))))};t.default=function(){return r.createElement(a.a,null,r.createElement("div",null,r.createElement(c.a,{right:!0},r.createElement(i.a,{to:"/"},"Back to Homepage")),r.createElement(c.a,null,r.createElement(o.Timeline,{lineColor:l.a.snowStorm.white},r.createElement(o.TimelineItem,{key:"000",dateText:"08/2019 – Present",dateInnerStyle:{background:""+l.a.snowStorm.grey,color:""+l.a.polarNight.charcoal}},r.createElement(s.a,null,"FullStack Software Engineer, TES Global"),d(p.u)),r.createElement(o.TimelineItem,{key:"001",dateText:"09/2017 – 08/2019",dateInnerStyle:{background:""+l.a.frost.darkBlue,color:""+l.a.snowStorm.white},bodyContainerStyle:{background:""+l.a.snowStorm.grey,padding:"20px",borderRadius:"8px",boxShadow:"0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"}},r.createElement(s.a,null,"FullStack Software Engineer, ThoughtWorks"),r.createElement(u.a,null,"Consulting as an engineer on a variety of different projects. Pairing, TDD, Agile methodologies & much more."),d(p.j),d(p.r),d(p.c),d(p.v)),r.createElement(o.TimelineItem,{key:"002",dateText:"04/2017 – 08/2017",dateInnerStyle:{background:""+l.a.snowStorm.grey,color:""+l.a.polarNight.charcoal}},d(p.m)),r.createElement(o.TimelineItem,{key:"003",dateText:"09/2015 – 03/2017",dateInnerStyle:{background:""+l.a.frost.darkBlue,color:""+l.a.snowStorm.white},bodyContainerStyle:{background:""+l.a.snowStorm.grey,padding:"20px",borderRadius:"8px",boxShadow:"0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"}},d(p.b)),r.createElement(o.TimelineItem,{key:"004",dateText:"09/2013 – 09/2015",dateInnerStyle:{background:""+l.a.snowStorm.grey,color:""+l.a.polarNight.charcoal}},d(p.l)),r.createElement(o.TimelineItem,{key:"005",dateText:"09/2010 – 09/2015",dateInnerStyle:{background:""+l.a.frost.darkBlue,color:""+l.a.snowStorm.white},bodyContainerStyle:{background:""+l.a.snowStorm.grey,padding:"20px",borderRadius:"8px",boxShadow:"0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"}},r.createElement(s.a,null,"Spanish & Latin American Studies Researcher, King's College London"),r.createElement("br",null),r.createElement(s.b,null,"PhD completed 09/2015"),r.createElement(u.a,null,r.createElement("ul",null,r.createElement("li",null,"AHRC funded PhD analysing memory, selfhood & exile. Read more about the PhD and research outputs",r.createElement(f.a,{href:"https://kcl.academia.edu/CharlotteFereday",title:"Research"}," ","here"))),r.createElement(s.b,null,"MA completed 09/2010"))),r.createElement(o.TimelineItem,{key:"006",dateText:"09/2005 – 09/2009",dateInnerStyle:{background:""+l.a.snowStorm.grey,color:""+l.a.polarNight.charcoal}},r.createElement(s.a,null,"BA English Literature & Language, University of Leeds"))))))}},qG8u:function(e,t,n){"use strict";n("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var r=i(n("q1tI")),o=i(n("17x9")),a=i(n("TSYQ"));function i(e){return e&&e.__esModule?e:{default:e}}n("I3WY");var l=function(e){var t=e.animate,n=e.children,o=e.className,i=e.lineColor;return r.default.createElement("div",{className:"timeline--wrapper"},r.default.createElement("div",{className:(0,a.default)(o,"timeline",{"timeline--animate":t}),style:{color:""+i}},n))};l.propTypes={children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]).isRequired,className:o.default.string,lineColor:o.default.string,animate:o.default.bool},l.defaultProps={animate:!0,className:"",lineColor:"#000"},t.default=l}}]);
//# sourceMappingURL=component---src-pages-profile-tsx-5d1ac391d948b40aaa2f.js.map