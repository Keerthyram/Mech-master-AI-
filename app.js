const subjects=[
["Engineering Mathematics","Algebra, calculus, differential equations, numerical methods and statistics."],
["Engineering Mechanics","Force systems, equilibrium, friction, trusses, work and energy."],
["Strength of Materials","Stress, strain, elastic constants, bending, torsion and columns."],
["Material Science and Metallurgy","Crystal structure, phase diagrams, heat treatment, alloys and testing."],
["Engineering Thermodynamics","Properties, laws of thermodynamics, cycles, entropy and applications."],
["Fluid Mechanics","Fluid properties, hydrostatics, flow, Bernoulli equation and pipe losses."],
["Heat Transfer","Conduction, convection, radiation and heat exchangers."],
["Manufacturing Technology","Casting, forming, machining, welding and production processes."],
["Machine Design","Design principles, shafts, keys, bearings, gears and fasteners."],
["Theory of Machines","Mechanisms, kinematics, dynamics, gears and balancing."],
["Automobile Engineering","Engines, transmission, brakes, steering and electric vehicles."],
["Industrial Engineering","Work study, quality, production planning and operations research."],
["Refrigeration and Air Conditioning","Refrigeration cycles, psychrometry and HVAC fundamentals."],
["Computer-Aided Engineering","CAD, engineering drawings, simulation concepts and design workflow."]
];
const list=document.getElementById("subjectList");
function renderSubjects(filter=""){list.innerHTML="";subjects.filter(x=>(x[0]+" "+x[1]).toLowerCase().includes(filter.toLowerCase())).forEach((s,i)=>{const d=document.createElement("details");d.className="subject";const sum=document.createElement("summary");sum.textContent=s[0];const p=document.createElement("p");p.textContent=s[1];const topics=document.createElement("p");topics.className="topic";topics.textContent="Study path: Concepts → Formulas → Worked examples → Practice questions";d.append(sum,p,topics);list.append(d)});if(!list.children.length)list.textContent="No matching subject found."}
renderSubjects();
document.getElementById("subjectSearch").addEventListener("input",e=>renderSubjects(e.target.value));
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>{const id=b.dataset.go;if(id==="top"){window.scrollTo({top:0,behavior:"smooth"});return}document.getElementById(id)?.scrollIntoView({behavior:"smooth"})}));
document.querySelectorAll("[data-search]").forEach(b=>b.addEventListener("click",()=>window.open("https://www.youtube.com/results?search_query="+encodeURIComponent(b.dataset.search)," _blank")));
document.getElementById("calculate").addEventListener("click",()=>{const f=Number(document.getElementById("force").value),a=Number(document.getElementById("area").value),out=document.getElementById("calcResult");if(!Number.isFinite(f)||!Number.isFinite(a)||f<0||a<=0){out.textContent="Enter a force of 0 or more and an area greater than 0.";return}out.textContent="Normal stress = "+(f/a).toFixed(4)+" N/mm² (MPa).";});
const instruction="You are an educational assistant restricted to Mechanical Engineering and closely related engineering study tasks. Answer only questions about mechanical engineering subjects, CAD, Solid Edge, engineering tools, calculations, laboratory learning, projects, technical reports and presentations. If a request is unrelated, politely say this workspace is for Mechanical Engineering only. Explain at the user's level, show assumptions, units and steps, distinguish verified facts from uncertainty, and never invent sources, standards or video links. For real-world designs, state that qualified review and authoritative standards are required.\\n\\nMy question/task: ";
document.getElementById("copyPrompt").addEventListener("click",async()=>{const q=document.getElementById("aiQuestion").value.trim();if(!q){document.getElementById("copyStatus").textContent="Type your engineering question first.";return}const value=instruction+q;try{await navigator.clipboard.writeText(value);document.getElementById("copyStatus").textContent="Engineering instruction and question copied. Open an AI assistant above and paste it into the chat."}catch(e){document.getElementById("copyStatus").textContent="Clipboard access unavailable. Please select and copy your question manually."}});
function getNotes(){try{return JSON.parse(localStorage.getItem("mechmaster_notes")||"[]")}catch(e){return []}}
function showNotes(){const el=document.getElementById("notesList");el.innerHTML="";getNotes().forEach((n,i)=>{const d=document.createElement("div");d.className="note";const t=document.createElement("span");t.textContent=n;const b=document.createElement("button");b.textContent="Delete";b.addEventListener("click",()=>{const a=getNotes();a.splice(i,1);localStorage.setItem("mechmaster_notes",JSON.stringify(a));showNotes()});d.append(b,t);el.append(d)})}
document.getElementById("saveNote").addEventListener("click",()=>{const input=document.getElementById("noteInput"),v=input.value.trim();if(!v)return;const a=getNotes();a.unshift(v);localStorage.setItem("mechmaster_notes",JSON.stringify(a));input.value="";showNotes();toast("Note saved on this device")});
function toast(s){const t=document.getElementById("toast");t.textContent=s;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1800)}
showNotes();
function status(){const el=document.getElementById("connection");el.textContent=navigator.onLine?"● Online":"● Offline";el.style.color=navigator.onLine?"#73d5a0":"#f0bd5d"}
window.addEventListener("online",status);window.addEventListener("offline",status);status();
if("serviceWorker" in navigator && location.protocol.startsWith("http"))navigator.serviceWorker.register("./sw.js").catch(()=>{});
