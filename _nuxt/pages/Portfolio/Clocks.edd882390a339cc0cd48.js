webpackJsonp([4],{"3al+":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".modal[data-v-f2d6f03c]{width:100%;background-color:rgba(0,0,0,.8)}.modal_content[data-v-f2d6f03c]{background-color:#fff}.close[data-v-f2d6f03c]{top:0;right:0}",""])},"8XrK":function(t,e,i){"use strict";var a=i("ZH+3"),o=i("BF0F"),s=!1;var c=function(t){s||i("t5lC")},l=i("VU/8")(a.a,o.a,!1,c,"data-v-74ca56c7",null);l.options.__file="components/Gallery.vue",e.a=l.exports},BF0F:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app"},[i("div",{on:{click:function(e){return t.toggleModal()}}},[i("img",{attrs:{src:t.baseURL+t.cover,width:"100%"}}),t._v("Click to view "+t._s(t.images.length)+" Images")]),i("Modal",t._b({},"Modal",{closeCallback:t.toggleModal,show:t.show,customClass:"custom_modal_class"},!1),[i("div",{staticClass:"imageGallery"},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("img",{staticClass:"galleryImage",attrs:{src:t.baseURL+t.image},on:{click:t.nextImage}})]),i("div",{staticClass:"imageDescription"},[t._v(t._s(t.index+1)+" of "+t._s(t.images.length)),t.info[0]?i("h5",[t._v(t._s(t.info[0]))]):t._e(),t.info[1]?i("p",[t._v("("+t._s(t.info[1])+")"),i("br"),t._v(t._s(t.info[2]))]):t._e()])],1)])],1)};a._withStripped=!0;var o={render:a,staticRenderFns:[]};e.a=o},FObl:function(t,e,i){var a=i("3al+");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("d3287ff2",a,!1,{sourceMap:!1})},FUqd:function(t,e,i){var a=i("oY0x");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("7db6b6c1",a,!1,{sourceMap:!1})},FaYv:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal modal",class:t.customClass,style:{display:t.show?"block":"none"}},[i("div",{staticClass:"modal_content"},[i("div",{staticClass:"close"},[i("button",{staticClass:"btn btn-secondary",attrs:{title:"Close"},on:{click:function(e){return t.closeCallback()}}},[i("fab",{staticClass:"mr-2 ml-2 fa-2x",attrs:{icon:["fa","times"]}})],1)]),t._t("default")],2)])};a._withStripped=!0;var o={render:a,staticRenderFns:[]};e.a=o},"M++e":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".fade-enter[data-v-74ca56c7]{opacity:0}.fade-enter-active[data-v-74ca56c7]{-webkit-transition:opacity .5s;transition:opacity .5s}.fade-leave[data-v-74ca56c7]{opacity:1}.fade-leave-active[data-v-74ca56c7]{-webkit-transition:opacity .5s;transition:opacity .5s;opacity:0}.imageGallery[data-v-74ca56c7]{max-height:100vh;max-width:100vw;width:100vw;height:100vh;min-height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.galleryImage[data-v-74ca56c7]{-ms-flex-negative:1;flex-shrink:1;-o-object-fit:contain;object-fit:contain;height:60vh}.imageDescription[data-v-74ca56c7]{height:40vh;overflow:scroll}",""])},"Md/i":function(t,e,i){"use strict";e.a={name:"Modal",props:{show:Boolean,customClass:String,closeCallback:Function}}},WWcs:function(t,e,i){"use strict";var a=i("Md/i"),o=i("FaYv"),s=!1;var c=function(t){s||i("FObl")},l=i("VU/8")(a.a,o.a,!1,c,"data-v-f2d6f03c",null);l.options.__file="components/Modal.vue",e.a=l.exports},"ZH+3":function(t,e,i){"use strict";var a=i("WWcs");e.a={name:"app",components:{Modal:a.a},data:function(){return{baseURL:"http://whosjimmy.com/",show:!1,index:0,image:this.images[0]}},props:{images:{type:Array,default:function(){return[]}},cover:{type:String,default:function(){return this.images[0]}},info:{type:Array,default:function(){return[]}}},created:function(){console.log("cover",this.cover),console.log("cover",this.cover),console.log("info",this.info)},methods:{nextImage:function(){this.images.length-1>this.index?this.index++:this.index=0,this.image=this.images[this.index]},toggleModal:function(){this.show=!this.show}}}},aw3T:function(t,e,i){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-fluid col-lg-12"},[e("div",{staticClass:"card rounded text-center"},[e("div",{staticClass:"card-header"},[this._v("Portfolio - Clocks")]),e("div",{staticClass:"card-body"},[this._m(0),e("div",{staticClass:"col-md-12 row"},this._l(this.clocks,function(t){return e("div",{staticClass:"col-md-4"},[e("appGallery",{attrs:{images:t.images,info:[t.name,t.info,t.description]}})],1)}),0)])]),this._m(1)])};a._withStripped=!0;var o={render:a,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 text-center"},[e("iframe",{attrs:{src:"//www.youtube.com/embed/ExYMwsZ77A4",frameborder:"0",allowfullscreen:""}})]),e("div",{staticClass:"col-lg-6 text-center"},[e("iframe",{attrs:{src:"//www.youtube.com/embed/KpDggiBvs3k",frameborder:"0",allowfullscreen:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row text-center"},[e("div",{staticClass:"col-lg-12"},[this._v("Click on an image, to view image gallery.")])])}]};e.a=o},ekz1:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("oKfC"),o=i("aw3T"),s=!1;var c=function(t){s||i("FUqd")},l=i("VU/8")(a.a,o.a,!1,c,"data-v-3b9b4785",null);l.options.__file="pages/Portfolio/Clocks.vue",e.default=l.exports},oKfC:function(t,e,i){"use strict";var a=i("8XrK");e.a={data:function(){return{clocks:[{name:'E1 "Angela"',info:"7 Diameter X 16H ~ inches",description:"First Edition Clock built from P3, 3 units made.",images:["img/clocks/e1/may07all 210-1.jpg","img/clocks/e1/may07all 220-1.jpg","img/clocks/e1/may07all 202-1.jpg","img/clocks/e1/may07all 057.jpg","img/clocks/e1/may07all 054.jpg","img/clocks/e1/129-2911_IMG-1.jpg"]},{name:"Prototype 1",info:"18L X 11D X 40H ~ inches",description:"\tFirst Prototype ever built. Made entirely from found good in the shop. electro-mechanical in function. Each light bulb is a different hour of the day. Minutes are neon lights.",images:["img/clocks/p1/may07all 235-1.jpg","img/clocks/p1/may07all 239-1.jpg","img/clocks/p1/may07all 245-1.jpg","img/clocks/p1/may07all 252-1.jpg","img/clocks/p1/may07all 253-1.jpg","img/clocks/p1/may07all 252-1.jpg"]},{name:"Prototype 2",info:"14L X 8D X 22H ~ inches",description:"\tEach vertical tube contains 12 balls (an hour) all balls dump out at 12 o'clock. Made from found goods.",images:["img/clocks/p2/127-2784_IMG-1.jpg","img/clocks/p2/IMG_2557-1.jpg","img/clocks/p2/IMG_0729.JPG"]},{name:"Prototype 3",info:"7 Diameter X 16H ~ inches",description:"Spiral dome clock one ball every minute at the top of the spiral is released and spirals down and drops into a vortex at the bottom and eventually down the center of the vortex. This design hands off to E1. (Angela)",images:["img/clocks/p3/may07all 210-1.jpg","img/clocks/p3/may07all 054.jpg","img/clocks/p3/may07all 057.jpg","img/clocks/p3/may07all 220-1.jpg"]},{name:'Prototype 4 "Little Jimmy"',info:"9L X 2D X 3H ~ inches",description:"\tThe first prototype of the inclined plane series. Using an oscillating clock movement. It takes 12 hours for the ball to go up the hill and its returned to the start. Graduations on the incline correspond with the ball to tell the time. This design hands to P5.",images:["img/clocks/p4/hiatus 411.JPG","img/clocks/p4/IMG_0650.JPG","img/clocks/p4/IMG_0668.JPG","img/clocks/p4/IMG_0700.JPG"]},{name:'Prototype 5 "Sidewinder"',info:"7L X 3D X 3H ~ inches",description:"\tThis will be a future production clock. Made in wood and possibly clear acrylic, with plated metal parts.",images:["img/clocks/p5/IMG_9123.JPG","img/clocks/p5/Dec.21 2010 365.JPG","img/clocks/p5/Dec.21 2010 370.JPG","img/clocks/p5/IMG_9159.JPG","img/clocks/p5/IMG_9163.JPG"]},{name:'Prototype 6 "Mag Link"',info:"6L X 3D X 3H ~ inches",description:"\tA non-contact linkage between the clock motor and the screw, pushing a ball up hill over 12hrs.",images:["img/clocks/p6/Dec.21 2010 325-1.jpg","img/clocks/p6/hiatus 411.JPG"]},{name:'Prototype 7 "Robo-Retro"',info:"9L X 10D X 12H ~ inches",description:"Rotary relays as decade counters driving lights for minutes and hours, all technology used is 1950 or older (retro). Built on my lunch breaks during the filming of Robocop.",images:["img/clocks/p7/vancouver2013a1 1841.JPG","img/clocks/p7/IMG_0509.JPG","img/clocks/p7/IMG_0511.JPG","img/clocks/p7/IMG_0516.JPG","img/clocks/p7/IMG_0519.JPG","img/clocks/p7/IMG_0617.JPG"]}]}},components:{appGallery:a.a}}},oY0x:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".hidden[data-v-3b9b4785]{visibility:hidden}.row[data-v-3b9b4785]{margin-top:10px}iframe[data-v-3b9b4785]{width:100%!important;height:330px!important}",""])},t5lC:function(t,e,i){var a=i("M++e");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("76675482",a,!1,{sourceMap:!1})}});