var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequirede3a;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var a={id:e,exports:{}};return n[e]=a,r.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequirede3a=r);var a=r("lrymF"),i=r("1tHc5"),o=r("bNIB4");function c(e){return new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0}).format(e)}const d=document.getElementById("cart"),l=document.getElementById("total");let s,u=[];function f(e){let n=0;e.forEach((e=>{!function(e){const n=document.createElement("li");n.className="product",n.innerHTML=`\n\n    \n    <img src="${e.images[0]}" class="product__image"> \n    <div class ="product__info"> <h3 class="product__name">${e.name}</h3>\n    <h3 class="product__price">${c(e.price)}</h3>\n    <div>  <button class="product__delete">Eliminar producto</button> </div>\n     </div>\n     \n\n\n    \n    \n    \n    `,d.appendChild(n),n.addEventListener("click",(n=>{"BUTTON"===n.target.tagName&&(console.log("remove it!"),async function(e){const n=u.filter((n=>n.id!==e));u=n,s&&await o.createFirebaseCart(a.db,s.uid,n);(async function(e){localStorage.setItem("cart",JSON.stringify(e))})(n),d.innerHTML="",f(n)}(e.id))}))}(e),n+=parseInt(e.price)})),l.innerText=c(n)}i.onAuthStateChanged(a.auth,(async e=>{e?(s=e,u=await o.getFirebaseCart(a.db,s.uid)):u=function(){const e=localStorage.getItem("cart");return e?JSON.parse(e):[]}(),f(u)}));
//# sourceMappingURL=cart.7b765a2a.js.map
