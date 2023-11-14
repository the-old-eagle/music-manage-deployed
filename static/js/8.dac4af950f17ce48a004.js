webpackJsonp([8],{HlWG:function(t,e){},J262:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("BO1k"),s=n.n(r),o=n("gyMJ"),a={data:function(){return{consumerCount:0,songCount:0,singerCount:0,songListCount:0,consumer:[],consumerSex:{columns:["性别","总数"],rows:[{"性别":"男","总数":0},{"性别":"女","总数":0}]},consumerOptions:{color:["#87cefa","#ffc0cb"]},singerOptions:{color:["#87cefa","#ffc0cb","#9e52e5","#808080"]},locationOptions:{color:["#47cd81","#578dd9","#cb3131","#e6f16e"]},songStyle:{columns:["风格","总数"],rows:[{"风格":"欧美","总数":0},{"风格":"日系","总数":0},{"风格":"华语","总数":0},{"风格":"摇滚","总数":0},{"风格":"金属","总数":0}]},singerSex:{columns:["性别","总数"],rows:[{"性别":"男",code:0,"总数":0},{"性别":"女",code:1,"总数":0},{"性别":"组合",code:2,"总数":0},{"性别":"不明",code:3,"总数":0}]},singerLocation:{columns:["地区","总数"],rows:[{"地区":"中国","总数":0},{"地区":"日本","总数":0},{"地区":"理塘","总数":0},{"地区":"美国","总数":0},{"地区":"其他","总数":0}]}}},created:function(){},mounted:function(){this.getConsumer(),this.getSong(),this.getSinger(),this.getSongList()},methods:{getConsumer:function(){var t=this;Object(o.g)().then(function(e){t.consumer=e,t.consumerCount=e.length,t.consumerSex.rows[0]["总数"]=t.getByConsumerSex(1,t.consumer),t.consumerSex.rows[1]["总数"]=t.getByConsumerSex(0,t.consumer)})},getByConsumerSex:function(t,e){var n=0,r=!0,o=!1,a=void 0;try{for(var i,c=s()(e);!(r=(i=c.next()).done);r=!0){t===i.value.sex&&n++}}catch(t){o=!0,a=t}finally{try{!r&&c.return&&c.return()}finally{if(o)throw a}}return n},getSong:function(){var t=this;Object(o.a)().then(function(e){t.songCount=e.length})},getSinger:function(){var t=this;Object(o.h)().then(function(e){t.singerCount=e.length;var n=!0,r=!1,o=void 0;try{for(var a,i=s()(e);!(n=(a=i.next()).done);n=!0){var c=a.value;console.log(c.sex),t.getBySingerSex(c.sex),t.getBySingerLocation(c.location)}}catch(t){r=!0,o=t}finally{try{!n&&i.return&&i.return()}finally{if(r)throw o}}})},getBySingerSex:function(t){var e=!0,n=!1,r=void 0;try{for(var o,a=s()(this.singerSex.rows);!(e=(o=a.next()).done);e=!0){var i=o.value;t===i.code&&i["总数"]++}}catch(t){n=!0,r=t}finally{try{!e&&a.return&&a.return()}finally{if(n)throw r}}},getBySingerLocation:function(t){var e=!0,n=!1,r=void 0;try{for(var o,a=s()(this.singerLocation.rows);!(e=(o=a.next()).done);e=!0){var i=o.value;t.includes(i["地区"])&&i["总数"]++}}catch(t){n=!0,r=t}finally{try{!e&&a.return&&a.return()}finally{if(n)throw r}}},getSongList:function(){var t=this;Object(o.i)().then(function(e){t.songListCount=e.length;var n=!0,r=!1,o=void 0;try{for(var a,i=s()(e);!(n=(a=i.next()).done);n=!0){var c=a.value;t.getByStyle(c.style)}}catch(t){r=!0,o=t}finally{try{!n&&i.return&&i.return()}finally{if(r)throw o}}})},getByStyle:function(t){var e=!0,n=!1,r=void 0;try{for(var o,a=s()(this.songStyle.rows);!(e=(o=a.next()).done);e=!0){var i=o.value;t.includes(i["风格"])&&i["总数"]++}}catch(t){n=!0,r=t}finally{try{!e&&a.return&&a.return()}finally{if(n)throw r}}}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{staticClass:"mgb20",attrs:{gutter:20}},[n("el-col",{attrs:{span:6}},[n("el-card",{staticClass:"grid-content-center",attrs:{shadow:"hover"}},[n("div",{staticClass:"grid-num",attrs:{slot:"header"},slot:"header"},[n("span",[t._v(t._s(t.consumerCount))])]),t._v("\n        用户总数\n      ")])],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("el-card",{staticClass:"grid-content-center",attrs:{shadow:"hover"}},[n("div",{staticClass:"grid-num",attrs:{slot:"header"},slot:"header"},[n("span",[t._v(t._s(t.songCount))])]),t._v("\n        歌曲总数\n      ")])],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("el-card",{staticClass:"grid-content-center",attrs:{shadow:"hover"}},[n("div",{staticClass:"grid-num",attrs:{slot:"header"},slot:"header"},[n("span",[t._v(t._s(t.singerCount))])]),t._v("\n        歌手数量\n      ")])],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("el-card",{staticClass:"grid-content-center",attrs:{shadow:"hover"}},[n("div",{staticClass:"grid-num",attrs:{slot:"header"},slot:"header"},[n("span",[t._v(t._s(t.songListCount))])]),t._v("\n        歌单数量\n      ")])],1)],1),t._v(" "),n("el-row",{staticClass:"mgb20",attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("h3",{staticClass:"mgb20"},[t._v("用户性别比例")]),t._v(" "),n("div",{staticStyle:{"background-color":"white"}},[n("ve-pie",{attrs:{data:t.consumerSex,theme:t.consumerOptions}})],1)]),t._v(" "),n("el-col",{attrs:{span:12}},[n("h3",{staticClass:"mgb20"},[t._v("歌单类型分布")]),t._v(" "),n("div",{staticStyle:{"background-color":"white"}},[n("ve-histogram",{attrs:{data:t.songStyle}})],1)])],1),t._v(" "),n("el-row",{staticClass:"mgb20",attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("h3",{staticClass:"mgb20"},[t._v("歌手性别比例")]),t._v(" "),n("div",{staticStyle:{"background-color":"white"}},[n("ve-pie",{attrs:{data:t.singerSex,theme:t.singerOptions}})],1)]),t._v(" "),n("el-col",{attrs:{span:12}},[n("h3",{staticClass:"mgb20"},[t._v("歌单地区分布")]),t._v(" "),n("div",{staticStyle:{"background-color":"white"}},[n("ve-histogram",{attrs:{data:t.singerLocation,theme:t.locationOptions}})],1)])],1)],1)},staticRenderFns:[]};var c=n("VU/8")(a,i,!1,function(t){n("HlWG")},null,null);e.default=c.exports}});
//# sourceMappingURL=8.dac4af950f17ce48a004.js.map