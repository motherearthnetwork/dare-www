(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{641:function(e,t,n){"use strict";n.r(t);n(117),n(65);var r=n(16),o=n(46),l=n(226),c={props:{targetPath:{type:String,default:"/coin/"},qrScannerPath:{type:String,default:"/start"},raboEmailDomains:{type:Array,default:function(){return["rabobank.nl","rabobank.com"]}}},data:function(){return{name:"",email:"",isRabobank:!1,ageCategory:null,jobCategory:null,isRegistering:!1}},computed:Object(o.a)({},Object(l.d)("coins",{currentCoin:function(e){return e.currentCoin}}),Object(l.d)("users",{user:function(e){return e.user}}),Object(l.d)("selectOptions",{ageCategories:function(e){return e.ageCategories},jobCategories:function(e){return e.jobCategories}})),mounted:function(){this.fetchOptions("ageCategories"),this.fetchOptions("jobCategories")},methods:Object(o.a)({},Object(l.b)("selectOptions",["fetchOptions"]),Object(l.b)("users",["registerUser"]),Object(l.b)("coins",["claimCoin"]),{onSubmit:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.isRegistering=!0,e.next=3,this.currentCoin;case 3:return t=e.sent,e.next=6,this.registerUser({user:{coin_id:t,name:this.name,email:this.email,age_category_id:this.ageCategory,job_category_id:this.jobCategory,rabobank_employee:this.isRabobank},coin_id:t});case 6:e.sent;case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}),watch:{user:function(e){this.isRegistering?"id"in e&&e.id.length&&(console.info("New user state has been set (for first time)"),this.isRegistering=!1,this.$router.push(this.targetPath)):console.warn("User state has been changed but registerUser() hasn't been called yet?")},email:function(e){var t=!1;this.raboEmailDomains.forEach(function(n){-1===e.indexOf(n)||(t=!0)}),this.isRabobank=t}}},m=n(44),d={middleware:"auth",layout:"app",components:{RegisterForm:Object(m.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.currentCoin?n("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[n("div",{staticClass:"uk-margin-small"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"uk-input",attrs:{required:"",type:"text",placeholder:"Your name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"uk-margin-small"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.ageCategory,expression:"ageCategory"}],staticClass:"uk-select",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.ageCategory=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",selected:"",value:""}},[e._v("Please select your age category")]),e._v(" "),e._l(e.ageCategories,function(t){return n("option",{key:t.id,domProps:{value:t.id}},[e._v("\n                    "+e._s(t.label)+"\n                ")])})],2)]),e._v(" "),n("div",{staticClass:"uk-margin-small uk-align-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"uk-input",attrs:{required:"",type:"email",placeholder:"Your email address"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),n("p",{staticClass:"uk-text-small uk-text-muted uk-margin-small-top uk-text-center"},[e._v("\n                With your email address you can recover your account anytime\n            ")])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isRabobank,expression:"isRabobank"}],staticClass:"uk-margin-small"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.jobCategory,expression:"jobCategory"}],staticClass:"uk-select",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.jobCategory=t.target.multiple?n:n[0]}}},[n("option",{attrs:{selected:"",disabled:"",value:""}},[e._v("Please select your department")]),e._v(" "),e._l(e.jobCategories,function(t){return n("option",{key:t.id,domProps:{value:t.id}},[e._v("\n                    "+e._s(t.label)+"\n                ")])})],2)]),e._v(" "),n("div",[n("input",{staticClass:"uk-checkbox",attrs:{required:"",type:"checkbox"}}),e._v(" I agree with the "),n("nuxt-link",{attrs:{to:"terms"}},[e._v("terms & conditions")])],1),e._v(" "),n("ion-button",{staticClass:"uk-margin",attrs:{type:"submit",shape:"round",fill:"outline"},on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._v("\n            Register\n        ")]),e._v(" "),n("div",[e._v("\n            Already a member?\n            "),n("nuxt-link",{attrs:{to:"login"}},[e._v("\n                Login\n            ")])],1)],1):n("div",[e._m(0),e._v(" "),n("portal",{attrs:{to:"raboRegisterFormFooter"}},[n("nuxt-link",{attrs:{to:e.qrScannerPath}},[n("ion-button",{attrs:{shape:"round",fill:"outline"}},[e._v("\n                    Scan Token\n                ")])],1)],1)],1)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"uk-text-warning uk-text-center"},[this._v("\n            No token data available!"),t("br"),this._v("\n            Please scan one.\n        ")])}],!1,null,null,null).exports,CustomKit:n(132).a},head:function(){return{title:"Who are you?"}},computed:{showParts:function(){return["body","media"]},customClass:function(){return["uk-card","uk-card-default","uk-card-body","uk-card-small","uk-width-1-1@m"]},mediaClass:function(){return["uk-text-center","uk-margin-small-bottom"]},bodyClass:function(){return["uk-text-center"]}}},v=Object(m.a)(d,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"uk-container uk-flex uk-flex-center uk-align-center"},[n("custom-kit",{class:e.customClass,attrs:{mediaClasses:e.mediaClass,bodyClasses:e.bodyClass,show:e.showParts},scopedSlots:e._u([{key:"media",fn:function(){return[n("img",{staticClass:"raboGif",attrs:{"data-src":"images/gifs/signup.gif","uk-img":""}})]},proxy:!0},{key:"body",fn:function(){return[n("h3",[e._v("Sign up!")]),n("register-form")]},proxy:!0}])})],1)},[],!1,null,null,null);t.default=v.exports}}]);