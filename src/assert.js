/* -*- Mode: js; js-indent-level: 2; indent-tabs-mode: nil; tab-width: 2 -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */
/*
 * Copyright 2013 Art Compiler LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var assert = (function () {
  return !DEBUG ?
    function () { } :
    function (val, str) {
      if ( str === void 0 ) {
        str = "failed!";
      }
      if ( !val ) {
        try {
          throw(new Error(str));
        } catch (e) {
          throw e.message + "\n" + e.stack;
        }
      }
    }
})();

var message = function (errorCode, args) {
  var str = Assert.messages[errorCode];
  if (args) {
    args.forEach(function (arg, i) {
      str = str.replace("%" + (i + 1), arg);
    });
  }
  return errorCode + ": " + str;
};

// Namespace functions for safe keeping.
var Assert = {
  assert: assert,
  message: message,
  messages: {},
};
