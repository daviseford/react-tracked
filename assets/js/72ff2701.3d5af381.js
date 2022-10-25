"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[301],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),i=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=i(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=i(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||s;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var i=2;i<s;i++)a[i]=n[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return a}});var o=n(7294),r=n(6010),s="tabItem_Ymn6";function a(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,a),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var o=n(7462),r=n(7294),s=n(6010),a=n(2389),l=n(7392),u=n(7094),i=n(2466),d="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,n,a=e.lazy,p=e.block,m=e.defaultValue,f=e.values,T=e.groupId,k=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===m?m:null!=(t=null!=m?m:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,u.U)(),x=b.tabGroupChoices,S=b.setTabGroupChoices,j=(0,r.useState)(h),N=j[0],D=j[1],w=[],I=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=T){var P=x[T];null!=P&&P!==N&&v.some((function(e){return e.value===P}))&&D(P)}var C=function(e){var t=e.currentTarget,n=w.indexOf(t),o=v[n].value;o!==N&&(I(t),D(o),null!=T&&S(T,String(o)))},R=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o,r=w.indexOf(e.currentTarget)+1;n=null!=(o=w[r])?o:w[0];break;case"ArrowLeft":var s,a=w.indexOf(e.currentTarget)-1;n=null!=(s=w[a])?s:w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},k)},v.map((function(e){var t=e.value,n=e.label,a=e.attributes;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return w.push(e)},onKeyDown:R,onFocus:C,onClick:C},a,{className:(0,s.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),a?(0,r.cloneElement)(y.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function m(e){var t=(0,a.Z)();return r.createElement(p,(0,o.Z)({key:String(t)},e))}},7948:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return T},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var o=n(7462),r=n(3366),s=(n(7294),n(3905)),a=n(5488),l=n(5162),u=["components"],i={id:"tutorial-03",title:"Tutorial with createContainer - ToDo App with useState",sidebar_label:"ToDo App (useState+Immer)"},d=void 0,c={unversionedId:"tutorial-03",id:"tutorial-03",title:"Tutorial with createContainer - ToDo App with useState",description:"This tutorial shows example code with useState, Immer and custom hooks.",source:"@site/docs/tutorial-03.md",sourceDirName:".",slug:"/tutorial-03",permalink:"/docs/tutorial-03",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-03",title:"Tutorial with createContainer - ToDo App with useState",sidebar_label:"ToDo App (useState+Immer)"},sidebar:"docs",previous:{title:"ToDo App (useReducer)",permalink:"/docs/tutorial-02"},next:{title:"ToDo App (async)",permalink:"/docs/tutorial-04"}},p={},m=[{value:"src/components/App.js",id:"srccomponentsappjs",level:2},{value:"src/store.js",id:"srcstorejs",level:2},{value:"src/hooks/useTodoList.js",id:"srchooksusetodolistjs",level:2},{value:"src/hooks/useAddTodo.js",id:"srchooksuseaddtodojs",level:2},{value:"src/hooks/useDeleteTodo.js",id:"srchooksusedeletetodojs",level:2},{value:"src/hooks/useToogleTodo.js",id:"srchooksusetoogletodojs",level:2},{value:"src/hooks/useQuery.js",id:"srchooksusequeryjs",level:2},{value:"src/components/TodoList.js",id:"srccomponentstodolistjs",level:2},{value:"src/components/TodoItem.js",id:"srccomponentstodoitemjs",level:2},{value:"src/components/NewTodo.js",id:"srccomponentsnewtodojs",level:2},{value:"src/utils.js",id:"srcutilsjs",level:2},{value:"CodeSandbox",id:"codesandbox",level:2}],f={toc:m};function T(e){var t=e.components,n=(0,r.Z)(e,u);return(0,s.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This tutorial shows example code with useState, ",(0,s.kt)("a",{parentName:"p",href:"https://immerjs.github.io/immer/"},"Immer")," and custom hooks."),(0,s.kt)("h2",{id:"srccomponentsappjs"},"src/components/App.js"),(0,s.kt)(a.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},(0,s.kt)(l.Z,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\n\nimport { Provider } from '../store';\nimport TodoList from './TodoList';\n\nconst App = () => (\n  <Provider>\n    <TodoList />\n  </Provider>\n);\n\nexport default App;\n\n"))),(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import React from 'react';\n\nimport { Provider } from '../store';\nimport TodoList from './TodoList';\n\nconst App = () => (\n  <Provider>\n    <TodoList />\n  </Provider>\n);\n\nexport default App;\n\n")))),(0,s.kt)("p",null,"This is the root component.\nIt wraps TodoList with Provider."),(0,s.kt)("h2",{id:"srcstorejs"},"src/store.js"),(0,s.kt)(a.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},(0,s.kt)(l.Z,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useState, useCallback } from 'react';\nimport { createContainer } from 'react-tracked';\nimport produce from 'immer';\n\nconst initialState = {\n  todos: [\n    { id: 1, title: 'Wash dishes' },\n    { id: 2, title: 'Study JS' },\n    { id: 3, title: 'Buy ticket' },\n  ],\n  query: '',\n};\n\nconst useValue = () => useState(initialState);\n\nconst {\n  Provider,\n  useTrackedState,\n  useUpdate: useSetState,\n} = createContainer(useValue);\n\nconst useSetDraft = () => {\n  const setState = useSetState();\n  return useCallback(\n    (draftUpdater) => {\n      setState(produce(draftUpdater));\n    },\n    [setState],\n  );\n};\n\nexport { Provider, useTrackedState, useSetDraft };\n\n"))),(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useState, useCallback } from 'react';\nimport { createContainer } from 'react-tracked';\nimport produce, { Draft } from 'immer';\n\ntype TodoType = {\n  id: number;\n  title: string;\n  completed?: boolean;\n};\n\nexport type State = {\n  todos: TodoType[];\n  query: string;\n};\n\nconst initialState: State = {\n  todos: [\n    { id: 1, title: 'Wash dishes' },\n    { id: 2, title: 'Study JS' },\n    { id: 3, title: 'Buy ticket' },\n  ],\n  query: '',\n};\n\nconst useValue = () => useState(initialState);\n\nconst {\n  Provider,\n  useTrackedState,\n  useUpdate: useSetState,\n} = createContainer(useValue);\n\nconst useSetDraft = () => {\n  const setState = useSetState();\n  return useCallback(\n    (draftUpdater: (draft: Draft<State>) => void) => {\n      setState(produce(draftUpdater));\n    },\n    [setState],\n  );\n};\n\nexport { Provider, useTrackedState, useSetDraft };\n\n")))),(0,s.kt)("p",null,"The store is created by useState.\nuseUpdate is renamed to useSetState,\nand based on it, useSetDraft with Immer is exported."),(0,s.kt)("h2",{id:"srchooksusetodolistjs"},"src/hooks/useTodoList.js"),(0,s.kt)(a.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},(0,s.kt)(l.Z,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useTrackedState } from '../store';\n\nexport const useTodoList = () => {\n  const state = useTrackedState();\n  return state.todos;\n};\n\n"))),(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useTrackedState } from '../store';\n\nexport const useTodoList = () => {\n  const state = useTrackedState();\n  return state.todos;\n};\n\n")))),(0,s.kt)("p",null,"This is a custom hook to simply return ",(0,s.kt)("inlineCode",{parentName:"p"},"todos"),"."),(0,s.kt)("h2",{id:"srchooksuseaddtodojs"},"src/hooks/useAddTodo.js"),(0,s.kt)(a.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},(0,s.kt)(l.Z,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useCallback } from 'react';\n\nimport { useSetDraft } from '../store';\n\nlet nextId = 100;\n\nexport const useAddTodo = () => {\n  const setDraft = useSetDraft();\n  return useCallback(\n    (title) => {\n      setDraft((draft) => {\n        draft.todos.push({ id: nextId++, title });\n      });\n    },\n    [setDraft],\n  );\n};\n\n"))),(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useCallback } from 'react';\n\nimport { useSetDraft } from '../store';\n\nlet nextId = 100;\n\nexport const useAddTodo = () => {\n  const setDraft = useSetDraft();\n  return useCallback(\n    (title) => {\n      setDraft((draft) => {\n        draft.todos.push({ id: nextId++, title });\n      });\n    },\n    [setDraft],\n  );\n};\n\n")))),(0,s.kt)("p",null,"This is a custom hook to return ",(0,s.kt)("inlineCode",{parentName:"p"},"addTodo")," function."),(0,s.kt)("h2",{id:"srchooksusedeletetodojs"},"src/hooks/useDeleteTodo.js"),(0,s.kt)(a.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},(0,s.kt)(l.Z,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useCallback } from 'react';\n\nimport { useSetDraft } from '../store';\n\nexport const useDeleteTodo = () => {\n  const setDraft = useSetDraft();\n  return useCallback(\n    (id) => {\n      setDraft((draft) => {\n        const index = draft.todos.findIndex((todo) => todo.id === id);\n        if (index >= 0) draft.todos.splice(index, 1);\n      });\n    },\n    [setDraft],\n  );\n};\n\n"))),(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useCallback } from 'react';\n\nimport { useSetDraft } from '../store';\n\nexport const useDeleteTodo = () => {\n  const setDraft = useSetDraft();\n  return useCallback(\n    (id: number) => {\n      setDraft((draft) => {\n        const index = draft.todos.findIndex((todo) => todo.id === id);\n        if (index >= 0) draft.todos.splice(index, 1);\n      });\n    },\n    [setDraft],\n  );\n};\n\n")))),(0,s.kt)("p",null,"This is a custom hook to return ",(0,s.kt)("inlineCode",{parentName:"p"},"deleteTodo")," function."),(0,s.kt)("h2",{id:"srchooksusetoogletodojs"},"src/hooks/useToogleTodo.js"),(0,s.kt)(a.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},(0,s.kt)(l.Z,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useCallback } from 'react';\n\nimport { useSetDraft } from '../store';\n\nexport const useToggleTodo = () => {\n  const setDraft = useSetDraft();\n  return useCallback(\n    (id) => {\n      setDraft((draft) => {\n        const todo = draft.todos.find((todo) => todo.id === id);\n        if (todo) todo.completed = !todo.completed;\n      });\n    },\n    [setDraft],\n  );\n};\n\n"))),(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useCallback } from 'react';\n\nimport { useSetDraft } from '../store';\n\nexport const useToggleTodo = () => {\n  const setDraft = useSetDraft();\n  return useCallback(\n    (id: number) => {\n      setDraft((draft) => {\n        const todo = draft.todos.find((todo) => todo.id === id);\n        if (todo) todo.completed = !todo.completed;\n      });\n    },\n    [setDraft],\n  );\n};\n\n")))),(0,s.kt)("p",null,"This is a custom hook to return ",(0,s.kt)("inlineCode",{parentName:"p"},"toggleTodo")," function."),(0,s.kt)("h2",{id:"srchooksusequeryjs"},"src/hooks/useQuery.js"),(0,s.kt)(a.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},(0,s.kt)(l.Z,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useCallback } from 'react';\n\nimport { useTrackedState, useSetDraft } from '../store';\n\nexport const useQuery = () => {\n  const state = useTrackedState();\n  const getQuery = () => state.query;\n  const setDraft = useSetDraft();\n  const setQuery = useCallback(\n    (query) => {\n      setDraft((draft) => {\n        draft.query = query;\n      });\n    },\n    [setDraft],\n  );\n  return { getQuery, setQuery };\n};\n\n"))),(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useCallback } from 'react';\n\nimport { useTrackedState, useSetDraft } from '../store';\n\nexport const useQuery = () => {\n  const state = useTrackedState();\n  const getQuery = () => state.query;\n  const setDraft = useSetDraft();\n  const setQuery = useCallback(\n    (query: string) => {\n      setDraft((draft) => {\n        draft.query = query;\n      });\n    },\n    [setDraft],\n  );\n  return { getQuery, setQuery };\n};\n\n")))),(0,s.kt)("p",null,"This is a custom hook to return getQuery and setQuery.\nIt doesn't return ",(0,s.kt)("inlineCode",{parentName:"p"},"state.query")," directly, because\nit will be used conditionally."),(0,s.kt)("h2",{id:"srccomponentstodolistjs"},"src/components/TodoList.js"),(0,s.kt)(a.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},(0,s.kt)(l.Z,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\n\nimport { useTodoList } from '../hooks/useTodoList';\nimport { useQuery } from '../hooks/useQuery';\nimport TodoItem from './TodoItem';\nimport NewTodo from './NewTodo';\n\nconst TodoList = () => {\n  const { getQuery, setQuery } = useQuery();\n  const todos = useTodoList();\n  return (\n    <div>\n      <ul>\n        {todos.map(({ id, title, completed }) => (\n          <TodoItem key={id} id={id} title={title} completed={completed} />\n        ))}\n        <NewTodo />\n      </ul>\n      <div>\n        Highlight Query for incomplete items:\n        <input value={getQuery()} onChange={(e) => setQuery(e.target.value)} />\n      </div>\n    </div>\n  );\n};\n\nexport default TodoList;\n\n"))),(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import React from 'react';\n\nimport { useTodoList } from '../hooks/useTodoList';\nimport { useQuery } from '../hooks/useQuery';\nimport TodoItem from './TodoItem';\nimport NewTodo from './NewTodo';\n\nconst TodoList = () => {\n  const { getQuery, setQuery } = useQuery();\n  const todos = useTodoList();\n  return (\n    <div>\n      <ul>\n        {todos.map(({ id, title, completed }) => (\n          <TodoItem key={id} id={id} title={title} completed={completed} />\n        ))}\n        <NewTodo />\n      </ul>\n      <div>\n        Highlight Query for incomplete items:\n        <input value={getQuery()} onChange={(e) => setQuery(e.target.value)} />\n      </div>\n    </div>\n  );\n};\n\nexport default TodoList;\n\n")))),(0,s.kt)("p",null,"This component is to show the list of ",(0,s.kt)("inlineCode",{parentName:"p"},"TodoItem"),"s,\n",(0,s.kt)("inlineCode",{parentName:"p"},"NewTodo")," to create a new item, and\nClear button to reset notes in all items."),(0,s.kt)("h2",{id:"srccomponentstodoitemjs"},"src/components/TodoItem.js"),(0,s.kt)(a.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},(0,s.kt)(l.Z,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\n\nimport { useQuery } from '../hooks/useQuery';\nimport { useDeleteTodo } from '../hooks/useDeleteTodo';\nimport { useToggleTodo } from '../hooks/useToggleTodo';\nimport { useFlasher } from '../utils';\n\nconst renderHighlight = (title, query) => {\n  if (!query) return title;\n  const index = title.indexOf(query);\n  if (index === -1) return title;\n  return (\n    <>\n      {title.slice(0, index)}\n      <b>{query}</b>\n      {title.slice(index + query.length)}\n    </>\n  );\n};\n\nconst TodoItem = ({ id, title, completed }) => {\n  const { getQuery } = useQuery();\n  const deleteTodo = useDeleteTodo();\n  const toggleTodo = useToggleTodo();\n  return (\n    <li ref={useFlasher()}>\n      <input\n        type=\"checkbox\"\n        checked={!!completed}\n        onChange={() => toggleTodo(id)}\n      />\n      <span\n        style={{\n          textDecoration: completed ? 'line-through' : 'none',\n        }}\n      >\n        {completed ? title : renderHighlight(title, getQuery())}\n      </span>\n      <button onClick={() => deleteTodo(id)}>Delete</button>\n    </li>\n  );\n};\n\nexport default React.memo(TodoItem);\n\n"))),(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import React from 'react';\n\nimport { useQuery } from '../hooks/useQuery';\nimport { useDeleteTodo } from '../hooks/useDeleteTodo';\nimport { useToggleTodo } from '../hooks/useToggleTodo';\nimport { useFlasher } from '../utils';\n\nconst renderHighlight = (title, query) => {\n  if (!query) return title;\n  const index = title.indexOf(query);\n  if (index === -1) return title;\n  return (\n    <>\n      {title.slice(0, index)}\n      <b>{query}</b>\n      {title.slice(index + query.length)}\n    </>\n  );\n};\n\ntype Props = {\n  id: number;\n  title: string;\n  completed?: boolean;\n};\n\nconst TodoItem = ({ id, title, completed }: Props) => {\n  const { getQuery } = useQuery();\n  const deleteTodo = useDeleteTodo();\n  const toggleTodo = useToggleTodo();\n  return (\n    <li ref={useFlasher()}>\n      <input\n        type=\"checkbox\"\n        checked={!!completed}\n        onChange={() => toggleTodo(id)}\n      />\n      <span\n        style={{\n          textDecoration: completed ? 'line-through' : 'none',\n        }}\n      >\n        {completed ? title : renderHighlight(title, getQuery())}\n      </span>\n      <button onClick={() => deleteTodo(id)}>Delete</button>\n    </li>\n  );\n};\n\nexport default React.memo(TodoItem);\n\n")))),(0,s.kt)("p",null,"This is the TodoItem component.\nWe prefer primitive props for memoized components."),(0,s.kt)("p",null,"If you want to use object props for memoized components,\nyou need to use a special ",(0,s.kt)("a",{parentName:"p",href:"../api#memo"},"memo")," instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"React.memo"),".\nSee ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/dai-shi/react-tracked/tree/main/examples/09_reactmemo"},"example/09")," for the usage."),(0,s.kt)("h2",{id:"srccomponentsnewtodojs"},"src/components/NewTodo.js"),(0,s.kt)(a.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},(0,s.kt)(l.Z,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import React, { useState } from 'react';\n\nimport { useAddTodo } from '../hooks/useAddTodo';\nimport { useFlasher } from '../utils';\n\nconst NewTodo = () => {\n  const addTodo = useAddTodo();\n  const [text, setText] = useState('');\n  return (\n    <li ref={useFlasher()}>\n      <input\n        value={text}\n        placeholder=\"Enter title...\"\n        onChange={(e) => setText(e.target.value)}\n      />\n      <button\n        onClick={() => {\n          addTodo(text);\n          setText('');\n        }}\n      >\n        Add\n      </button>\n    </li>\n  );\n};\n\nexport default React.memo(NewTodo);\n\n"))),(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import React, { useState } from 'react';\n\nimport { useAddTodo } from '../hooks/useAddTodo';\nimport { useFlasher } from '../utils';\n\nconst NewTodo = () => {\n  const addTodo = useAddTodo();\n  const [text, setText] = useState('');\n  return (\n    <li ref={useFlasher()}>\n      <input\n        value={text}\n        placeholder=\"Enter title...\"\n        onChange={(e) => setText(e.target.value)}\n      />\n      <button\n        onClick={() => {\n          addTodo(text);\n          setText('');\n        }}\n      >\n        Add\n      </button>\n    </li>\n  );\n};\n\nexport default React.memo(NewTodo);\n\n")))),(0,s.kt)("p",null,"This is the NewTodo component to create a new item.\nIt uses a local state for the text field."),(0,s.kt)("h2",{id:"srcutilsjs"},"src/utils.js"),(0,s.kt)(a.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},(0,s.kt)(l.Z,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useRef, useEffect } from 'react';\n\nexport const useFlasher = () => {\n  const ref = useRef(null);\n  useEffect(() => {\n    if (!ref.current) return;\n    ref.current.setAttribute(\n      'style',\n      'box-shadow: 0 0 2px 1px red; transition: box-shadow 100ms ease-out;',\n    );\n    setTimeout(() => {\n      if (!ref.current) return;\n      ref.current.setAttribute('style', '');\n    }, 300);\n  });\n  return ref;\n};\n\n"))),(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useRef, useEffect } from 'react';\n\nexport const useFlasher = () => {\n  const ref = useRef<HTMLLIElement>(null);\n  useEffect(() => {\n    if (!ref.current) return;\n    ref.current.setAttribute(\n      'style',\n      'box-shadow: 0 0 2px 1px red; transition: box-shadow 100ms ease-out;',\n    );\n    setTimeout(() => {\n      if (!ref.current) return;\n      ref.current.setAttribute('style', '');\n    }, 300);\n  });\n  return ref;\n};\n\n")))),(0,s.kt)("p",null,"This is a util function to show which components render."),(0,s.kt)("h2",{id:"codesandbox"},"CodeSandbox"),(0,s.kt)("p",null,"You can try ",(0,s.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/infallible-firefly-yzwxc"},"working example"),"."))}T.isMDXComponent=!0}}]);