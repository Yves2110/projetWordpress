var l=Object.defineProperty,c=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var r=(t,i,s)=>i in t?l(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s,e=(t,i)=>{for(var s in i||(i={}))m.call(i,s)&&r(t,s,i[s]);if(n)for(var s of n(i))p.call(i,s)&&r(t,s,i[s]);return t},a=(t,i)=>c(t,g(i));import{a as u,d as h}from"./index.8900b7f9.js";import{e as d}from"./em.e81bf4a7.js";import{C as _}from"./Card.f0350b06.js";import{S as v}from"./LogoGear.0c3dd5e3.js";import{c as I}from"./index.652636d3.js";import{S as f}from"./External.8868c638.js";import{n as $}from"./vueComponentNormalizer.87056a83.js";import"./default-i18n.abde8d59.js";import"./isArrayLikeObject.a4a9229a.js";import"./Tooltip.3ec20ff5.js";import"./_commonjsHelpers.f40d732e.js";import"./QuestionMark.83ebd18e.js";import"./Slide.f5d21606.js";import"./client.94d919c5.js";import"./constants.7cd698f2.js";var y="images/em-graph-preview.4277e799.png",A="images/mi-logo.efba5578.png",L="images/mi-graph-preview.332630b7.png",E=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"aioseo-analytics"},[s("div",{staticClass:"aioseo-wrap aioseo-plugin-landing",attrs:{id:"aioseo-analytics"}},[s("core-card",{attrs:{slug:"monsterinsights-intro",hideHeader:!0,noSlide:!0,cardClass:{"aioseo-card--intro":!0}}},[s("div",{staticClass:"aioseo-analytics__intro"},[t.prefersEm?[s("div",{staticClass:"intro-image"},[s("svg-aioseo-logo-gear"),s("span",[t._v("\u2665")]),s("img",{attrs:{src:t.$getImgUrl(t.emLogoImg),height:"90",alt:"ExactMetrics"}})],1),s("h2",{staticClass:"intro-heading"},[t._v(" "+t._s(t.strings.emIntroH)+" ")]),s("p",[t._v(" "+t._s(t.strings.emIntroP)+" ")]),s("div",{staticClass:"preview-list"},[s("img",{attrs:{src:t.$getImgUrl(t.emGraphImg),height:"200",alt:"mi-graph-preview"}}),s("ul",[s("li",[s("svg-circle-check"),t._v(" "+t._s(t.strings.emIntroLi1)+" ")],1),s("li",[s("svg-circle-check"),t._v(" "+t._s(t.strings.emIntroLi2)+" ")],1),s("li",[s("svg-circle-check"),t._v(" "+t._s(t.strings.emIntroLi3)+" ")],1)])])]:[s("div",{staticClass:"intro-image"},[s("svg-aioseo-logo-gear"),s("span",[t._v("\u2665")]),s("img",{attrs:{src:t.$getImgUrl(t.miLogoImg),height:"90",alt:"MonsterInsights"}})],1),s("h2",{staticClass:"intro-heading"},[t._v(" "+t._s(t.strings.miIntroH)+" ")]),s("p",[t._v(" "+t._s(t.strings.miIntroP)+" ")]),s("div",{staticClass:"preview-list"},[s("img",{attrs:{src:t.$getImgUrl(t.miGraphImg),height:"200",alt:"mi-graph-preview"}}),s("ul",[s("li",[s("svg-circle-check"),t._v(" "+t._s(t.strings.miIntroLi1)+" ")],1),s("li",[s("svg-circle-check"),t._v(" "+t._s(t.strings.miIntroLi2)+" ")],1),s("li",[s("svg-circle-check"),t._v(" "+t._s(t.strings.miIntroLi3)+" ")],1),s("li",[s("svg-circle-check"),t._v(" "+t._s(t.strings.miIntroLi4)+" ")],1)])])]],2)]),s("section",{class:t.justInstalled||t.gaActivated?"aioseo-card step step--completed":"aioseo-card step step--current"},[t._m(0),s("div",{staticClass:"content"},[s("h2",{staticClass:"step-title"},[t.gaInstalled?t._e():[t._v(t._s(t.strings.miemInstallH))],t.prefersEm?[t._v(t._s(t.strings.emInstallH))]:[t._v(t._s(t.strings.miInstallH))]],2),s("p",[t.prefersEm?[t._v(t._s(t.strings.emInstallP))]:[t._v(t._s(t.strings.miInstallP))]],2),t.$aioseo.plugins.miLite.canInstall?t._e():s("base-button",{attrs:{type:"blue",size:"medium",tag:"a",target:"_blank",href:t.$aioseo.plugins.miLite.wpLink}},[s("svg-external"),t._v(" "+t._s(t.strings.installMi)+" ")],1),t.$aioseo.plugins.miLite.canInstall?s("base-button",{attrs:{loading:t.installingPlugin,type:t.justInstalled||t.gaActivated?"disabled":"blue",size:"medium"},on:{click:t.installMi}},[!t.justInstalled&&!t.gaInstalled?s("span",[t._v(t._s(t.strings.installMi))]):t._e(),(t.justInstalled||t.gaActivated)&&!t.prefersEm?s("span",[t._v(t._s(t.strings.miInstalled))]):t._e(),(t.justInstalled||t.gaActivated)&&t.prefersEm?s("span",[t._v(t._s(t.strings.emInstalled))]):t._e(),!t.justInstalled&&t.gaInstalled&&!t.gaActivated&&!t.prefersEm?s("span",[t._v(t._s(t.strings.activateMi))]):t._e(),!t.justInstalled&&t.gaInstalled&&!t.gaActivated&&t.prefersEm?s("span",[t._v(t._s(t.strings.activateEm))]):t._e()]):t._e()],1)]),s("section",{class:t.justInstalled||t.gaActivated?"aioseo-card step step--current":"aioseo-card step step--pending"},[t._m(1),s("div",{staticClass:"content"},[t.prefersEm?[s("h2",{staticClass:"step-title"},[t._v(t._s(t.strings.emWizardH))]),s("p",{staticClass:"step-body"},[t._v(t._s(t.strings.emWizardP))])]:[s("h2",{staticClass:"step-title"},[t._v(t._s(t.strings.miWizardH))]),s("p",{staticClass:"step-body"},[t._v(t._s(t.strings.miWizardP))])],s("base-button",{attrs:{disabled:!t.justInstalled&&!t.gaActivated,type:"blue",size:"medium",tag:"a",href:t.miOnboardingUrl}},[t._v(" "+t._s(t.strings.setupGA)+" ")])],2)])],1)])},M=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"step-count"},[s("span",{staticClass:"step-count__num"},[t._v("1")])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"step-count"},[s("span",{staticClass:"step-count__num"},[t._v("2")])])}];const P={components:{CoreCard:_,SvgAioseoLogoGear:v,SvgCircleCheck:I,SvgExternal:f},data(){return{emLogoImg:d,emGraphImg:y,miLogoImg:A,miGraphImg:L,installingPlugin:!1,justInstalled:!1,strings:{miLink:this.$t.sprintf("<strong>%1$s</strong>","Click here"),installMi:this.$t.sprintf("Install %1$s","MonsterInsights"),activateMi:this.$t.sprintf("Activate %1$s","MonsterInsights"),activateEm:this.$t.sprintf("Activate %1$s","ExactMetrics"),miInstalled:this.$t.sprintf("%1$s is Installed & Active","MonsterInsights"),emInstalled:this.$t.sprintf("%1$s is Installed & Active","ExactMetrics"),setupGA:"Launch Setup Wizard",emIntroH:"The Best Google Analytics Plugin for WordPress",emIntroP:this.$t.sprintf("%1$s connects AIOSEO to Google Analytics, providing a powerful integration. %2$s is a sister company of AIOSEO.","ExactMetrics","ExactMetrics"),emIntroLi1:"Quick & Easy Google Analytics Setup",emIntroLi2:"Google Analytics Dashboard + Real Time Stats",emIntroLi3:"Google Analytics Enhanced Ecommerce Tracking",emInstallH:this.$t.sprintf("Activate %1$s","ExactMetrics"),emInstallP:this.$t.sprintf("%1$s shows you exactly which content gets the most visits, so you can analyze and optimize it for higher conversions.","ExactMetrics"),miIntroH:"The Best Google Analytics Plugin for WordPress",miIntroP:this.$t.sprintf("%1$s connects AIOSEO to Google Analytics, providing a powerful integration. %2$s is a sister company of AIOSEO.","MonsterInsights","MonsterInsights"),miIntroLi1:"Quick & Easy Google Analytics Setup",miIntroLi2:"Google Analytics Dashboard + Real Time Stats",miIntroLi3:"Google Analytics Enhanced Ecommerce Tracking",miIntroLi4:"Universal Tracking for AMP and Instant Articles",miemInstallH:"Install &",miInstallH:this.$t.sprintf("Activate %1$s","MonsterInsights"),miInstallP:this.$t.sprintf("%1$s shows you exactly which content gets the most visits, so you can analyze and optimize it for higher conversions.","MonsterInsights"),emWizardH:this.$t.sprintf("Setup %1$s","ExactMetrics"),miWizardH:this.$t.sprintf("Setup %1$s","MonsterInsights"),emWizardP:this.$t.sprintf("%1$s has an intuitive setup wizard to guide you through the setup process.","ExactMetrics"),miWizardP:this.$t.sprintf("%1$s has an intuitive setup wizard to guide you through the setup process.","MonsterInsights")}}},computed:a(e({},u(["options","internalOptions"])),{gaActivated(){return this.$aioseo.plugins.miLite.activated||this.$aioseo.plugins.emLite.activated||this.$aioseo.plugins.miPro.activated||this.$aioseo.plugins.emPro.activated},gaInstalled(){return this.$aioseo.plugins.miLite.installed||this.$aioseo.plugins.emLite.installed||this.$aioseo.plugins.miPro.installed||this.$aioseo.plugins.emPro.installed},miOnboardingUrl(){return this.prefersEm?`${this.$aioseo.urls.home}/wp-admin/admin.php?page=exactmetrics-onboarding`:`${this.$aioseo.urls.home}/wp-admin/admin.php?page=monsterinsights-onboarding`},prefersEm(){return(this.$aioseo.plugins.emLite.installed||this.$aioseo.plugins.emPro.installed)&&!this.$aioseo.plugins.miLite.installed&&!this.$aioseo.plugins.miPro.installed}}),methods:a(e({},h(["installPlugins"])),{installMi(){this.installingPlugin=!0,this.installPlugins([{plugin:this.prefersEm?"emLite":"miLite",type:"plugin"}]).then(()=>{this.installingPlugin=!1,this.justInstalled=!0,this.$aioseo.plugins.miLite.activated=!0,window.aioseo.plugins.miLite.activated=!0}).catch(t=>{console.error(t)})}})},o={};var C=$(P,E,M,!1,b,null,null,null);function b(t){for(let i in o)this[i]=o[i]}var F=function(){return C.exports}();export{F as default};
