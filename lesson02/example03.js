"use strict";

// 立即执行
    /*
    let user = new class User{
        constructor(name){
            this.name = name;
        }
    }("呈琛");
    console.log(user);  // User { name: '呈琛' }
    */

// 不被提升
    var user = new User();
    class User{
        constructor(name){
            this.name = name;
        };
    }("深圳");
    console.log(user);