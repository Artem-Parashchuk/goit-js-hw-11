import{S as p,i as c}from"./assets/vendor-f33cd494.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();const u="43330022-ba36650dc11c5492edb18bb80",d="https://pixabay.com";function g(r){const e=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0,key:u,q:r});return fetch(`${d}/api/?${e}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function f(r){return r.map(e=>`<li class="gallery-item">
            <a class="gallery-item__link" href="${e.largeImageURL}"><div class="img-container"><img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}"></div>
            <ul class="img-description__list">
            <li class="img-description__item">
                <p class="img-description__title">
                Likes
                </p>
                <p class="img-description__text">
                ${e.likes}
                </p>
            </li>
            <li class="img-description__item">
                <p class="img-description__title">
                Views
                </p>
                <p class="img-description__text">
                ${e.views}
                </p>
            </li>
            <li>
                <li class="img-description__item">
                <p class="img-description__title">
                    Comments
                </p>
                <p class="img-description__text">
                    ${e.comments}
                </p>
                </li>
            </li>
            <li>
                <li class="img-description__item">
                <p class="img-description__title">
                    Downloads
                </p>
                <p class="img-description__text">
                    ${e.downloads}
                </p>
                </li>
            </li>
            </ul>
        </a>
      </li>`).join("")}const h=document.querySelector(".form"),n=document.querySelector(".form-input"),a=document.querySelector(".gallery-list"),m=document.querySelector(".loader");function y(r){if(r.preventDefault(),n.value.trim()===""){c.info({message:"Введіть слово в поле для пошуку",position:"topRight",backgroundColor:"orange"}),a.innerHTML="";return}m.classList.add("is-visible"),g(n.value).finally(()=>m.classList.remove("is-visible")).then(e=>{if(!e.hits.length){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",theme:"dark",position:"topRight"});return}a.innerHTML=f(e.hits)}).catch(e=>console.log(e)),n.value=""}h.addEventListener("submit",y);let _=new p(".gallery-item__link",{captionsData:"alt",captionDelay:250});_.on("show.simplelightbox",function(r){r.preventDefault()});
//# sourceMappingURL=commonHelpers.js.map
