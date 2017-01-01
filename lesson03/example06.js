// Promise 它有两个静态方法
/**
 * 一个是      all
 * 另一个是    race
 */


// 第一个 Promise 静态方法
    /**
     * var promise = Promise.resolve("hellow");
     * 相当于下面
     */
    var promise = new Promise(function(resolve, reject){
        resolve("Hellow");;
    });

    promise.then(function(result){
        console.log(result);
    });
    // Hellow

    /**
     * resolve      处理内部成功返回得到正确的结果
     * rejected     处理内部异常返回的结果
     *
     * 后面也可以写成空
     */
    //promise.then(resolve, rejected);

    promise.then(function(){
        // 返回也可以是一个对象，也可以是一个 Promise 对象
    }, function(){
        // 这里也可以返回一个对象
        //
    }).then(function(result){
        // undefined
    });


// 第二个 Promise 静态方法
var promise2 = Promise.reject("erro");
promise2.then(null, function(err){
    console.log(err);
});
 // erro
