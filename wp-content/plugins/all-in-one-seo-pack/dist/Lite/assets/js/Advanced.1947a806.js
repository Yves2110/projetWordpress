var c=Object.defineProperty;var n=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var o=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,r=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&o(e,a,t[a]);if(n)for(var a of n(t))d.call(t,a)&&o(e,a,t[a]);return e};import{a as p}from"./index.8900b7f9.js";import{B as u}from"./Checkbox.5873a8d2.js";import{B as g}from"./RadioToggle.98e1e7ec.js";import{B as m}from"./Textarea.d161fc2e.js";import{C as v}from"./Index.476ddbfd.js";import{C as f}from"./Card.f0350b06.js";import{C as h}from"./ExcludePosts.5404a73d.js";import{C as y}from"./HtmlTagsEditor.e47641de.js";import{C as _}from"./PostTypeOptions.03448be9.js";import{C as b}from"./RobotsMeta.2bc11dc9.js";import{C as A}from"./SettingsRow.eb71f07b.js";import{C}from"./Tooltip.3ec20ff5.js";import{S as w}from"./QuestionMark.83ebd18e.js";import{S}from"./External.8868c638.js";import{n as k}from"./vueComponentNormalizer.87056a83.js";import"./default-i18n.abde8d59.js";import"./isArrayLikeObject.a4a9229a.js";import"./Checkmark.e7547654.js";import"./index.652636d3.js";import"./client.94d919c5.js";import"./_commonjsHelpers.f40d732e.js";import"./constants.7cd698f2.js";import"./Slide.f5d21606.js";import"./ToolsSettings.a9d9524e.js";import"./context.04ada340.js";import"./JsonValues.08065e69.js";import"./AddPlus.f69ce757.js";import"./Editor.ff0e9ee9.js";import"./UnfilteredHtml.333a73bf.js";import"./HighlightToggle.47bdd2a8.js";import"./Radio.99a9886d.js";import"./Row.13b6f3f1.js";var F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"aioseo-search-appearance-advanced"},[a("core-card",{attrs:{slug:"searchAdvanced","header-text":e.strings.advanced}},[a("core-settings-row",{attrs:{name:e.strings.globalRobotsMeta},scopedSlots:e._u([{key:"content",fn:function(){return[a("core-robots-meta",{attrs:{options:e.options.searchAppearance.advanced.globalRobotsMeta,global:""}})]},proxy:!0}])}),a("core-settings-row",{attrs:{name:e.strings.sitelinks,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-radio-toggle",{attrs:{name:e.strings.sitelinks,options:[{label:e.$constants.GLOBAL_STRINGS.off,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.on,value:!0}]},model:{value:e.options.searchAppearance.advanced.sitelinks,callback:function(s){e.$set(e.options.searchAppearance.advanced,"sitelinks",s)},expression:"options.searchAppearance.advanced.sitelinks"}}),a("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.sitelinksDescription)+" ")])]},proxy:!0}])}),e.internalOptions.internal.deprecatedOptions.includes("autogenerateDescriptions")?a("core-settings-row",{attrs:{name:e.strings.autogenerateDescriptions,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-radio-toggle",{attrs:{name:"autogenerateDescriptions",options:[{label:e.$constants.GLOBAL_STRINGS.off,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.on,value:!0}]},model:{value:e.options.deprecated.searchAppearance.advanced.autogenerateDescriptions,callback:function(s){e.$set(e.options.deprecated.searchAppearance.advanced,"autogenerateDescriptions",s)},expression:"options.deprecated.searchAppearance.advanced.autogenerateDescriptions"}})]},proxy:!0}],null,!1,3425659337)}):e._e(),e.internalOptions.internal.deprecatedOptions.includes("useContentForAutogeneratedDescriptions")&&(!e.internalOptions.internal.deprecatedOptions.includes("autogenerateDescriptions")||e.options.deprecated.searchAppearance.advanced.autogenerateDescriptions)?a("core-settings-row",{attrs:{name:e.strings.useContentForAutogeneratedDescriptions,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-radio-toggle",{attrs:{name:"useContentForAutogeneratedDescriptions",options:[{label:e.$constants.GLOBAL_STRINGS.off,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.on,value:!0}]},model:{value:e.options.deprecated.searchAppearance.advanced.useContentForAutogeneratedDescriptions,callback:function(s){e.$set(e.options.deprecated.searchAppearance.advanced,"useContentForAutogeneratedDescriptions",s)},expression:"options.deprecated.searchAppearance.advanced.useContentForAutogeneratedDescriptions"}})]},proxy:!0}],null,!1,1103360809)}):e._e(),a("core-settings-row",{attrs:{name:e.strings.noPaginationForCanonical,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-radio-toggle",{attrs:{name:"noPaginationForCanonical",options:[{label:e.$constants.GLOBAL_STRINGS.off,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.on,value:!0}]},model:{value:e.options.searchAppearance.advanced.noPaginationForCanonical,callback:function(s){e.$set(e.options.searchAppearance.advanced,"noPaginationForCanonical",s)},expression:"options.searchAppearance.advanced.noPaginationForCanonical"}})]},proxy:!0}])}),a("core-settings-row",{attrs:{name:e.strings.useKeywords,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-radio-toggle",{attrs:{name:"useKeywords",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},model:{value:e.options.searchAppearance.advanced.useKeywords,callback:function(s){e.$set(e.options.searchAppearance.advanced,"useKeywords",s)},expression:"options.searchAppearance.advanced.useKeywords"}}),a("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.useKeywordsDescription)+" ")])]},proxy:!0}])}),e.options.searchAppearance.advanced.useKeywords?a("core-settings-row",{attrs:{name:e.strings.useCategoriesForMetaKeywords,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-radio-toggle",{attrs:{name:"useCategoriesForMetaKeywords",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},model:{value:e.options.searchAppearance.advanced.useCategoriesForMetaKeywords,callback:function(s){e.$set(e.options.searchAppearance.advanced,"useCategoriesForMetaKeywords",s)},expression:"options.searchAppearance.advanced.useCategoriesForMetaKeywords"}}),a("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.useCategoriesDescription)+" ")])]},proxy:!0}],null,!1,1182210491)}):e._e(),e.options.searchAppearance.advanced.useKeywords?a("core-settings-row",{attrs:{name:e.strings.useTagsForMetaKeywords,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-radio-toggle",{attrs:{name:"useTagsForMetaKeywords",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},model:{value:e.options.searchAppearance.advanced.useTagsForMetaKeywords,callback:function(s){e.$set(e.options.searchAppearance.advanced,"useTagsForMetaKeywords",s)},expression:"options.searchAppearance.advanced.useTagsForMetaKeywords"}}),a("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.useTagsDescription)+" ")])]},proxy:!0}],null,!1,980507244)}):e._e(),e.options.searchAppearance.advanced.useKeywords?a("core-settings-row",{attrs:{name:e.strings.dynamicallyGenerateKeywords,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-radio-toggle",{attrs:{name:"dynamicallyGenerateKeywords",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},model:{value:e.options.searchAppearance.advanced.dynamicallyGenerateKeywords,callback:function(s){e.$set(e.options.searchAppearance.advanced,"dynamicallyGenerateKeywords",s)},expression:"options.searchAppearance.advanced.dynamicallyGenerateKeywords"}}),a("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.dynamicallyGenerateDescription)+" ")])]},proxy:!0}],null,!1,3269411336)}):e._e(),e.internalOptions.internal.deprecatedOptions.includes("descriptionFormat")?a("core-settings-row",{attrs:{id:"description-format",name:e.strings.descriptionFormat,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[a("core-html-tags-editor",{staticClass:"description-format",attrs:{"line-numbers":!1,single:"","show-tags-description":!1,"tags-context":"descriptionFormat","default-tags":["description","site_title","tagline"],"show-all-tags-link":!0},scopedSlots:e._u([{key:"tags-description",fn:function(){return[e._v(" "+e._s(e.emptyString)+" ")]},proxy:!0}],null,!1,115256282),model:{value:e.options.deprecated.searchAppearance.global.descriptionFormat,callback:function(s){e.$set(e.options.deprecated.searchAppearance.global,"descriptionFormat",s)},expression:"options.deprecated.searchAppearance.global.descriptionFormat"}}),e.options.deprecated.searchAppearance.global.descriptionFormat.includes("#description")?e._e():a("core-alert",{staticClass:"description-notice",attrs:{type:"red"}},[e._v(" "+e._s(e.strings.descriptionTagRequired)+" ")])]},proxy:!0}],null,!1,3789774672)}):e._e(),a("core-settings-row",{attrs:{name:e.strings.runShortcodes,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-radio-toggle",{attrs:{name:"runShortcodes",options:[{label:e.$constants.GLOBAL_STRINGS.off,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.on,value:!0}]},model:{value:e.options.searchAppearance.advanced.runShortcodes,callback:function(s){e.$set(e.options.searchAppearance.advanced,"runShortcodes",s)},expression:"options.searchAppearance.advanced.runShortcodes"}}),e.options.searchAppearance.advanced.runShortcodes?a("core-alert",{staticClass:"run-shortcodes-alert",attrs:{type:"yellow"},domProps:{innerHTML:e._s(e.strings.runShortcodesWarning)}}):e._e(),a("div",{staticClass:"aioseo-description",domProps:{innerHTML:e._s(e.strings.runShortcodesDescription)}})]},proxy:!0}])}),a("core-settings-row",{attrs:{name:e.strings.pagedFormat,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[a("core-html-tags-editor",{staticClass:"paged-format",attrs:{"line-numbers":!1,single:"","tags-context":"pagedFormat","default-tags":["page_number"],"show-all-tags-link":!1},scopedSlots:e._u([{key:"tags-description",fn:function(){return[e._v(" "+e._s(e.emptyString)+" ")]},proxy:!0}]),model:{value:e.options.searchAppearance.advanced.pagedFormat,callback:function(s){e.$set(e.options.searchAppearance.advanced,"pagedFormat",s)},expression:"options.searchAppearance.advanced.pagedFormat"}}),a("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.pagedFormatDescription)+" ")])]},proxy:!0}])}),e.internalOptions.internal.deprecatedOptions.includes("excludePosts")?a("core-settings-row",{staticClass:"aioseo-exclude-pages-posts",attrs:{name:e.strings.excludePostsPages,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[a("core-exclude-posts",{attrs:{options:e.options.deprecated.searchAppearance.advanced,type:"posts"}})]},proxy:!0}],null,!1,4134150415)}):e._e(),e.internalOptions.internal.deprecatedOptions.includes("excludeTerms")?a("core-settings-row",{staticClass:"aioseo-exclude-terms",attrs:{name:e.strings.excludeTerms,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[a("core-exclude-posts",{attrs:{options:e.options.deprecated.searchAppearance.advanced,type:"terms"}})]},proxy:!0}],null,!1,1691116537)}):e._e()],1),a("core-card",{staticClass:"aioseo-rss-content-advanced",attrs:{slug:"searchAdvancedCrawlCleanup",toggles:e.options.searchAppearance.advanced.crawlCleanup.enable},scopedSlots:e._u([{key:"header",fn:function(){return[a("base-toggle",{model:{value:e.options.searchAppearance.advanced.crawlCleanup.enable,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup,"enable",s)},expression:"options.searchAppearance.advanced.crawlCleanup.enable"}}),e._v(" "+e._s(e.strings.crawlCleanup)+" "),e.options.searchAppearance.advanced.crawlCleanup.enable?e._e():a("core-tooltip",{scopedSlots:e._u([{key:"tooltip",fn:function(){return[e._v(" "+e._s(e.strings.crawlCleanupDescription)+" "),a("span",{domProps:{innerHTML:e._s(e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"crawlCleanup",!0))}})]},proxy:!0}],null,!1,3235161590)},[a("svg-circle-question-mark")],1)]},proxy:!0}])},[a("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[e._v(" "+e._s(e.strings.crawlCleanupDescription)+" "),a("span",{domProps:{innerHTML:e._s(e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"crawlCleanup",!0))}})]),a("core-settings-row",{attrs:{name:e.strings.removeUnrecognizedQueryArgs,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-radio-toggle",{attrs:{name:"removeUnrecognizedQueryArgs",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},model:{value:e.options.searchAppearance.advanced.crawlCleanup.removeUnrecognizedQueryArgs,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup,"removeUnrecognizedQueryArgs",s)},expression:"options.searchAppearance.advanced.crawlCleanup.removeUnrecognizedQueryArgs"}}),e.options.searchAppearance.advanced.crawlCleanup.removeUnrecognizedQueryArgs?e._e():a("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.removeUnrecognizedQueryArgsDescription)+" "+e._s(e.strings.removeUnrecognizedQueryArgsAlert)+" ")]),e.options.searchAppearance.advanced.crawlCleanup.removeUnrecognizedQueryArgs?a("core-alert",{attrs:{type:"yellow"}},[e._v(" "+e._s(e.strings.removeUnrecognizedQueryArgsAlert)+" ")]):e._e()]},proxy:!0}])}),e.options.searchAppearance.advanced.crawlCleanup.removeUnrecognizedQueryArgs?a("core-settings-row",{attrs:{name:e.strings.allowedQueryArgs},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-textarea",{attrs:{minHeight:200,maxHeight:200},model:{value:e.options.searchAppearance.advanced.crawlCleanup.allowedQueryArgs,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup,"allowedQueryArgs",s)},expression:"options.searchAppearance.advanced.crawlCleanup.allowedQueryArgs"}}),a("div",{staticClass:"aioseo-description",domProps:{innerHTML:e._s(e.strings.allowedQueryArgsDescription)}})]},proxy:!0}],null,!1,4112819009)}):e._e(),a("core-settings-row",{attrs:{id:"crawl-content-global-feed",name:e.strings.globalFeed,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-radio-toggle",{attrs:{name:"global",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:e.options.searchAppearance.advanced.crawlCleanup.feeds.global,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup.feeds,"global",s)},expression:"options.searchAppearance.advanced.crawlCleanup.feeds.global"}}),e.options.searchAppearance.advanced.crawlCleanup.feeds.global?a("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.globalFeedDescription)+" "+e._s(e.strings.disableGlobalFeedAlert)+" "),a("div",{staticClass:"rss-link"},[a("a",{attrs:{href:e.$aioseo.urls.feeds.global,target:"_blank"}},[e._v(e._s(e.strings.openYourRssFeed))]),a("a",{staticClass:"no-underline",attrs:{href:e.$aioseo.urls.feeds.global,target:"_blank"}},[e._v("\xA0"),a("svg-external")],1)])]):e._e(),e.options.searchAppearance.advanced.crawlCleanup.feeds.global?e._e():a("core-alert",{attrs:{type:"red"}},[e._v(" "+e._s(e.strings.disableGlobalFeedAlert)+" ")])]},proxy:!0}])}),a("core-settings-row",{attrs:{name:e.strings.globalCommentsFeed,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-radio-toggle",{attrs:{name:"globalComments",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:e.options.searchAppearance.advanced.crawlCleanup.feeds.globalComments,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup.feeds,"globalComments",s)},expression:"options.searchAppearance.advanced.crawlCleanup.feeds.globalComments"}}),a("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.globalCommentsFeedDescription)+" ")]),e.options.searchAppearance.advanced.crawlCleanup.feeds.globalComments?a("div",{staticClass:"aioseo-description"},[a("a",{attrs:{href:e.$aioseo.urls.feeds.globalComments,target:"_blank"}},[e._v(e._s(e.strings.openYourCommentsRssFeed))]),a("a",{staticClass:"no-underline",attrs:{href:e.$aioseo.urls.feeds.globalComments,target:"_blank"}},[e._v("\xA0"),a("svg-external")],1)]):e._e()]},proxy:!0}])}),e.$aioseo.data.staticBlogPage?a("core-settings-row",{attrs:{name:e.strings.staticBlogPageFeed,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-radio-toggle",{attrs:{name:"staticBlogPage",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:e.options.searchAppearance.advanced.crawlCleanup.feeds.staticBlogPage,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup.feeds,"staticBlogPage",s)},expression:"options.searchAppearance.advanced.crawlCleanup.feeds.staticBlogPage"}}),a("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.staticBlogPageFeedDescription)+" ")]),e.options.searchAppearance.advanced.crawlCleanup.feeds.staticBlogPage?a("div",{staticClass:"aioseo-description"},[a("a",{attrs:{href:e.$aioseo.urls.feeds.staticBlogPage,target:"_blank"}},[e._v(e._s(e.strings.openYourStaticBlogPageFeed))]),a("a",{staticClass:"no-underline",attrs:{href:e.$aioseo.urls.feeds.staticBlogPage,target:"_blank"}},[e._v("\xA0"),a("svg-external")],1)]):e._e()]},proxy:!0}],null,!1,2073575804)}):e._e(),a("core-settings-row",{attrs:{name:e.strings.authorsFeed,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-radio-toggle",{attrs:{name:"authors",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:e.options.searchAppearance.advanced.crawlCleanup.feeds.authors,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup.feeds,"authors",s)},expression:"options.searchAppearance.advanced.crawlCleanup.feeds.authors"}}),a("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.authorsFeedDescription)+" ")])]},proxy:!0}])}),a("core-settings-row",{attrs:{name:e.strings.postCommentsFeed,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-radio-toggle",{attrs:{name:"postComments",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:e.options.searchAppearance.advanced.crawlCleanup.feeds.postComments,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup.feeds,"postComments",s)},expression:"options.searchAppearance.advanced.crawlCleanup.feeds.postComments"}}),a("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.postCommentsFeedDescription)+" ")])]},proxy:!0}])}),a("core-settings-row",{attrs:{name:e.strings.searchFeed,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-radio-toggle",{attrs:{name:"search",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:e.options.searchAppearance.advanced.crawlCleanup.feeds.search,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup.feeds,"search",s)},expression:"options.searchAppearance.advanced.crawlCleanup.feeds.search"}}),a("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.searchFeedDescription)+" ")])]},proxy:!0}])}),a("core-settings-row",{attrs:{name:e.strings.attachmentsFeed,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-radio-toggle",{attrs:{name:"attachments",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:e.options.searchAppearance.advanced.crawlCleanup.feeds.attachments,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup.feeds,"attachments",s)},expression:"options.searchAppearance.advanced.crawlCleanup.feeds.attachments"}}),a("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.attachmentsFeedDescription)+" ")])]},proxy:!0}])}),a("core-settings-row",{attrs:{name:e.strings.paginatedFeed,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-radio-toggle",{attrs:{name:"paginated",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:e.options.searchAppearance.advanced.crawlCleanup.feeds.paginated,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup.feeds,"paginated",s)},expression:"options.searchAppearance.advanced.crawlCleanup.feeds.paginated"}}),a("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.paginatedFeedDescription)+" ")])]},proxy:!0}])}),e.$aioseo.postData.archives.length?a("core-settings-row",{attrs:{name:e.strings.postTypesFeed},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-checkbox",{attrs:{size:"medium"},model:{value:e.options.searchAppearance.advanced.crawlCleanup.feeds.archives.all,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup.feeds.archives,"all",s)},expression:"options.searchAppearance.advanced.crawlCleanup.feeds.archives.all"}},[e._v(" "+e._s(e.strings.includeAllPostTypes)+" ")]),e.options.searchAppearance.advanced.crawlCleanup.feeds.archives.all?e._e():a("core-post-type-options",{attrs:{options:e.options.searchAppearance.advanced.crawlCleanup.feeds,type:"archives"}}),a("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.selectPostTypes)+" ")])]},proxy:!0}],null,!1,1023774212)}):e._e(),a("core-settings-row",{attrs:{name:e.strings.taxonomiesFeed},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-checkbox",{attrs:{size:"medium"},model:{value:e.options.searchAppearance.advanced.crawlCleanup.feeds.taxonomies.all,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup.feeds.taxonomies,"all",s)},expression:"options.searchAppearance.advanced.crawlCleanup.feeds.taxonomies.all"}},[e._v(" "+e._s(e.strings.includeAllTaxonomies)+" ")]),e.options.searchAppearance.advanced.crawlCleanup.feeds.taxonomies.all?e._e():a("core-post-type-options",{attrs:{options:e.options.searchAppearance.advanced.crawlCleanup.feeds,type:"taxonomies"}}),a("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.selectTaxonomies)+" ")])]},proxy:!0}])}),a("core-settings-row",{attrs:{name:e.strings.atomFeed,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-radio-toggle",{attrs:{name:"atom",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:e.options.searchAppearance.advanced.crawlCleanup.feeds.atom,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup.feeds,"atom",s)},expression:"options.searchAppearance.advanced.crawlCleanup.feeds.atom"}}),a("div",{staticClass:"aioseo-description",domProps:{innerHTML:e._s(e.strings.atomFeedDescription)}}),e.options.searchAppearance.advanced.crawlCleanup.feeds.atom?a("div",{staticClass:"aioseo-description"},[a("a",{attrs:{href:e.$aioseo.urls.feeds.atom,target:"_blank"}},[e._v(e._s(e.strings.openYourAtomFeed))]),a("a",{staticClass:"no-underline",attrs:{href:e.$aioseo.urls.feeds.atom,target:"_blank"}},[e._v("\xA0"),a("svg-external")],1)]):e._e()]},proxy:!0}])}),a("core-settings-row",{attrs:{name:e.strings.rdfFeed,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-radio-toggle",{attrs:{name:"rdf",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:e.options.searchAppearance.advanced.crawlCleanup.feeds.rdf,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup.feeds,"rdf",s)},expression:"options.searchAppearance.advanced.crawlCleanup.feeds.rdf"}}),a("div",{staticClass:"aioseo-description",domProps:{innerHTML:e._s(e.strings.rdfFeedDescription)}}),e.options.searchAppearance.advanced.crawlCleanup.feeds.rdf?a("div",{staticClass:"aioseo-description"},[a("a",{attrs:{href:e.$aioseo.urls.feeds.rdf,target:"_blank"}},[e._v(e._s(e.strings.openYourRdfFeed))]),a("a",{staticClass:"no-underline",attrs:{href:e.$aioseo.urls.feeds.rdf,target:"_blank"}},[e._v("\xA0"),a("svg-external")],1)]):e._e()]},proxy:!0}])})],1)],1)},x=[];const L={components:{BaseCheckbox:u,BaseRadioToggle:g,BaseTextarea:m,CoreAlert:v,CoreCard:f,CoreExcludePosts:h,CoreHtmlTagsEditor:y,CorePostTypeOptions:_,CoreRobotsMeta:b,CoreSettingsRow:A,CoreTooltip:C,SvgCircleQuestionMark:w,SvgExternal:S},data(){return{emptyString:"",strings:{advanced:"Advanced Settings",globalRobotsMeta:"Global Robots Meta",noIndexEmptyCat:"Noindex Empty Category and Tag Archives",removeStopWords:"Remove Stopwords from Permalinks",autogenerateDescriptions:"Autogenerate Descriptions",useContentForAutogeneratedDescriptions:"Use Content for Autogenerated Descriptions",runShortcodes:"Run Shortcodes",runShortcodesDescription:this.$t.sprintf("This option allows you to control whether %1$s should parse shortcodes when generating data such as the SEO title/meta description. Enabling this setting may cause conflicts with third-party plugins/themes. %2$s","AIOSEO",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"runningShortcodes",!0)),runShortcodesWarning:this.$t.sprintf("NOTE: Enabling this setting may cause conflicts with third-party plugins/themes. %1$s",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"runningShortcodes",!0)),noPaginationForCanonical:"No Pagination for Canonical URLs",useKeywords:"Use Meta Keywords",useKeywordsDescription:"This option allows you to toggle the use of Meta Keywords throughout the whole of the site.",useCategoriesForMetaKeywords:"Use Categories for Meta Keywords",useCategoriesDescription:"Check this if you want your categories for a given post used as the Meta Keywords for this post (in addition to any keywords you specify on the Edit Post screen).",useTagsForMetaKeywords:"Use Tags for Meta Keywords",removeUnrecognizedQueryArgs:"Remove Query Args",removeUnrecognizedQueryArgsDescription:"Enable this option to remove any unrecognized query args from your site.",removeUnrecognizedQueryArgsAlert:"This will help prevent search engines from crawling every variation of your pages with all the unrecognized query arguments. Only enable this if you understand exactly what it does as it can have a significant impact on your site.",allowedQueryArgs:"Allowed Query Args",allowedQueryArgsDescription:this.$t.sprintf('Add any query args that you want to allow, one per line. You can also use regular expressions here for advanced use. All query args that are used by WordPress Core (e.g. "s" for search pages) are automatically whitelisted by default. %1$s',this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"crawlCleanup",!0)),useTagsDescription:"Check this if you want your tags for a given post used as the Meta Keywords for this post (in addition to any keywords you specify on the Edit Post screen).",dynamicallyGenerateKeywords:"Dynamically Generate Meta Keywords",dynamicallyGenerateDescription:"Check this if you want your keywords on your Posts page (set in WordPress under Settings, Reading, Front Page Displays) and your archive pages to be dynamically generated from the keywords of the posts showing on that page. If unchecked, it will use the keywords set in the edit page screen for the posts page.",pagedFormat:"Paged Format",pagedFormatDescription:"This string gets appended to the titles and descriptions of paginated pages (like term or archive pages).",descriptionFormat:"Description Format",excludePostsPages:"Exclude Posts / Pages",excludeTerms:"Exclude Terms",sitelinks:"Enable Sitelinks Search Box",sitelinksDescription:this.$t.sprintf("Choose whether %1$s should output the required schema markup that Google needs to generate a sitelinks search box.","AIOSEO"),descriptionTagRequired:"A Description tag is required in order to properly display your meta descriptions on your site.",crawlCleanup:"Crawl Cleanup",crawlCleanupDescription:"Removing unrecognized query arguments from URLs and disabling unnecessary RSS feeds can help save search engine crawl quota and speed up content indexing for larger sites. If you choose to disable any feeds, those feed links will automatically redirect to your homepage or applicable archive page.",globalFeed:"Global RSS Feed",globalFeedDescription:"The global RSS feed is how users subscribe to any new content that has been created on your site.",openYourRssFeed:"Open Your RSS Feed",disableGlobalFeedAlert:"Disabling the global RSS feed is NOT recommended. This will prevent users from subscribing to your content and can hurt your SEO rankings.",globalCommentsFeed:"Global Comments RSS Feed",globalCommentsFeedDescription:"The global comments feed allows users to subscribe to any new comments added to your site.",openYourCommentsRssFeed:"Open Your Comments RSS Feed",staticBlogPageFeed:"Static Posts Page Feed",staticBlogPageFeedDescription:"The static posts page feed allows users to subscribe to any new content added to your blog page.",openYourStaticBlogPageFeed:"Open Your Static Posts Page RSS Feed",authorsFeed:"Author Feeds",authorsFeedDescription:"The authors feed allows your users to subscribe to any new content written by a specific author.",postCommentsFeed:"Post Comment Feeds",postCommentsFeedDescription:"The post comments feed allows your users to subscribe to any new comments on a specific page or post.",searchFeed:"Search Feed",searchFeedDescription:"The search feed description allows visitors to subscribe to your content based on a specific search term.",attachmentsFeed:"Attachments Feed",attachmentsFeedDescription:"The attachments feed allows users to subscribe to any changes to your site made to media file categories.",postTypesFeed:"Post Type Archive Feeds",includeAllPostTypes:"Include All Post Type Archives",selectPostTypes:"Select which post type archives should include an RSS feed. This only applies to post types that include an archive page.",taxonomiesFeed:"Taxonomy Feeds",includeAllTaxonomies:"Include All Taxonomies",selectTaxonomies:"Select which Taxonomies should include an RSS feed.",atomFeed:"Atom Feed",atomFeedDescription:this.$t.sprintf("This is a global feed of your site output in the Atom format. %1$s",this.$links.getPlainLink(this.$constants.GLOBAL_STRINGS.learnMore,"http://www.atomenabled.org/",!0)),openYourAtomFeed:"Open Your Atom Feed",rdfFeed:"RDF/RSS 1.0 Feed",rdfFeedDescription:this.$t.sprintf("This is a global feed of your site output in the RDF/RSS 1.0 format. %1$s",this.$links.getPlainLink(this.$constants.GLOBAL_STRINGS.learnMore,"https://web.resource.org/rss/1.0/",!0)),openYourRdfFeed:"Open Your RDF Feed",paginatedFeed:"Paginated RSS Feeds",paginatedFeedDescription:"The paginated RSS feeds are for any posts or pages that are paginated."}}},computed:r({},p(["options","internalOptions"]))},i={};var G=k(L,F,x,!1,T,null,null,null);function T(e){for(let t in i)this[t]=i[t]}var de=function(){return G.exports}();export{de as default};
