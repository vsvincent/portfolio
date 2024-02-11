import { visitParents } from "unist-util-visit-parents";
export function rehypeWrapText() {
    return function wrapTextTransform(tree: any) {
      visitParents(tree, "text", (node, ancestors) => {
        console.log(node)
        if (ancestors.at(-1).tagName !== "custom-typography") {
          node.type = "element";
          node.tagName = "custom-typography";
          node.children = [{ type: "text", value: node.value }];
        }
      });
    };
  }