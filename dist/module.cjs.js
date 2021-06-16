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
  if (Alpine.hasOwnProperty("persistedStores") && typeof Alpine.persistedStores === "function") {
    return;
  }
  Alpine.persistedStores = function() {
    console.log("test");
  };
}

// builds/module.js
var module_default = src_default;
