!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return d.Date.now()};function b(e,t,n){var r,o,a,u,f,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function O(e){return l=e,f=setTimeout(h,t),s?b(e):u}function j(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function h(){var e=g();if(j(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return d?p(n,a-(e-l)):n}(e))}function w(e){return f=void 0,m&&r?b(e):(r=o=void 0,u)}function N(){var e=g(),n=j(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return O(c);if(d)return f=setTimeout(h,t),b(c)}return void 0===f&&(f=setTimeout(h,t)),u}return t=S(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),N.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},N.flush=function(){return void 0===f?u:w(g())},N}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?c(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};var O=document.querySelector(".feedback-form"),j=document.querySelector("input"),h=document.querySelector("textarea");O.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem("feedback-form-state")})),O.addEventListener("input",e(t)((function(e){w[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(w))}),500));var w={email:"",message:""};var N,T=localStorage.getItem("feedback-form-state");(N=T)&&"email"===j.name&&(j.value=JSON.parse(N).email,w.email=JSON.parse(N).email),N&&"message"===h.name&&(h.value=JSON.parse(N).message,w.message=JSON.parse(N).message)}();
//# sourceMappingURL=03-feedback.40533016.js.map