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
export {
  module_default as default
};
