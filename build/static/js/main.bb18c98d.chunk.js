(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a(60)},44:function(e,t,a){},45:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(10),l=a.n(s),c=(a(44),a(45),a(20)),r=a(25),u=a(15),o=a(35),d=a(26),h=a(9),m=a(36),b=a(74),O=a(75),p=a(27),f=a.n(p),v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={time:0,start:0,isOn:!1,isPaused:!1},a.timer=null,a.handleStart=a.handleStart.bind(Object(h.a)(a)),a.handleStop=a.handleStop.bind(Object(h.a)(a)),a.handlePause=a.handlePause.bind(Object(h.a)(a)),a.handleResume=a.handleResume.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleStart",value:function(){var e=this;this.setState({isOn:!0,isPaused:!1,start:Date.now()-this.state.time}),this.timer=setInterval(function(){e.setState(function(t,a){return{time:Date.now()-e.state.start}})},1)}},{key:"handleStop",value:function(){this.setState({time:0,isOn:!1,isPaused:!1}),clearInterval(this.timer)}},{key:"handlePause",value:function(){this.setState({isOn:!1,isPaused:!0}),clearInterval(this.timer)}},{key:"handleResume",value:function(){this.setState({isOn:!0,isPaused:!1}),this.handleStart()}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){console.log(this.state)}},{key:"render",value:function(){var e,t={variant:"contained",color:"primary"};return i.a.createElement(n.Fragment,null,i.a.createElement("h1",null,"This is quite simple timer"),i.a.createElement(b.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:2},i.a.createElement(b.a,{item:!0,xs:12},i.a.createElement(O.a,Object.assign({},t,{disabled:!(!this.state.isOn&&!this.state.isPaused),onClick:this.handleStart}),"Start")),i.a.createElement(b.a,{item:!0},i.a.createElement(O.a,Object.assign({},t,{disabled:!this.state.isOn,onClick:this.handleStop}),"Stop"),i.a.createElement(O.a,Object.assign({},t,{disabled:!this.state.isOn,onClick:this.handlePause}),"Pause")),i.a.createElement(b.a,(e={item:!0},Object(c.a)(e,"item",!0),Object(c.a)(e,"xs",12),e),i.a.createElement(O.a,Object.assign({},t,{disabled:!this.state.isPaused,onClick:this.handleResume}),"Resume"))),i.a.createElement("h4",null,f()(this.state.time)))}}]),t}(n.Component);var j=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(v,null))};l.a.render(i.a.createElement(j,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.bb18c98d.chunk.js.map