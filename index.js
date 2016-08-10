
export default function (tagName, props, extendName, extend) {
  var proto = Object.create((extend && extend.prototype) || HTMLElement.prototype);

  for (var key in props) {
    proto[key] = props[key];
  }

  return document.registerElement(tagName, {
    prototype: proto,
    extends: extendName
  });
}
