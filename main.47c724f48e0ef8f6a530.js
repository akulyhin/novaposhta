(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(e,t,n){"use strict";n.r(t);n("RtS0"),n("3dw1"),n("yjly");var a=n("czhI"),i=n.n(a),s=n("jffb"),c=n.n(s),r="https://ak-np.herokuapp.com",o=document.getElementById("city"),d=document.getElementById("city_autocomplete"),u=document.getElementById("warehouse"),l=document.getElementById("warehouse_autocomplete"),v=document.getElementById("address"),L=document.getElementById("address_autocomplete"),p="";l.addEventListener("click",(function(e){u.value=e.target.innerText,l.innerHTML="",l.classList.remove("active")})),L.addEventListener("click",(function(e){v.value=e.target.innerText,L.innerHTML="",L.classList.remove("active")})),d.addEventListener("click",(function(e){o.value=e.target.innerText,p=e.target.getAttribute("data-id"),d.innerHTML="",d.classList.remove("active")})),o.addEventListener("input",c()((function(e){e.target.value.length||(d.innerHTML="",u.value="",v.value="",l.innerHTML="",l.classList.remove("active"),d.classList.remove("active")),e.target.value.length&&i.a.post(r+"/api/novaposhta/getCities",{query:e.target.value}).then((function(e){d.innerHTML="",d.classList.remove("active"),d.classList.add("active"),e.data.data.forEach((function(e){d.insertAdjacentHTML("beforeend",'<li data-id="'+e.Ref+'">'+e.DescriptionRu+"</li>")}))}))}),200)),u.addEventListener("input",c()((function(e){e.target.value.length?i.a.post(r+"/api/novaposhta/getWarehouses",{Ref:p,query:e.target.value}).then((function(e){l.innerHTML="",l.classList.add("active"),e.data.data.forEach((function(e){l.insertAdjacentHTML("beforeend","<li>"+e.DescriptionRu+"</li>")}))})):(l.innerHTML="",l.classList.remove("active"))}),200)),v.addEventListener("input",c()((function(e){e.target.value.length?i.a.post(r+"/api/novaposhta/getAddress",{Ref:p,query:e.target.value}).then((function(e){L.innerHTML="",L.classList.add("active"),e.data.data.forEach((function(e){L.insertAdjacentHTML("beforeend","<li>"+e.StreetsType+" "+e.Description+"</li>")}))})):(L.innerHTML="",L.classList.remove("active"),console.log("test"))}),200))},yjly:function(e,t,n){}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.47c724f48e0ef8f6a530.js.map