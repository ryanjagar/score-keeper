(function(t){function e(e){for(var r,s,a=e[0],c=e[1],d=e[2],l=0,m=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/score-keeper/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var d=0;d<a.length;d++)e(a[d]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"1e63":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",{attrs:{id:"app"}},[n("five-hundred")],1)])},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("v-card",{staticClass:"mx-auto overflow-hidden",attrs:{"max-width":"450"}},[n("v-overlay",{attrs:{value:t.winner}},[n("v-card",[n("div",{staticClass:"mx-auto text-h1 pa-6 ma-6"},[t._v(" "+t._s(t.winner)+" wins! ")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"success"},on:{click:function(e){return t.newGame()}}},[t._v(" New game ")]),n("v-spacer")],1)],1)],1),n("v-toolbar",{attrs:{color:""}},[n("v-spacer"),n("v-toolbar-title",[n("h1",[t._v("500 ")])]),n("v-spacer"),n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1),n("v-navigation-drawer",{attrs:{right:"",absolute:"",temporary:"",width:"150"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",{model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[n("v-list-item",{on:{click:function(e){return t.newGame()}}},[n("v-list-item-title",[t._v(" New Game ")])],1),n("v-list-item",[n("v-list-item-title",[t._v("Rules")])],1)],1)],1)],1),n("v-container",[n("v-row",{attrs:{dense:""}},t._l(t.teams,(function(e,r){return n("v-col",{key:e.name,attrs:{cols:"6"}},[n("v-card",{on:{click:function(n){return t.setATeam(r,e)}}},[n("v-overlay",{attrs:{absolute:"",value:t.isBidder(r),opacity:"0.8",color:"success"}},[n("div",{staticClass:"text-h2"},[t._v("Bidding")])]),n("v-img",{staticClass:"white--text align-top",attrs:{src:e.img,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"200px"}},[n("v-card-title",{staticClass:"text-h3",domProps:{textContent:t._s(e.name)}}),n("div",{staticClass:"text-h1"},[t._v(" "+t._s(e.score)+" ")])],1)],1)],1)})),1)],1)],1),n("v-card",{staticClass:"bid-table  mx-auto pt-5",attrs:{"max-width":"450"}},[n("v-card-text",[n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"2"}}),n("v-col",[n("v-icon",{attrs:{large:""}},[t._v("mdi-cards-spade")])],1),n("v-col",[n("v-icon",{attrs:{large:""}},[t._v("mdi-cards-club")])],1),n("v-col",[n("v-icon",{attrs:{large:""}},[t._v("mdi-cards-diamond")])],1),n("v-col",[n("v-icon",{attrs:{large:""}},[t._v("mdi-cards-heart")])],1),n("v-col",[n("span",[t._v("No Trump")])])],1)],1),t._l(t.bidSheet,(function(e,r){return n("v-row",{key:e.index,attrs:{dense:""}},[n("v-col",[t._v(" "+t._s(r)+" ")]),t._l(e,(function(e){return n("v-col",{key:e.index},[n("v-btn",{on:{click:function(n){return t.makeABid(e)}}},[t._v(" "+t._s(e.points)+" ")])],1)}))],2)})),n("v-row",[n("v-col",{attrs:{cols:"1"}}),n("v-col",[n("v-btn",{on:{click:function(e){return t.makeABid(t.misereBids.closedMisere)}}},[t._v(" misere")])],1),n("v-col",[n("v-btn",{attrs:{click:"makeABid(misereBids.openMisere)"}},[t._v(" open misere ")])],1)],1)],2),t.overlay?n("v-expand-transition",[n("v-card",{staticClass:"transition-fast-in-fast-out v-card--reveal",staticStyle:{height:"100%"}},[n("v-system-bar",{attrs:{"lights-out":""}},[n("v-spacer"),n("v-icon",{on:{click:function(e){return t.clearRound()}}},[t._v("mdi-close")])],1),n("v-card-text",[n("div",{staticClass:"text-h4 pb-4"},[t._v(" "+t._s(t.teams[t.game.currentRound.team].name)+" calls: ")]),n("div",{staticClass:"text-center text-h4 pa-4"},[t._v(" "+t._s(t.game.currentRound.bid.shortCode.slice(0,-1))+" "),n("v-icon",{attrs:{large:""}},[t._v(" "+t._s(t.game.currentRound.bid.icon)+" ")])],1),n("v-btn",{attrs:{color:"success"},on:{click:function(e){t.scoring=!0}}},[t._v(" End Round ")])],1)],1)],1):t._e(),t.scoring?n("v-expand-transition",[n("v-card",{staticClass:"transition-fast-in-fast-out v-card--reveal",staticStyle:{height:"100%"}},[n("v-system-bar",{attrs:{"lights-out":""}},[n("v-spacer"),n("v-icon",{on:{click:function(e){t.scoring=!1}}},[t._v("mdi-close")])],1),n("v-card-text",[n("div",{staticClass:"text-center text-h5 pt-0 mt-0 mb-3"},[t._v(" Did "+t._s(t.biddingTeam.name)+" win: "+t._s(t.game.currentRound.bid.shortCode.slice(0,-1))+" "),n("v-icon",{attrs:{large:""}},[t._v(" "+t._s(t.game.currentRound.bid.icon)+" ")]),t._v(" ? ")],1),n("v-btn-toggle",{model:{value:t.game.currentRound.bidWon,callback:function(e){t.$set(t.game.currentRound,"bidWon",e)},expression:"game.currentRound.bidWon"}},[n("v-btn",[t._v(" yes ")]),n("v-btn",[t._v(" no ")])],1),n("div",{staticClass:"text-center text-h5 mb-2 mt-4"},[t._v(" How many tricks did "+t._s(t.defendingTeam.name)+" take? "),n("v-row",[n("v-spacer"),n("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[n("v-text-field",{attrs:{label:"Tricks"},model:{value:t.game.currentRound.tricksTaken,callback:function(e){t.$set(t.game.currentRound,"tricksTaken",e)},expression:"game.currentRound.tricksTaken"}})],1),n("v-spacer")],1)],1),n("v-btn",{attrs:{color:"success"},on:{click:function(e){return t.scoreRound()}}},[t._v(" Score Round ")])],1)],1)],1):t._e()],1)],1)},a=[],c=n("b85c"),d=(n("4fad"),n("b0c0"),{name:"FiveHundred",data:function(){return{selected:!1,overlay:!1,scoring:!1,absolute:!0,drawer:!1,group:null,teams:[{name:"Us",bid:"",score:0,img:"https://picsum.photos/200"},{name:"Them",bid:"",score:0,img:"https://picsum.photos/201"}],bidder:0,bidSheet:{6:{spades:{points:40,shortCode:"6S",icon:"mdi-cards-spade"},clubs:{points:60,shortCode:"6C",icon:"mdi-cards-club"},diamonds:{points:80,shortCode:"6D",icon:"mdi-cards-diamond"},hearts:{points:100,shortCode:"6H",icon:"mdi-cards-heart"},notrump:{points:120,shortCode:"6NT",icon:"mdi-cards"}},7:{spades:{points:140,shortCode:"7S",icon:"mdi-cards-spade"},clubs:{points:160,shortCode:"7C",icon:"mdi-cards-club"},diamonds:{points:180,shortCode:"7D",icon:"mdi-cards-diamond"},hearts:{points:200,shortCode:"7H",icon:"mdi-cards-heart"},notrump:{points:220,shortCode:"7NT",icon:"mdi-cards"}},8:{spades:{points:240,shortCode:"8S",icon:"mdi-cards-spade"},clubs:{points:260,shortCode:"8C",icon:"mdi-cards-club"},diamonds:{points:280,shortCode:"8D",icon:"mdi-cards-diamond"},hearts:{points:300,shortCode:"8H",icon:"mdi-cards-heart"},notrump:{points:320,shortCode:"8NT",icon:"mdi-cards"}},9:{spades:{points:340,shortCode:"9S",icon:"mdi-cards-spade"},clubs:{points:360,shortCode:"9C",icon:"mdi-cards-club"},diamonds:{points:380,shortCode:"9D",icon:"mdi-cards-diamond"},hearts:{points:400,shortCode:"9H",icon:"mdi-cards-heart"},notrump:{points:420,shortCode:"9NT",icon:"mdi-cards"}},10:{spades:{points:440,shortCode:"10S",icon:"mdi-cards-spade"},clubs:{points:460,shortCode:"10C",icon:"mdi-cards-club"},diamonds:{points:480,shortCode:"10D",icon:"mdi-cards-diamond"},hearts:{points:500,shortCode:"10H",icon:"mdi-cards-heart"},notrump:{points:520,shortCode:"10NT",icon:"mdi-cards"}}},misereBids:{openMisere:{points:500,shortCode:"OM",icon:"mdi-cards"},closedMisere:{points:250,shortCode:"CM",icon:"mdi-cards"}},winner:"",game:{currentRound:{team:{},bid:{},bidWon:0,tricksTaken:null},history:[]}}},watch:{group:function(){this.drawer=!1}},computed:{biddingTeam:function(){return this.teams[this.game.currentRound.team]},currentBid:function(){return this.game.currentRound.bid},defendingTeam:function(){return this.biddingTeam?0==this.game.currentRound.team?this.teams[1]:this.teams[0]:null}},methods:{scoreRow:function(t){return Object.entries(t)},newGame:function(){this.clearRound();var t,e=Object(c["a"])(this.teams);try{for(e.s();!(t=e.n()).done;){var n=t.value;n.score=0}}catch(r){e.e(r)}finally{e.f()}this.winner=""},makeABid:function(t){return this.game.currentRound.bid=t,0!=this.game.currentRound.team&&1!=this.game.currentRound.team||(this.overlay=!0),null},setATeam:function(t){this.game.currentRound.team=t,this.game.currentRound.bid.shortCode&&(this.overlay=!0)},isBidder:function(t){return this.game.currentRound.team==t},scoreRound:function(){0==this.game.currentRound.bidWon?this.biddingTeam.score+=this.game.currentRound.bid.points:this.biddingTeam.score-=this.game.currentRound.bid.points,this.defendingTeam.score+=10*this.game.currentRound.tricksTaken,this.scoring=!1,this.isWinner(),this.clearRound()},isWinner:function(){var t,e=Object(c["a"])(this.teams);try{for(e.s();!(t=e.n()).done;){var n=t.value;n.score>=500?this.winner=n.name:n.score<-500&&(this.winner=this.defendingTeam.name)}}catch(r){e.e(r)}finally{e.f()}return null},clearRound:function(){this.game.currentRound.bid={},this.game.currentRound.team={},this.game.currentRound.bidWon=0,this.game.currentRound.tricksTaken=null,this.overlay=!1,this.scoring=!1}}}),u=d,l=(n("7566"),n("2877")),m=Object(l["a"])(u,s,a,!1,null,"4b11adb0",null),v=m.exports,p={name:"App",components:{FiveHundred:v}},h=p,f=(n("034f"),Object(l["a"])(h,o,i,!1,null,null,null)),b=f.exports,g=n("ce5b"),_=n.n(g);n("bf40");r["default"].use(_.a);var C={},w=new _.a(C);r["default"].config.productionTip=!1,new r["default"]({vuetify:w,el:"#app",render:function(t){return t(b)}})},7566:function(t,e,n){"use strict";n("1e63")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.a80cd145.js.map