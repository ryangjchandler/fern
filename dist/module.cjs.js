var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// builds/module.js
__markAsModule(exports);
__export(exports, {
  default: () => module_default
});

// src/index.js
function src_default(Alpine) {
  if (Alpine.hasOwnProperty("persistedStored") && typeof Alpine.persistedStore === "function") {
    return;
  }
  window.__ferns = {};
  Alpine.persistedStore = function(name, value, storage = window.localStorage) {
    const stored = storage.getItem(`__fern_${name}`);
    if (![null, void 0].includes(stored)) {
      const storedValue = JSON.parse(stored);
      const diff = Object.entries(value).reduce((acc, [key, value2]) => {
        if (storedValue.hasOwnProperty(key))
          return acc;
        acc[key] = value2;
        return acc;
      }, {});
      value = Object.assign(storedValue, diff);
    }
    Alpine.store(name, value);
    window.__ferns[name] = Alpine.effect(() => {
      const json = JSON.stringify(Alpine.store(name));
      storage.setItem(`__fern_${name}`, json);
    });
  };
}

// builds/module.js
var module_default = src_default;
