"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_1 = require("./hello");
describe("hello", () => {
    it("returnsTrue", () => {
        const h = new hello_1.Hello();
        expect(h.hello()).toEqual(true);
    });
});
//# sourceMappingURL=hello.test.js.map