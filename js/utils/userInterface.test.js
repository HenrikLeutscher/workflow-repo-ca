import { expect, describe, it } from "vitest";
import { isActivePath } from "./userInterface";

describe("isActivePath", () => {
  it("Returns true when current path matches href exactly", () => {
    const href = "/index.html";
    const currentPath = "/index.html";

    const result = isActivePath(href, currentPath);

    expect(result).toBe(true);
  });

  it("Returns true for root path ( / ) when path is / or /index.html", () => {
    const href = "/";
    const currentPath = "/index.html";

    const result = isActivePath(href, currentPath);
    expect(result).toBe(true);
  });

  it("Returns true when current path includes the href", () => {
    const href = "/index";
    const currentPath = "/index.html/some/other/page";

    const result = isActivePath(href, currentPath);
    expect(result).toBe(true);
  });

  it("Returns false when paths don't match", () => {
    const href = "/about";
    const currentPath = "/index.html";
    const result = isActivePath(href, currentPath);

    expect(result).toBe(false);
  });
});
