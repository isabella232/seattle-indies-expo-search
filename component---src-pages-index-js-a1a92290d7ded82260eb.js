(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{154:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(308),s=t(303),i=t(307),o=t(306),c=t(302),m=function(){return l.a.createElement("header",{className:"homepage-header"},l.a.createElement("video",{className:"homepage-header__bgvideo",preload:"auto",loop:!0,muted:!0,autoPlay:!0,poster:"https://six.seattleindies.org/assets/videos/hero.jpg"},l.a.createElement("source",{src:"https://six.seattleindies.org/assets/videos/hero.webm",type:"video/webm"}),l.a.createElement("source",{src:"https://six.seattleindies.org/assets/videos/hero.mp4",type:"video/mp4"}),l.a.createElement("source",{src:"https://six.seattleindies.org/assets/videos/hero-mobile.mp4",type:"video/mp4",media:"(max-width: 600px)"})),l.a.createElement("h1",{className:"homepage-header__title"},l.a.createElement("span",{className:"ani-reveal"},"Seattle"),l.a.createElement("span",{className:"ani-reveal ani-reveal--lighter"},"Indies"),l.a.createElement("span",{className:"ani-reveal ani-reveal--lightest"},"Expo")),l.a.createElement("h2",{className:"homepage-header__subtitle ani-fadein"},"Search through all the innovative games that an indie festival in the PNW has exhibited."))},u=(t(41),t(66),t(221)),d=t.n(u),p=Object(r.createContext)({isModalOpen:!1,openModal:function(){},closeModal:function(){},modalContent:"",updateModalContent:function(){}}),h=function(e){var a=e.children,t=Object(r.useState)(!1),n=t[0],s=t[1],i=Object(r.useState)(""),o=i[0],c=i[1],m=function(){return s(!1)},u={isModalOpen:n,openModal:function(){return s(!0)},closeModal:m,modalContent:o,updateModal:function(e){return c(e)}};return l.a.createElement(p.Provider,{value:u},a,l.a.createElement(d.a,{isOpen:n,onRequestClose:m,className:"modal-wrapper",overlayClassName:"modal-overlay",contentLabel:"Game Details"},o&&l.a.createElement(v,{game:o})))};d.a.setAppElement("#___gatsby");var E=function(e){var a=e&&JSON.parse(e.raw);if(!a)return!1;var t={},r="youtube"===a.host,l=r?"https://www.youtube.com/embed/":"https://player.vimeo.com/video/",n=r?"?showinfo=0&autohide=1&autoplay=1":"?title=0&portait=0&byline=0&autoplay=1";t.src=""+l+a.id+n;var s=r?"https://www.youtube.com/watch?v=":"https://www.vimeo.com/";return t.url=""+s+a.id,t.thumb=r?"https://img.youtube.com/vi/"+a.id+"/mqdefault.jpg":"https://i.vimeocdn.com/video/"+a.thumbnailId+"_260x146.jpg",t},f=function(e){var a=e.children;return l.a.createElement("div",{className:"line-up u-word-break"},a)},g=function(e){var a=e.result,t=a.title.raw.replace(/&amp;/gi,"&").replace(/&shy;/gi,"­");return l.a.createElement(p.Consumer,null,function(e){var r=e.openModal,n=e.updateModal,s=!(a.modal&&"false"===a.modal.raw)?{onClick:function(){n(a),r()}}:{href:a.website.raw,target:"_blank",rel:"noreferrer noopener"};return l.a.createElement("a",Object.assign({className:"game"},s),l.a.createElement("img",{src:a.logo.raw,alt:t}),l.a.createElement("div",{className:"game__overlay"},l.a.createElement("h3",{className:"game__title"},t),l.a.createElement("h4",{className:"game__studio"},a.studio.raw)))})},v=function(e){var a=e.game,t=a.screenshots.raw||[],n=a.platforms.raw||[],s=E(a.video),i=Object(r.useState)(!1),o=i[0],c=i[1],m=Object(r.useState)(t[0]),u=m[0],d=m[1];return l.a.createElement("article",{className:"game-modal"},l.a.createElement("aside",{className:"game-modal__media"},!o&&l.a.createElement("img",{alt:"",src:u}),s&&o&&l.a.createElement("div",{className:"game-modal__video-wrapper"},l.a.createElement("iframe",{src:s.src,width:"560",height:"253",frameBorder:"0",allowFullScreen:!0})),l.a.createElement("div",{className:"game-modal__media-select"},s&&l.a.createElement("a",{href:s.url,onClick:function(e){e.preventDefault(),c(!0)},className:"game-modal__video-thumbnail",target:"_blank",rel:"noopener"},l.a.createElement("img",{src:s.thumb,alt:""})),t.map(function(e){return l.a.createElement("a",{href:e,onClick:function(a){a.preventDefault(),d(e),c(!1)},target:"_blank",rel:"noopener noreferrer",key:e},l.a.createElement("img",{className:"js-game-media-select","data-media":"image",src:e,alt:""}))}))),l.a.createElement("section",{className:"game-modal__copy"},l.a.createElement("h1",null,a.title.raw),l.a.createElement("ul",{className:"game-modal__details"},l.a.createElement("li",null,l.a.createElement("strong",null,"Show Year:")," ",a.year.raw),l.a.createElement("li",null,l.a.createElement("strong",null,"Developers:")," ",a.studio.raw),n&&l.a.createElement("li",null,l.a.createElement("strong",null,"Platforms:")," ",n.join(", "))),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.description.raw}}),l.a.createElement("a",{className:"game-modal__cta button button--important",href:a.website.raw,target:"_blank",rel:"noopener noreferrer"},"Visit Game Website")))},w=t(305),y=t(304),b=t(310),_=t(311),N=t(309),S=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(w.a,{autocompleteSuggestions:!0,inputView:function(e){var a=e.getAutocomplete,t=e.getInputProps,r=e.getButtonProps;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"sui-search-box__wrapper"},l.a.createElement("input",t({placeholder:"Search games"})),a()),l.a.createElement("button",r(),l.a.createElement("svg",{viewBox:"0 0 250 250",width:"20",height:"20",role:"img"},l.a.createElement("title",null,"Search"),l.a.createElement("path",{d:"M244.186 214.604l-54.379-54.378c-.289-.289-.628-.491-.93-.76 10.7-16.231 16.945-35.66 16.945-56.554C205.822 46.075 159.747 0 102.911 0S0 46.075 0 102.911c0 56.835 46.074 102.911 102.91 102.911 20.895 0 40.323-6.245 56.554-16.945.269.301.47.64.759.929l54.38 54.38c8.169 8.168 21.413 8.168 29.583 0 8.168-8.169 8.168-21.413 0-29.582zm-141.275-44.458c-37.134 0-67.236-30.102-67.236-67.235 0-37.134 30.103-67.236 67.236-67.236 37.132 0 67.235 30.103 67.235 67.236s-30.103 67.235-67.235 67.235z"}))))}}),l.a.createElement(y.a,{field:"year",label:"Year",filterType:"any"}),l.a.createElement(y.a,{field:"platforms",label:"Platform",filterType:"any"}),l.a.createElement(y.a,{field:"players",label:"Players"}),l.a.createElement(y.a,{field:"studio",label:"Game Studio",isFilterable:!0,filterType:"any"}))},k=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,null),l.a.createElement(_.a,{options:[10,25,50]}),l.a.createElement(N.a,{label:"Sort by",sortOptions:[{name:"Relevance",value:"",direction:""},{name:"Title (A-Z)",value:"title",direction:"asc"},{name:"Title (Z-A)",value:"title",direction:"desc"},{name:"Year (oldest)",value:"year",direction:"asc"},{name:"Year (newest)",value:"year",direction:"desc"}]}))},x=function(){return l.a.createElement("footer",{className:"site-footer container"},l.a.createElement("section",{className:"site-footer__section"},"This is an experimental demo in implementing Swiftype's",l.a.createElement("br",null),l.a.createElement("a",{className:"underlined",href:"https://swiftype.com/search-ui"},"Search UI")," ","and"," ",l.a.createElement("a",{className:"underlined",href:"https://swiftype.com/app-search"},"App Search"),". Thanks for checking it out!"),l.a.createElement("section",{className:"site-footer__section site-footer__socials"},l.a.createElement("a",{className:"underlined",href:"https://six.seattleindies.org/"},"Visit the main Seattle Indies Expo site here!")))};t(245);t.d(a,"default",function(){return j});var C={apiConnector:new n.a({searchKey:"search-iwy7kncizytudu9oc27tky7e",engineName:"indie-games",hostIdentifier:"host-9sbnnz"}),autocompleteQuery:{suggestions:{types:{documents:{fields:["title","studio"]}},size:5}},searchQuery:{search_fields:{title:{},studio:{}},result_fields:{title:{raw:{}},studio:{raw:{}},description:{raw:{}},platforms:{raw:{}},players:{raw:{}},website:{raw:{}},logo:{raw:{}},logo_animated:{raw:{}},screenshots:{raw:{}},video:{raw:{}},year:{raw:{}},modal:{raw:{}}},facets:{year:{type:"value",size:5},platforms:{type:"value",size:100},players:{type:"value",size:25},studio:{type:"value",size:100}},disjunctiveFacets:["year","platforms","studio"]},initialState:{resultsPerPage:25,filters:[{field:"year",values:[2018],type:"any"}]}};function j(){return l.a.createElement(s.a,{config:C},l.a.createElement(h,null,l.a.createElement(m,null),l.a.createElement(c.a,{bodyContent:l.a.createElement(i.a,{view:f,renderResult:g}),sideContent:l.a.createElement(S,null),bodyHeader:l.a.createElement(k,null),bodyFooter:l.a.createElement(o.a,null)}),l.a.createElement(x,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-a1a92290d7ded82260eb.js.map