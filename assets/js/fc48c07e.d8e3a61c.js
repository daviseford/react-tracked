"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[259],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||s;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(6010),s="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7462),r=n(7294),s=n(6010),o=n(2389),i=n(7392),l=n(7094),c=n(2466),u="tabList__CuJ",m="tabItem_LNqP";function d(e){var t,n,o=e.lazy,d=e.block,p=e.defaultValue,f=e.values,N=e.groupId,v=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.l)(y,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var S=null===p?p:null!=(t=null!=p?p:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==S&&!y.some((function(e){return e.value===S})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+S+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.U)(),g=k.tabGroupChoices,T=k.setTabGroupChoices,w=(0,r.useState)(S),P=w[0],x=w[1],F=[],E=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=N){var O=g[N];null!=O&&O!==P&&y.some((function(e){return e.value===O}))&&x(O)}var C=function(e){var t=e.currentTarget,n=F.indexOf(t),a=y[n].value;a!==P&&(E(t),x(a),null!=N&&T(N,String(a)))},L=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=F.indexOf(e.currentTarget)+1;n=null!=(a=F[r])?a:F[0];break;case"ArrowLeft":var s,o=F.indexOf(e.currentTarget)-1;n=null!=(s=F[o])?s:F[F.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},v)},y.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return F.push(e)},onKeyDown:L,onFocus:C,onClick:C},o,{className:(0,s.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":P===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(h.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function p(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},9812:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return N},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return p}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),o=n(5488),i=n(5162),l=["components"],c={id:"tutorial-redux-01",title:"Tutorial with react-redux - Person Name",sidebar_label:"Person Name (redux)"},u=void 0,m={unversionedId:"tutorial-redux-01",id:"tutorial-redux-01",title:"Tutorial with react-redux - Person Name",description:"This tutorial shows tiny example code with react-redux.",source:"@site/docs/tutorial-redux-01.md",sourceDirName:".",slug:"/tutorial-redux-01",permalink:"/docs/tutorial-redux-01",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-redux-01",title:"Tutorial with react-redux - Person Name",sidebar_label:"Person Name (redux)"},sidebar:"docs",previous:{title:"ToDo App (async)",permalink:"/docs/tutorial-04"},next:{title:"Person Name (zustand)",permalink:"/docs/tutorial-zustand-01"}},d={},p=[{value:"With useSelector",id:"with-useselector",level:2},{value:"With useTrackedSelector",id:"with-usetrackedselector",level:2}],f={toc:p};function N(e){var t=e.components,n=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This tutorial shows tiny example code with react-redux.\nThere are two variants.\nThe first one is with useSelector.\nThe second one is with useTrackedSelector."),(0,s.kt)("h2",{id:"with-useselector"},"With useSelector"),(0,s.kt)(o.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},(0,s.kt)(i.Z,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import * as React from 'react';\nimport { useState } from 'react';\nimport { createStore } from 'redux';\nimport { Provider, useDispatch, useSelector } from 'react-redux';\n\nconst initialState = {\n  firstName: 'React',\n  lastName: 'Tracked',\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case 'setFirstName':\n      return { ...state, firstName: action.firstName };\n    case 'setLastName':\n      return { ...state, lastName: action.lastName };\n    default:\n      return state;\n  }\n};\n\nconst store = createStore(reducer);\n\nconst EditPerson = () => {\n  const dispatch = useDispatch();\n  const firstName = useSelector((state) => state.firstName);\n  const lastName = useSelector((state) => state.lastName);\n  const setFirstName = (e) => {\n    const firstName = e.target.value;\n    dispatch({ type: 'setFirstName', firstName });\n  };\n  const setLastName = (e) => {\n    const lastName = e.target.value;\n    dispatch({ type: 'setLastName', lastName });\n  };\n  return (\n    <div>\n      <div>\n        First Name:\n        <input value={firstName} onChange={setFirstName} />\n      </div>\n      <div>\n        Last Name:\n        <input value={lastName} onChange={setLastName} />\n      </div>\n    </div>\n  );\n};\n\nconst ShowPerson = () => {\n  const [onlyFirstName, setOnlyFirstName] = useState(false);\n  const firstName = useSelector((state) => state.firstName);\n  const lastName = useSelector((state) =>\n    onlyFirstName ? null : state.lastName,\n  );\n  return (\n    <div>\n      <button type=\"button\" onClick={() => setOnlyFirstName((s) => !s)}>\n        {onlyFirstName ? 'Showing only first name' : 'Showing full name'}\n      </button>\n      {onlyFirstName ? (\n        <div>First Name: {firstName}</div>\n      ) : (\n        <div>\n          Full Name: {firstName} {lastName}\n        </div>\n      )}\n    </div>\n  );\n};\n\nconst App = () => {\n  return (\n    <Provider store={store}>\n      <EditPerson />\n      <ShowPerson />\n    </Provider>\n  );\n};\n\nexport default App;\n\n"))),(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as React from 'react';\nimport { useState } from 'react';\nimport { createStore } from 'redux';\nimport { Provider, useDispatch, useSelector } from 'react-redux';\n\nconst initialState = {\n  firstName: 'React',\n  lastName: 'Tracked',\n};\n\ntype State = typeof initialState;\n\ntype Action =\n  | { type: 'setFirstName'; firstName: string }\n  | { type: 'setLastName'; lastName: string };\n\nconst reducer = (state = initialState, action: Action) => {\n  switch (action.type) {\n    case 'setFirstName':\n      return { ...state, firstName: action.firstName };\n    case 'setLastName':\n      return { ...state, lastName: action.lastName };\n    default:\n      return state;\n  }\n};\n\nconst store = createStore(reducer);\n\nconst EditPerson = () => {\n  const dispatch = useDispatch();\n  const firstName = useSelector((state: State) => state.firstName);\n  const lastName = useSelector((state: State) => state.lastName);\n  const setFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {\n    const firstName = e.target.value;\n    dispatch({ type: 'setFirstName', firstName });\n  };\n  const setLastName = (e: React.ChangeEvent<HTMLInputElement>) => {\n    const lastName = e.target.value;\n    dispatch({ type: 'setLastName', lastName });\n  };\n  return (\n    <div>\n      <div>\n        First Name:\n        <input value={firstName} onChange={setFirstName} />\n      </div>\n      <div>\n        Last Name:\n        <input value={lastName} onChange={setLastName} />\n      </div>\n    </div>\n  );\n};\n\nconst ShowPerson = () => {\n  const [onlyFirstName, setOnlyFirstName] = useState(false);\n  const firstName = useSelector((state: State) => state.firstName);\n  const lastName = useSelector((state: State) =>\n    onlyFirstName ? null : state.lastName,\n  );\n  return (\n    <div>\n      <button type=\"button\" onClick={() => setOnlyFirstName((s) => !s)}>\n        {onlyFirstName ? 'Showing only first name' : 'Showing full name'}\n      </button>\n      {onlyFirstName ? (\n        <div>First Name: {firstName}</div>\n      ) : (\n        <div>\n          Full Name: {firstName} {lastName}\n        </div>\n      )}\n    </div>\n  );\n};\n\nconst App = () => {\n  return (\n    <Provider store={store}>\n      <EditPerson />\n      <ShowPerson />\n    </Provider>\n  );\n};\n\nexport default App;\n\n")))),(0,s.kt)("p",null,"It's a bit tricky to make a selector conditional."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/react-typescript-forked-r9kw1"},"CodeSandbox")),(0,s.kt)("h2",{id:"with-usetrackedselector"},"With useTrackedSelector"),(0,s.kt)(o.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},(0,s.kt)(i.Z,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import * as React from 'react';\nimport { useState } from 'react';\nimport { createStore } from 'redux';\nimport { Provider, useDispatch, useSelector } from 'react-redux';\nimport { createTrackedSelector } from 'react-tracked';\n\nconst initialState = {\n  firstName: 'React',\n  lastName: 'Tracked',\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case 'setFirstName':\n      return { ...state, firstName: action.firstName };\n    case 'setLastName':\n      return { ...state, lastName: action.lastName };\n    default:\n      return state;\n  }\n};\n\nconst store = createStore(reducer);\n\nconst useTrackedSelector = createTrackedSelector(useSelector);\n\nconst EditPerson = () => {\n  const dispatch = useDispatch();\n  const state = useTrackedSelector();\n  const setFirstName = (e) => {\n    const firstName = e.target.value;\n    dispatch({ type: 'setFirstName', firstName });\n  };\n  const setLastName = (e) => {\n    const lastName = e.target.value;\n    dispatch({ type: 'setLastName', lastName });\n  };\n  return (\n    <div>\n      <div>\n        First Name:\n        <input value={state.firstName} onChange={setFirstName} />\n      </div>\n      <div>\n        Last Name:\n        <input value={state.lastName} onChange={setLastName} />\n      </div>\n    </div>\n  );\n};\n\nconst ShowPerson = () => {\n  const state = useTrackedSelector();\n  const [onlyFirstName, setOnlyFirstName] = useState(false);\n  return (\n    <div>\n      <button type=\"button\" onClick={() => setOnlyFirstName((s) => !s)}>\n        {onlyFirstName ? 'Showing only first name' : 'Showing full name'}\n      </button>\n      {onlyFirstName ? (\n        <div>First Name: {state.firstName}</div>\n      ) : (\n        <div>\n          Full Name: {state.firstName} {state.lastName}\n        </div>\n      )}\n    </div>\n  );\n};\n\nconst App = () => {\n  return (\n    <Provider store={store}>\n      <EditPerson />\n      <ShowPerson />\n    </Provider>\n  );\n};\n\nexport default App;\n\n"))),(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as React from 'react';\nimport { useState } from 'react';\nimport { createStore } from 'redux';\nimport { Provider, useDispatch, useSelector } from 'react-redux';\nimport { createTrackedSelector } from 'react-tracked';\n\nconst initialState = {\n  firstName: 'React',\n  lastName: 'Tracked',\n};\n\ntype State = typeof initialState;\n\ntype Action =\n  | { type: 'setFirstName'; firstName: string }\n  | { type: 'setLastName'; lastName: string };\n\nconst reducer = (state = initialState, action: Action) => {\n  switch (action.type) {\n    case 'setFirstName':\n      return { ...state, firstName: action.firstName };\n    case 'setLastName':\n      return { ...state, lastName: action.lastName };\n    default:\n      return state;\n  }\n};\n\nconst store = createStore(reducer);\n\nconst useTrackedSelector = createTrackedSelector<State>(useSelector);\n\nconst EditPerson = () => {\n  const dispatch = useDispatch();\n  const state = useTrackedSelector();\n  const setFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {\n    const firstName = e.target.value;\n    dispatch({ type: 'setFirstName', firstName });\n  };\n  const setLastName = (e: React.ChangeEvent<HTMLInputElement>) => {\n    const lastName = e.target.value;\n    dispatch({ type: 'setLastName', lastName });\n  };\n  return (\n    <div>\n      <div>\n        First Name:\n        <input value={state.firstName} onChange={setFirstName} />\n      </div>\n      <div>\n        Last Name:\n        <input value={state.lastName} onChange={setLastName} />\n      </div>\n    </div>\n  );\n};\n\nconst ShowPerson = () => {\n  const state = useTrackedSelector();\n  const [onlyFirstName, setOnlyFirstName] = useState(false);\n  return (\n    <div>\n      <button type=\"button\" onClick={() => setOnlyFirstName((s) => !s)}>\n        {onlyFirstName ? 'Showing only first name' : 'Showing full name'}\n      </button>\n      {onlyFirstName ? (\n        <div>First Name: {state.firstName}</div>\n      ) : (\n        <div>\n          Full Name: {state.firstName} {state.lastName}\n        </div>\n      )}\n    </div>\n  );\n};\n\nconst App = () => {\n  return (\n    <Provider store={store}>\n      <EditPerson />\n      <ShowPerson />\n    </Provider>\n  );\n};\n\nexport default App;\n\n")))),(0,s.kt)("p",null,"This works just the same without the tricky selector."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/react-typescript-forked-n2olx"},"CodeSandbox")))}N.isMDXComponent=!0}}]);