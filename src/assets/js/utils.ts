export const getCssVar = (varName: string): string =>
  getComputedStyle(document.documentElement).getPropertyValue(varName);
