webpackJsonp([1],{"1L7i":function(t,e){},"4oKc":function(t,e){},"8Rgr":function(t,e){},BvFt:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});o("Jmt5"),o("7t+N"),o("K3J8"),o("MU8w");var a=o("7+uW"),n=o("Gu7T"),s=o.n(n),i=o("NYxO"),r=o("mtWM"),c=o.n(r),l=new a.default,u={name:"HeaderComponent",data:function(){return{activeClass:"active",hover:!1,categories:this.$store.getters.getCategories}},methods:{routeToCat:function(t){"Catalogue"!==this.$route?(this.$router.push("Catalogue"),l.$emit("doneFetching",t)):l.$emit("doneFetching",t)}},beforeMount:function(){this.$store.dispatch("fetchCategories")}},d={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{attrs:{id:"header"}},[o("nav",{staticClass:"navbar fixed-top navbar-expand-lg navbar-light bg-light"},[o("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Abbah Tech ")]),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[o("ul",{staticClass:"navbar-nav mr-auto"},[o("li",{staticClass:"nav-item dropdown",class:{show:t.hover},on:{mouseenter:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}},[o("router-link",{staticClass:"nav-link dropdown-toggle",attrs:{to:"/catalogue",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":t.hover}},[t._v("Catalogue")]),t._v(" "),o("div",{staticClass:"dropdown-menu",class:{show:t.hover},attrs:{"aria-labelledby":"navbarDropdown"}},[o("ul",t._l(t.categories,function(e,a){return o("li",{key:e.id,staticClass:"dropdown-item",on:{click:function(o){t.routeToCat({category:e,index:a})}}},[t._v("\n                "+t._s(e.name)+"\n              ")])}),0)])],1),t._v(" "),o("li",{staticClass:"nav-item"},[o("router-link",{staticClass:"nav-link",attrs:{to:"/contact"}},[t._v("Contact ")])],1),t._v(" "),o("li",{staticClass:"nav-item"},[o("router-link",{staticClass:"nav-link",attrs:{to:"/about-us"}},[t._v("About us ")])],1)]),t._v(" "),t._m(1)])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"form-inline my-2 my-lg-0"},[e("input",{staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"}}),this._v(" "),e("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"}},[this._v("\n          Search\n        ")]),this._v("\n               \n        "),e("button",{staticClass:"btn btn-primary my-2 my-sm-0",attrs:{type:"submit"}},[this._v("\n          Sign in\n        ")]),this._v("\n           \n      ")])}]};var p=o("VU/8")(u,d,!1,function(t){o("sOVB")},"data-v-037cb3f6",null).exports,h=o("mvHQ"),m=o.n(h),v={name:"SideBar",data:function(){return{categories:[]}},methods:{makeActive:function(t){var e=this.getPrevActive();if(t){if(null!=e){var o=e;o.category.isActive=!1,console.log("here"),this.$set(this.categories,o.category.id,o.category)}this.setActive(t)}else this.setActive(e)},setActive:function(t){var e=t.category,o=t.index;localStorage.setItem("_activeCat",m()(t)),e.isActive=!0,this.$set(this.categories,o,e),0===o?this.$store.dispatch("fetchAllStocks"):this.$store.dispatch("fetchStocksByCategory",o)},getPrevActive:function(){var t=JSON.parse(localStorage.getItem("_activeCat"));return t||(t={category:this.categories[0],index:0})}},beforeMount:function(){var t=this;l.$on("doneFetching",function(e){t.makeActive(e)}),this.categories=this.$store.getters.getCategories,0!==this.categories.length&&this.makeActive()}},f={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"wrapper"}},[o("div",{attrs:{id:"sidebar-wrapper"}},[o("ul",{staticClass:"sidebar-nav"},t._l(t.categories,function(e,a){return o("li",{key:e.id,class:{active:e.isActive},on:{click:function(o){t.makeActive({category:e,index:a})}}},[o("a",{attrs:{href:"#"}},[t._v(t._s(e.name))])])}),0)])])},staticRenderFns:[]};var g=o("VU/8")(v,f,!1,function(t){o("igh1")},null,null).exports,w=o("fhbW"),b=o("C/JF"),_=o("1e6/");b.c.add(w.b,w.d,w.a,w.c);var k={name:"ProductCard",props:{pictureUrl:String,price:Number,name:String,description:String,isNegotiable:Boolean,quantity:Number},components:{Catalogue:N,FontAwesomeIcon:_.a},computed:{pictureSrc:function(){return"https://res.cloudinary.com/kent2cky/image/upload/v1581683477/"+this.pictureUrl+".jpg"}},methods:{clicked:function(){return console.log("Don't touch me!")}}},C={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"productcard"}},[o("div",{staticClass:"card"},[o("div",{staticClass:"options"},[o("font-awesome-icon",{attrs:{id:"ff",icon:"check-circle"},on:{click:t.clicked}}),t._v("\n       \n      "),o("font-awesome-icon",{attrs:{icon:"trash"},on:{click:t.clicked}}),t._v("\n       \n      "),o("font-awesome-icon",{attrs:{icon:"download"},on:{click:t.clicked}}),t._v("\n       \n      "),o("font-awesome-icon",{attrs:{icon:"pencil-alt"},on:{click:t.clicked}}),t._v("\n       \n    ")],1),t._v(" "),o("img",{staticClass:"card-img-top",attrs:{src:t.pictureSrc,alt:t.pictureSrc}}),t._v(" "),o("div",{staticClass:"card-body"},[o("h5",{staticClass:"card-title"},[t._v(t._s(t.name))]),t._v(" "),o("p",{staticClass:"card-text"},[t._v("\n        "+t._s(t.description)+"\n        "+t._s(t.isNegotiable)+"\n        "+t._s(t.quantity)+"\n        "+t._s(t.price)+"\n      ")])])])])},staticRenderFns:[]};var y=o("VU/8")(k,C,!1,function(t){o("1L7i")},"data-v-072709c1",null).exports,S=o("Tqaz");b.c.add(w.e);var $={name:"UploadDialogue",data:function(){return{newStock:{Name:"",PictureUrl:"",Quantity:"",Price:"",CategoryId:"Choose a category...",Category:null,Description:"",EntityState:0},uploading:!1,pictures:void 0,formData:void 0,fileContents:void 0,preset:"unsigned_uploads",results:void 0,errors:[],abbatechUrl:"https://localhost:5001/availablestocks",modal:!1,showCatError:!1}},components:{Catalogue:N,BModal:S.b,BButton:S.a,FontAwesomeIcon:_.a},computed:{categories:function(){return this.$store.getters.getCategories.filter(function(t){return 0!==t.id})}},methods:{addPictures:function(t){this.pictures=t.target.files[0]},resetForm:function(){this.pictures=void 0,this.modal=!this.modal,this.newStock.Name="",this.newStock.Quantity="",this.newStock.Price="",this.newStock.CategoryId="Choose a category...",this.newStock.Description="",this.showCatError=!1,this.$refs.form.reset()},prepareFormData:function(){this.formData=new FormData,this.formData.append("upload_preset",this.preset),this.formData.append("file",this.fileContents)},validateInputs:function(){return console.log(!/^[A-Za-z0-9]+([\w -]*[a-zA-Z0-9])?$/.test(this.newStock.Name)),/^[A-Za-z0-9]+([\w -]*[a-zA-Z0-9])?$/.test(this.newStock.Name)?/^([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(this.newStock.Price)?/^[0-9]+$/.test(this.newStock.Quantity)?/^[0-9]$/.test(this.newStock.CategoryId)?!!this.pictures||this.$refs.fileInput.focus():(this.showCatError=!0,this.$refs.catIdInput.focus()):this.$refs.qntyInput.focus():this.$refs.priceInput.focus():this.$refs.nameInput.focus()},submitForm:function(){if(!0!==this.validateInputs())return 0;this.uploading=!this.uploading;var t=new FileReader;t.addEventListener("load",function(){var e=this;this.fileContents=t.result,this.prepareFormData();var o={url:"https://api.cloudinary.com/v1_1/kent2cky/upload",method:"POST",data:this.formData};c()(o).then(function(t){e.results=t.data,e.newStock.PictureUrl=e.results.public_id,e.newStock.Quantity=parseInt(e.newStock.Quantity),e.newStock.Price=parseFloat(e.newStock.Price);var o=[e.newStock];o=m()(o);var a={url:e.abbatechUrl,method:"POST",data:o,headers:{"Content-Type":"application/json"}};c()(a).then(function(t){console.log("success"),console.log("this is res",t),l.$emit("showMsgBox",{msg:"Data stored successfully!"})}).catch(function(t){l.$emit("showMsgBox",{msg:"\n              Something went wrong \n              while trying to add stock.              \n              ",title:"Error!"})})}).catch(function(t){e.errors.push(t),l.$emit("showMsgBox",{msg:"\n              Something went wrong \n              while trying to add stock. \n              Please check your network \n              and try again.\n              ",title:"Error!"})}).finally(function(){setTimeout(function(){console.log("timeout ran out"),this.uploading=!this.uploading,this.resetForm()}.bind(e),1e3)})}.bind(this),!1),this.pictures&&this.pictures.name&&t.readAsDataURL(this.pictures)}},mounted:function(){var t=this;l.$on("showModal",function(){t.modal=!t.modal})},beforeDestroy:function(){l.$off("showModal")}},x={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"uploaddialogue"}},[o("b-modal",{attrs:{title:"Add Stock","content-class":"shadow",id:"my-modal","hide-backdrop":""},scopedSlots:t._u([{key:"default",fn:function(){return[o("form",{ref:"form",staticClass:"needs-validation",attrs:{method:"post",enctype:"multipart/form-data"}},[o("div",{staticClass:"form-group has-feedback"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.newStock.Name,expression:"newStock.Name"}],ref:"nameInput",staticClass:"form-control",attrs:{type:"text",placeholder:"Name of Stock...",required:""},domProps:{value:t.newStock.Name},on:{input:function(e){e.target.composing||t.$set(t.newStock,"Name",e.target.value)}}}),t._v(" "),t.newStock.Name&&!/^[A-Za-z0-9]+([\w -]*[a-zA-Z0-9])?$/.test(t.newStock.Name)?o("span",{staticClass:"error"},[t._v('name must be alphanumeric, no special characters except "-" and\n            "_"')]):t._e()]),t._v(" "),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.newStock.Price,expression:"newStock.Price"}],ref:"priceInput",staticClass:"form-control",attrs:{type:"text",placeholder:"Price...",required:""},domProps:{value:t.newStock.Price},on:{input:function(e){e.target.composing||t.$set(t.newStock,"Price",e.target.value)}}}),t._v(" "),t.newStock.Price&&!/^([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(t.newStock.Price)?o("span",{staticClass:"error"},[t._v("Please enter a valid data!")]):t._e()]),t._v(" "),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.newStock.Quantity,expression:"newStock.Quantity"}],ref:"qntyInput",staticClass:"form-control",attrs:{placeholder:"Quantity...",required:""},domProps:{value:t.newStock.Quantity},on:{input:function(e){e.target.composing||t.$set(t.newStock,"Quantity",e.target.value)}}}),t._v(" "),t.newStock.Quantity&&!/^[0-9]+$/.test(t.newStock.Quantity)?o("span",{staticClass:"error"},[t._v("Please enter a valid data!")]):t._e()]),t._v(" "),o("div",{staticClass:"form-group"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.newStock.CategoryId,expression:"newStock.CategoryId"}],ref:"catIdInput",staticClass:"custom-select mr-sm-2",attrs:{id:"inlineFormCustomSelect",required:""},on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.newStock,"CategoryId",e.target.multiple?o:o[0])},function(e){t.showCatError=!1}]}},[o("option",{attrs:{disabled:"",selected:""}},[t._v("Choose a category...")]),t._v(" "),t._l(t.categories,function(e){return o("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})],2),t._v(" "),t.showCatError?o("span",{staticClass:"error"},[t._v("You must select a category!")]):t._e()]),t._v(" "),o("div",{staticClass:"form-group"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newStock.Description,expression:"newStock.Description"}],staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",rows:"3",placeholder:"Describe the product..."},domProps:{value:t.newStock.Description},on:{input:function(e){e.target.composing||t.$set(t.newStock,"Description",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"custom-file"},[o("input",{staticClass:"custom-file-input",attrs:{type:"file",id:"customFile",accept:"image/*",multiple:"",required:""},on:{change:function(e){return t.addPictures(e)}}}),t._v(" "),o("label",{ref:"fileInput",staticClass:"custom-file-label",attrs:{for:"customFile"}},[t.pictures?o("span",[t._v(t._s(t.pictures.name)+" ")]):o("span",[t._v("Add picture... ")])])])])]},proxy:!0},{key:"modal-footer",fn:function(){return[o("button",{staticClass:"btn btn-secondary",attrs:{"data-dismiss":"modal"},on:{click:t.resetForm}},[t._v("\n        Close\n      ")]),t._v(" "),o("button",{staticClass:"btn btn-primary",class:{disabled:t.uploading},on:{click:t.submitForm}},[t.uploading?o("span",[o("span",{class:{"spinner-border spinner-border-sm disabled":t.uploading}}),t._v("\n          Submitting...\n        ")]):t._e(),t._v(" "),t.uploading?t._e():o("span",[t._v("Submit")])])]},proxy:!0}]),model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}})],1)},staticRenderFns:[]};var A={name:"ProductsCatalogue",data:function(){return{stocks:{}}},methods:{showModal:function(){l.$emit("showModal")}},components:{SideBar:g,ProductCard:y,UploadDialogue:o("VU/8")($,x,!1,function(t){o("4oKc")},"data-v-5b56a8c9",null).exports,BButton:S.a},mounted:function(){this.stocks=this.$store.state.stocks}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"productscatalogue"}},[e("side-bar"),this._v(" "),e("div",{attrs:{id:"page-content-wrapper"}},[e("div",{staticClass:"card-columns"},this._l(this.stocks,function(t){return e("product-card",{key:t.Id,attrs:{price:t.price,quantity:t.quantity,"picture-url":t.pictureUrl,name:t.name,description:t.description,isNegotiable:t.isNegotiable}})}),1)]),this._v(" "),e("button",{staticClass:"addStock",on:{click:this.showModal}}),this._v(" "),e("upload-dialogue")],1)},staticRenderFns:[]};var N=o("VU/8")(A,P,!1,function(t){o("OxiY")},"data-v-bec6d872",null).exports;a.default.use(i.a);var F={name:"App",store:new i.a.Store({state:{stocks:[],categories:[]},mutations:{updateStocks:function(t,e){var o;(o=t.stocks).splice.apply(o,[0,t.stocks.length].concat(s()(e.data)))},updateCategories:function(t,e){var o;(o=t.categories).splice.apply(o,[0,t.categories.length].concat(s()(e)))}},actions:{fetchCategories:function(t){c.a.get("https://localhost:5001/categories").then(function(e){var o=e.data.result;t.commit("updateCategories",o),l.$emit("doneFetching")}).catch(function(){console.log("something went wrong fetching data")})},fetchAllStocks:function(t){c.a.get("https://localhost:5001/availablestocks").then(function(e){t.commit("updateStocks",e)}).catch(function(){console.log("something went wrong fetching data")})},fetchStocksByCategory:function(t,e){c.a.get("https://localhost:5001/availablestocks/category/"+e).then(function(e){t.commit("updateStocks",e)}).catch(function(){console.log("something went wrong fetching data")})},fetchSingleStock:function(t,e){c.a.get("https://localhost:5001/availablestocks/"+e).then(function(e){t.commit("updateStocks",e)}).catch(function(){console.log("something went wrong fetching data")})}},getters:{getCategories:function(t){return t.categories}}}),components:{HeaderComponent:p,ProductsCatalogue:N,ProductCard:y},methods:{showMsgBox:function(t){var e=this;console.log("showMsgBox clicked",t);var o=t.msg,a=t.title,n=void 0===a?"Confirmation":a,s=t.size,i=void 0===s?"md":s,r=t.buttonSize,c=void 0===r?"md":r,l=t.okVariant,u=void 0===l?"success":l;this.boxTwo="",this.$bvModal.msgBoxOk(o,{title:n,size:i,buttonSize:c,okVariant:u,headerClass:"p-2 border-bottom-0",footerClass:"p-2 border-top-0"}).then(function(t){e.boxTwo=t}).catch(function(t){})}},mounted:function(){var t=this;l.$on("showMsgBox",function(e){return t.showMsgBox(e)})},beforeDestroy:function(){l.$off("showMsgBox")}},B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("header-component"),this._v(" "),e("br"),e("br"),e("br"),this._v(" "),e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]};var I=o("VU/8")(F,B,!1,function(t){o("qt7p")},"data-v-042fa951",null).exports,D=o("/ocq"),E={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"homepage"}},[o("h1",[t._v(t._s(t.msg))]),t._v(" "),o("p",[t._v("\n    We have all kinds of phones, computers, and accessories. Contact us today\n    to buy from the largest tech retailer east of the Niger.\n  ")]),t._v(" "),o("p",[t._v("\n    We sell at very affordable rates. We also offer great deals you will never\n    get elsewhere.\n  ")]),t._v(" "),o("h2",[t._v(t._s(t.msg2))])])},staticRenderFns:[]};var M=o("VU/8")({name:"Homepage",data:function(){return{msg:"Welcome to Abbah Tech",msg2:"Take a look at all the products you can buy from us."}}},E,!1,function(t){o("BvFt")},"data-v-fe0aa78e",null).exports,U={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"about"}},[e("h1",[this._v("Abbah Tech")]),this._v(" "),e("p",[this._v("The largest technologies retailer east of the Niger")]),this._v(" "),e("p",[this._v("\n    This Bootstrap sidebar is positioned on the left side of the webpage. It\n    has vertical tabs with a hover effect. On mouse hover over the tabs,\n    sections of texts appear on the webpage. So your website users do not have\n    to click on the tabs to view the sections of texts. By just hovering the\n    mouse over the texts, he/she can see the content under each of the tabs. A\n    CodePen user with the username ‘Vosidiy M’ has developed this sidebar\n    example using Bootstrap. If you need this kind of a sidebar for your\n    website for showing texts under vertical tabs, you can download this\n    template and can use it on your website. Its design is very standard. By\n    tweaking it a bit, it will look better and more appropriate on your site.\n  ")])])}]};var T=o("VU/8")(null,U,!1,function(t){o("8Rgr")},"data-v-39c1d030",null).exports;a.default.use(D.a);var q=new D.a({routes:[{path:"/",name:"Homepage",component:M},{path:"/catalogue",name:"Catalogue",component:N},{path:"/catalogue/:category",name:"Catalogue",component:N},{path:"/about-us",name:"About",component:T}]}),O=o("ydGU");Object(O.a)(Object({NODE_ENV:"production"}).BASE_URL+"service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a.default.use(S.c),a.default.config.productionTip=!1,new a.default({el:"#app",router:q,components:{App:I},template:"<App/>"})},OxiY:function(t,e){},igh1:function(t,e){},qt7p:function(t,e){},sOVB:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e82fa8a4fca94adeec17.js.map