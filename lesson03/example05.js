function asyncFun(a, b, time){

    return new Promise(function(resolve, reject){
        if(typeof a !== "number" || typeof b !== "number"){
            reject(new Error("不是 number 类型的"));
        }

        setTimeout(function(){
            resolve(a + b);
        }, time);
    });
}

/*
var resultList = [];
asyncFun(1, 2).then(function(result){
    resultList.push(result);
    return asyncFun(2, 3);
}).then(function(result){
    resultList.push(result);
});
*/

/**
 * [promise description]
 * @type {[type]}
 *
 * all      是返回一个数组的意思
 * race     得到其中一个结果的值
 *
 */
/*
var promise = Promise.all([asyncFun(1, 2), asyncFun(2, 3), asyncFun(1, 22)]);

promise.then(function(result){
    console.log(result);
});
*/

/**
 * [promise description]
 * @type {[type]}
 *
 * race 只要内部错误都不会抛出异常
 *
 */
var promise = Promise.race([asyncFun(1, 2, 60), asyncFun(2, 3, 20), asyncFun(1, 22, 200)]);

promise.then(function(result){
    console.log(result);
}, function(err){
    console.log(err); // 它不会返回结果的错误
}).catch(err => {
    console.log(err, "err");
});
