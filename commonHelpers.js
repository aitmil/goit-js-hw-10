/* empty css                      */import{f as m,i as h}from"./assets/vendor-77e16229.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const d=document.querySelector(".date-input"),a=document.querySelector(".start-button"),c=document.querySelector(".timer");console.log(c.children[0].firstElementChild.innerHTML);a.setAttribute("disabled","");const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const n=Date.now();t[0]-n<0?(a.setAttribute("disabled",""),h.error({title:"Error",message:"Please choose a date in the future"})):a.removeAttribute("disabled"),localStorage.setItem("userDate",JSON.stringify(t[0])),console.log(t[0])}};m(d,p);let l;a.addEventListener("click",()=>{l=setInterval(()=>{a.setAttribute("disabled",""),d.setAttribute("disabled","");const t=Date.now(),i=Date.parse(JSON.parse(localStorage.getItem("userDate")))-t,o=y(g(i));c.children[0].firstElementChild.innerHTML=o[0],c.children[1].firstElementChild.innerHTML=o[1],c.children[2].firstElementChild.innerHTML=o[2],c.children[3].firstElementChild.innerHTML=o[3],i<1e3&&clearInterval(l)},1e3)});function g(t){const r=Math.floor(t/864e5),s=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:s,minutes:u,seconds:f}}function y({days:t,hours:n,minutes:i,seconds:o}){return[t.toString().padStart(2,"0"),n.toString().padStart(2,"0"),i.toString().padStart(2,"0"),o.toString().padStart(2,"0")]}
//# sourceMappingURL=commonHelpers.js.map
