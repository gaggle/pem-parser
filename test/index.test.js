"use strict";
var expect = require("must")
var index = require("../index")

describe("index", function () {
  it("should respect newlines", function () {
    var res = index("ham\nspam")
    expect(splitByLines(res)).to.have.length(2)
  })

  it("should parse pem key format", function () {
    var res = index("-----BEGIN RSA PRIVATE KEY----- " +
                    "aaa " +
                    "bbb " +
                    "ccc " +
                    "-----END RSA PRIVATE KEY-----")
    expect(splitByLines(res)).to.have.length(5)
  })

  it("should accept pem format with extra spaces", function () {
    var res = index(" " +
                    "-----BEGIN RSA PRIVATE KEY----- " +
                    "aaa " +
                    "-----END RSA PRIVATE KEY-----" +
                    " ")
    expect(splitByLines(res)).to.have.length(3)
  })
})

var splitByLines = function (str) {
  return str.split("\n")
}
