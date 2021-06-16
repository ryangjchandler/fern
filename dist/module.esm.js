// src/index.js
function src_default(Alpine) {
  if (Alpine.hasOwnProperty("persistedStored") && typeof Alpine.persistedStore === "function") {
    return;
  }
  window.__ferns = {};
  Alpine.persistedStore = function(name, value) {
    let stored = localStorage.getItem(`__fern_${name}`);
    if (![null, void 0].includes(stored)) {
      const methods = Object.entries(value).reduce((acc, [key, value2]) => {
        if (typeof value2 !== "function")
          return acc;
        acc[key] = value2;
        return acc;
      }, {});
      value = Object.assign(JSON.parse(stored), methods);
    }
    Alpine.store(name, value);
    window.__ferns[name] = Alpine.effect(() => {
      const json = JSON.stringify(Alpine.store(name));
      localStorage.setItem(`__fern_${name}`, json);
    });
  };
}

// builds/module.js
var module_default = src_default;
export {
  module_default as default
};
