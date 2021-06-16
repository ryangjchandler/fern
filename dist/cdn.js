(() => {
  // src/index.js
  function src_default(Alpine) {
    if (Alpine.hasOwnProperty("persistedStores") && typeof Alpine.persistedStores === "function") {
      return;
    }
    Alpine.persistedStores = function() {
      console.log("test");
    };
  }

  // builds/cdn.js
  document.addEventListener("alpine:initializing", () => {
    src_default(window.Alpine);
  });
})();
