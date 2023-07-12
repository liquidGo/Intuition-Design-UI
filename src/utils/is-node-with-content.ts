import { ReactNode } from "react";

type Regulated<T> = T extends null | undefined | false ? never : T;

export function isNodeWithContent(
  node: ReactNode
): node is Regulated<ReactNode> {
  return node !== null && node !== undefined && node !== false;
}