var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},o=e.parcelRequire4c75;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},e.parcelRequire4c75=o);var l=o("kEUo3");const r=document.querySelector(".feedback-form");localStorage.setItem("feedback-form-state",JSON.stringify({email:"",message:""})),r.addEventListener("keydown",(0,l.throttle)((function(){localStorage.setItem("feedback-form-state",JSON.stringify({email:r.email.value,message:r.message.value}))}),500));const{email:s,message:n}=JSON.parse(localStorage.getItem("feedback-form-state"));r.email.value=s,r.message.value=n,r.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:r.email.value,message:r.message.value}),localStorage.removeItem("feedback-form-state"),r.reset()}));
//# sourceMappingURL=03-feedback.a3a20941.js.map