"use strict";
var s = require("util").format
var ss = require("simple-strings.js")

module.exports = function (pemstr) {
  if(pemstr === undefined) throw new Error("No pem data")
  var trimmed = pemstr.trim()
  if(isPemString(trimmed)) return parsePemString(trimmed)
  return pemstr
}

var PEM_BEGIN = "-----BEGIN RSA PRIVATE KEY-----"
var PEM_END = "-----END RSA PRIVATE KEY-----"

var isPemString = function (str) {
  return (ss.startsWith(str, PEM_BEGIN) && ss.endsWith(str, PEM_END))
}

var parsePemString = function (str) {
  var content = str.slice(PEM_BEGIN.length, -PEM_END.length).trim()
  return s("%s\n%s\n%s", PEM_BEGIN, content.replace(/ /g, "\n"), PEM_END)
}
