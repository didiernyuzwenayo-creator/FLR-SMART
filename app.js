const keys=["activities","farmers","trees","reports"];
const words={
"Language":"Ururimi",
"FLR SMART · My Field Assistant · Version 1.0 · Personal prototype":"FLR SMART · Umufasha wanjye mu kazi · Verisiyo 1.0 · Igerageza bwite",
"Saved on this device.":"Byabitswe kuri iki gikoresho.",
"Alive quantity cannot exceed planted quantity.":"Umubare w'ibiti bikiriho ntushobora kurenga uwatewe.",
"MY FIELD ASSISTANT":"UMUFASHA W'AKAZI KO MU MIRIMA",
"FIELD OFFICER":"USHINZWE AKAZI KO MU MIRIMA",
"Dashboard":"Ahabanza",
"My Activities":"Ibikorwa byanjye",
"Farmer Follow-up":"Gukurikirana abahinzi",
"Tree Monitoring":"Gukurikirana ibiti",
"Daily Reports":"Raporo za buri munsi",
"FIELD WORKSPACE":"AHO NKORERA",
"My Field Assistant":"Umufasha wanjye mu kazi ko mu mirima",
"Organize your daily field work in one place.":"Tegura ibikorwa byawe bya buri munsi ahantu hamwe.",
"Personal prototype — not an officially approved Tubura or One Acre Fund system.":"Igerageza bwite — ntabwo ryemejwe na Tubura cyangwa One Acre Fund.",
"Activities":"Ibikorwa",
"Farmer follow-ups":"Gukurikirana abahinzi",
"Tree records":"Inyandiko z'ibiti",
"Quick actions":"Ibikorwa byihuse",
"＋ Record activity":"＋ Andika igikorwa",
"＋ Farmer follow-up":"＋ Kurikirana umuhinzi",
"＋ Tree monitoring":"＋ Kurikirana ibiti",
"＋ Daily report":"＋ Raporo ya buri munsi",
"Recent records":"Inyandiko ziheruka",
"FIELD WORK":"IBIKORWA BYO MU MIRIMA",
"Activity":"Igikorwa",
"Date":"Itariki",
"Status":"Imiterere",
"Planned":"Giteganyijwe",
"Completed":"Cyakozwe",
"Follow-up needed":"Gikeneye gukurikiranwa",
"General area":"Ahantu muri rusange",
"Notes":"Ibisobanuro",
"Save activity":"Bika igikorwa",
"FOLLOW-UP":"GUKURIKIRANA",
"Use fictional labels only; do not enter real farmer personal data.":"Koresha amazina y'icyitegererezo gusa; ntushyiremo amakuru bwite y'umuhinzi nyakuri.",
"Sample farmer label":"Izina ry'icyitegererezo ry'umuhinzi",
"Visited":"Yasuwe",
"Needs follow-up":"Akeneye gukurikiranwa",
"Not reached":"Ntiyabashije kuboneka",
"Topic":"Ingingo",
"Save follow-up":"Bika amakuru yo gukurikirana",
"TREE MONITORING":"GUKURIKIRANA IBITI",
"Tree species":"Ubwoko bw'igiti",
"Quantity planted":"Umubare watewe",
"Quantity observed alive":"Umubare wabonetse ukiriho",
"Save tree record":"Bika amakuru y'ibiti",
"REPORTING":"RAPORO",
"Activities completed":"Ibikorwa byakozwe",
"Meetings / participants summary":"Incamake y'inama n'abitabiriye",
"Challenges and next steps":"Imbogamizi n'ibikurikiraho",
"Save report draft":"Bika umushinga wa raporo",
"Export records (JSON)":"Kuramo inyandiko (JSON)",
"Prototype with sample data only. Do not enter confidential work or farmer information.":"Igerageza rikoresha amakuru y'icyitegererezo gusa. Ntushyiremo amakuru y'akazi cyangwa ay'abahinzi y'ibanga.",
"Personal edition · 1.0":"Verisiyo bwite · 1.0",
"Sample area only":"Ahantu h'icyitegererezo gusa",
"e.g. Sample farmer training":"Urugero: amahugurwa y'abahinzi",
"Sample farmer 001":"Umuhinzi w'icyitegererezo 001",
"e.g. Seedling care":"Urugero: kwita ku ngemwe",
"e.g. Calliandra (sample)":"Urugero: Calliandra (icyitegererezo)",
"Sample area":"Ahantu h'icyitegererezo",
"No records yet.":"Nta nyandiko ziraboneka.",
"Edit":"Hindura",
"Delete":"Siba",
"Update record":"Bika impinduka",
"Cancel edit":"Reka guhindura",
"Are you sure you want to delete this record?":"Urashaka koko gusiba iyi nyandiko?"
};
function tr(text){const lang=localStorage.getItem("flr_language")||"en";return lang==="rw"?(words[text]||text):text}
function todayLocal(){const now=new Date();const offset=now.getTimezoneOffset();return new Date(now.getTime()-offset*60000).toISOString().slice(0,10)}
function read(key){try{return JSON.parse(localStorage.getItem("flr_"+key)||"[]")}catch(error){return[]}}
function safe(value){return String(value||"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]))}
function show(id){document.querySelectorAll(".page").forEach(page=>page.classList.toggle("active",page.id===id));document.querySelectorAll("nav button").forEach(button=>button.classList.toggle("active",button.dataset.page===id))}
document.querySelectorAll("[data-page]").forEach(button=>button.addEventListener("click",()=>show(button.dataset.page)));
document.querySelectorAll("[data-open]").forEach(button=>button.addEventListener("click",()=>show(button.dataset.open)));
function render(){
 keys.forEach(key=>{
  const records=read(key);
  document.getElementById(({activities:"ac",farmers:"fa",trees:"tr",reports:"re"})[key]).textContent=records.length;
  const list=document.getElementById(key+"-list");
  if(list)list.innerHTML=records.map((record,index)=>'<div class="item"><b>'+safe(record.title||tr("Daily Reports"))+'</b><small>'+safe(record.date)+' · '+safe(tr(record.status||record.area||""))+'</small><p>'+safe(record.notes)+'</p>'+(key==="trees"?'<small>'+safe(tr("Quantity planted"))+': '+safe(record.planted)+' · '+safe(tr("Quantity observed alive"))+': '+safe(record.alive)+'</small>':'')+'<div class="record-actions"><button type="button" class="edit-record" data-edit="'+key+'" data-index="'+index+'">'+safe(tr("Edit"))+'</button><button type="button" class="delete-record" data-delete="'+key+'" data-index="'+index+'">'+safe(tr("Delete"))+'</button></div></div>').join("")||tr("No records yet.");
 });
 const recent=keys.flatMap(key=>read(key).map(record=>({...record,kind:key}))).slice(-5).reverse();
 document.getElementById("recent").innerHTML=recent.map(record=>'<div class="item"><b>'+safe(record.title)+'</b><small>'+safe(record.date)+' · '+safe(tr(({activities:"Activities",farmers:"Farmer follow-ups",trees:"Tree records",reports:"Daily Reports"})[record.kind]))+'</small></div>').join("")||tr("No records yet.");
 document.querySelectorAll("[data-edit]").forEach(button=>button.addEventListener("click",()=>editRecord(button.dataset.edit,Number(button.dataset.index))));
 document.querySelectorAll("[data-delete]").forEach(button=>button.addEventListener("click",()=>deleteRecord(button.dataset.delete,Number(button.dataset.index))));
}
function editRecord(key,index){
 const records=read(key),record=records[index],form=document.querySelector('form[data-store="'+key+'"]');
 if(!record||!form)return;
 Object.keys(record).forEach(name=>{const field=form.elements.namedItem(name);if(field)field.value=record[name]??""});
 form.dataset.editIndex=String(index);
 let cancel=form.querySelector(".cancel-edit");
 if(!cancel){cancel=document.createElement("button");cancel.type="button";cancel.className="cancel-edit secondary";cancel.textContent=tr("Cancel edit");form.appendChild(cancel);cancel.addEventListener("click",()=>{delete form.dataset.editIndex;form.reset();cancel.remove();document.querySelectorAll('input[type="date"]').forEach(input=>input.value=todayLocal());form.querySelector(".save").textContent=tr(({activities:"Save activity",farmers:"Save follow-up",trees:"Save tree record",reports:"Save report draft"})[key]);})}
 form.querySelector(".save").textContent=tr("Update record");
 show(key);form.scrollIntoView({behavior:"smooth",block:"start"});
}
function deleteRecord(key,index){
 if(!confirm(tr("Are you sure you want to delete this record?")))return;
 const records=read(key);if(index<0||index>=records.length)return;
 records.splice(index,1);localStorage.setItem("flr_"+key,JSON.stringify(records));render();
}
document.querySelectorAll("form[data-store]").forEach(form=>form.addEventListener("submit",event=>{
 event.preventDefault();
 const data=Object.fromEntries(new FormData(form));
 if(form.dataset.store==="trees"&&Number(data.alive)>Number(data.planted)){alert(tr("Alive quantity cannot exceed planted quantity."));return}
 const records=read(form.dataset.store),editing=form.dataset.editIndex;
 if(editing!==undefined){records[Number(editing)]=data;delete form.dataset.editIndex;const cancel=form.querySelector(".cancel-edit");if(cancel)cancel.remove();form.querySelector(".save").textContent=tr(({activities:"Save activity",farmers:"Save follow-up",trees:"Save tree record",reports:"Save report draft"})[form.dataset.store]);}
 else records.push(data);
 localStorage.setItem("flr_"+form.dataset.store,JSON.stringify(records));
 form.reset();
 document.querySelectorAll('input[type="date"]').forEach(input=>input.value=todayLocal());
 render();alert(tr("Saved on this device."));
}));
document.getElementById("export").addEventListener("click",()=>{
 const data={};keys.forEach(key=>data[key]=read(key));
 const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:"application/json"}));
 const link=document.createElement("a");link.href=url;link.download="flr-smart-records.json";link.click();URL.revokeObjectURL(url);
});
function applyLanguage(){
 const language=localStorage.getItem("flr_language")||"en";
 document.documentElement.lang=language;
 document.getElementById("language").value=language;
 if(language==="rw"){
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  let node;while((node=walker.nextNode())){const original=node.nodeValue.trim();if(words[original])node.nodeValue=node.nodeValue.replace(original,words[original])}
  document.querySelectorAll("[placeholder]").forEach(input=>{if(words[input.placeholder])input.placeholder=words[input.placeholder]});
  document.querySelectorAll("option").forEach(option=>{if(words[option.textContent.trim()])option.textContent=words[option.textContent.trim()]});
 }
}
document.getElementById("language").addEventListener("change",event=>{localStorage.setItem("flr_language",event.target.value);location.reload()});
document.querySelectorAll('input[type="date"]').forEach(input=>input.value=todayLocal());
if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(error=>console.warn("Service worker unavailable",error)))}
applyLanguage();render();
