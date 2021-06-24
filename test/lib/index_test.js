import test from "jutest";

test("My library lib test", s => {
  s.describe("thing", s => {
    s.test("does something", t => {
      t.assert(true);
    });
  });
});