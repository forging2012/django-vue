webpackJsonp([1],{0:function(t,e){},ClbW:function(t,e){},E51W:function(t,e){},KwS6:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s=new i.default,o={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]},a=n("VU/8")(s,o,!1,null,null,null).exports,l={data:function(){return{menlist:{backgroud:""},menus:[{name:"机房信息",icon:"settings",key:"idc"},{name:"业务操作",icon:"settings",key:"ops"}],loading:!0}},mounted:function(){},created:function(){},methods:{forname:function(t){a.$emit("message",t)}},components:{}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("mu-list",[e("mu-list-item",{attrs:{title:"资产管理",toggleNested:""}},[e("mu-icon",{attrs:{slot:"left",value:"settings"},slot:"left"}),this._v(" "),this._l(this.menus,function(t){return e("mu-list-item",{key:t.key,attrs:{slot:"nested",title:t.name,to:"/Cmdb/"+t.key},slot:"nested"},[e("mu-icon",{attrs:{slot:"left",value:t.icon},slot:"left"})],1)})],2)],1)],1)},staticRenderFns:[]},c={data:function(){return{appBar:{marginLeft:"0",transition:"all 0.2s linear"},windowHeight:0,open:!0}},mounted:function(){this.setHeight(),window.addEventListener("resize",this.setHeight)},methods:{setHeight:function(){this.windowHeight=window.innerHeight+"px"},toggle:function(){this.open=!this.open,!0===this.open?this.appBar.marginLeft="0":this.appBar.marginLeft="-250px"}},components:{CmdbMenu:n("VU/8")(l,d,!1,null,null,null).exports}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex"},style:{height:t.windowHeight}},[n("div",{staticStyle:{width:"250px",height:"100%"},style:t.appBar},[n("mu-appbar",{staticStyle:{"background-color":"#dd4b39"}},[n("md-avatar",[n("img",{attrs:{src:"/static/lufei.jpg",alt:"People"}})]),t._v(" "),n("mu-flat-button",{attrs:{label:"li hao"}})],1),t._v(" "),n("CmdbMenu")],1),t._v(" "),n("div",{staticStyle:{flex:"1"}},[n("mu-appbar",{staticStyle:{"background-color":"#dd4b39"},attrs:{title:"测试平台"}},[n("mu-icon-button",{attrs:{slot:"left",icon:"menu"},on:{click:t.toggle},slot:"left"}),t._v(" "),n("mu-icon-button",{attrs:{slot:"right",icon:"more_vert"},slot:"right"})],1),t._v(" "),n("router-view",{staticStyle:{margin:"20px 20px 0px 0px"}})],1)])},staticRenderFns:[]},u={name:"App",data:function(){return{}},computed:{},created:function(){},components:{headbar:n("VU/8")(c,r,!1,function(t){n("KwS6")},null,null).exports},watch:{},methods:{}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("link",{attrs:{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons"}}),this._v(" "),e("headbar",{ref:"headbar"})],1)},staticRenderFns:[]},p=n("VU/8")(u,m,!1,null,null,null).exports,f=n("/ocq"),h=n("woOf"),v=n.n(h),g=n("mvHQ"),y=n.n(g),_=function(t){return t.toString().toLowerCase()},b={data:function(){return{showDialog:!1,showDialog1:!1,search:null,searched:[],selected:[],open:!1,trigger:null,deldialog:!1,defmenu:{name:"",ip:"",env:""},menus:[{name:"李浩",ip:"127.0.0.1",env:"prod"},{name:"李浩",ip:"192.168.1.1",env:"test"}]}},mounted:function(){this.loadidclist()},methods:{opendelete:function(){this.deldialog=!0},closedelete:function(){this.deldialog=!1},searchOnTable:function(t){this.searched=function(t,e){return e?t.filter(function(t){return _(y()(t)).includes(_(e))}):t}(this.menus,t)},onSelect:function(t){this.$emit("selectform",t),this.selected=t},getAlternateLabel:function(t){return"所需要删除项目 "+t.length+"个"},configmenu:function(t){v()(this.defmenu,t),this.showDialog1=!0},opendefmenu:function(){this.defmenu={name:"",ip:"",env:""},this.showDialog=!0},add:function(t){var e=this,n=JSON.parse(y()(t));this.$http.post("http://test.com/yunwei/api/AESSLIST/",n).then(function(t){0!=t.data.ok?(e.selected=[],e.searched.push(n),e.showDialog=!1):alert("创建 IDC 出错: "+t.data.message)})},watch:{defmenu:{deep:!0,handler:function(t){}}},remove:function(t){var e=this,n=t.map(function(t){return t});t.map(function(t){return e.$http.delete("http://test.com/yunwei/api/AESSLIST/"+t.id+"/").then(function(t){0!=t.data.ok&&(e.searched=e.searched.filter(function(t){return!n.includes(t)}),e.selected=[],e.deldialog=!1)})})},config:function(t){var e=this,n=JSON.parse(y()(t));this.$http.put("http://test.com/yunwei/api/AESSLIST/"+t.id+"/",n).then(function(i){0!=i.data.ok?(e.selected=[],e.searched=e.searched.filter(function(e){return![t.id].includes(e.id)}),e.searched.push(n),e.showDialog1=!1):alert("创建 IDC 出错: "+i.data.message)})},loadidclist:function(){var t=this;this.$http.get("http://test.com/yunwei/api/AESSLIST/").then(function(e){0!=e.data.ok&&(t.menus=e.data,t.searched=t.menus)})}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("md-table-card",[0===t.selected.length?n("md-toolbar",{staticStyle:{background:"#2196f3"}},[n("h1",{staticClass:"md-title",staticStyle:{color:"white"}},[t._v("机房信息")]),t._v(" "),n("md-button",{staticClass:"md-icon-button"},[n("md-icon",{nativeOn:{click:function(e){t.opendefmenu(e)}}},[t._v("add")])],1),t._v(" "),n("md-button",{staticClass:"md-icon-button"},[n("md-icon",[t._v("search")])],1),t._v(" "),0===t.selected.length?n("form",{attrs:{novalidate:""},on:{submit:function(e){e.stopPropagation(),e.preventDefault(),t.submit(e)}}},[n("md-input-container",{attrs:{"md-inline":""}},[n("md-input",{on:{input:t.searchOnTable},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1):t._e()],1):n("md-button",{staticClass:"md-primary md-raised",staticStyle:{background:"#dd4b39"},nativeOn:{click:function(e){t.opendelete(e)}}},[t._v(t._s(t.getAlternateLabel(t.selected)))]),t._v(" "),0===t.searched.length?n("div",{staticStyle:{"text-align":"center"}},[n("img",{staticStyle:{margin:"2em",height:"10em"},attrs:{src:"/static/nothing.jpg"}}),t._v(" "),n("div",{staticStyle:{padding:"1em",color:"#dd4b39"}},[n("md-icon",[t._v("info")]),t._v(" 没有东西")],1)]):n("md-table",{attrs:{"md-sort":"dessert","md-sort-type":"desc"},on:{select:t.onSelect}},[n("md-table-header",[n("md-table-row",[n("md-table-head",[t._v("主机名")]),t._v(" "),n("md-table-head",[t._v("IP")]),t._v(" "),n("md-table-head",[t._v("环境")]),t._v(" "),n("md-table-head",[t._v("操作")])],1)],1),t._v(" "),n("md-table-body",t._l(t.searched,function(e,i){return n("md-table-row",{key:i,attrs:{"md-item":e,"md-selection":""}},[n("md-table-cell",[t._v("\n                "+t._s(e.name)+"\n                ")]),t._v(" "),n("md-table-cell",[t._v("\n                "+t._s(e.ip)+"\n                ")]),t._v(" "),n("md-table-cell",[t._v("\n                "+t._s(e.env)+"\n                ")]),t._v(" "),n("md-table-cell",{on:{click:function(t){t.stopPropagation()}},nativeOn:{click:function(n){t.configmenu(e)}}},[n("md-button",{staticClass:"md-icon-button"},[n("md-icon",[t._v("edit")])],1)],1)],1)}))],1)],1),t._v(" "),n("md-dialog",{staticStyle:{width:"1000px",hegih:"800px"},attrs:{"md-active":t.showDialog},on:{"update:mdActive":function(e){t.showDialog=e}}},[n("p",[n("mu-dialog",{attrs:{open:t.showDialog,title:"添加服务器",scrollable:""},on:{close:function(e){t.showDialog=!1}}},[n("mu-menu",[n("mu-text-field",{staticStyle:{"font-size":"18px"},attrs:{label:"名称",fullWidth:""},model:{value:t.defmenu.name,callback:function(e){t.$set(t.defmenu,"name",e)},expression:"defmenu.name"}}),t._v(" "),n("mu-text-field",{staticStyle:{"font-size":"18px"},attrs:{label:"IP",fullWidth:""},model:{value:t.defmenu.ip,callback:function(e){t.$set(t.defmenu,"ip",e)},expression:"defmenu.ip"}}),t._v(" "),n("mu-text-field",{staticStyle:{"font-size":"18px"},attrs:{label:"环境",fullWidth:""},model:{value:t.defmenu.env,callback:function(e){t.$set(t.defmenu,"env",e)},expression:"defmenu.env"}})],1),t._v(" "),n("mu-flat-button",{attrs:{slot:"actions",secondary:"",label:"确定"},on:{click:function(e){t.add(t.defmenu)}},slot:"actions"}),t._v(" "),n("mu-flat-button",{attrs:{slot:"actions",label:"关闭"},on:{click:function(e){t.showDialog=!1}},slot:"actions"})],1)],1)]),t._v(" "),n("md-dialog",{staticStyle:{width:"1000px",hegih:"800px"},attrs:{"md-active":t.showDialog1},on:{"update:mdActive":function(e){t.showDialog1=e}}},[n("p",[n("mu-dialog",{attrs:{open:t.showDialog1,title:"添加服务器",scrollable:""},on:{close:function(e){t.showDialog1=!1}}},[n("mu-menu",[n("mu-text-field",{staticStyle:{"font-size":"18px"},attrs:{label:"名称",fullWidth:""},model:{value:t.defmenu.name,callback:function(e){t.$set(t.defmenu,"name",e)},expression:"defmenu.name"}}),t._v(" "),n("mu-text-field",{staticStyle:{"font-size":"18px"},attrs:{label:"IP",fullWidth:""},model:{value:t.defmenu.ip,callback:function(e){t.$set(t.defmenu,"ip",e)},expression:"defmenu.ip"}}),t._v(" "),n("mu-text-field",{staticStyle:{"font-size":"18px"},attrs:{label:"环境",fullWidth:""},model:{value:t.defmenu.env,callback:function(e){t.$set(t.defmenu,"env",e)},expression:"defmenu.env"}})],1),t._v(" "),n("mu-flat-button",{attrs:{slot:"actions",secondary:"",label:"确定"},on:{click:function(e){t.config(t.defmenu)}},slot:"actions"}),t._v(" "),n("mu-flat-button",{attrs:{slot:"actions",label:"关闭"},on:{click:function(e){t.showDialog1=!1}},slot:"actions"})],1)],1)]),t._v(" "),n("mu-dialog",{attrs:{open:t.deldialog,title:"确定删除"}},[n("mu-flat-button",{attrs:{slot:"actions",primary:"",label:"确定"},nativeOn:{click:function(e){t.remove(t.selected)}},slot:"actions"}),t._v(" "),n("mu-flat-button",{attrs:{slot:"actions",primary:"",label:"取消"},on:{click:t.closedelete},slot:"actions"})],1)],1)},staticRenderFns:[]},w=n("VU/8")(b,x,!1,function(t){n("ClbW")},null,null).exports,S={data:function(){return{selectip:null,output:"",deployLoading:!1,fristactive:!0,outstatus:{color:"gray",fontSize:"1.4em",des:"未执行",ops:"执行构建"},deploylist:{resource:"",user:"",args:"",rediskey:""}}},updated:function(){var t=document.getElementById("deploylog");t&&(t.scrollTop=t.scrollHeight)},methods:{openDialog:function(t){this.$refs.dialog1.open()},closefalseDialog:function(t){this.$refs.dialog1.close(),this.selectip=[]},closetrueDialog:function(t){this.$refs.dialog1.close()},getuser:function(t){this.selectip=t.map(function(t){return t.ip})},deploy:function(){var t=this;this.$http.get("http://test.com/yunwei/api/deploy",{params:{resource:this.deploylist.resource,user:this.deploylist.user,args:this.deploylist.args,serverlist:y()(this.selectip)}}).then(function(e){if(0!=e.data.ok){var n=t;0!=e.data.code?(t.fristactive=!1,t.outstatus.color="red",t.outstatus.des="执行错误",t.outstatus.ops="再次构建",n.output=e.data.msg):(t.fristactive=!1,t.outstatus.color="green",t.outstatus.des="执行结果",t.outstatus.ops="再次构建",t.deploylist.rediskey=e.data.data.rediskey,n.output=t.getdeployresoult())}})},getdeployresoult:function(t){var e=this;this.$http.get("http://test.com/yunwei/api/deployResoult",{params:{rediskey:this.deploylist.rediskey,resource:this.deploylist.resource}}).then(function(t){if(0!=t.data.ok){if(console.log(t.data),void 0===e.output&&(e.deployLoading=!0,e.output="\n"),/Deploy\ End/.test(t.data.msg))return void(e.deployLoading=!1);t.data.msg&&"null"!=t.data.msg&&(e.output=""+e.output+t.data.msg+"\n"),window.setTimeout(function(){e.getdeployresoult()},200)}})}},components:{idclist:w}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"phone-viewport"},[n("form",{staticStyle:{margin:"50px 50px 0px 0px"}},[n("mu-flexbox",[n("mu-flexbox-item",{attrs:{align:"center"}},[n("h2",[t._v("任务管理")])])],1),t._v(" "),n("md-whiteframe",{attrs:{"md-elevation":"1"}},[n("mu-flexbox",{staticStyle:{margin:"40px 40px 0px 0px"}},[n("mu-flexbox-item",[n("div",[n("table",{staticClass:"infoTable",staticStyle:{"text-align":"right",margin:"40px 40px 40px 40px",float:"left"}},[n("tbody",[n("tr",[n("th",[t._v("脚本来源:")]),t._v(" "),n("td",{staticStyle:{width:"300px"}},[n("md-input-container",[n("md-input",{model:{value:t.deploylist.resource,callback:function(e){t.$set(t.deploylist,"resource",e)},expression:"deploylist.resource"}})],1)],1)]),t._v(" "),n("tr",[n("th",[t._v("执行用户:")]),t._v(" "),n("td",[n("md-input-container",[n("md-input",{model:{value:t.deploylist.user,callback:function(e){t.$set(t.deploylist,"user",e)},expression:"deploylist.user"}})],1)],1)]),t._v(" "),n("tr",[n("th",[t._v("目标服务器:")]),t._v(" "),n("td",[n("div",{staticStyle:{float:"left"}},[n("div",[n("md-button",{staticClass:"md-primary md-raised",attrs:{id:"custom"},nativeOn:{click:function(e){t.openDialog("dialog1")}}},[t._v("选择服务器")])],1),t._v(" "),n("a",[t._v("(ansible无需选择服务器)")]),t._v(" "),n("div",{staticClass:"phone-viewport"},t._l(t.selectip,function(e,i){return n("md-list",{key:i},[n("md-list-item",[t._v(t._s(e))])],1)}))])])]),t._v(" "),n("tr",[n("th",[t._v("脚本参数:")]),t._v(" "),n("td",[n("md-input-container",[n("md-textarea",{model:{value:t.deploylist.args,callback:function(e){t.$set(t.deploylist,"args",e)},expression:"deploylist.args"}})],1)],1)])])])]),t._v(" "),n("div",[n("md-whiteframe",{staticStyle:{float:"right",margin:"40px 200px 100px 0px",width:"600px",height:"300px"},attrs:{"md-elevation":"1"}},[n("md-whiteframe",{attrs:{"md-elevation":"1"}},[n("mu-linear-progress",{directives:[{name:"show",rawName:"v-show",value:t.deployLoading,expression:"deployLoading"}],attrs:{size:5,color:"red"}}),t._v(" "),n("md-card-actions",{staticStyle:{"justify-content":"flex-start"}},[n("md-button",{staticClass:"md-dense",staticStyle:{padding:".2em .6em"}},[n("md-icon",{style:t.outstatus},[t._v("error")]),t._v("\n                                  "+t._s(t.outstatus.des)+"\n                              ")],1)],1),t._v(" "),n("md-card-content",{staticStyle:{padding:".5em",height:"20em","overflow-y":"auto",background:"#333",color:"#FFF"},attrs:{id:"deploylog"}},[n("md-tooltip",[t._v("点击放大日志")]),t._v(" "),t.fristactive?n("pre",[t._v("\n\n\n          此程序为测试平台，仅支持: ansible / bash / python\n          由于测试原因，请连接服务器打通ssh\n          默认所有脚本都会放置在目标地址/tmp目录下进行远程执行\n          bash / python 并发会导致数据返回结果混乱，建议使用 ansible\n                              ")]):n("pre",[t._v("  "+t._s(t.output)+"  \n                              ")])],1),t._v(" "),n("md-card-actions",{staticStyle:{"justify-content":"flex-start"}},[n("md-button",{staticClass:"md-dense",staticStyle:{padding:".2em .6em"},nativeOn:{click:function(e){t.deploy()}}},[n("md-icon",{staticStyle:{"font-size":"1.4em"}},[t._v("build")]),t._v("\n                                  "+t._s(t.outstatus.ops)+"\n                              ")],1)],1)],1)],1)],1)])],1)],1)],1),t._v(" "),n("md-dialog",{ref:"dialog1",attrs:{"md-open-from":"#custom","md-close-to":"#custom"}},[n("md-dialog-content",[n("idclist",{ref:"idclist",on:{selectform:t.getuser}})],1),t._v(" "),n("md-dialog-actions",[n("md-button",{staticClass:"md-primary",nativeOn:{click:function(e){t.closetrueDialog("dialog1")}}},[t._v("确认")])],1)],1)],1)},staticRenderFns:[]},$={data:function(){return{assetListType:{idc:"idclist",ops:"opslist"},loading:!0}},mounted:function(){},created:function(){},methods:{},components:{idclist:w,opslist:n("VU/8")(S,k,!1,function(t){n("nZIB")},null,null).exports}},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e(this.assetListType[this.$route.params.assetType],{tag:"component"})],1)},staticRenderFns:[]},E=n("VU/8")($,D,!1,null,null,null).exports;i.default.use(f.a);var C=new f.a({mode:"history",routes:[{path:"/Cmdb/:assetType",component:E}]}),L=n("u64Q"),O=n.n(L),T=(n("E51W"),n("Lgyv")),I=n.n(T),R=n("8+8L");n("tzNG");i.default.use(O.a),i.default.use(R.a),i.default.use(I.a),i.default.config.productionTip=!1,window.NOTIFY_SERVER=Object({NODE_ENV:"production"}).NOTIFY_SERVER,i.default.material.registerTheme("default",{primary:"blue",accent:"red",warn:"red",background:"white"}),new i.default({el:"#app",router:C,template:"<App/>",components:{App:p}})},nZIB:function(t,e){},tzNG:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0dc2790dfe5dc575e3bf.js.map