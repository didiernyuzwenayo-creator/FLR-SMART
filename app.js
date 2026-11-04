const keys=["activities","farmers","trees","reports","calendar"];
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
"Monthly report":"Raporo ya buri kwezi",
"Report month":"Ukwezi kwa raporo",
"Generate monthly report":"Kora raporo y’ukwezi",
"Print monthly report":"Sohora raporo y’ukwezi",
"Choose a month and generate a monthly field report.":"Hitamo ukwezi ukore raporo y’ibikorwa by’uwo kwezi.",
"MONTHLY FIELD REPORT":"RAPORO Y’IBIKORWA BY’UKWEZI",
"Completed activities":"Ibikorwa byarangiye",
"Activities needing follow-up":"Ibikorwa bigikeneye gukurikiranwa",
"Farmers visited":"Abahinzi basuwe",
"Follow-ups needed":"Abahinzi bakeneye kongera gukurikiranwa",
"Tree planting entries":"Inyandiko zo gutera ibiti",
"Tree monitoring visits":"Igenzura ry’ibiti",
"Monthly trees planted":"Ibiti byatewe muri uko kwezi",
"Latest trees observed alive":"Ibiti byabonetse bikiriho mu igenzura riheruka",
"Estimated observed survival":"Ijanisha ry’ibiti byabonetse bikiriho",
"Daily reports submitted":"Raporo za buri munsi zabitswe",
"Activity details":"Ibisobanuro by’ibikorwa",
"Farmer follow-up details":"Ibisobanuro byo gukurikirana abahinzi",
"Tree monitoring details":"Ibisobanuro by’igenzura ry’ibiti",
"Monitoring date":"Itariki y’igenzura",
"Planting date":"Itariki yo gutera",
"No entries this month.":"Nta nyandiko zabonetse muri uku kwezi.",
"Data export":"Gukuramo amakuru",
"Download a CSV file that opens in Excel or Google Sheets.":"Kuramo dosiye ya CSV ifunguka muri Excel cyangwa Google Sheets.",
"Export all records (CSV)":"Kuramo inyandiko zose (CSV)",
"Activities (CSV)":"Ibikorwa (CSV)",
"Farmer follow-ups (CSV)":"Gukurikirana abahinzi (CSV)",
"Tree monitoring (CSV)":"Gukurikirana ibiti (CSV)",
"Daily reports (CSV)":"Raporo za buri munsi (CSV)",
"Export backup (JSON)":"Kuramo kopi y’inyandiko (JSON)",
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
"*Based on the latest observation for each species and sample site; not an official survival assessment.":"*Bishingiye ku igenzura riheruka kuri buri bwoko n’ahantu h’icyitegererezo; si isuzuma ryemewe ry’ukurokoka kw’ibiti.",
"*Based on the latest observation recorded during this month for each species and sample site; this is an estimate, not an official survival assessment.":"*Bishingiye ku igenzura riheruka muri uko kwezi kuri buri bwoko n’ahantu h’icyitegererezo; ni igereranya, si isuzuma ryemewe ry’ukurokoka kw’ibiti.",
"Field Calendar":"Kalendari y’ibikorwa byo mu mirima","FIELD PLANNING":"GUTEGURA IBIKORWA","Plan field activity":"Teganya igikorwa cyo mu murima","Planned field activities":"Ibikorwa biteganyijwe","Upcoming and overdue":"Ibikorwa biri hafi n’ibyarengeje igihe","Plan sample field activities and review what is due. Reminders are shown inside this app only.":"Teganya ibikorwa by’icyitegererezo urebe ibigiye gukorwa. Ibibutsa bigaragarira muri iyi porogaramu gusa.","Activity title":"Izina ry’igikorwa","Planned date":"Itariki iteganyijwe","Time (optional)":"Isaha (si ngombwa)","Category":"Icyiciro","Field visit":"Gusura aho ibikorwa biri","Meeting":"Inama","Postponed":"Cyigijwe inyuma","Save planned activity":"Bika igikorwa giteganyijwe","e.g. Sample field visit":"Urugero: gusura ahantu h’icyitegererezo","No planned activities yet.":"Nta bikorwa biteganyijwe biraboneka.","Due today":"Giteganyijwe uyu munsi","Overdue":"Igihe cyacyo cyarenze","Upcoming":"Kiri hafi","No upcoming activities.":"Nta bikorwa biri hafi.","Reminders are in-app only; no push notifications are sent.":"Ibibutsa biri muri porogaramu gusa; nta butumwa bwo hanze bwoherezwa."
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
  document.getElementById(({activities:"ac",farmers:"fa",trees:"tr",reports:"re",calendar:"cal"})[key]).textContent=records.length;
  const list=document.getElementById(key+"-list");
  if(list)list.innerHTML=records.slice().reverse().map((record,reverseIndex)=>{const index=records.length-1-reverseIndex;return '<div class="item"><b>'+safe(record.title||tr("Daily Reports"))+'</b><small>'+safe(record.date)+' · '+safe(tr(record.status||record.area||""))+'</small><p>'+safe(record.notes)+'</p>'+(key==="trees"?'<small>'+safe(tr("Planting date"))+': '+safe(record.planting_date||record.date)+' · '+safe(tr("Quantity planted"))+': '+safe(record.planted)+' · '+safe(tr("Quantity observed alive"))+': '+safe(record.alive)+'</small><small>'+safe(record.area||"")+' · '+safe(tr(record.method||""))+' · '+safe(tr(record.condition||""))+'</small>':'')+'<div class="record-actions"><button type="button" class="edit-record" data-edit="'+key+'" data-index="'+index+'">'+safe(tr("Edit"))+'</button><button type="button" class="delete-record" data-delete="'+key+'" data-index="'+index+'">'+safe(tr("Delete"))+'</button></div></div>'}).join("")||tr("No records yet.");
 });
 const recent=keys.flatMap(key=>read(key).map(record=>({...record,kind:key}))).slice(-5).reverse();
 document.getElementById("recent").innerHTML=recent.map(record=>'<div class="item"><b>'+safe(record.title)+'</b><small>'+safe(record.date)+' · '+safe(tr(({activities:"Activities",farmers:"Farmer follow-ups",trees:"Tree records",reports:"Daily Reports",calendar:"Field Calendar"})[record.kind]))+'</small></div>').join("")||tr("No records yet.");
 document.querySelectorAll("[data-edit]").forEach(button=>button.addEventListener("click",()=>editRecord(button.dataset.edit,Number(button.dataset.index))));
 document.querySelectorAll("[data-delete]").forEach(button=>button.addEventListener("click",()=>deleteRecord(button.dataset.delete,Number(button.dataset.index))));
 renderAnalytics();
 renderCalendar();
}
function renderCalendar(){
 const target=document.getElementById("calendar-upcoming");
 if(!target)return;
 const today=todayLocal();
 const items=read("calendar").filter(item=>item.status!=="Completed").sort((a,b)=>(a.date||"").localeCompare(b.date||"")||(a.time||"").localeCompare(b.time||""));
 if(!items.length){target.innerHTML="<p>"+safe(tr("No upcoming activities."))+"</p>";return}
 target.innerHTML=items.map(item=>{
  const state=item.date<today?"Overdue":item.date===today?"Due today":"Upcoming";
  return '<div class="item calendar-item"><b>'+safe(item.title)+'</b><small>'+safe(item.date)+ (item.time?" · "+safe(item.time):"") +' · '+safe(tr(item.category||""))+' · '+safe(tr(item.status||""))+'</small><span class="calendar-badge '+(state==="Overdue"?"is-overdue":state==="Due today"?"is-today":"")+'">'+safe(tr(state))+'</span>'+(item.area?'<p>'+safe(item.area)+'</p>':"")+(item.notes?'<p>'+safe(item.notes)+'</p>':"")+'</div>';
 }).join("");
}
function editRecord(key,index){
 const records=read(key),record=records[index],form=document.querySelector('form[data-store="'+key+'"]');
 if(!record||!form)return;
 Object.keys(record).forEach(name=>{const field=form.elements.namedItem(name);if(field)field.value=record[name]??""});
 if(key==="trees"){if(form.elements.namedItem("planting_date")&&!record.planting_date)form.elements.namedItem("planting_date").value=record.date||todayLocal();if(form.elements.namedItem("method")&&!record.method)form.elements.namedItem("method").value="Not specified";if(form.elements.namedItem("condition")&&!record.condition)form.elements.namedItem("condition").value="Not assessed";}
 form.dataset.editIndex=String(index);
 let cancel=form.querySelector(".cancel-edit");
 if(!cancel){cancel=document.createElement("button");cancel.type="button";cancel.className="cancel-edit secondary";cancel.textContent=tr("Cancel edit");form.appendChild(cancel);cancel.addEventListener("click",()=>{delete form.dataset.editIndex;form.reset();cancel.remove();form.querySelectorAll('input[type="date"]').forEach(input=>input.value=todayLocal());
form.querySelector(".save").textContent=tr(({activities:"Save activity",farmers:"Save follow-up",trees:"Save tree record",reports:"Save report draft",calendar:"Save planned activity"})[key]);})}
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
 if(editing!==undefined){records[Number(editing)]=data;delete form.dataset.editIndex;const cancel=form.querySelector(".cancel-edit");if(cancel)cancel.remove();form.querySelector(".save").textContent=tr(({activities:"Save activity",farmers:"Save follow-up",trees:"Save tree record",reports:"Save report draft",calendar:"Save planned activity"})[form.dataset.store]);}
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
function buildMonthlyReport(){
 const period=document.getElementById("monthly-period").value;
 const preview=document.getElementById("monthly-preview");
 if(!/^\d{4}-\d{2}$/.test(period)){alert(tr("Please choose a valid date range."));return}
 const start=period+"-01";
 const [year,month]=period.split("-").map(Number);
 const lastDay=new Date(year,month,0).getDate();
 const end=period+"-"+String(lastDay).padStart(2,"0");
 const inMonth=key=>read(key).filter(item=>item.date&&item.date>=start&&item.date<=end);
 const activities=inMonth("activities"),farmers=inMonth("farmers"),trees=inMonth("trees"),reports=inMonth("reports");
 const completed=activities.filter(x=>x.status==="Completed").length;
 const needsFollow=activities.filter(x=>x.status==="Follow-up needed").length;
 const visited=farmers.filter(x=>x.status==="Visited").length;
 const farmerNeeds=farmers.filter(x=>x.status==="Needs follow-up"||x.status==="Not reached").length;
 const plantingGroups=new Map();
 read("trees").forEach(item=>{
  const plantingDate=item.planting_date||item.date;
  if(plantingDate&&plantingDate>=start&&plantingDate<=end){
   const key=[item.title||"",item.area||"",plantingDate].join("|");
   if(!plantingGroups.has(key))plantingGroups.set(key,item);
  }
 });
 const planted=[...plantingGroups.values()].reduce((sum,item)=>sum+Math.max(0,Number(item.planted)||0),0);
 const latestSites=new Map();
 trees.forEach(item=>{
  const key=[item.title||"",item.area||""].join("|");
  const old=latestSites.get(key);
  if(!old||String(item.date||"")>=String(old.date||""))latestSites.set(key,item);
 });
 const latest=[...latestSites.values()];
 const observedPlanted=latest.reduce((sum,item)=>sum+Math.max(0,Number(item.planted)||0),0);
 const alive=latest.reduce((sum,item)=>sum+Math.max(0,Number(item.alive)||0),0);
 const rate=observedPlanted?Math.min(100,alive/observedPlanted*100).toFixed(1)+"%":"—";
 const monthName=new Intl.DateTimeFormat(localStorage.getItem("flr_language")==="rw"?"rw-RW":"en-US",{month:"long",year:"numeric"}).format(new Date(year,month-1,1));
 let out='<h3>'+safe(tr("MONTHLY FIELD REPORT"))+'</h3><p><b>'+safe(tr("Report month"))+':</b> '+safe(monthName)+'</p><div class="summary-grid">';
 const metrics=[["Activities recorded",activities.length],["Completed activities",completed],["Activities needing follow-up",needsFollow],["Farmer follow-ups",farmers.length],["Farmers visited",visited],["Follow-ups needed",farmerNeeds],["Tree planting entries",plantingGroups.size],["Monthly trees planted",planted],["Tree monitoring visits",trees.length],["Latest trees observed alive",alive],["Estimated observed survival",rate],["Daily reports submitted",reports.length]];
 metrics.forEach(([label,value])=>{out+='<article>'+safe(tr(label))+'<strong>'+safe(value)+'</strong></article>'});
 out+='</div><p><small>'+safe(tr("*Based on the latest observation recorded during this month for each species and sample site; this is an estimate, not an official survival assessment."))+'</small></p>';
 const sections=[["Activity details",activities],["Farmer follow-up details",farmers],["Tree monitoring details",trees]];
 sections.forEach(([title,items])=>{
  out+='<h4>'+safe(tr(title))+'</h4>';
  if(!items.length){out+='<p>—</p>';return}
  items.forEach(item=>{
   out+='<p>• '+safe(item.date)+' — '+safe(item.title||"")+' '+safe(item.status||"")+' '+safe(item.notes||"");
   if(title==="Tree monitoring details")out+='<br>'+safe(tr("Planting date"))+': '+safe(item.planting_date||item.date)+' · '+safe(tr("Quantity planted"))+': '+safe(item.planted)+' · '+safe(tr("Quantity observed alive"))+': '+safe(item.alive)+' · '+safe(item.area||"");
   out+='</p>';
  });
 });
 if(!activities.length&&!farmers.length&&!trees.length&&!reports.length)out+='<p>'+safe(tr("No entries this month."))+'</p>';
 preview.innerHTML=out;
 document.getElementById("print-monthly").disabled=false;
}
document.getElementById("build-monthly").addEventListener("click",buildMonthlyReport);
document.getElementById("print-monthly").addEventListener("click",()=>{document.body.classList.add("print-monthly");window.print();});
window.addEventListener("afterprint",()=>document.body.classList.remove("print-monthly"));
document.getElementById("build-summary").addEventListener("click",buildSummary);
document.getElementById("print-summary").addEventListener("click",()=>window.print());
function csvCell(value){
 let text=String(value??"");
 if(/^[=+@\\-\\t\\r]/.test(text))text="'"+text;
 return '"'+text.replace(/"/g,'""')+'"';
}
function downloadCsv(filename,fields,records){
 const rows=[fields.map(csvCell).join(","),...records.map(record=>fields.map(field=>csvCell(record[field])).join(","))];
 const content="\\uFEFF"+rows.join("\\r\\n");
 const url=URL.createObjectURL(new Blob([content],{type:"text/csv;charset=utf-8"}));
 const link=document.createElement("a");link.href=url;link.download=filename;document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function exportCsv(group){
 const labels={activities:"activities",farmers:"farmer-follow-ups",trees:"tree-monitoring",reports:"daily-reports"};
 if(group==="all"){
  const records=keys.flatMap(key=>read(key).map(record=>({record_type:key,...record})));
  const fields=["record_type",...new Set(records.flatMap(record=>Object.keys(record).filter(field=>field!=="record_type")))];
  downloadCsv("flr-smart-all-records.csv",fields,records);
  return;
 }
 const records=read(group);
 const fields=[...new Set(records.flatMap(record=>Object.keys(record)))];
 if(!fields.length)fields.push(...({activities:["title","date","status","area","notes"],farmers:["title","date","status","area","notes"],trees:["title","planting_date","date","area","method","condition","planted","alive","notes"],reports:["date","title","area","notes"]}[group]));
 downloadCsv("flr-smart-"+labels[group]+".csv",fields,records);
}
document.querySelectorAll("[data-export-csv]").forEach(button=>button.addEventListener("click",()=>exportCsv(button.dataset.exportCsv)));
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
document.getElementById("monthly-period").value=todayLocal().slice(0,7);
if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(error=>console.warn("Service worker unavailable",error)))}
applyLanguage();render();
