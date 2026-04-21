"use strict";var NimbusLib=(()=>{var f=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var T=Object.prototype.hasOwnProperty;var L=(l,n)=>{for(var e in n)f(l,e,{get:n[e],enumerable:!0})},k=(l,n,e,s)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of w(n))!T.call(l,t)&&t!==e&&f(l,t,{get:()=>n[t],enumerable:!(s=v(n,t))||s.enumerable});return l};var C=l=>k(f({},"__esModule",{value:!0}),l);var O={};L(O,{Form:()=>h,Grid:()=>m,NimbusWindow:()=>c,Toolbar:()=>u,WM:()=>E});var p=class{constructor(){this.listeners=new Map;this.el=this.render()}on(n,e){return this.listeners.has(n)||this.listeners.set(n,[]),this.listeners.get(n).push(e),this}emit(n,...e){(this.listeners.get(n)??[]).forEach(t=>t(...e))}add(n){return this.el.appendChild(n.getElement()),this}getElement(){return this.el}};var b=1e3,c=class extends p{constructor(e){super();this.isMinimized=!1;this.isMaximized=!1;this.prevState=null;this.opts=e,this.setPosition(),this.makeDraggable(),this.makeResizable(),this.focus()}render(){let e=document.createElement("div");e.className="wm-window",e.style.cssText=`
    position:fixed;
    width:${this.opts.width}px;
    height:${this.opts.height}px;
    background:#17181f;
    border:1px solid rgba(239,159,39,.18);
    border-radius:10px;
    overflow:hidden;
    display:flex;
    flex-direction:column;
    box-shadow:0 24px 64px rgba(0,0,0,.55);
    z-index:${++b};
    font-family:Outfit,system-ui,sans-serif;
    `,e.addEventListener("mousedown",()=>this.focus());let s=document.createElement("div");s.className="wm-titlebar",s.style.cssText=`
    display:flex;align-items:center;gap:8px;
    padding:0 14px;height:40px;
    background:#111d30;
    border-bottom:1px solid rgba(239,159,39,.12);
    flex-shrink:0;cursor:move;user-select:none;
    `;let t=document.createElement("div");t.style.cssText="display:flex;gap:6px;flex-shrink:0";let r=this.dot("#D85A30");r.title="Fechar",r.addEventListener("click",()=>this.close());let i=this.dot("#EF9F27");i.title="Minimizar",i.addEventListener("click",()=>this.minimize());let o=this.dot("#1D9E75");return o.title="Maximizar",o.addEventListener("click",()=>this.maximize()),t.append(r,i,o),this.titleEl=document.createElement("span"),this.titleEl.textContent=this.opts.title,this.titleEl.style.cssText=`
    font-size:13px;font-weight:500;
    color:rgba(232,233,240,.85);
    flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
    `,s.append(t,this.titleEl),this.bodyEl=document.createElement("div"),this.bodyEl.className="wm-body",this.bodyEl.style.cssText=`
    flex:1;overflow:auto;display:flex;flex-direction:column;gap:0;
    `,e.append(s,this.bodyEl),e}dot(e){let s=document.createElement("div");return s.style.cssText=`
        width:12px;height:12px;border-radius:50%;
        background:${e};cursor:pointer;flex-shrink:0;
        `,s}setPosition(){let e=this.opts.x??Math.max(20,(window.innerWidth-this.opts.width)/2),s=this.opts.y??Math.max(20,(window.innerHeight-this.opts.height)/2);this.el.style.left=e+"px",this.el.style.top=s+"px"}makeDraggable(){let e=this.el.querySelector(".wm-titlebar"),s=0,t=0,r=0,i=0,o=a=>{this.isMaximized||(this.el.style.left=Math.max(0,r+a.clientX-s)+"px",this.el.style.top=Math.max(0,i+a.clientY-t)+"px")},d=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",d)};e.addEventListener("mousedown",a=>{a.target.closest("[title]")||(s=a.clientX,t=a.clientY,r=parseInt(this.el.style.left),i=parseInt(this.el.style.top),document.addEventListener("mousemove",o),document.addEventListener("mouseup",d))})}makeResizable(){let e=document.createElement("div");e.style.cssText=`
            position:absolute;bottom:0;right:0;
            width:14px;height:14px;cursor:se-resize;
            `,this.el.style.position="fixed",this.el.appendChild(e);let s=0,t=0,r=0,i=0,o=a=>{this.el.style.width=Math.max(320,r+a.clientX-s)+"px",this.el.style.height=Math.max(200,i+a.clientY-t)+"px"},d=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",d)};e.addEventListener("mousedown",a=>{s=a.clientX,t=a.clientY,r=this.el.offsetWidth,i=this.el.offsetHeight,document.addEventListener("mousemove",o),document.addEventListener("mouseup",d)})}add(e){return this.bodyEl.appendChild(e.getElement()),this}focus(){this.el.style.zIndex=String(++b)}close(){this.emit("close"),this.el.remove()}minimize(){this.isMinimized?(this.el.style.height=(this.prevState?.h??this.opts.height)+"px",this.bodyEl.style.display="flex",this.isMinimized=!1):(this.prevState={x:parseInt(this.el.style.left),y:parseInt(this.el.style.top),w:this.el.offsetWidth,h:this.el.offsetHeight},this.bodyEl.style.display="none",this.el.style.height="40px",this.isMinimized=!0)}maximize(){this.isMaximized?(this.prevState&&(this.el.style.left=this.prevState.x+"px",this.el.style.top=this.prevState.y+"px",this.el.style.width=this.prevState.w+"px",this.el.style.height=this.prevState.h+"px"),this.isMaximized=!1):(this.prevState={x:parseInt(this.el.style.left),y:parseInt(this.el.style.top),w:this.el.offsetWidth,h:this.el.offsetHeight},this.el.style.left="0",this.el.style.top="0",this.el.style.width=window.innerWidth+"px",this.el.style.height=window.innerHeight+"px",this.isMaximized=!0)}setTitle(e){this.titleEl.textContent=e}};var y={},g=["#2563eb","#16a34a","#dc2626","#d97706","#7c3aed","#0891b2","#be185d","#65a30d","#ea580c","#6366f1"],M=0;function z(l){return y[l]||(y[l]=g[M++%g.length]),y[l]}var m=class extends p{constructor(e){super();this.sortField=null;this.sortDir="asc";this.opts=e,this.data=[...e.data],this.buildBody()}render(){let e=document.createElement("div");e.style.cssText="flex:1;overflow:auto;";let s=document.createElement("table");s.style.cssText=`
                width:100%;border-collapse:collapse;
                font-size:13px;font-family:Outfit,system-ui,sans-serif;
                `;let t=document.createElement("thead"),r=document.createElement("tr");return r.style.cssText="background:#111d30;position:sticky;top:0;z-index:1;",this.opts.columns.forEach(i=>{let o=document.createElement("th");o.textContent=i.title,o.style.cssText=`
                    padding:10px 14px;text-align:left;
                    font-size:11px;font-weight:500;letter-spacing:.5px;
                    color:rgba(232,233,240,.5);border-bottom:1px solid rgba(239,159,39,.12);
                    white-space:nowrap;
                    ${i.width?`width:${i.width}`:""}
                    ${i.sortable?"cursor:pointer;user-select:none;":""}
                    `,i.sortable&&o.addEventListener("click",()=>this.sortBy(i.field)),r.appendChild(o)}),t.appendChild(r),this.tableBody=document.createElement("tbody"),s.append(t,this.tableBody),e.appendChild(s),e}buildBody(){this.tableBody&&(this.tableBody.innerHTML="",this.data.forEach((e,s)=>{let t=document.createElement("tr");t.style.cssText=`
                        border-bottom:1px solid rgba(239,159,39,.06);
                        background:${s%2===0?"transparent":"rgba(255,255,255,.015)"};
                        cursor:pointer;transition:background .15s;
                        `,t.addEventListener("mouseenter",()=>t.style.background="rgba(239,159,39,.06)"),t.addEventListener("mouseleave",()=>t.style.background=s%2===0?"transparent":"rgba(255,255,255,.015)"),t.addEventListener("click",()=>this.emit("rowClick",e)),this.opts.columns.forEach(r=>{let i=document.createElement("td");i.style.cssText="padding:10px 14px;color:rgba(232,233,240,.85);";let o=e[r.field]??"";if(r.badge){let d=document.createElement("span"),a=z(String(o));d.textContent=String(o),d.style.cssText=`
                            display:inline-block;padding:2px 10px;border-radius:4px;
                            font-size:11px;font-weight:500;
                            background:${a}22;color:${a};
                            border:1px solid ${a}44;
                            `,i.appendChild(d)}else i.textContent=String(o);t.appendChild(i)}),this.tableBody.appendChild(t)}))}sortBy(e){this.sortField===e?this.sortDir=this.sortDir==="asc"?"desc":"asc":(this.sortField=e,this.sortDir="asc"),this.data.sort((s,t)=>{let r=s[e],i=t[e],o=String(r).localeCompare(String(i),void 0,{numeric:!0});return this.sortDir==="asc"?o:-o}),this.buildBody()}filter(e){let s=e.toLowerCase().trim();s?this.data=this.opts.data.filter(t=>Object.values(t).some(r=>String(r).toLowerCase().includes(s))):this.data=[...this.opts.data],this.buildBody()}setData(e){this.opts.data=e,this.data=[...e],this.buildBody()}};var h=class extends p{constructor(){super(...arguments);this.fields=[]}render(){let e=document.createElement("div");e.style.cssText="padding:20px;overflow:auto;flex:1;",this.formEl=document.createElement("form"),this.formEl.style.cssText="display:grid;grid-template-columns:1fr 1fr;gap:16px;",this.formEl.addEventListener("submit",i=>{if(i.preventDefault(),!this.formEl.checkValidity()){this.formEl.reportValidity();return}let o={};this.fields.forEach(d=>{let a=this.formEl.elements.namedItem(d.name);o[d.name]=a?.value??""}),this.emit("submit",o)});let s=document.createElement("div");s.style.cssText="grid-column:1/-1;display:flex;justify-content:flex-end;gap:10px;padding-top:4px;";let t=document.createElement("button");t.type="submit",t.textContent="Salvar",t.style.cssText=`
                            padding:9px 28px;background:#EF9F27;color:#fff;
                            border:none;border-radius:6px;font-size:14px;
                            font-family:Outfit,system-ui,sans-serif;font-weight:500;
                            cursor:pointer;transition:opacity .2s;
                            `,t.addEventListener("mouseenter",()=>t.style.opacity=".85"),t.addEventListener("mouseleave",()=>t.style.opacity="1");let r=document.createElement("button");return r.type="button",r.textContent="Cancelar",r.style.cssText=`
                            padding:9px 20px;background:transparent;
                            color:rgba(232,233,240,.6);
                            border:1px solid rgba(232,233,240,.15);border-radius:6px;
                            font-size:14px;font-family:Outfit,system-ui,sans-serif;
                            cursor:pointer;transition:border-color .2s;
                            `,r.addEventListener("click",()=>this.emit("cancel")),s.append(r,t),this.formEl.appendChild(s),e.appendChild(this.formEl),e}addField(e){this.fields.push(e);let s=document.createElement("div");e.type==="textarea"&&(s.style.gridColumn="1/-1");let t=document.createElement("label");t.textContent=e.label+(e.required?" *":""),t.htmlFor=e.name,t.style.cssText=`
                                display:block;font-size:12px;font-weight:500;
                                color:rgba(232,233,240,.5);margin-bottom:6px;
                                font-family:Outfit,system-ui,sans-serif;
                                `;let r;if(e.type==="select"&&e.options){let i=document.createElement("select");i.name=e.name,i.id=e.name,e.required&&(i.required=!0),i.style.cssText=this.inputStyle(),e.options.forEach(o=>{let d=document.createElement("option");d.value=o,d.textContent=o,e.value===o&&(d.selected=!0),i.appendChild(d)}),r=i}else if(e.type==="textarea"){let i=document.createElement("textarea");i.name=e.name,i.id=e.name,e.required&&(i.required=!0),e.placeholder&&(i.placeholder=e.placeholder),e.value&&(i.value=String(e.value)),i.rows=4,i.style.cssText=this.inputStyle()+"resize:vertical;",r=i}else{let i=document.createElement("input");i.name=e.name,i.id=e.name,i.type=e.type??"text",e.required&&(i.required=!0),e.placeholder&&(i.placeholder=e.placeholder),e.value!==void 0&&(i.value=String(e.value)),i.style.cssText=this.inputStyle(),r=i}return s.append(t,r),this.formEl.insertBefore(s,this.formEl.lastElementChild),this}inputStyle(){return`
                                    width:100%;padding:9px 12px;box-sizing:border-box;
                                    background:#0c1628;color:#e8e9f0;
                                    border:1px solid rgba(239,159,39,.18);border-radius:6px;
                                    font-size:13px;font-family:Outfit,system-ui,sans-serif;
                                    outline:none;transition:border-color .2s;
                                    `}reset(){this.formEl.reset()}};var u=class extends p{render(){let n=document.createElement("div");return n.style.cssText=`
                                        display:flex;align-items:center;justify-content:space-between;
                                        padding:8px 14px;gap:8px;
                                        background:#111d30;border-bottom:1px solid rgba(239,159,39,.1);
                                        flex-shrink:0;
                                        `,this.leftEl=document.createElement("div"),this.leftEl.style.cssText="display:flex;align-items:center;gap:8px;flex-wrap:wrap;",this.rightEl=document.createElement("div"),this.rightEl.style.cssText="display:flex;align-items:center;gap:8px;",n.append(this.leftEl,this.rightEl),n}addButton(n){let e=document.createElement("button");e.textContent=n.label,e.type="button";let s={primary:"background:#EF9F27;color:#fff;border:none;",secondary:"background:transparent;color:rgba(232,233,240,.8);border:1px solid rgba(232,233,240,.15);",danger:"background:transparent;color:#D85A30;border:1px solid rgba(216,90,48,.3);"};if(e.style.cssText=`
                                        padding:7px 16px;border-radius:6px;font-size:13px;
                                        font-family:Outfit,system-ui,sans-serif;font-weight:500;
                                        cursor:pointer;transition:opacity .2s;white-space:nowrap;
                                        ${s[n.variant??"secondary"]}
                                        `,e.addEventListener("mouseenter",()=>e.style.opacity=".8"),e.addEventListener("mouseleave",()=>e.style.opacity="1"),n.dropdown?.length){let t=document.createElement("div");t.style.cssText="position:relative;display:inline-block;";let r=document.createElement("div");r.style.cssText=`
                                            display:none;position:absolute;top:calc(100% + 4px);left:0;
                                            background:#111d30;border:1px solid rgba(239,159,39,.18);
                                            border-radius:6px;min-width:160px;z-index:9999;
                                            box-shadow:0 8px 24px rgba(0,0,0,.4);overflow:hidden;
                                            `,n.dropdown.forEach(i=>{let o=document.createElement("div");o.textContent=i.label,o.style.cssText=`
                                                padding:9px 14px;font-size:13px;cursor:pointer;
                                                color:rgba(232,233,240,.85);font-family:Outfit,system-ui,sans-serif;
                                                transition:background .15s;
                                                `,o.addEventListener("mouseenter",()=>o.style.background="rgba(239,159,39,.08)"),o.addEventListener("mouseleave",()=>o.style.background="transparent"),o.addEventListener("click",()=>{i.onClick(),r.style.display="none"}),r.appendChild(o)}),e.addEventListener("click",()=>{r.style.display=r.style.display==="none"?"block":"none"}),document.addEventListener("click",i=>{t.contains(i.target)||(r.style.display="none")}),t.append(e,r),this.leftEl.appendChild(t)}else e.addEventListener("click",n.onClick),this.leftEl.appendChild(e);return this}addSeparator(){let n=document.createElement("div");return n.style.cssText="width:1px;height:20px;background:rgba(232,233,240,.1);flex-shrink:0;",this.leftEl.appendChild(n),this}addSearch(n){let e=document.createElement("div");e.style.cssText="position:relative;";let s=document.createElement("input");s.type="search",s.placeholder=n.placeholder??"Buscar...",s.style.cssText=`
                                                    padding:7px 12px 7px 32px;
                                                    background:#0c1628;color:#e8e9f0;
                                                    border:1px solid rgba(239,159,39,.18);border-radius:6px;
                                                    font-size:13px;font-family:Outfit,system-ui,sans-serif;
                                                    outline:none;width:200px;transition:border-color .2s;
                                                    `,s.addEventListener("input",()=>n.onSearch(s.value));let t=document.createElement("span");return t.textContent="\u2315",t.style.cssText=`
                                                    position:absolute;left:9px;top:50%;transform:translateY(-50%);
                                                    color:rgba(232,233,240,.3);font-size:15px;pointer-events:none;
                                                    `,e.append(t,s),this.rightEl.appendChild(e),this}};var x=[],E={openWindow(l){let n=new c(l);return document.body.appendChild(n.getElement()),x.push(n),n.on("close",()=>{let e=x.indexOf(n);e>-1&&x.splice(e,1)}),n},Grid(l){return new m(l)},Form(){return new h},Toolbar(){return new u},closeAll(){[...x].forEach(l=>l.close())},getWindows(){return[...x]}};window.WM=E;return C(O);})();
