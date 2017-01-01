// ES5
function User(name, age){
    this.name = name;
    this.age = age;
};

// 静态方法
User.getClassName = function(){
    return "User";
};
/*var getName = User.getClassName();
console.log(getName); //  User*/

// 通过Object.defineProperties();
/*Object.defineProperties();*/


User.prototype.changeName = function(name){
    this.name = name;
};

User.prototype.changeAge = function(age){
    this.age = age;
}

Object.defineProperty(User.prototype, 'info', {
    get(){
        return "name:" + this.name + " | age："+this.age;
    }
});

/*var user = new User("cc", 20);
console.log(user); // User { name: 'cc', age: 20 }*/

// 子类
function Manager(name, age, password){
    User.call(this, name, age);
    this.password = password;
};

// 继承它的静态方法
Manager.__proto__ = User;

// 继承一般的方法也就是原型方法
Manager.prototype = User.prototype;

// 添加新方法
Manager.prototype.changePassword = function(password){
    this.password = password;
};

var manager = new Manager("小明", 22, 123);
manager.changeName("呈琛");
console.log(manager.name);  // 呈琛
console.log(manager.info);  // name:呈琛 | age：22



