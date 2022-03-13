(()=>{"use strict";var e,t={39893:function(e,t,o){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var n=r(o(73609));window.createDocumentChooser=function(e){var t=n.default("#"+e+"-chooser"),o=t.find(".title"),r=n.default("#"+e),a=t.find(".edit-link"),l=t.data("chooserUrl"),i=null;r.val()&&(i={id:r.val(),edit_link:a.attr("href"),title:o.text()});var u={getState:function(){return i},getValue:function(){return i&&i.id},setState:function(e){e?(r.val(e.id),o.text(e.title),t.removeClass("blank"),a.attr("href",e.edit_link)):(r.val(""),t.addClass("blank")),i=e},getTextLabel:function(e){if(!i)return null;var t=i.title;return e&&e.maxLength&&t.length>e.maxLength?t.substring(0,e.maxLength-1)+"…":t},focus:function(){n.default(".action-choose",t).focus()},openChooserModal:function(){ModalWorkflow({url:l,onload:DOCUMENT_CHOOSER_MODAL_ONLOAD_HANDLERS,responses:{documentChosen:function(e){u.setState(e)}}})},clear:function(){u.setState(null)}};return n.default(".action-choose",t).on("click",(function(){u.openChooserModal()})),n.default(".action-clear",t).on("click",(function(){u.clear()})),u}},73609:e=>{e.exports=jQuery}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var a=o[e]={id:e,loaded:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=t,e=[],r.O=(t,o,n,a)=>{if(!o){var l=1/0;for(s=0;s<e.length;s++){for(var[o,n,a]=e[s],i=!0,u=0;u<o.length;u++)(!1&a||l>=a)&&Object.keys(r.O).every((e=>r.O[e](o[u])))?o.splice(u--,1):(i=!1,a<l&&(l=a));i&&(e.splice(s--,1),t=n())}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[o,n,a]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.j=588,(()=>{var e={588:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[l,i,u]=o,s=0;for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(u)var c=u(r);for(t&&t(o);s<l.length;s++)a=l[s],r.o(e,a)&&e[a]&&e[a][0](),e[l[s]]=0;return r.O(c)},o=globalThis.webpackChunkwagtail=globalThis.webpackChunkwagtail||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),r.O(void 0,[751],(()=>r(39893)));var n=r.O(void 0,[751],(()=>r(90971)));n=r.O(n)})();
//# sourceMappingURL=document-chooser.js.ef2e748b39fc.map