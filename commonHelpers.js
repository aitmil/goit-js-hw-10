import"./assets/modulepreload-polyfill-3cfb730f.js";import{f,i as m}from"./assets/vendor-77e16229.js";const a=document.querySelector(".date-input"),o=document.querySelector(".start-button"),i=document.querySelector(".timer");o.setAttribute("disabled","");const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const n=Date.now();t[0]-n<0?(o.setAttribute("disabled",""),m.error({title:"Error",message:"Please choose a date in the future"})):o.removeAttribute("disabled"),localStorage.setItem("userDate",JSON.stringify(t[0])),console.log(t[0])}};f(a,h);let s;o.addEventListener("click",()=>{s=setInterval(()=>{o.setAttribute("disabled",""),a.setAttribute("disabled","");const t=Date.now(),r=Date.parse(JSON.parse(localStorage.getItem("userDate")))-t,e=b(S(r));i.children[0].firstElementChild.innerHTML=e[0],i.children[1].firstElementChild.innerHTML=e[1],i.children[2].firstElementChild.innerHTML=e[2],i.children[3].firstElementChild.innerHTML=e[3],r<1e3&&clearInterval(s)},1e3)});function S(t){const c=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:d,minutes:l,seconds:u}}function b({days:t,hours:n,minutes:r,seconds:e}){return[t.toString().padStart(2,"0"),n.toString().padStart(2,"0"),r.toString().padStart(2,"0"),e.toString().padStart(2,"0")]}
//# sourceMappingURL=commonHelpers.js.map
