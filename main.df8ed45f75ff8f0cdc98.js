(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(e,t,n){"use strict";n.r(t);n("RtS0"),n("3dw1"),n("yjly");var a=n("czhI"),i=n.n(a),c=n("jffb"),s=n.n(c),o="https://ak-np.herokuapp.com",r=document.getElementById("city"),d=document.getElementById("city_autocomplete"),u=document.getElementById("warehouse"),l=document.getElementById("warehouse_autocomplete"),v=document.getElementById("address"),p=document.getElementById("address_autocomplete"),f="";l.addEventListener("click",(function(e){u.value=e.target.innerText,l.innerHTML="",l.classList.remove("active")})),p.addEventListener("click",(function(e){v.value=e.target.innerText,p.innerHTML="",p.classList.remove("active")})),d.addEventListener("click",(function(e){r.value=e.target.innerText,f=e.target.getAttribute("data-id"),d.innerHTML="",d.classList.remove("active")})),r.addEventListener("input",s()((function(e){e.target.value.length||(d.innerHTML="",u.value="",v.value="",l.innerHTML="",l.classList.remove("active"),d.classList.remove("active")),e.target.value.length>2&&i.a.post(o+"/api/novaposhta/getCities",{query:e.target.value}).then((function(e){d.innerHTML="",d.classList.remove("active"),d.classList.add("active"),e.data.data.forEach((function(e){d.insertAdjacentHTML("beforeend",'<li data-id="'+e.Ref+'">'+e.DescriptionRu+"</li>")}))}))}),200)),u.addEventListener("input",s()((function(e){i.a.post(o+"/api/novaposhta/getWarehouses",{Ref:f,query:e.target.value}).then((function(e){l.innerHTML="",l.classList.add("active"),e.data.data.forEach((function(e){l.insertAdjacentHTML("beforeend","<li>"+e.DescriptionRu+"</li>")}))}))}),200)),v.addEventListener("input",s()((function(e){i.a.post(o+"/api/novaposhta/getAddress",{Ref:f,query:e.target.value}).then((function(e){p.innerHTML="",p.classList.add("active"),e.data.data.forEach((function(e){p.insertAdjacentHTML("beforeend","<li>"+e.StreetsType+" "+e.Description+"</li>")}))}))}),200))},yjly:function(e,t,n){}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.df8ed45f75ff8f0cdc98.js.map