const mock = () => {
  let storage = {};
  return {
    getItem: key => (key in storage ? storage[key] : null),
    setItem: (key, value) => (storage[key] = value || ""),
    removeItem: key => delete storage[key],
    clear: () => (storage = {})
  };
};

Object.defineProperty(window, "localStorage", { value: mock() });

Object.defineProperty(window, "sessionStorage", { value: mock() });

Object.defineProperty(window, "URL", {
  value: {
    createObjectURL: () => {}
  }
});

Object.defineProperty(window, "CSS", { value: null });

Object.defineProperty(window, "getComputedStyle", {
  value: () => {
    return {
      display: "none",
      appearance: ["-webkit-appearance"]
    };
  }
});

Object.defineProperty(document, "doctype", {
  value: "<!DOCTYPE html>"
});
Object.defineProperty(document.body.style, "transform", {
  value: () => {
    return {
      enumerable: true,
      configurable: true
    };
  }
});
