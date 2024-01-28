const { normalizeURL } = require("./crawl.js");
const { test, expect } = require("@jest/globals");

test("normalizeURL strip https", () => {
  const input = "https://example.com/path";
  const actual = normalizeURL(input);
  const expected = "example.com/path";
  expect(actual).toBe(expected);
});

test("normalizeURL strip http", () => {
  const input = "http://EXAMPLE.com/path";
  const actual = normalizeURL(input);
  const expected = "example.com/path";
  expect(actual).toBe(expected);
});

test("normalizeURL trims trailing slash", () => {
  const input = "https://example.com/path/";
  const actual = normalizeURL(input);
  const expected = "example.com/path";
  expect(actual).toBe(expected);
});

test("normalizeURL capitalizes", () => {
  const input = "https://EXAMPLE.com/path";
  const actual = normalizeURL(input);
  const expected = "example.com/path";
  expect(actual).toBe(expected);
});
