(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{642:function(t,e,n){"use strict";n.r(e);n(65);var r=n(16),o=n(46),l=n(226),c={props:{targetPath:{type:String,default:"/coin"}},data:function(){return{code:"",email:""}},methods:Object(o.a)({},Object(l.b)("users",["loginUser"]),{onSubmit:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loginUser({email:this.email,token:this.code});case 2:setTimeout(function(t){return e.$router.push(e.targetPath)},500);case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()})},d=n(44),m={layout:"app",components:{LoginForm:Object(d.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"uk-input",attrs:{required:"",type:"email",placeholder:"Your email address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"uk-input",attrs:{required:"",type:"text",placeholder:"Your code"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),t._v(" "),n("p",{staticClass:"uk-text-small uk-text-muted uk-margin-small-top uk-text-center"},[t._v("\n            \tThere should be a code in your inbox\n            ")]),t._v(" "),n("ion-button",{staticClass:"uk-margin",attrs:{shape:"round",fill:"outline",type:"submit"}},[t._v("\n                Login\n            ")]),t._v(" "),n("div",[t._v("\n\t        Need a code?\n\t        "),n("nuxt-link",{attrs:{to:"request-login-code"}},[t._v("\n\t\t    Get one\n\t        ")])],1),t._v(" "),n("div",[t._v("\n                Don't have an account?\n\t\t"),n("nuxt-link",{attrs:{to:"auth"}},[t._v("\n\t\t    Register\n\t\t")])],1)],1)])},[],!1,null,null,null).exports,CustomKit:n(132).a},head:function(){return{title:"Who are you?"}},computed:{showParts:function(){return["body","media"]},customClass:function(){return["uk-card","uk-card-default","uk-card-body","uk-card-small","uk-width-1-1@m"]},mediaClass:function(){return["uk-text-center","uk-margin-small-bottom"]},bodyClass:function(){return["uk-text-center"]}}},f=Object(d.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"uk-container uk-flex uk-flex-center uk-align-center"},[n("custom-kit",{class:t.customClass,attrs:{mediaClasses:t.mediaClass,bodyClasses:t.bodyClass,show:t.showParts},scopedSlots:t._u([{key:"media",fn:function(){return[n("img",{staticClass:"raboGif",attrs:{"data-src":"images/gifs/signup.gif","uk-img":""}})]},proxy:!0},{key:"body",fn:function(){return[n("h3",[t._v("Login!")]),n("p",[t._v("The magic code is on its way! Depending on your mail server, this might take a while and can end up in your spambox")]),n("login-form")]},proxy:!0}])})],1)},[],!1,null,null,null);e.default=f.exports}}]);