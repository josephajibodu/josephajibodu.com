import{j as u,r as e}from"./app-B2bBDYBG.js";function i({message:t,className:o="",...n}){return t?u.jsx("p",{...n,className:"text-sm text-red-600 dark:text-red-400 "+o,children:t}):null}const x=e.forwardRef(function({type:o="text",className:n="",isFocused:a=!1,...d},f){const s=e.useRef(null);return e.useImperativeHandle(f,()=>({focus:()=>{var r;return(r=s.current)==null?void 0:r.focus()}})),e.useEffect(()=>{var r;a&&((r=s.current)==null||r.focus())},[a]),u.jsx("input",{...d,type:o,className:"rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 "+n,ref:s})});export{i as I,x as T};
