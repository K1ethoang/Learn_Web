function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
}

var author = new User("Kiet", "Hoang", "Avatar");
var user = new User("Hieu", "Nguyen", "Avatar");

author.title = "Coder tại nhà";
user.comment = "Hay quá anh ơi";

console.log(author);
console.log(user);
