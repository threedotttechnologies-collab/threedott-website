import { useCallback } from "react";

export function useAutoResizeTextarea() {
  return useCallback((element) => {
    if (!element) return;
    element.style.height = "auto";
    element.style.height = `${element.scrollHeight}px`;
  }, []);
}
