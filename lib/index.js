"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(_ref) {
  var types = _ref.types;
  return {
    visitor: {
      CallExpression: function CallExpression(path) {
        var callee = path.node.callee;

        if (types.isMemberExpression(callee, {
          computed: false
        }) && types.isIdentifier(callee.property, {
          name: "includes"
        })) {
          callee.property.name = 'indexOf';
          path.replaceWith(types.binaryExpression("!==", path.node, types.numericLiteral(-1)));
        }
      }
    }
  };
}