
import {Hello} from "./hello";

describe("hello", () => {

 it("returnsTrue", () => {
    const h = new Hello();
    expect(h.hello()).toEqual(true);
  });
});
 