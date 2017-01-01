'use strict';
    /**
     {
        var a = 12;
        let b = 15;

        {
            console.log(a, b);
        }
        // 12 15
    }*/


// 01.泄密
    /**
     for(let i = 0; i < 5; i ++){
     }
     console.log(i);*/

// 02.变量提升
    /**
     function f(){
        // 第一种：这里类似于下面每二种的写法
        /!*console.log(a);
        var a = 12;*!/

        // 第二种：
        var a;
        console.log(a);
        a = 12;
        console.log(a);
    }
    f();    // undefined*/

    /*var a = 12;
    function f(){
        console.log(a);
        let a;
    }
    f();    // a is not defined

    {
        let a;
        var a;
    }*/

    /**
    // 代替立即执行匿名函数
    var config = (function(){
        var config = [];
        config.push(1);
        config.push(2);
        config.push(5);
        return config;
    })();
    console.log(config);    // [ 1, 2, 5 ]
    */

    /*
    let config;
    {
        config = [];
        config.push(1);
        config.push(2);
        config.push(5);
        console.log(config);    // [ 1, 2, 5 ]
    }
    */



// 03. 函数不被提升
    /**function a() {
        console.log(1);
    };
    function f() {
        a();
        if(false){
            function a(){
                console.log(2);
            }

        }
    }
    f();*/

// 04. 实际的例子
    /**
    var arr = [];
    function f(){
        for(var i = 0; i < 5; i++){
            arr.push(function(){
                console.log(i);
            });
        }
    }
    f();
    arr[3]();
    */


//  05. const 保用。 对物理内存地不可更改
    /**
     * 在严格模式下会抛出异常
     * 不在严格模式下不会抛出异常
     * @type {{name: string}}
     */
    const a = {
        name:"own"
    }
    a.name = "呈琛";
    a.email = "4053250323@qq.com";
    Object.freeze(a);
    a.name = "cc";
    console.log(a);
