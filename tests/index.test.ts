import { describe, expect, it, vi } from "vitest";

import { greet } from "../src/index.js";

describe("greet()", () => {
  it("should log 'Hello, World!'", () => {
    const logSpy = vi.spyOn(console, "log");
    greet();
    expect(logSpy).toHaveBeenCalledWith("Hello, World!");
    logSpy.mockRestore();
  });
});
