import { exampleLibFunction } from "./lib"; // note no file extension needed in test imports

describe("exampleLibFunction()", () => {
  it("works", () => {
    expect(exampleLibFunction()).toBe("ok");
  });
});
