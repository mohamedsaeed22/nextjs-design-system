import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function tailwindClassMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
