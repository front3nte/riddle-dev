import{d as f,u as w,e as v,f as h,o as i,c as r,t as m,g as p,a as d,h as S,v as k,n as q,i as $,j as T,k as b,l as N,b as A,F as y,m as C,p as D,r as L,q as B}from"./index-7710d751.js";const E={key:0},R=["onSubmit"],M=["innerHTML"],z=f({__name:"QuestionItem",props:{question:String,answer:String,questionCount:Number,index:Number},emits:["next","reset"],setup(_,{emit:l}){const t=l,e=_,a=w(),n=v({hasError:!1,success:!1}),o=h(null);let s;function c(){e.answer===s?(n.success=!0,setTimeout(()=>{n.success=!1,t("next"),e.questionCount&&e.index&&e.index>=e.questionCount&&(t("reset"),a.increment())},3e3)):(n.hasError=!0,setTimeout(()=>{n.hasError=!1},1e3))}return(u,x)=>n.success===!0?(i(),r("p",E," Richtig! "+m(p(a).level==="fantasy-quiz"?"🧙‍♂️":"🥳")+" Bewahrt die Antwort gut auf... ",1)):(i(),r("form",{key:1,onSubmit:T(c,["prevent"])},[d("h1",null,m(e.index?`Raetsel Nummer ${e.index+1}`:"Naechstes Raetsel"),1),d("p",{innerHTML:e.question},null,8,M),S(d("input",{placeholder:"Deine Antwort",ref_key:"input",ref:o,type:"text",class:q(["answer",{error:n.hasError}]),"onUpdate:modelValue":x[0]||(x[0]=g=>$(s)?s.value=g:s=g)},null,2),[[k,p(s)]])],40,R))}});const Q=f({__name:"SunsetAnimation",emits:["exceeded"],setup(_,{emit:l}){const t=new Date("November 02, 2023 09:00:00").getTime(),e=new Date().getTime(),a=t-e,n=l,o=v({exceeded:!1});document.body.style.setProperty("--duration",`${a}ms`);function s(){n("exceeded"),o.exceeded=!0}return b(()=>{a<0&&s()}),(c,u)=>(i(),r("div",{class:q(["container",{waiting:!o.exceeded}])},[d("div",{class:"sun",onAnimationend:u[0]||(u[0]=x=>s())},null,32)],2))}});const V={key:0},W={key:0},I={class:"wait-text"},F={key:1},j=f({__name:"QuizApp",props:{questions:Array,startText:String,nextLevel:String,wait:Boolean,waitingText:String},setup(_){const l=w(),t=_,e=v({index:-1,isWaiting:t.wait});return(a,n)=>e.index<0?(i(),r("div",V,[N(a.$slots,"default"),e.isWaiting?(i(),r("div",W,[A(Q,{onExceeded:n[0]||(n[0]=o=>e.isWaiting=!1)}),d("p",I,m(t.waitingText),1)])):(i(),r("button",{key:1,class:"riddle-start-button",onClick:n[1]||(n[1]=o=>e.index++)},m(t.startText),1))])):(i(),r("div",F,[(i(!0),r(y,null,C(t.questions,(o,s)=>{var c;return i(),r(y,{key:`questionItem-${s}`},[e.index==s?(i(),D(z,{key:0,index:s,question:o.q,answer:o.a,questionCount:(c=t.questions)==null?void 0:c.length,onReset:u=>e.index=-1,onNext:()=>{var u;e.index++,t.questions&&e.index>=((u=t.questions)==null?void 0:u.length)&&t.nextLevel&&(p(L).push(t.nextLevel),p(l).increment())}},null,8,["index","question","answer","questionCount","onReset","onNext"])):B("",!0)],64)}),128))]))}});export{j as _};
