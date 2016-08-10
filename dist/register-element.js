(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.registerElement = factory());
}(this, function () { 'use strict';

  function index (tagName, props, extendName, extend) {
    var proto = Object.create((extend && extend.prototype) || HTMLElement.prototype);

    for (var key in props) {
      proto[key] = props[key];
    }

    return document.registerElement(tagName, {
      prototype: proto,
      extends: extendName
    });
  }

  return index;

}));