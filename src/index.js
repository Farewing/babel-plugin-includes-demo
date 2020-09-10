export default function ({ types }) {
  return {
    visitor: {
      CallExpression(path) {
        
        const callee = path.node.callee;

        if (types.isMemberExpression(callee, { computed: false }) &&
            types.isIdentifier(callee.property, { name: "includes" })) {

          callee.property.name = 'indexOf';

          path.replaceWith(
            types.binaryExpression("!==", path.node, types.numericLiteral(-1))
          );

        }
      }
    }
  };
}
