# pem-parser
[![Build Status](https://travis-ci.org/gaggle/pem-parser.svg?branch=master)](https://travis-ci.org/gaggle/pem-parser)
[![Coverage Status](https://coveralls.io/repos/github/gaggle/pem-parser/badge.svg?branch=master)](https://coveralls.io/github/gaggle/pem-parser?branch=master)
[![Dependency Status](https://david-dm.org/gaggle/pem-parser.svg)](https://david-dm.org/gaggle/pem-parser)

Utility to convert PEM-formatted strings to proper newline formatted PEM string.
Handy for PEM strings as inputs, to not have your users type out `\n`'s

## Install

    > npm install gaggle/pem-parser
    
## Usage

    > var pemParser = require("pem-parser")
    > pemParser("-----BEGIN RSA PRIVATE KEY----- aaa bbb ccc -----END RSA PRIVATE KEY-----")
    '-----BEGIN RSA PRIVATE KEY-----\naaa\nbbb\nccc\n-----END RSA PRIVATE KEY-----'

