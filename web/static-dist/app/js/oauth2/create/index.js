webpackJsonp(["app/js/oauth2/create/index"],{0:function(e,t){e.exports=jQuery},"04e12e97a64b943320e3":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a("e104a65d9efb9ac573bc"),o=a("b334fd7e4c5a19234db2"),u=n(o),i=a("0fcd3a355c9fe74234e3"),d=a("5eb223de522186da1dd9"),f=n(d),l=function(){function e(){r(this,e),this.$form=$("#third-party-create-account-form"),this.$btn=$(".js-submit-btn"),this.validator=null,this.captchaToken=null,this.smsToken=null,this.init()}return s(e,[{key:"init",value:function(){this.initCaptchaCode(),this.initValidator(),this.changeCaptchaCode(),this.sendMessage(),this.submitForm(),this.removeSmsErrorTip()}},{key:"initValidator",value:function(){var e=this,t=$(".js-sms-send");this.validator=this.$form.validate({rules:{username:{required:!0,byte_minlength:4,byte_maxlength:18,nickname:!0,chinese_alphanumeric:!0,es_remote:{type:"get"}},password:{required:!0,minlength:5,maxlength:20},confirmPassword:{required:!0,equalTo:"#password"},captcha_code:{required:!0,alphanumeric:!0,captcha_checkout:{callback:function(a){if(!a){t.attr("disabled",!0);var n=e.initCaptchaCode();return e.captchaToken=n,e.captchaToken}t.removeAttr("disabled")}}},sms_code:{required:!0,unsigned_integer:!0,rangelength:[6,6]}},messages:{sms_code:{required:Translator.trans("site.captcha_code.required"),rangelength:Translator.trans("validate.sms_code.message")}}}),$.validator.addMethod("captcha_checkout",function(t,a,n){$(a);if(t.length<5)return void($.validator.messages.captcha_checkout=Translator.trans("oauth.captcha_code_length_tip"));var r=n.data?n.data:{phrase:t},s=n.callback?n.callback:null,c=0,o={captchaToken:e.captchaToken};return f.default.captcha.validate({data:r,params:o,async:!1,promise:!1}).done(function(e){"success"===e.status?c=!0:"expired"===e.status?(c=!1,$.validator.messages.captcha_checkout=Translator.trans("oauth.captcha_code_expired_tip")):(c=!1,$.validator.messages.captcha_checkout=Translator.trans("oauth.captcha_code_error_tip")),s&&s(c)}).error(function(e){}),this.optional(a)||c},Translator.trans("validate.captcha_checkout.message"))}},{key:"initCaptchaCode",value:function(){var e=this,t=$("#getcode_num");if(t.length)return f.default.captcha.get({async:!1,promise:!1}).done(function(a){t.attr("src",a.image),e.captchaToken=a.captchaToken}).error(function(e){}),this.captchaToken}},{key:"sendMessage",value:function(){var e=this,t=$(".js-sms-send"),a=$("#captcha_code");t.length&&t.click(function(t){var n=$(t.target),r={type:"register",mobile:$(".js-account").html(),captchaToken:e.captchaToken,phrase:a.val()};f.default.sms.send({data:r}).then(function(t){e.smsToken=t.smsToken,(0,i.countDown)(120)}).catch(function(t){switch(t.responseJSON.error.code){case 30001:(0,u.default)("danger",Translator.trans("oauth.refresh.captcha_code_tip")),a.val(""),n.attr("disabled",!0),e.initCaptchaCode();break;case 30002:(0,u.default)("danger",Translator.trans("oauth.send.error_message_tip"));break;case 30003:(0,u.default)("danger",Translator.trans("admin.site.cloude_sms_enable_hint"));break;default:(0,u.default)("danger",Translator.trans("site.data.get_sms_code_failure_hint"))}})})}},{key:"changeCaptchaCode",value:function(){var e=this,t=$("#getcode_num");t.length&&t.click(function(){e.initCaptchaCode()})}},{key:"submitForm",value:function(){var e=this;this.$btn.click(function(t){var a=$(t.target);if(e.validator.form()){a.button("loading");var n={nickname:$("#username").val(),password:$("#password").val(),mobile:$(".js-account").html(),smsToken:e.smsToken,smsCode:$("#sms-code").val(),captchaToken:e.captchaToken,phrase:$("#captcha_code").val()},r=Translator.trans("oauth.send.sms_code_error_tip");$.post(a.data("url"),n,function(e){a.button("reset"),1===e.success?window.location.href=e.url:$(".js-password-error").length||a.prev().addClass("has-error").append('<p id="password-error" class="form-error-message js-password-error">'+r+"</p>")}).error(function(e){a.button("reset"),429===e.status?(0,u.default)("danger",Translator.trans("oauth.register.time_limit")):(0,u.default)("danger",Translator.trans("oauth.register.error_message"))})}}),(0,c.enterSubmit)(this.$form,this.$btn)}},{key:"removeSmsErrorTip",value:function(){$("#sms-code").focus(function(){var e=$(".js-password-error");e.length&&e.remove()})}}]),e}();t.default=l},"0fcd3a355c9fe74234e3":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.countDown=void 0;var n=a("b334fd7e4c5a19234db2"),r=function(e){return e&&e.__esModule?e:{default:e}}(n),s=$(".js-time-left"),c=$(".js-sms-send"),o=$(".js-fetch-btn-text"),u=(t.countDown=function(e){s.html(e),o.html(Translator.trans("site.data.get_sms_code_again_btn")),(0,r.default)("success",Translator.trans("site.data.get_sms_code_success_hint")),u()},function e(){var t=s.text();s.html(t-1),t-1>0?(c.attr("disabled",!0),setTimeout(e,1e3)):(s.html(""),o.html(Translator.trans("oauth.send.validate_message")),c.removeAttr("disabled"))})},"1b3e3e6763be2a155f42":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("af463f59266a614cffe8"),r=function(e){return e&&e.__esModule?e:{default:e}}(n),s=function(e){return{join:function(t){return(0,r.default)(Object.assign({url:e+"/classrooms/"+t.params.classroomId+"/members",type:"POST"},t))}}};t.default=s},"1d43a4025aadc22df310":function(e,t,a){"use strict";var n=a("04e12e97a64b943320e3");new(function(e){return e&&e.__esModule?e:{default:e}}(n).default)},"3d0db09f953f025f2782":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("af463f59266a614cffe8"),r=function(e){return e&&e.__esModule?e:{default:e}}(n),s=function(e){return{send:function(t){return(0,r.default)(Object.assign({url:e+"/sms_center",type:"POST"},t))}}};t.default=s},"5eb223de522186da1dd9":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a("f876a6f7a3b814e5ae39"),s=n(r),c=a("1b3e3e6763be2a155f42"),o=n(c),u=a("c0f4981719a2ddce4be9"),i=n(u),d=a("fe71ffbf71e281622710"),f=n(d),l=a("3d0db09f953f025f2782"),h=n(l),p=a("f4ea112d2652e7024e58"),_=n(p),m=a("5f38014b6a4056298583"),b=n(m),v={course:(0,s.default)("/api"),classroom:(0,o.default)("/api"),trade:(0,i.default)("/api"),captcha:(0,f.default)("/api"),sms:(0,h.default)("/api"),conversation:(0,_.default)("/api"),newNotification:(0,b.default)("/api")};t.default=v},"5f38014b6a4056298583":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("af463f59266a614cffe8"),r=function(e){return e&&e.__esModule?e:{default:e}}(n),s=function(e){return{search:function(t){return(0,r.default)(Object.assign({url:e+"/newNotifications",type:"GET"},t))}}};t.default=s},af463f59266a614cffe8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t={type:"GET",url:null,async:!0,promise:!0,dataType:"json",beforeSend:function(t){t.setRequestHeader("Accept","application/vnd.edusoho.v2+json"),t.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content")),"function"==typeof e.before&&e.before(t)}};return e=Object.assign(t,e),e.promise?Promise.resolve($.ajax(e)):$.ajax(e)};t.default=n},c0f4981719a2ddce4be9:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("af463f59266a614cffe8"),r=function(e){return e&&e.__esModule?e:{default:e}}(n),s=function(e){return{get:function(t){return(0,r.default)(Object.assign({url:e+"/trades/"+t.params.tradeSn},t))},create:function(t){return(0,r.default)(Object.assign({url:e+"/trades",type:"POST"},t))}}};t.default=s},e104a65d9efb9ac573bc:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){e.keypress(function(e){13==e.which&&(t.trigger("click"),e.preventDefault())})};t.enterSubmit=n},f4ea112d2652e7024e58:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("af463f59266a614cffe8"),r=function(e){return e&&e.__esModule?e:{default:e}}(n),s=function(e){return{search:function(t){return(0,r.default)(Object.assign({url:e+"/conversations",type:"GET"},t))}}};t.default=s},f876a6f7a3b814e5ae39:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("af463f59266a614cffe8"),r=function(e){return e&&e.__esModule?e:{default:e}}(n),s=function(e){return{get:function(t){return(0,r.default)(Object.assign({url:e+"/courses/"+t.params.courseId},t))}}};t.default=s},fe71ffbf71e281622710:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("af463f59266a614cffe8"),r=function(e){return e&&e.__esModule?e:{default:e}}(n),s=function(e){return{get:function(t){return(0,r.default)(Object.assign({url:e+"/captcha",type:"POST"},t))},validate:function(t){return(0,r.default)(Object.assign({url:e+"/captcha/"+t.params.captchaToken,type:"GET"},t))}}};t.default=s}},["1d43a4025aadc22df310"]);