export const rgbaToHex = (rgba: string): string => {
  if (!rgba || !rgba.startsWith("rgba")) {
    return "";
  }

  const [r, g, b, a] = rgba
    .replace("rgba(", "")
    .replace(")", "")
    .split(",")
    .map(v => parseFloat(v));

  const toHex = (n: number) => n.toString(16).padStart(2, "0").toUpperCase();
  return `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(Math.round(a * 255))}`;
};
  