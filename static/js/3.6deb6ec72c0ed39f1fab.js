webpackJsonp([3],{450:function(e,t,n){function o(e){n(474)}var a=n(16)(n(461),n(486),o,"data-v-5b9c37b7",null);e.exports=a.exports},461:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{renderedMarkdown:""}},methods:{getReadme:function(){var e=this;this.$gitHubApi.getReadme(this).then(function(t){t.data&&(e.renderedMarkdown=e.$marked(t.data))})}},mounted:function(){var e=this;this.$nextTick(function(){e.getReadme()})}}},467:function(e,t,n){t=e.exports=n(448)(!0),t.push([e.i,".about-me[data-v-5b9c37b7]{padding:30px;overflow:scroll}","",{version:3,sources:["/Users/bingoogolapple/git/WebStorm/BGAIssueBlog/src/views/AboutMe.vue"],names:[],mappings:"AACA,2BACE,aAAc,AACd,eAAiB,CAClB",file:"AboutMe.vue",sourcesContent:["\n.about-me[data-v-5b9c37b7] {\n  padding: 30px;\n  overflow: scroll;\n}\n"],sourceRoot:""}])},474:function(e,t,n){var o=n(467);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(449)("7af00952",o,!0)},486:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about-me bga-back-top"},[n("article",{staticClass:"markdown-body",domProps:{innerHTML:e._s(e.renderedMarkdown)}})])},staticRenderFns:[]}}});
//# sourceMappingURL=3.6deb6ec72c0ed39f1fab.js.map