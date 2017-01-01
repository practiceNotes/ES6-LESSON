/**
 * Promises
 *
 * @param a
 * @param b
 * @param cb
 */
    /*
    function asyncFun(a, b, cb){
        setTimeout(function(){
            cb(a + b);
        }, 200);
    };
    asyncFun(1, 2, function(result){
        if(result > 2){
            asyncFun(result, 2, function(result){
                if(result > 4){
                    asyncFun(result, 2, function(){
                        console.log("ok");
                    })
                }
            })
        }
    });*/


/**
 *
 * @param a
 * @param b
 *
 * Promise 构造函数，它接收一个函数， 这个内部函数本身会给它传递两个参数
 *
 * resolve 表示计算过过程当中有了结果之，就调用它，并且把这个结果传达给它
 * reject  表示错误，
 *
 *
 *
 */
    function asyncFun(a, b){
        return new Promise(function(resolve, reject){
            if(typeof a !== "number" || typeof b !== "number"){
                reject(new Erro("no number")); // reject 抛出一个错误
            }

            setTimeout(function(){
                resolve(a + b);  // resolve 表示返回结果，也就是返回这个Promise 一个对象

            }, 200);
        });
    }

    asyncFun(1, 2).then(function(result){
        if(result > 2){
            return asyncFun(result, 2);
        }
    }), function(err){
        console.log("firse -", err);
    }
    .then(function(result){
        if(result > 4){
            console.log("ok");
        }
    }).catch(function (error){
        console.log("second -", error);
    });
