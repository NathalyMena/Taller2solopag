var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequirede3a;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var a={id:e,exports:{}};return n[e]=a,r.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequirede3a=r);var a=r("lrymF"),i=r("5q2VS");const o=document.getElementById("products"),c=document.getElementById("material"),d=document.getElementById("order"),l=document.getElementById("orderbyName");let s=[];function m(e){const n=document.createElement("a");n.className="product",n.setAttribute("href","./product.html?id="+e.id);const t=e.images?e.images[0]:"./image/noimage";var r;n.innerHTML=`\n    \n    <div class="product__info"> \n    <img src="${t}" alt="" class="product_image">\n    \n        <h3 class="product__name"> ${e.name} </h3>\n        <h3 class="material"> ${e.material} </h3>\n        <h3 class="price">  ${r=e.price,new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0}).format(r)} </h3>\n        </div>\n    </div>`,o.appendChild(n)}function u(){const e=c.value,n=d.value,t=l.value;let r=[];""!==e?(r=s.filter((n=>n.material===e)),console.log(r)):r=s,"desc"===n&&(r=r.sort(((e,n)=>e.price-n.price))),"asc"===n&&(r=r.sort(((e,n)=>n.price-e.price))),"az"===t&&(r=r.sort(((e,n)=>n.name-e.name))),"za"===t&&(r=r.sort(((e,n)=>e.name-n.name))),o.innerHTML="",r.forEach((e=>{m(e)}))}c.addEventListener("change",(e=>{u()})),d.addEventListener("change",(e=>{u()})),l.addEventListener("change",(e=>{u()})),document.getElementById("firtslogin").onclick=function(){alert("¡Inicia sesión primero! :D ")},async function(){const e=await i.getProducts(a.db);o.innerHTML="",e.forEach((e=>{m(e)})),s=e}();
//# sourceMappingURL=shop.637a702c.js.map
