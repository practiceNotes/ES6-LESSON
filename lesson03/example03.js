"use strict";


class User{
    constructor(name, password){
        this.name = name;
        this.password = password;
    }

    validateName(cb){
        /**
         *
         * resolve  如果成功了就调用 resolve
         * reject   如果失败了就调用 reject
         *
         */
        let name = this.name;
        return new Promise(function (resolve, reject) {
            setTimeout(function(){
                if(name === "呈琛"){
                    resolve("成功");
                }else{
                    reject("失败");
                }
            });
        });
    };

    validatePassword(cb){
        let password = this.password;
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                if(password === "123"){
                    resolve("成功 seccess!");
                }else{
                    reject("失败 error");
                }
            });
        });
    }


}


const user = new User("呈琛", "123");

user.validateName().then(function(result){
    return "validate name ok";
}).then(function (result) {
    console.log(result);
});


/*
var promise = Promise.resolve("validate name ok")
// promise 根目根目相当于如下
var promise = new Promise(function(resolove, reject){
    resolve("validate name ok");
});
.then(function (result){
    console.log(result);
});
*/
