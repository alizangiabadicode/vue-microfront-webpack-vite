import {importShared} from './__federation_fn_import.js';
import { __vitePreload } from './preload-helper.f269285e.js';
const {defineComponent,computed,openBlock,createElementBlock,createElementVNode:createBaseVNode,toDisplayString,normalizeClass,Fragment,h,resolveComponent,createVNode,pushScopeId,popScopeId,defineAsyncComponent,createApp} = await importShared('vue');

const {defineStore,createPinia} = await importShared('pinia');

import UnusedButton, { _export_sfc } from './__federation_expose_Button.7ba131e7.js';

true&&(function polyfill() {
    const relList = document.createElement('link').relList;
    if (relList && relList.supports && relList.supports('modulepreload')) {
        return;
    }
    for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        processPreload(link);
    }
    new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type !== 'childList') {
                continue;
            }
            for (const node of mutation.addedNodes) {
                if (node.tagName === 'LINK' && node.rel === 'modulepreload')
                    processPreload(node);
            }
        }
    }).observe(document, { childList: true, subtree: true });
    function getFetchOpts(script) {
        const fetchOpts = {};
        if (script.integrity)
            fetchOpts.integrity = script.integrity;
        if (script.referrerpolicy)
            fetchOpts.referrerPolicy = script.referrerpolicy;
        if (script.crossorigin === 'use-credentials')
            fetchOpts.credentials = 'include';
        else if (script.crossorigin === 'anonymous')
            fetchOpts.credentials = 'omit';
        else
            fetchOpts.credentials = 'same-origin';
        return fetchOpts;
    }
    function processPreload(link) {
        if (link.ep)
            // ep marker = processed
            return;
        link.ep = true;
        // prepopulate the load record
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
    }
}());

const remotesMap = {
'home':{url:'http://localhost:5001/remoteEntry.js',format:'esm',from:'webpack'}
};
const loadJS = async (url, fn) => {
  const resolvedUrl = typeof url === 'function' ? await url() : url;
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.onload = fn;
  script.src = resolvedUrl;
  document.getElementsByTagName('head')[0].appendChild(script);
};
const scriptTypes = ['var'];
const importTypes = ['esm', 'systemjs'];
function get(name, remoteFrom){
  return __federation_import(name).then(module => ()=> {
    if (remoteFrom === 'webpack') {
      return Object.prototype.toString.call(module).indexOf('Module') > -1 && module.default ? module.default : module
    }
    return module
  })
}
const wrapShareModule = remoteFrom => {
  return {
    'vue':{'3.2.45':{get:()=>get('./__federation_shared_vue.js', remoteFrom), loaded:1}},'pinia':{'2.0.28':{get:()=>get('./__federation_shared_pinia.js', remoteFrom), loaded:1}}
  }
};
async function __federation_import(name){
  return __vitePreload(() => import(name),true?[]:void 0);
}
async function __federation_method_ensure(remoteId) {
  const remote = remotesMap[remoteId];
  if (!remote.inited) {
    if (scriptTypes.includes(remote.format)) {
      // loading js with script tag
      return new Promise(resolve => {
        const callback = () => {
          if (!remote.inited) {
            remote.lib = window[remoteId];
            remote.lib.init(wrapShareModule(remote.from));
            remote.inited = true;
          }
          resolve(remote.lib);
        };
        return loadJS(remote.url, callback);
      });
    } else if (importTypes.includes(remote.format)) {
      // loading js with import(...)
      return new Promise(resolve => {
        const getUrl = typeof remote.url === 'function' ? remote.url : () => Promise.resolve(remote.url);
        getUrl().then(url => {
          __vitePreload(() => import(/* @vite-ignore */ url),true?[]:void 0).then(lib => {
            if (!remote.inited) {
              const shareScope = wrapShareModule(remote.from);
              lib.init(shareScope);
              remote.lib = lib;
              remote.lib.init(shareScope);
              remote.inited = true;
            }
            resolve(remote.lib);
          });
        });
      })
    }
  } else {
    return remote.lib;
  }
}

function __federation_method_unwrapDefault(module) {
  return (module?.__esModule || module?.[Symbol.toStringTag] === 'Module')?module.default:module
}

function __federation_method_wrapDefault(module ,need){
  if (!module?.default && need) {
    let obj = Object.create(null);
    obj.default = module;
    obj.__esModule = true;
    return obj;
  }
  return module; 
}

function __federation_method_getRemote(remoteName,  componentName){
  return __federation_method_ensure(remoteName).then((remote) => remote.get(componentName).then(factory => factory()));
}

const useStore = defineStore('main', {
    state: () => ({
        counter: 5
    }),

    actions: {
        increase() {
            this.counter++;
        }
    }
});

const green = "_green_8qe8x_2";
const bold = "_bold_8qe8x_6";
const style0 = {
	green: green,
	bold: bold
};

const _sfc_main$1 = defineComponent({
  setup() {
    const store = useStore();
    let cartCount = computed(() => {
      return store.counter
    });

    return {
      cartCount,
      title: 'Layout Component in Action..'
    }
  },
});

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", {
      class: normalizeClass(_ctx.$style.green)
    }, toDisplayString(_ctx.title), 3),
    createBaseVNode("p", {
      id: "cart-item",
      class: normalizeClass(_ctx.$style.green)
    }, "cartItems from pinia: " + toDisplayString(_ctx.cartCount), 3),
    createBaseVNode("div", {
      class: normalizeClass([_ctx.$style.green, _ctx.$style.bold])
    }, "green and bold", 2)
  ], 64))
}
const cssModules = {
"$style":style0,
};
const Content = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__cssModules',cssModules]]);

const button = {
    name: "btn-component",
    render() {
        
        return h(
            "button",
            {
                id: "btn-remote",
                style: {
                    'background-color': '#4CAF50',
                    'border': 'none',
                    'color': 'white',
                    'padding': '15px 32px',
                    'text-align': 'center',
                    'text-decoration': 'none',
                    'display': 'inline-block',
                    'font-size': '16px'
                },
                onClick: () => {
                    const store = useStore();
                    store.increase();
                }
            },
            "Hello Layout Button"
        );
    },
};

const Layout_vue_vue_type_style_index_0_scoped_dcaef60d_lang = '';

const _sfc_main = {
  components: {
    Content,
    Button: button,
    UnusedButton,
  }
};

const _withScopeId = n => (pushScopeId("data-v-dcaef60d"),n=n(),popScopeId(),n);
const _hoisted_1 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("hr", null, null, -1));
const _hoisted_2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("hr", null, null, -1));
const _hoisted_3 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("hr", null, null, -1));

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Content = resolveComponent("Content");
  const _component_Button = resolveComponent("Button");
  const _component_UnusedButton = resolveComponent("UnusedButton");
  const _component_home_images = resolveComponent("home-images");
  const _component_home_content = resolveComponent("home-content");
  const _component_home_button = resolveComponent("home-button");

  return (openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_Content),
    createVNode(_component_Button),
    createVNode(_component_UnusedButton),
    _hoisted_1,
    createVNode(_component_home_images),
    createVNode(_component_home_content),
    createVNode(_component_home_button),
    _hoisted_2,
    _hoisted_3
  ], 64))
}
const Layout = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-dcaef60d"]]);

const __federation_var_homeContent = await __federation_method_getRemote("home" , "./Content");
 let HomeContent = __federation_method_unwrapDefault(__federation_var_homeContent); 
const HomeButton = defineAsyncComponent(() => __federation_method_getRemote("home" , "./Button").then(module=>__federation_method_wrapDefault(module, false)));
const app = createApp(Layout);

app.component("home-content", HomeContent);
app.component("home-button", HomeButton);
app.use(createPinia());
app.mount("#root");
