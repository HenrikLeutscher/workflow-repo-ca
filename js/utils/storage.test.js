import { expect, describe, it, beforeEach } from "vitest";
import { getUsername, saveUser, clearStorage } from "./storage";

describe("getUserName", () => {
  // Clearing the localstorage before each test
  beforeEach(() => {
    clearStorage();
  });

  it("Test that it returns the name from the user object in storage (first save a user object to storage)", () => {
    const user = { name: "Henrik Leutscher" };
    saveUser(user);
    const username = getUsername();
    expect(username).toBe("Henrik Leutscher");
  });

  it("Test that it returns null when no user exists in storage", () => {
    const username = getUsername();
    expect(username).toBeNull();
  });
});
