"use strict";(self["webpackChunkmy_sute2"]=self["webpackChunkmy_sute2"]||[]).push([[962],{768:function(t,e,a){a.r(e),a.d(e,{default:function(){return h}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],ref:"projectContainer",staticClass:"project-container"},t._l(t.data,(function(e,r){return a("div",{key:r,staticClass:"project-item"},[a("a",{attrs:{href:e.url?e.url:"javascript:alert('该项目无法通过外网访问')",target:e.url?"_blank":"_self"}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.thumb,expression:"item.thumb"}],staticClass:"thumb"})]),a("div",{staticClass:"info"},[a("h2",[a("a",{attrs:{href:e.url?e.url:"javascript:alert('该项目无法通过外网访问')",target:e.url?"_blank":"_self"}},[t._v(" "+t._s(e.name)+" ")])]),e.github?a("a",{staticClass:"github",attrs:{target:"_blank",href:e.github}},[t._v(" github ")]):t._e(),t._l(e.description,(function(e,r){return a("p",{key:r},[t._v(" "+t._s(e)+" ")])}))],2)])})),0)},i=[],s=a(294),n=a(79),l={mixins:[(0,n.Z)("projectContainer")],computed:(0,s.mapState)("project",["isLoading","data"]),mounted(){this.$store.dispatch("project/fetchProject")}},o=l,c=a(1),u=(0,c.Z)(o,r,i,!1,null,"5ef82a98",null),h=u.exports},79:function(t,e,a){function r(t){return{mounted(){this.$bus.$on("setMainScroll",this.handleSetMainScroll),this.$refs[t].addEventListener("scroll",this.handleMainScroll)},beforeDestroy(){this.$bus.$emit("mainScroll"),this.$bus.$off("setMainScroll",this.handleSetMainScroll),this.$refs[t].removeEventListener("scroll",this.handleMainScroll)},methods:{handleSetMainScroll(e){this.$refs[t].scrollTop=e},handleMainScroll(){this.$bus.$emit("mainScroll",this.$refs[t])}}}}a.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=Project.b2d7e13c.js.map