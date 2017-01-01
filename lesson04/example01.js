"use strict";
// ES5 普通对象的访问
    /*
    var obj = {
        name:"cc",
        "my name":"深圳"
    }
    // 以下两种访问方式
    obj.name;
    obj["my name"];
    */



// Symbol 不被重复的值

    // 创建两个值
    /**
     * [name description]
     * @type {[type]}
     *
     * 以下不是字符，其实是两个不同值的类型，可以转换字符串
     */

    /**
    let name  = Symbol("name");
    let name2 = Symbol("name");

    // 转换为字符串
    console.log(name.toString());   // Symbol(name)
    console.log(String(name2));     // Symbol(name)
    */

    /* 结果如下：
        Symbol(name)
        Symbol(name)
     */



// 用法，它有什么用
let getName = Symbol("name");
let obj = {
    [getName](){
        return '深圳';
    }
};
var str = obj[getName]();
console.log(str); // 深圳
