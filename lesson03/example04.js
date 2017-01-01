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
                if(password === "1236"){
                    resolve("成功 seccess!");
                }else{
                    reject("失败 error");
                }
            });
        });
    }


}


const user = new User("呈琛", "1235");

user.validateName().then(function(result){

    // 直接抛出异常
    throw new Error("first error!");

    //return user.validatePassword();
}, function (err){
    console.log("second error!");
}).catch(function(err){
    console.log(err);
    return user.validatePassword();
}).then(function (result){
    console.log(result);
}, function(err){
    console.log("validate pwd err 1");
    throw new Erro("xxxx");
}).catch(function(err){
    console.log("validate pwd err 2");
});
// second error!

/*
let user = new User("深圳");
user.send().then(function (success){
    // 这里是成功就输出这里
    console.log(success);
}).catch(function(err){
    console.log(err);
});
*/
// 失败
