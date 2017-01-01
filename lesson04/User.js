"use strict";
let getName = Symbol("getName");

module.exprots = class User{
    [getName](){
        return "中国深圳"
    },

    print(){
        console.log(this[getName]());
    }
};
