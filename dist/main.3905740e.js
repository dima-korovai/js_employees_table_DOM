parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return a(e)||r(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function a(e){if(Array.isArray(e))return o(e)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=document.querySelector("body"),c=document.querySelector("table"),i=c.querySelector("tbody"),u=document.createElement("div"),s=document.createElement("h2"),d=document.createElement("p"),m=Array.from(i.rows),p=0;function f(t,n){var r;function a(e){return e.replace(",",".").slice(1)}r=p%2!=0?function(e,r){switch(n){case"string":return e.cells[t].textContent.localeCompare(r.cells[t].textContent);case"number":return e.cells[t].textContent-r.cells[t].textContent;case"salary":return a(e.cells[t].textContent)-a(r.cells[t].textContent)}}:function(e,r){switch(n){case"string":return r.cells[t].textContent.localeCompare(e.cells[t].textContent);case"number":return r.cells[t].textContent-e.cells[t].textContent;case"salary":return a(r.cells[t].textContent)-a(e.cells[t].textContent)}},i.append.apply(i,e(m)),m.sort(r)}c.addEventListener("click",function(e){p++;var t=e.target;"TH"===t.tagName&&f(t.cellIndex,t.dataset.type)});var y=function(e){var t=e.target;"TD"===t.tagName&&t.parentNode.classList.toggle("active")},v=function(e){e.preventDefault()};c.addEventListener("click",y),c.addEventListener("mousedown",v),l.insertAdjacentHTML("beforeend",'\n  <form\n    class=\'new-employee-form\'\n    method = "GET"\n    action="/"\n  >\n    <label>\n      Name:\n      <input\n        type="text"\n        name="name"\n        data-qa="name"\n        minlength="4"\n        required\n      />\n    </label>\n    <label>\n      Position:\n      <input\n        type="text"\n        name="position"\n        data-qa="position"\n        minlength="4"\n        required\n      />\n    </label>\n    <label>\n      Office:\n      <select\n        name="office"\n        data-qa="office"\n        required\n      >\n        <option>Tokyo</option>\n        <option>Singapore</option>\n        <option>London</option>\n        <option>New York</option>\n        <option>Edinburgh</option>\n        <option>San Francisco</option>\n      </select>\n    </label>\n    <label>\n      Age:\n      <input\n        type="number"\n        name="age"\n        data-qa="age"\n        min="18"\n        max="90"\n        required\n      />\n    </label>\n    <label>\n      Salary:\n      <input\n        type="number"\n        name="salary"\n        data-qa="salary"\n        required\n      />\n    </label>\n\n    <button type="submit">Save to lable</button>\n      \n  </form>\n');var b=document.querySelector(".new-employee-form"),g=l.querySelector("button"),h=document.querySelector('[data-qa ="name"]'),q=document.querySelector('[data-qa ="position"]'),C=document.querySelector('[data-qa ="office"]'),x=document.querySelector('[data-qa ="age"]'),S=document.querySelector('[data-qa ="salary"]'),A=e(b).filter(function(e){return"LABEL"===e.parentElement.tagName});function E(e,t,n){u.className="notification",s.className="title",s.textContent="".concat(e),d.textContent="".concat(t),u.classList.add("".concat(n)),u.append(s,d),document.body.append(u),setTimeout(function(){u.remove()},4e3)}function w(e){for(var t=e.slice(0,1).toUpperCase(),n="",r=1;r<e.length;r++)" "===e[r]&&(n+=" "+e[r+1].toUpperCase(),r+=2),n+=e[r];return t+n}function L(e){return 3===e.length?"$0,"+e:2===e.length?"$0,0"+e:1===e.length?"$0,00"+e:"$"+e.replace(/\B(?=(\d{3})+(?!\d))/g,",")}g.onclick=function(t){var n=e(A).filter(function(e){return"text"===e.type}).every(function(e){return e.value.length>3}),r=e(A).filter(function(e){return"age"===e.dataset.qa}).every(function(e){return e.value>17&&e.value<91}),a=e(A).filter(function(e){return"salary"===e.dataset.qa}).every(function(e){return e.value.length>0});n&&r&&a&&(t.preventDefault(),i.insertAdjacentHTML("beforeend","\n      <tr>\n        <td>".concat(w(h.value),"</td>\n        <td>").concat(w(q.value),"</td>\n        <td>").concat(C.value,"</td>\n        <td>").concat(x.value,"</td>\n        <td>").concat(L(S.value),"</td>\n      </tr>\n    ")),m=Array.from(i.rows)),n?r?a?E("Congratulation","New employee is added to the form","success"):E("Attention","'Salary must be passed'","error"):E("Attention","'The age must be betwen 18 and 90'","error"):E("Attention","'The length must be more than 4 digits'","error")},i.addEventListener("dblclick",function(e){var t=e.target;if("TD"===t.tagName){var n=t.textContent,r=document.createElement("input");r.className="cell-input",r.value=n,t.textContent="",t.append(r),r.focus(),r.addEventListener("blur",function(){0===r.value.length&&(r.value=n,E("Attention","The field shouldn't be empty \n *Initial value was restored!","error")),t.textContent=r.value,r.remove()}),r.addEventListener("keypress",function(e){0===r.value.length&&(r.value=n,E("Attention","The field shouldn't be empty \n *Initial value was restored!","error")),"Enter"===e.key&&(t.textContent=r.value,r.remove(),r.blur())})}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.3905740e.js.map