import {importShared} from './__federation_fn_import.js';
const {openBlock,createElementBlock,createElementVNode:createBaseVNode,toDisplayString,normalizeClass} = await importShared('vue');


const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const button = "_button_1s3ds_2";
const style0 = {
	button: button
};

const _sfc_main = {
  data: function () {
    return {
      title: 'I will not be used'
    }
  }
};

const _hoisted_1 = { id: "home-unusedbutton" };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h1", null, toDisplayString(_ctx.title), 1),
    createBaseVNode("button", {
      id: "vite-button",
      class: normalizeClass(_ctx.$style.button),
      onClick: _cache[0] || (_cache[0] = $event => (_ctx.title = _ctx.title + '!'))
    }, "Vite Button", 2)
  ]))
}
const cssModules = {
"$style":style0,
};
const UnusedButton = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__cssModules',cssModules]]);

export { _export_sfc, UnusedButton as default };
