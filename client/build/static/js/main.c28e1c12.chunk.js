(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),m=n.n(r),o=n(4);n(14);const s=Object(o.a)("https://websocket-5c8h.onrender.com"),i=e=>{let{carName:t,count:n,onIncrement:a,onDecrement:r}=e;return c.a.createElement("div",{className:"car-simulator"},c.a.createElement("h3",null,t,": ",n),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{onClick:a},"+"),c.a.createElement("button",{onClick:r},"-")))};var l=function(){const[e,t]=Object(a.useState)(0),[n,r]=Object(a.useState)(0),[m,o]=Object(a.useState)(0),[l,u]=Object(a.useState)(0),[d,E]=Object(a.useState)(0),[v,p]=Object(a.useState)(0),[f,h]=Object(a.useState)(0);return Object(a.useEffect)(()=>(s.on("receive_message",e=>{console.log("Dados recebidos:",e),t(e.porscheCount),r(e.formulaCount),o(e.mercedesCount),E(e.imersivaCount),p(e.carroProfissionalCount1),h(e.carroProfissionalCount2),u(e.aviaoCount)}),()=>{s.off("receive_message")}),[]),c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,"Contagens ",c.a.createElement("span",{style:{color:"#80cd76"}},"Exceed")),c.a.createElement("select",{name:"Andares"},c.a.createElement("option",{value:"G1"},"G1"),c.a.createElement("option",{value:"G1"},"T\xe9rreo"),c.a.createElement("option",{value:"G1"},"3 e 4 Andar"))),c.a.createElement("div",{className:"h2-container"},c.a.createElement("div",{className:"simuladores-carro"},c.a.createElement("h2",null,"Simuladores de Carro:"),c.a.createElement(i,{carName:"Porsche",count:e,onIncrement:()=>s.emit("increment_porsche"),onDecrement:()=>s.emit("decrement_porsche")}),c.a.createElement(i,{carName:"F\xf3rmula",count:n,onIncrement:()=>s.emit("increment_formula"),onDecrement:()=>s.emit("decrement_formula")}),c.a.createElement(i,{carName:"Mercedes",count:m,onIncrement:()=>s.emit("increment_mercedes"),onDecrement:()=>s.emit("decrement_mercedes")})),c.a.createElement("div",{className:"imersivas"},c.a.createElement("h2",null,"Imersivas:"),c.a.createElement(i,{carName:"Imersiva",count:d,onIncrement:()=>s.emit("increment_imersiva"),onDecrement:()=>s.emit("decrement_imersiva")})),c.a.createElement("div",{className:"simuladores-profissionais"},c.a.createElement("h2",null,"Simuladores Profissionais:"),c.a.createElement(i,{carName:"McLaren",count:v,onIncrement:()=>s.emit("increment_profissional1"),onDecrement:()=>s.emit("decrement_profissional1")}),c.a.createElement(i,{carName:"F\xf3rmula",count:f,onIncrement:()=>s.emit("increment_profissional2"),onDecrement:()=>s.emit("decrement_profissional2")})),c.a.createElement("div",{className:"aviao"},c.a.createElement("h2",null,"Aviao:"),c.a.createElement(i,{carName:"Aviao",count:l,onIncrement:()=>s.emit("increment_aviao"),onDecrement:()=>s.emit("decrement_aviao")}))))};var u=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then(t=>{let{getCLS:n,getFID:a,getFCP:c,getLCP:r,getTTFB:m}=t;n(e),a(e),c(e),r(e),m(e)})};m.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l,null))),u()},5:function(e,t,n){e.exports=n(15)}},[[5,1,2]]]);
//# sourceMappingURL=main.c28e1c12.chunk.js.map