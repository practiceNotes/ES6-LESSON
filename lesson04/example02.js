"use strict";
const User = require("./User");
let getName = Symbol("getName");

let user = new User();
user.print();
user[getName]();
