(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(3),o=n.n(r),s=(n(16),n(7)),i=n(4),c=n(5),u=n(8),m=n(6),d=n(1),h=n(9);var p=function(e){var t=e.users.find(function(t){return t.id===e.userId});return l.a.createElement("div",null,l.a.createElement("h3",null,"Author"),l.a.createElement("p",null,t.name),l.a.createElement("p",null,l.a.createElement("a",{href:"mailto:"},t.email)),l.a.createElement("p",null,t.address.city))};var f=function(e){return l.a.createElement("div",null,l.a.createElement("h3",null,"Comment"),l.a.createElement("p",null,l.a.createElement("a",{href:"mailto: "+e.authorEmail},e.authorName)),l.a.createElement("p",null,e.comment))};var E=function(e){var t=e.comments.filter(function(t){return t.postId===e.postId}).map(function(e){return l.a.createElement(f,{key:e.id,authorEmail:e.email,authorName:e.name,comment:e.body})});return l.a.createElement(l.a.Fragment,null,t)};var v=function(e){return l.a.createElement("li",null,l.a.createElement("h3",null,"Title"),l.a.createElement("p",null,e.title),l.a.createElement("h3",null,"Text"),l.a.createElement("p",null,e.text),l.a.createElement(p,{users:e.userList,userId:e.userId}),l.a.createElement(E,{comments:e.comments,postId:e.post}))};var b=function(e){var t=e.list.map(function(t){return l.a.createElement(v,{key:t.id,title:t.title,text:t.body,userList:e.users,userId:t.userId,comments:e.comments,post:t.id})});return l.a.createElement("ul",null,t)},y=(n(17),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={posts:[],users:[],comments:[],foundPost:[],loading:!1,loaded:!1,disabled:!1},e.handleClick=e.handleClick.bind(Object(d.a)(e)),e.filterPosts=e.filterPosts.bind(Object(d.a)(e)),e.loadData=e.loadData.bind(Object(d.a)(e)),e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"filterPosts",value:function(e){var t=e.target.value.trim();this.setState({foundPost:this.state.posts.filter(function(e){return e.title.includes(t)||e.body.includes(t)})})}},{key:"loadData",value:function(e){return fetch(e).then(function(e){return e.json()})}},{key:"handleClick",value:function(){var e=this;this.setState({loading:!0,disabled:!0}),Promise.all([this.loadData("https://jsonplaceholder.typicode.com/posts"),this.loadData("https://jsonplaceholder.typicode.com/users"),this.loadData("https://jsonplaceholder.typicode.com/comments")]).then(function(t){var n=Object(s.a)(t,3),a=n[0],l=n[1],r=n[2];return e.setState({loaded:!0,posts:a,users:l,comments:r})})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.state.loaded?l.a.createElement("div",null,l.a.createElement("input",{type:"text",onInput:this.filterPosts,placeholder:"search"}),l.a.createElement(b,{list:this.state.foundPost.length?this.state.foundPost:this.state.posts,users:this.state.users,comments:this.state.comments})):l.a.createElement("div",null,l.a.createElement("button",{onClick:this.handleClick,disabled:this.state.disabled},"Load"),this.state.loading?l.a.createElement("p",null,"Loading..."):null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.d3954628.chunk.js.map