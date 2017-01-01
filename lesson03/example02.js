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
    return user.validatePassword();
}).then(function(result){
    console.log("validate success 成功");
}).catch(function(err){
    console.log("validate error 失败");
});
// validate success 成功

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
