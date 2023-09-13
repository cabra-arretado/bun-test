import { logger } from "../src/utils";
import { expect, test, describe, mock, spyOn } from "bun:test";

describe("Utils:", () => {
  //TODO: fix this test
  test("logger", () => {
    let spy = spyOn(console, "log");
    logger(new Request("www.test.test"), new Error("test")) 
    expect(spy).toHaveBeenCalledTimes(2);
  });
})
