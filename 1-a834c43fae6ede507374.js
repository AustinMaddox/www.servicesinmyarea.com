(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(141),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var u=a(147),l=a.n(u);a.d(t,"PageRenderer",function(){return l.a});var d=a(48);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},143:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),s=a(4),o=a.n(s),c=a(148),u=a.n(c),l=a(142);function d(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,o=e.title;return i.a.createElement(l.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d;var p="1025518380"},144:function(e,t,a){"use strict";var n=a(151),r=a(0),i=a.n(r),s=a(4),o=a.n(s),c=a(142),u=a(148),l=function(e){var t=e.siteTitle;return i.a.createElement("header",{className:"flex justify-center mb-8 mt-32"},i.a.createElement("h1",{className:"text-5xl"},i.a.createElement("span",{className:"font-black text-teal-dark"},"Find")," ",t))};l.propTypes={siteTitle:o.a.string},l.defaultProps={siteTitle:""};var d=l,p=(a(160),function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.Helmet,{bodyAttributes:{class:"antialiased font-sans"}}),i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",null,t),i.a.createElement("footer",{className:"flex justify-center mt-10"},i.a.createElement("div",{className:"text-grey text-xs"},"Copyright © ",(new Date).getFullYear()," SIMA. All rights reserved.")))},data:n})});p.propTypes={children:o.a.node.isRequired};t.a=p},147:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Services In My Area"}}}}},152:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(68),c=a(2),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=u},160:function(e,t,a){},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Services In My Area",description:"Cable TV and Satellite Companies in My Area &amp; Internet Service Providers by Zip Code",author:"@_austinmaddox"}}}}}}]);
//# sourceMappingURL=1-a834c43fae6ede507374.js.map