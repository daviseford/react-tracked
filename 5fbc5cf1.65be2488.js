(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(1),r=(n(0),n(123));const c={id:"api",title:"API",sidebar_label:"API"},o=[{value:"createContainer",id:"createcontainer",children:[{value:"Provider",id:"provider",children:[]},{value:"useTracked",id:"usetracked",children:[]},{value:"useUpdate",id:"useupdate",children:[]},{value:"useTrackedState",id:"usetrackedstate",children:[]},{value:"useSelector",id:"useselector",children:[]}]},{value:"trackMemo",id:"trackmemo",children:[]},{value:"getUntrackedObject",id:"getuntrackedobject",children:[]}],i={rightToc:o},s="wrapper";function p({components:e,...t}){return Object(r.b)(s,Object(a.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"createContainer")," is a main function exported from the library,\nwhich creates a provider and other hooks."),Object(r.b)("h2",{id:"createcontainer"},"createContainer"),Object(r.b)("p",null,"It takes one argument ",Object(r.b)("inlineCode",{parentName:"p"},"useValue"),",\nwhich is a hook that returns a tuple ",Object(r.b)("inlineCode",{parentName:"p"},"[state, update]"),".\nTypically, it's with useReducer and useState,\nbut it can be any custom hooks based on them."),Object(r.b)("p",null,"Note: you can create multiple containers in one app."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { createContainer } from 'react-tracked';\n\nconst useValue = (props) => useReducer(...);\n\nconst {\n  Provider,\n  useTracked,\n  useUpdate,\n  useTrackedState,\n  useSelector,\n} = createContainer(useValue);\n")),Object(r.b)("h3",{id:"provider"},"Provider"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Provider")," returned by createContainer has to be put\nin the parent component.\nTypically, it's close to the root component,\nbut it can be (sometimes desirably) lower in the component tree."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const App = (props) => (\n  <Provider {...props}>\n    ...\n  </Provider>\n);\n")),Object(r.b)("h3",{id:"usetracked"},"useTracked"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"useTracked")," hook returned by createContainer is the recommended hook.\nIt simply returns the ",Object(r.b)("inlineCode",{parentName:"p"},"[state, update]")," tuple that ",Object(r.b)("inlineCode",{parentName:"p"},"useValue")," returns.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"state")," is wrapped by Proxy for usage tracking."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const Component = () => {\n  const [state, dispatch] = useTracked();\n  // ...\n};\n")),Object(r.b)("h3",{id:"useupdate"},"useUpdate"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"useUpdate")," hook returned by createContainer is for ",Object(r.b)("inlineCode",{parentName:"p"},"update")," from ",Object(r.b)("inlineCode",{parentName:"p"},"useValue"),';\nIt\'s named "update" ambiguously, but typically\nit would be renamed to "dispatch" for useReducer,\n"setState" for useState, or "actions" for any actions.'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const Component = () => {\n  const dispatch = useUpdate();\n  // ...\n};\n")),Object(r.b)("h3",{id:"usetrackedstate"},"useTrackedState"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"useTrackedState")," hook returned by createContainer is for ",Object(r.b)("inlineCode",{parentName:"p"},"state")," from ",Object(r.b)("inlineCode",{parentName:"p"},"useValue"),";\nThis is wrapped by Proxy as same as ",Object(r.b)("inlineCode",{parentName:"p"},"useTracked"),".\nUse this hook if you don't need ",Object(r.b)("inlineCode",{parentName:"p"},"update"),".\nThis hook is compatible with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dai-shi/reactive-react-redux"}),"reactive-react-redux"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const Component = () => {\n  const state = useTrackedState();\n  // ...\n};\n")),Object(r.b)("h3",{id:"useselector"},"useSelector"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"useSelector")," hook returned by createContainer is an optional hook.\nUse this hook if state usage tracking doesn't work or fit well.\nThis hook is compatible with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://react-redux.js.org/api/hooks"}),"react-redux"),".\nIt would ease transition from/to react-redux apps."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const Component = () => {\n  const selected = useSelector(selector);\n  // ...\n};\n")),Object(r.b)("h2",{id:"trackmemo"},"trackMemo"),Object(r.b)("p",null,"There is a tiny function exported from the library."),Object(r.b)("p",null,"This is used to explicitly mark a prop object as used\nin a memoized component. Otherwise, usage tracking may not\nwork correctly because a memoized component doesn't always render\nwhen a parent component renders."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { trackMemo } from 'react-tracked';\n\nconst ChildComponent = React.memo(({ num1, str1, obj1, obj2 }) => {\n  trackMemo(obj1);\n  trackMemo(obj2);\n  // ...\n});\n")),Object(r.b)("h2",{id:"getuntrackedobject"},"getUntrackedObject"),Object(r.b)("p",null,"There are some cases when we need to get an original object\ninstead of a tracked object.\nAlthough it's not a recommended pattern,\nthe library exports a function as an escape hatch."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { getUntrackedObject } from 'react-tracked';\n\nconst Component = () => {\n  const state = useTrackedState();\n  const dispatch = useUpdate();\n  const onClick = () => {\n    // this leaks a proxy outside of render\n    dispatch({ type: 'FOO', value: state.foo });\n\n    // this works as expected\n    dispatch({ type: 'FOO', value: getUntrackedObject(state.foo) });\n  };\n  // ...\n};\n")))}p.isMDXComponent=!0},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a),c=r.a.createContext({}),o=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=o(e.components);return r.a.createElement(c.Provider,{value:t},e.children)};var s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),u=o(n),d=a,b=u[i+"."+d]||u[d]||p[d]||c;return n?r.a.createElement(b,Object.assign({},{ref:t},s,{components:n})):r.a.createElement(b,Object.assign({},{ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<c;d++)o[d]=n[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);