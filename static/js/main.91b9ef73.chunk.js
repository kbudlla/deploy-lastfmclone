(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(e,t,a){},179:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(34),l=a.n(s),c=(a(93),a(2)),i=a(3),o=a(5),m=a(4),u=a(6),p=a(78),h=a.n(p),d=a(10),g=function(e){return[e.split(".")[0]+".",e.split(".")[1]].join("")+"..."},E=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={bio:g(a.props.bio[a.props.tagName]),read:"more"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"displayAllBio",value:function(){"more"===this.state.read?this.setState({bio:this.props.bio[this.props.tagName],read:"less"}):this.setState({bio:g(this.props.bio[this.props.tagName]),read:"more"})}},{key:"render",value:function(){var e=this,t={background:"repeating-linear-gradient(\n        to bottom,\n        rgba(0, 0, 0, 0.67),\n        rgba(0, 0, 0, 0.67)\n      ), \n      url(".concat(this.props.tagTopArtists[this.props.tagName][0].image[4]["#text"],")"),backgroundSize:"cover"};return r.a.createElement("div",{className:"top-artist",style:t},r.a.createElement("div",{className:"artist-info"},r.a.createElement("div",{className:"tag-link"},r.a.createElement("a",{href:"https://google.com",alt:"",style:{color:"white"}},this.props.tagName.toUpperCase())),r.a.createElement("div",null,"Featured Artist:"," ",r.a.createElement("span",{style:{fontWeight:"bold"},className:"artist-name"},this.props.tagTopArtists[this.props.tagName][0].name)),r.a.createElement("div",{className:"bio"},this.state.bio,r.a.createElement("div",{className:"readmore"},r.a.createElement("span",{className:"read",onClick:function(){return e.displayAllBio()}},"read ",this.state.read)))))}}]),t}(n.Component),f=Object(d.b)(function(e){return{bio:e.bio.tagsBio||{},tagTopArtists:e.tagTopArtists.tagTopArtists||{}}},null)(E),b=function(e){return r.a.createElement("div",{className:"col-sm-4 col-xs-4"},r.a.createElement("div",{className:"grid-element"},r.a.createElement("span",{style:{color:"red"}},"#"),e.name))},v=function(e){return r.a.createElement("div",null,e.tags.map(function(e,t){return r.a.createElement(b,{name:e.name,key:t})}))},N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={bio:g(a.props.bio[a.props.tagName]),read:"more"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"displayAllBio",value:function(){"more"===this.state.read?this.setState({bio:this.props.bio[this.props.tagName],read:"less"}):this.setState({bio:g(this.props.bio[this.props.tagName]),read:"more"})}},{key:"render",value:function(){var e=this,t={background:"repeating-linear-gradient(\n        to bottom,\n        rgba(0, 0, 0, 0.67),\n        rgba(0, 0, 0, 0.67)\n      ), \n      url(".concat(this.props.tagTopArtists[this.props.tagName][0].image[4]["#text"],")"),backgroundSize:"cover"};return r.a.createElement("div",{className:"top-artist",style:t},r.a.createElement("div",{className:"artist-info"},r.a.createElement("div",{className:"tag-link"},r.a.createElement("a",{href:"https://google.com",alt:"",style:{color:"white"}},this.props.tagName.toUpperCase())),r.a.createElement("div",null,"Featured Artist:"," ",r.a.createElement("span",{style:{fontWeight:"bold"},className:"artist-name"},this.props.tagTopArtists[this.props.tagName][0].name)),r.a.createElement("div",{className:"bio"},this.state.bio,r.a.createElement("div",{className:"readmore"},r.a.createElement("span",{className:"read",onClick:function(){return e.displayAllBio()}},"read ",this.state.read)))))}}]),t}(n.Component),w=Object(d.b)(function(e){return{bio:e.bio.tagsBio||{},tagTopArtists:e.tagTopArtists.tagTopArtists||{}}},null)(N),y=a(25),k=a(27),O=a(24),j=a(38),T=a.n(j),_={artist:{},tags:{},tagsBio:{},tagsTopArtists:{}},A=function(e){return T.a.get("http://ws.audioscrobbler.com//2.0/?method=tag.getinfo&tag=".concat(e,"&api_key=32294161a44c0621caf3a01a6e94b1a5&format=json")).then(function(t){B.dispatch({type:"FETCH_BIO",name:e,data:t.data.tag.wiki.summary})}).catch(function(e){B.dispatch({type:"FETCH_BIO",data:e.response})})},S=function(e){return T.a.get("http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=".concat(e,"&api_key=32294161a44c0621caf3a01a6e94b1a5&format=json")).then(function(t){B.dispatch({type:"FETCH_TAG_TOP_ARTISTS",name:e,data:t.data.topartists.artist})}).catch(function(e){B.dispatch({type:"FETCH_TAG_TOP_ARTISTS",data:e.response})})},C=Object(O.b)({tags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_TAGS":return{tags:Object(k.a)({},e.tags,{toptags:t.data})};default:return e}},bio:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BIO":return{tagsBio:Object(k.a)({},e.tagsBio,Object(y.a)({},t.name,t.data.split(" <a")[0]))};default:return e}},tagTopArtists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_.tagsTopArtists,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_TAG_TOP_ARTISTS":return Object(k.a)({},e,{tagTopArtists:Object(k.a)({},e.tagTopArtists,Object(y.a)({},t.name,t.data))});default:return e}}}),B=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,null),F=B=Object(O.c)(C),H=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={loading:!0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;T.a.get("http://ws.audioscrobbler.com/2.0/?method=user.gettoptags&user=rj&api_key=32294161a44c0621caf3a01a6e94b1a5&format=json").then(function(e){B.dispatch({type:"FETCH_TAGS",data:e.data.toptags.tag})}).catch(function(e){B.dispatch({type:"FETCH_TAGS",data:e.response})}).then(function(){Promise.all([A(e.props.tags[0].name),S(e.props.tags[0].name),A(e.props.tags[1].name),S(e.props.tags[1].name)]).then(function(){e.setState({loading:!1})})})}},{key:"renderContent",value:function(){var e=this.props.tags,t=e[0],a=e[1],n=[e[2],e[3],e[4]],s=[e[5],e[6],e[7]],l=[e[8],e[9],e[10]],c=[e[11],e[12],e[13]],i=[e[14],e[15],e[16]],o=[e[17],e[18],e[19]];return this.state.loading?r.a.createElement("div",{className:"loader-container"},r.a.createElement(h.a,{type:"Audio",color:"#black",height:"250",width:"250"})):r.a.createElement("div",null,r.a.createElement("div",{className:"tags-container1"},r.a.createElement("div",{className:"top-artist1"},r.a.createElement(f,{tagName:t.name,loading:this.state.loading})),r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"row"},r.a.createElement(v,{tags:n})),r.a.createElement("div",{className:"row"},r.a.createElement(v,{tags:s})),r.a.createElement("div",{className:"row"},r.a.createElement(v,{tags:l})))),r.a.createElement("div",{className:"tags-container2"},r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"row"},r.a.createElement(v,{tags:c})),r.a.createElement("div",{className:"row"},r.a.createElement(v,{tags:i})),r.a.createElement("div",{className:"row"},r.a.createElement(v,{tags:o}))),r.a.createElement("div",{className:"top-artist2"},r.a.createElement(w,{tagName:a.name,loading:this.state.loading}))))}},{key:"render",value:function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement("div",{className:"section-title"},r.a.createElement("div",{className:"title"},r.a.createElement("div",null,"Tags to explore"),r.a.createElement("div",{className:"line"}))),this.renderContent())}}]),t}(n.Component),I=Object(d.b)(function(e){return{tags:e.tags.tags.toptags||[]}},null)(H),G={color:"#666666",fontSize:"11pt"},x=function(){return r.a.createElement("div",null,r.a.createElement("footer",{id:"myFooter"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("h2",{className:"logo"},r.a.createElement("a",{href:"http://localhost:3000"}," ",r.a.createElement("img",{className:"logo-img",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Lastfm_logo.svg/1280px-Lastfm_logo.svg.png",alt:""})))),r.a.createElement("div",{className:"col-sm-2"},r.a.createElement("h5",{style:G},"COMPANY"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.last.fm/about",target:"_blank"},"About last.fm")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://localhost:3000/signin",target:"_blank"},"Sign in")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.last.fm/about/jobs",target:"_blank"},"Jobs")))),r.a.createElement("div",{className:"col-sm-2"},r.a.createElement("h5",{style:G},"HELP"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.last.fm/about/trackmymusic",target:"_blank"},"Track My Music")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://getsatisfaction.com/lastfm",target:"_blank"},"Community Support")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.last.fm/help/guidelines",target:"_blank"},"Community Guidelines")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://cbsi.force.com/CBSi/lastfm",target:"_blank"},"Help")))),r.a.createElement("div",{className:"col-sm-2"},r.a.createElement("h5",{style:G},"GOODIES"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.last.fm/about/trackmymusic",target:"_blank"},"Download Scrobbler")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.last.fm/api",target:"_blank"},"Developer API")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.last.fm/music/+free-music-downloads",target:"_blank"},"Free Music Downloads")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://store.last.fm/",target:"_blank"},"Merchandise")))),r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("div",{className:"social-networks"},r.a.createElement("a",{href:"https://twitter.com/lastfm",target:"_blank",className:"twitter"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{href:"https://www.facebook.com/lastfm",target:"_blank",className:"facebook"},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{href:"https://www.youtube.com/user/lastfm",target:"_blank",className:"google"},r.a.createElement("i",{className:"fa fa-youtube"}))),r.a.createElement("a",{href:"https://www.last.fm/about/contact",target:"_blank"},r.a.createElement("button",{type:"button",className:"btn btn-default",style:{fontSize:"11pt"}},"Contact us"))))),r.a.createElement("div",{className:"footer-copyright"},r.a.createElement("p",null,"\xa9 2019 SoftUp Technologies "))))},L=(a(28),a(180)),M=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"icons"},r.a.createElement("div",null,r.a.createElement(L.a,{type:"fast-backward",className:"music-icons"})),r.a.createElement("div",null,r.a.createElement(L.a,{type:"play-circle",className:"music-icons"})),r.a.createElement("div",null,r.a.createElement(L.a,{type:"fast-forward",className:"music-icons"}))),r.a.createElement("a",{className:"header-center",href:"http://localhost:3000"},r.a.createElement("img",{className:"header-logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Lastfm_logo.svg/1280px-Lastfm_logo.svg.png",alt:""})),r.a.createElement("div",{className:"header-menu"},r.a.createElement("div",null,r.a.createElement(L.a,{type:"search",className:"search-icon",theme:"",onClick:function(){return e.props.change(!0)}})),r.a.createElement("div",null,r.a.createElement("a",{className:"menu-item",href:"http://localhost:3000"},r.a.createElement("span",null,"HOME"))),r.a.createElement("div",null,r.a.createElement("a",{className:"menu-item",href:"http://localhost:3000"},r.a.createElement("span",null,"LOGIN"))),r.a.createElement("div",null,r.a.createElement("a",{className:"menu-item",href:"http://localhost:3000"},r.a.createElement("span",null,"LOGOUT"))))))}}]),t}(n.Component),P=function(e){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"search-bar"},r.a.createElement("input",{className:"search-input",type:"text",placeholder:"Search for music..."})),r.a.createElement("div",{className:"search-clicked-icons"},r.a.createElement("div",{className:"closed",onClick:function(){return e.change(!1)}},r.a.createElement(L.a,{type:"close",className:"close-icon-clicked"})),r.a.createElement("div",{className:"search-clicked"},r.a.createElement(L.a,{type:"search",className:"search-icon-clicked"}))))},D=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={searchVisibility:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleSearchBarVisibility",value:function(e){this.setState({searchVisibility:e})}},{key:"render",value:function(){var e=this;return!1===this.state.searchVisibility?r.a.createElement(M,{change:function(t){return e.handleSearchBarVisibility(t)}}):r.a.createElement(P,{change:function(t){return e.handleSearchBarVisibility(t)}})}}]),t}(n.Component),V=(a(178),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(D,null),r.a.createElement(I,null),r.a.createElement(x,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(d.a,{store:F},r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},88:function(e,t,a){e.exports=a(179)},93:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.91b9ef73.chunk.js.map