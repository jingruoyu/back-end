webpackJsonp([0],[,,function(t,e,a){a(18);var n=a(0)(a(9),a(27),"data-v-7aa02598",null);t.exports=n.exports},,function(t,e,a){"use strict";var n=a(1),s=a(29),r=a(23),c=a.n(r),i=a(2),l=a.n(i),o=a(24),d=a.n(o);n.a.use(s.a);var h=[{path:"/",redirect:"/index"},{path:"/index",name:"Hello",component:c.a,meta:{title:"hello"}},{path:"/calendar",name:"calendar",meta:{title:"calendar"},component:l.a},{path:"/priceCalendar",name:"priceCalendar",meta:{title:"priceCalendar"},component:d.a}],u=new s.a({mode:"history",routes:h});u.beforeEach(function(t,e,a){console.log(t),document.title=t.meta.title,a()}),e.a=u},function(t,e,a){"use strict";var n=a(1),s=a(31),r=a(13),c=a.n(r),i=a(12),l=a.n(i),o=a(14),d=a(15);n.a.use(s.a);var h={getters:c.a,actions:l.a,modules:{countModule:o.a,todosModule:d.a},strict:!0},u=new s.a.Store(h);e.a=u},function(t,e,a){a(17);var n=a(0)(a(7),a(26),null,null);t.exports=n.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{}},computed:{},methods:{}}},function(t,e){t.exports={data:function(){return{disableText:"已售出",selectDays:[]}},props:{pre:{default:!0},next:{default:!0},calendar:{required:!0}},computed:{getContentClass:function(){return this.pre&&this.next?"single-calendar":this.pre?"left-calendar":"right-calendar"}},methods:{selectDate:function(t){if(t.available&&"false"!=t.available){if(-1===this.selectDays.indexOf(t))this.selectDays.push(t);else{var e=this.selectDays.indexOf(t);this.selectDays.splice(e,1)}this.$emit("daterange")}},hasSelectedDate:function(t){return-1!==this.selectDays.indexOf(t)},changeMonth:function(t){this.$emit("changeMonth",t)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(2),s=a.n(n),r=function(t){var e=new Date(t),a=e.getFullYear(),n=e.getMonth()+1,s=e.getDate();return n=n<10?"0"+n:n,s=s<10?"0"+s:s,a+"-"+n+"-"+s};e.default={name:"price-calendar",components:{calendar:s.a},props:{price:{type:Object,default:{}}},data:function(){return{show:!1,selectedDate:"",selectedDate_tmp:"",leftSelectDays_tmp:[],rightSelectDays_tmp:[],dateRangeCount:0,priceTotal:0,price:{},calendarData:{leftData:{},rightData:{}}}},beforeMount:function(){var t=this.monthData(this.price);this.calendarData.leftData=t.leftData,this.calendarData.rightData=t.rightData},watch:{price:{handler:function(t){var e=this.monthData(t);this.calendarData.leftData=e.leftData,this.calendarData.rightData=e.rightData},deep:!0},show:function(t,e){!0===t&&!1===e&&(this.leftSelectDays_tmp=[].concat(this.$refs.calendar_left.selectDays),this.rightSelectDays_tmp=[].concat(this.$refs.calendar_right.selectDays),this.selectedDate_tmp=this.selectedDate)}},computed:{shortSelectedDate:function(){return console.log("before"+this.selectedDate),this.selectedDate.length>17?this.selectedDate.slice(0,17)+"...":this.selectedDate}},methods:{closeCalendar:function(){this.show=!1,this.cancelDate()},showCalendar:function(t){if(!this.show){this.show=!0;var e=this.$route.path;e.indexOf("buy")>=0?(this.$refs.calendar_left.disableText="已售出",this.$refs.calendar_right.disableText="已售出"):e.indexOf("distribute")>=0?(this.$refs.calendar_left.disableText="已售出",this.$refs.calendar_right.disableText="已分配"):(this.$refs.calendar_left.disableText="已售出",this.$refs.calendar_right.disableText="已售出");var a=0,n=0,s=this.$refs.dateInput.getBoundingClientRect(),r=document.documentElement.clientWidth,c=document.documentElement.clientHeight;a=r-s.left>700?s.left:r-700,n=c-s.bottom>340?s.bottom:s.top-340,this.$refs.dateCalendar.style.left=a+"px",this.$refs.dateCalendar.style.top=n+"px",this.show=!0}},changeMonth:function(t){console.log(t);var e=this.calendarData.leftData.title.split("-")[0],a=this.calendarData.leftData.title.split("-")[1];switch(e=parseInt(e),a=parseInt(a),t){case"pre":a-1==0?(a=12,e-=1):a-=1;break;case"next":a+1===13?(a=1,e+=1):a+=1}var n=this.monthData(this.price,e,a);this.calendarData.leftData=n.leftData,this.calendarData.rightData=n.rightData},getRange:function(){var t=[].concat(this.$refs.calendar_left.selectDays,this.$refs.calendar_right.selectDays);t.sort(function(t,e){return t.dateId-e.dateId}),this.selectedDate=t.map(function(t){return t.dateId}).join(","),this.dateRangeCount=t.length,this.priceTotal=0;for(var e=0,a=t.length;e<a;e++)this.priceTotal+=parseFloat(t[e].price)},cancelDate:function(){this.$refs.calendar_left.selectDays=[].concat(this.leftSelectDays_tmp),this.$refs.calendar_right.selectDays=[].concat(this.rightSelectDays_tmp),this.selectedDate=this.selectedDate_tmp,this.dateRangeCount=0,this.priceTotal=0,this.show=!1},confirmDate:function(){var t=[].concat(this.$refs.calendar_left.selectDays,this.$refs.calendar_right.selectDays);t.sort(function(t,e){return t.dateId-e.dateId}),this.$emit("pricedaterange",{dateList:t}),this.show=!1},monthData:function(t,e,a){e=e||(new Date).getFullYear(),a=a||(new Date).getMonth()+1;var n=e+"-"+(a<10?"0"+a:a)+"-01";return n=new Date(n),{leftData:this.getDateList(n,t),rightData:this.getDateList(n,t)}},getDateList:function(t,e){var a=1,n=t.getMonth(),s={title:t.getFullYear()+"-"+(n+1<10?"0"+(n+1):n+1),data:[]},c=[],i=new Date,l=t.getDay();for(c=c.concat(new Array(l).fill({date:0,today:0}));n===t.getMonth();){var o={date:a,today:i>t?-1:i===t?0:1,dateId:r(t)};if(this.price[r(t)])for(var d in this.price[r(t)])o[d]=this.price[r(t)][d];0===t.getDay()&&(s.data.push(c),c=[]),c.push(o),t.setDate(a+1),a=t.getDate()}var h=t.getDay()-1;return c=c.concat(new Array(6-h).fill({date:0,today:0})),s.data.push(c),s}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1),s=a(6),r=a.n(s),c=a(4),i=a(5);n.a.config.productionTip=!1,new n.a({el:"#app",router:c.a,store:i.a,template:"<App/>",components:{App:r.a}})},function(t,e){},function(t,e){},function(t,e,a){"use strict";var n={count:0},s={increment:function(t,e){t.count=t.count+e},reset:function(t){t.count=0}},r={countSquare:function(t){return t.count*t.count}};e.a={namespaced:!0,state:n,mutations:s,getters:r}},function(t,e,a){"use strict";var n={todos:[{id:1,text:"...",done:!0},{id:2,text:"...",done:!0},{id:3,text:"...",done:!1}]},s={doneTodos:function(t){return t.todos.filter(function(t){return t.done})},doneTodosCount:function(t,e){return e.doneTodos.length}},r={reset:function(t){t.todos=[{id:1,text:"123",done:!0},{id:2,text:"123",done:!0},{id:3,text:"123",done:!1}]}};e.a={namespaced:!0,state:n,mutations:r,getters:s}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,a){a(16);var n=a(0)(a(8),a(25),"data-v-0e8b458a",null);t.exports=n.exports},function(t,e,a){a(19);var n=a(0)(a(10),a(28),"data-v-d8b47e90",null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",{staticClass:"welcome"},[t._v("welcome to here")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view",{staticClass:"root"})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"calendar",staticClass:"calendar-container",on:{click:function(t){t.stopPropagation()}}},[a("div",{staticClass:"calendar-title",class:{"calendar-title-left":t.pre,"calendar-title-right":t.next}},[t.pre?a("span",{staticClass:"calendar-pre-month",on:{click:function(e){t.changeMonth("pre")}}},[t._v("前")]):t._e(),t._v(" "),a("span",{staticClass:"calendar-title-cont"},[t._v(t._s(t.calendar.title))]),t._v(" "),t.next?a("span",{staticClass:"calendar-next-month",on:{click:function(e){t.changeMonth("next")}}},[t._v("后")]):t._e()]),t._v(" "),a("div",{staticClass:"calendar-content",class:t.getContentClass},[a("table",[t._m(0),t._v(" "),a("tbody",t._l(t.calendar.data,function(e){return a("tr",t._l(e,function(e){return a("td",{attrs:{title:"true"==e.available?"￥"+e.price:"false"==e.available?t.disableText:"不可购买"}},[e.date?a("div",{class:{"calendar-hover":"true"==e.available,"calendar-selected":t.hasSelectedDate(e)},on:{click:function(a){a.stopPropagation(),t.selectDate(e)}}},[a("span",{staticClass:"calendar-date-num"},[t._v(t._s(0==e.today?"今天":e.date))]),t._v(" "),a("span",{staticClass:"calendar-date-price"},[t._v(t._s("true"==e.available?"￥"+e.price:"false"==e.available?t.disableText:""))])]):t._e()])}))}))])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"sunday"},[t._v("日")]),t._v(" "),a("th",[t._v("一")]),t._v(" "),a("th",[t._v("二")]),t._v(" "),a("th",[t._v("三")]),t._v(" "),a("th",[t._v("四")]),t._v(" "),a("th",[t._v("五")]),t._v(" "),a("th",[t._v("六")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"dataWrap",staticClass:"date-wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.shortSelectedDate,expression:"shortSelectedDate"}],ref:"dateInput",staticClass:"date-input",attrs:{type:"text",placeholder:"选择日期",title:t.selectedDate},domProps:{value:t.shortSelectedDate},on:{click:function(e){e.stopPropagation(),t.showCalendar(e)},input:function(e){e.target.composing||(t.shortSelectedDate=e.target.value)}}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"date-calendar-root",on:{click:t.closeCalendar}},[a("div",{ref:"dateCalendar",staticClass:"date-calendar-wrap",on:{click:function(t){t.stopPropagation()}}},[a("calendar",{ref:"calendar_left",staticClass:"calendar",attrs:{pre:!0,next:!1,calendar:t.calendarData.leftData},on:{changeMonth:t.changeMonth,daterange:t.getRange}}),t._v(" "),a("calendar",{ref:"calendar_right",staticClass:"calendar",attrs:{pre:!1,next:!0,calendar:t.calendarData.rightData},on:{changeMonth:t.changeMonth,daterange:t.getRange}}),t._v(" "),a("p",{staticClass:"priceTotal"},[t._v("已选择  "),a("em",{staticClass:"hot"},[t._v(t._s(t.dateRangeCount))]),t._v(" 天，共 "),a("em",{staticClass:"hot"},[t._v(t._s(t.priceTotal))]),t._v(" 元\n                "),a("button",{staticClass:"confirm",on:{click:t.confirmDate}},[t._v("确认")]),t._v(" "),a("button",{staticClass:"cancel",on:{click:t.cancelDate}},[t._v("取消")])])],1)])])},staticRenderFns:[]}}],[11]);
//# sourceMappingURL=app.305460920088095dd09b.js.map