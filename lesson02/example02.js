"use strict";

// ES5的写法
    function User(name, age){
        this.name = name;
        this.age = age;
    }

// ES6的写法
    class User{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        // ES5的静态方法
        /*User.getClassName = function(){
            return "User";
        };*/

        static getClassName(){
            return "User";
        };


        // ES5
        /*User.prototype.changeName = function(name){
            this.name = name;
        };*/
        changeName(name){
            this.name = name;
        };

        /*User.prototype.changeAge = function(age){
            this.age = age;
         };*/
        changeAge(age){
            this.name = name;
        };

        // ES5
        /*Object.defineProperty(User.prototype, "info", {
                get(){
                    return "name:"+this.name+" | age:"+this.age;
                };
        });*/
        get info(){
            return "name:"+this.name+" | age:"+this.age;
        }
    };

// ES5
    /*function Manager(name, age, password){
        User.call(this, name, age);
        this.password = password;
    };*/
    class Manager extends User{
        constructor(name, age, password){
            super(name, age);
            this.password = password;
        }
    }

// ES5 继承静态方法
    /*Manager.__proto__ = User;*/
// ES5 继承 prototype 方法
    /*Manager.prototype = User.prototype;*/

// ES6
    class Manager extends User{
        constructor(name, age, password){
            super(name, age);
            this.password = password;
        }

        // ES5添加新方法
        /*Manager.prototype.changePassword = function(password){
            this.password = password;
        }*/
        // ES6
        changePassword(password){
            this.password = password;
        }

        get info(){
           var info =  super.info;
           console.log(info);
           return info + "-- new";
        }


    };

    /*console.log(typeof User, typeof Manager);*/
    let manager = new Manager("深圳", 6, "abc12344556" );
    manager.changeName("呈琛");
    console.log(manager.info);

    class I extends User(){
        // 自动加载默认
        constructor(...arg){
            super(...arg);
        }
    }
    var me = new I("cc", 20);
    console.log();



