(this.webpackJsonptaskapplication=this.webpackJsonptaskapplication||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),l=a.n(r),o=(a(11),a(5)),i=a(4),s=a(1),u=function(e){return c.a.createElement("h4",{className:"bg-primary text-white text-center p-4 titleBanner"},"Aplicaci\xf3n de tareas (",e.taskItems.filter((function(e){return!e.done})).length," tarea/s a realizar)")},m=function(e){return c.a.createElement("tr",{id:"task-description",key:e.task.name},c.a.createElement("td",null,e.task.name),c.a.createElement("td",null,c.a.createElement("input",{type:"checkbox",checked:e.task.done,onChange:function(){return e.toggleTask(e.task)}})),c.a.createElement("td",null,c.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.deleteTask(e.task)}},"Eliminar")))},d=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],l=a[1];return c.a.createElement("div",{className:"my-1"},c.a.createElement("input",{type:"text",className:"form-control",maxlength:"20",value:r,onChange:function(e){return l(e.target.value)},placeholder:"Escribe aqu\xed una nueva tarea"}),c.a.createElement("button",{className:"btn btn-success mt-1",onClick:function(){e.callback(r),l("")}},"Agregar tarea"))},f=function(e){return c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{type:"checkbox",className:"form-check-input",checked:e.isChecked,onChange:function(t){return e.callback(t.target.checked)}}),c.a.createElement("label",{htmlFor:"form-check-label"},"Ver ",e.description))};a(12);var b=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!0),b=Object(s.a)(l,2),k=b[0],E=b[1];Object(n.useEffect)((function(){var e=localStorage.getItem("tasks");null!=e?r(JSON.parse(e)):(r([]),E(!0))}),[]),Object(n.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(a))}),[a]);var h=function(e){return r(a.map((function(t){return t.name===e.name?Object(o.a)({},t,{done:!t.done}):t})))},p=function(e){return a.filter((function(t){return t.done===e})).map((function(e){return c.a.createElement(m,{key:e.name,task:e,toggleTask:h,deleteTask:g})}))},g=function(e){var t=a.map((function(e){return e.name})).indexOf(e.name),n=a.slice(0,t).concat(a.slice(t+1,a.length));r(n)};return c.a.createElement("div",null,c.a.createElement(u,{taskItems:a}),c.a.createElement("div",{className:"container-fluid"},c.a.createElement(d,{callback:function(e){a.find((function(t){return t.name===e}))||r([].concat(Object(i.a)(a),[{name:e,done:!1}]))}}),c.a.createElement("table",{className:"table table-striped table-bordered"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Descripci\xf3n"),c.a.createElement("th",null,"Realizada"))),c.a.createElement("tbody",null,p(!1))),c.a.createElement("div",{className:"bg-secondary text-white text-center p-2"},c.a.createElement(f,{description:"tareas realizadas",isChecked:k,callback:function(e){return E(e)}})),k&&c.a.createElement("table",{className:"table table-striped table-bordered"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Descripci\xf3n"),c.a.createElement("th",null,"Realizada"))),c.a.createElement("tbody",null,p(!0)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(13);l.a.render(c.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.aaa4613d.chunk.js.map