import { ReactNode } from "react";

type Regulated<T> = T extends null | false | undefined ? never : T;

export function isNodeWithContent(
  node: ReactNode
): node is Regulated<ReactNode> {
  return node !== null && node !== false && node !== undefined;
}