import{s as v,a as _,e as g,g as b,c as S,b as W,f as c,p as y,q as l,i as u,r as C,n as d,o as E,u as M}from"./scheduler.BOcuARYx.js";import{S as R,i as q}from"./index.BragKJvw.js";function z(i){let o,t,r,a;return{c(){o=_(),t=g("div"),this.h()},l(e){o=b(e),t=S(e,"DIV",{class:!0,style:!0}),W(t).forEach(c),this.h()},h(){y(t,"class","nav-div svelte-12a7bc9"),l(t,"--cursor-x",i[0]),l(t,"--cursor-w",i[1]+"%")},m(e,s){u(e,o,s),u(e,t,s),i[4](t),r||(a=C(document.body,"mousemove",i[3]),r=!0)},p(e,[s]){s&1&&l(t,"--cursor-x",e[0]),s&2&&l(t,"--cursor-w",e[1]+"%")},i:d,o:d,d(e){e&&(c(o),c(t)),i[4](null),r=!1,a()}}}function B(i,o,t){let r=0,a=10,e,s;function f(n){t(0,r=(n.clientX-e[0])/(e[1]-e[0]))}E(()=>{const n=()=>{if(s){e=[s.getBoundingClientRect().left,s.getBoundingClientRect().right];let p=e[1]-e[0],h=window.innerWidth,w=p/h;t(1,a=a/w)}};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}});function m(n){M[n?"unshift":"push"](()=>{s=n,t(2,s)})}return[r,a,s,f,m]}class k extends R{constructor(o){super(),q(this,o,B,z,v,{})}}export{k as S};
