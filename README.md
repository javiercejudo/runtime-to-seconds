# runtime-to-seconds

[![Build Status](https://travis-ci.org/javiercejudo/runtime-to-seconds.svg)](https://travis-ci.org/javiercejudo/runtime-to-seconds)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/runtime-to-seconds/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/runtime-to-seconds?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/runtime-to-seconds/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/runtime-to-seconds)

Converts a string `hh:mm:ss` to seconds

## Install

    npm i runtime-to-seconds

## Usage

```js
var runtimeToSeconds = require('runtime-to-seconds');

runtimeToSeconds('1:25:46'); // => 5146
```

See [spec](test/spec.js).
