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
"Are you sure you want to delete this record?":"Urashaka koko gusiba iyi nyandiko?",
"Field summary":"Incamake y’ibikorwa byo mu mirima","From":"Kuva","To":"Kugeza","Generate summary":"Kora incamake","Print / Save PDF":"Sohora / Bika nka PDF","Choose a date range and generate a field summary.":"Hitamo igihe ushaka hanyuma ukore incamake y’ibikorwa.","Summary period":"Igihe cy’incamake","Activities recorded":"Ibikorwa byanditswe","Tree monitoring records":"Inyandiko zo gukurikirana ibiti","Trees planted":"Ibiti byatewe","Trees observed alive":"Ibiti byabonetse bikiriho","Saved daily reports":"Raporo zabitswe","No records in this period.":"Nta nyandiko zabonetse muri iki gihe.","Please choose a valid date range.":"Hitamo igihe gifite amatariki yemewe.","FIELD SUMMARY":"INCAMAKE Y’IBIKORWA BYO MU MIRIMA",
"Field performance · Last 6 months":"Imikorere y’akazi · Amezi 6 ashize",
"Monthly activities":"Ibikorwa bya buri kwezi",
"Tree planting trend":"Imigendekere yo gutera ibiti",
"Observed tree survival rate*":"Ijanisha ry’ibiti byabonetse bikiriho*",
"No data":"Nta makuru arahari",
"Planting date":"Itariki yo gutera",
"Monitoring date":"Itariki yo gukurikirana",
"Sample planting site":"Ahantu h’icyitegererezo hatewe",
"e.g. Sample plot A":"Urugero: umurima w’icyitegererezo A",
"Planting method":"Uburyo bwo gutera",
"Not specified":"Ntabwo bwagaragajwe",
"Boundary planting":"Gutera ku mbibi",
"Woodlot":"Agashyamba",
"Agroforestry":"Kuvanga ibiti n’imyaka",
"Hedge":"Uruzitiro rw’ibiti",
"Other":"Ubundi buryo",
"Tree condition":"Imiterere y’igiti",
"Not assessed":"Ntibiragenzurwa",
"Healthy":"Kimeze neza",
"Drying":"Kiruma",
"Dead":"Cyumye",
"*Based on quantities entered in Tree Monitoring; not an official survival assessment.":"*Bishingiye ku mibare winjije mu gukurikirana ibiti; si isuzuma ryemewe ry’ukurokoka kw’ibiti.",
"*Based on the latest observation for each species and sample site; not an official survival assessment.":"*Bishingiye ku igenzura riheruka kuri buri bwoko n’ahantu h’icyitegererezo; si isuzuma ryemewe ry’ukurokoka kw’ibiti."
};
function tr(text){const lang=localStorage.getItem("flr_language")||"en";return lang==="rw"?(words[text]||text):text}
function todayLocal(){const now=new Date();const offset=now.getTimezoneOffset();return new Date(now.getTime()-offset*60000).toISOString().slice(0,10)}
function read(key){try{return JSON.parse(localStorage.getItem("flr_"+key)||"[]")}catch(error){return[]}}
function safe(value){return String(value||"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]))}
function show(id){document.querySelectorAll(".page").forEach(page=>page.classList.toggle("active",page.id===id));document.querySelectorAll("nav button").forEach(button=>button.classList.toggle("active",button.dataset.page===id))}
document.querySelectorAll("[data-page]").forEach(button=>button.addEventListener("click",()=>show(button.dataset.page)));
document.querySelectorAll("[data-open]").forEach(button=>button.addEventListener("click",()=>show(button.dataset.open)));

function renderAnalytics(){
 const now=new Date(),months=[];
 for(let i=5;i>=0;i--){const d=new Date(now.getFullYear(),now.getMonth()-i,1);months.push({year:d.getFullYear(),month:d.getMonth(),label:new Intl.DateTimeFormat(localStorage.getItem("flr_language")==="rw"?"rw-RW":"en-US",{month:"short"}).format(d),activities:0,planted:0})}
 const findMonth=date=>{if(!date)return null;const d=new Date(date+"T12:00:00");return months.find(m=>m.year===d.getFullYear()&&m.month===d.getMonth())};
 read("activities").forEach(item=>{const m=findMonth(item.date);if(m)m.activities++});
 const plantingGroups=new Map();
 read("trees").forEach(item=>{
  const plantingDate=item.planting_date||item.date;
  const groupKey=[item.title||"",item.area||"",plantingDate||""].join("|");
  if(!plantingGroups.has(groupKey))plantingGroups.set(groupKey,item);
 });
 plantingGroups.forEach(item=>{const m=findMonth(item.planting_date||item.date);if(m)m.planted+=Math.max(0,Number(item.planted)||0)});
 const draw=(id,key)=>{
  const el=document.getElementById(id),max=Math.max(1,...months.map(m=>m[key]));
  el.innerHTML=months.map(m=>'<div class="bar-column" title="'+safe(m.label)+': '+Number(m[key]).toLocaleString()+'"><div class="bar-value">'+Number(m[key]).toLocaleString()+'</div><div class="bar-track"><div class="bar-fill '+(key==="planted"?"tree-fill":"activity-fill")+'" style="height:'+Math.max(m[key]>0?4:0,m[key]/max*100)+'%"></div></div><small>'+safe(m.label)+'</small></div>').join("");
  if(months.every(m=>m[key]===0))el.innerHTML='<p class="chart-empty">'+safe(tr("No data"))+'</p>';
 };
 draw("activity-chart","activities");draw("tree-chart","planted");
 const latestBySite=new Map();
 read("trees").forEach(record=>{
  const groupKey=[record.title||"",record.area||""].join("|");
  const existing=latestBySite.get(groupKey);
  if(!existing||String(record.date||"")>=String(existing.date||""))latestBySite.set(groupKey,record);
 });
 const latestTreeRecords=[...latestBySite.values()];
 const planted=latestTreeRecords.reduce((s,r)=>s+Math.max(0,Number(r.planted)||0),0);
 const alive=latestTreeRecords.reduce((s,r)=>s+Math.max(0,Number(r.alive)||0),0);
 document.getElementById("survival-rate").textContent=planted?Math.min(100,alive/planted*100).toFixed(1)+"%":"—";
}
function render(){
 keys.forEach(key=>{
  const records=read(key);
  document.getElementById(({activities:"ac",farmers:"fa",trees:"tr",reports:"re"})[key]).textContent=records.length;
  const list=document.getElementById(key+"-list");
  if(list)list.innerHTML=records.slice().reverse().map((record,reverseIndex)=>{const index=records.length-1-reverseIndex;return '<div class="item"><b>'+safe(record.title||tr("Daily Reports"))+'</b><small>'+safe(record.date)+' · '+safe(tr(record.status||record.area||""))+'</small><p>'+safe(record.notes)+'</p>'+(key==="trees"?'<small>'+safe(tr("Planting date"))+': '+safe(record.planting_date||record.date)+' · '+safe(tr("Quantity planted"))+': '+safe(record.planted)+' · '+safe(tr("Quantity observed alive"))+': '+safe(record.alive)+'</small><small>'+safe(record.area||"")+' · '+safe(tr(record.method||""))+' · '+safe(tr(record.condition||""))+'</small>':'')+'<div class="record-actions"><button type="button" class="edit-record" data-edit="'+key+'" data-index="'+index+'">'+safe(tr("Edit"))+'</button><button type="button" class="delete-record" data-delete="'+key+'" data-index="'+index+'">'+safe(tr("Delete"))+'</button></div></div>'}).join("")||tr("No records yet.");
 });
 const recent=keys.flatMap(key=>read(key).map(record=>({...record,kind:key}))).slice(-5).reverse();
 document.getElementById("recent").innerHTML=recent.map(record=>'<div class="item"><b>'+safe(record.title)+'</b><small>'+safe(record.date)+' · '+safe(tr(({activities:"Activities",farmers:"Farmer follow-ups",trees:"Tree records",reports:"Daily Reports"})[record.kind]))+'</small></div>').join("")||tr("No records yet.");
 document.querySelectorAll("[data-edit]").forEach(button=>button.addEventListener("click",()=>editRecord(button.dataset.edit,Number(button.dataset.index))));
 document.querySelectorAll("[data-delete]").forEach(button=>button.addEventListener("click",()=>deleteRecord(button.dataset.delete,Number(button.dataset.index))));
 renderAnalytics();
}
function editRecord(key,index){
 const records=read(key),record=records[index],form=document.querySelector('form[data-store="'+key+'"]');
 if(!record||!form)return;
 Object.keys(record).forEach(name=>{const field=form.elements.namedItem(name);if(field)field.value=record[name]??""});
 if(key==="trees"){if(form.elements.namedItem("planting_date")&&!record.planting_date)form.elements.namedItem("planting_date").value=record.date||todayLocal();if(form.elements.namedItem("method")&&!record.method)form.elements.namedItem("method").value="Not specified";if(form.elements.namedItem("condition")&&!record.condition)form.elements.namedItem("condition").value="Not assessed";}
 form.dataset.editIndex=String(index);
 let cancel=form.querySelector(".cancel-edit");
 if(!cancel){cancel=document.createElement("button");cancel.type="button";cancel.className="cancel-edit secondary";cancel.textContent=tr("Cancel edit");form.appendChild(cancel);cancel.addEventListener("click",()=>{delete form.dataset.editIndex;form.reset();cancel.remove();form.querySelectorAll('input[type="date"]').forEach(input=>input.value=todayLocal());
form.querySelector(".save").textContent=tr(({activities:"Save activity",farmers:"Save follow-up",trees:"Save tree record",reports:"Save report draft"})[key]);})}
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
 form.querySelectorAll('input[type="date"]').forEach(input=>input.value=todayLocal());
 render();alert(tr("Saved on this device."));
}));

function buildSummary(){
 const from=document.getElementById("summary-from").value;
 const to=document.getElementById("summary-to").value;
 const preview=document.getElementById("summary-preview");
 if(!from||!to||from>to){alert(tr("Please choose a valid date range."));return}
 const inRange=key=>read(key).filter(item=>item.date&&item.date>=from&&item.date<=to);
 const activities=inRange("activities");
 const farmers=inRange("farmers");
 const trees=inRange("trees");
 const reports=inRange("reports");
 const latestTreeGroups=new Map();
 trees.forEach(item=>{const key=[item.title||"",item.area||""].join("|");const old=latestTreeGroups.get(key);if(!old||String(item.date||"")>=String(old.date||""))latestTreeGroups.set(key,item)});
 const currentTreeRecords=[...latestTreeGroups.values()];
 const planted=currentTreeRecords.reduce((sum,item)=>sum+Math.max(0,Number(item.planted)||0),0);
 const alive=currentTreeRecords.reduce((sum,item)=>sum+Math.max(0,Number(item.alive)||0),0);
 let html='<h3>'+safe(tr("FIELD SUMMARY"))+'</h3><p><b>'+safe(tr("Summary period"))+':</b> '+safe(from)+' — '+safe(to)+'</p>';
 html+='<div class="summary-grid">';
 [['Activities recorded',activities.length],['Farmer follow-ups',farmers.length],['Tree monitoring records',trees.length],['Trees planted',planted],['Trees observed alive',alive],['Saved daily reports',reports.length]].forEach(item=>{html+='<article>'+safe(tr(item[0]))+'<strong>'+Number(item[1]).toLocaleString()+'</strong></article>'});
 html+='</div>';
 const sections=[['Activities',activities],['Farmer follow-ups',farmers],['Tree monitoring records',trees]];
 sections.forEach(section=>{
  html+='<h4>'+safe(tr(section[0]))+'</h4>';
  if(!section[1].length){html+='<p>—</p>';return}
  section[1].forEach(item=>{html+='<p>• '+safe(item.date)+' — '+safe(item.title||'')+' '+safe(item.status||'')+' '+safe(item.notes||'')+(section[0]==="Tree monitoring records"?'<br>'+safe(tr("Planting date"))+': '+safe(item.planting_date||item.date)+' · '+safe(tr("Sample planting site"))+': '+safe(item.area||"")+' · '+safe(tr(item.method||""))+' · '+safe(tr(item.condition||""))+' · '+safe(tr("Quantity planted"))+': '+safe(item.planted)+' · '+safe(tr("Quantity observed alive"))+': '+safe(item.alive):'')+'</p>'});
 });
 if(!activities.length&&!farmers.length&&!trees.length&&!reports.length)html+='<p>'+safe(tr("No records in this period."))+'</p>';
 preview.innerHTML=html;
 document.getElementById("print-summary").disabled=false;
}
document.getElementById("build-summary").addEventListener("click",buildSummary);
document.getElementById("print-summary").addEventListener("click",()=>window.print());
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
document.getElementById("summary-from").value=todayLocal();document.getElementById("summary-to").value=todayLocal();
if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(error=>console.warn("Service worker unavailable",error)))}
applyLanguage();render();
