// data users START

let users = [
  {
    name: "User 1",
    password: "qwerty1",
    age: 18,
    isLogin: false,
  },
  {
    name: "User 2",
    password: "qwerty2",
    age: 23,
    isLogin: false,
  },
  {
    name: "User 3",
    password: "qwerty3",
    age: 37,
    isLogin: false,
  },
  {
    name: "User 4",
    password: "qwerty4",
    age: 48,
    isLogin: false,
  },
  {
    name: "User 5",
    password: "qwerty5",
    age: 55,
    isLogin: false,
  },
  {
    name: "User 6",
    password: "qwerty6",
    age: 69,
    isLogin: false,
  },
  {
    name: "User 7",
    password: "qwerty7",
    age: 74,
    isLogin: false,
  },
  {
    name: "User 8",
    password: "qwerty8",
    age: 85,
    isLogin: false,
  },
  {
    name: "User 9",
    password: "qwerty9",
    age: 91,
    isLogin: false,
  },
  {
    name: "User 10",
    password: "qwerty0",
    age: 101,
    isLogin: false,
  },
];
// console.log(users);
//data users END

//registration START
function createUser() {
  let userName = prompt("Enter username:");
  if (checkUniqueUsername(userName)) {
    alert("User already exist!");
    return;
  }
  let password = prompt("Enter password:");
  let passwordConfirm = prompt("Confirm password:");
  if (!checkPasswords(password, passwordConfirm)) {
    alert("Password is wrong!");
    return;
  }
  let age = +prompt("Enter age:");
  let userObj = {
    name: userName,
    password: password,
    age: age,
    isLogin: false,
  };
  users.push(userObj);
  alert("Created successfuly");
  // console.log(users);
}
// createUser();

//проверка на уникальность имени
function checkUniqueUsername(userName) {
  return users.some(item => item.name === userName);
}

//проверка на подтверждения пароли
function checkPasswords(password, passwordConfirm) {
  return password === passwordConfirm;
}

//проверка авторизации
let inLogIn = "";
function changeInLogInUser(userName = "") {
  inLogIn = userName;
}

//LOG IN
function getUser(userName) {
  return users.find(item => item.name === userName);
}

function checkUserPassword(userName, password) {
  let user = getUser(userName);
  return user.password === password;
}

function loginUser() {
  let userName = prompt("Enter username:");
  if (!checkUniqueUsername(userName)) {
    alert("User not found!");
    return;
  }
  let password = prompt("Enter password:");
  if (!checkUserPassword(userName, password)) {
    alert("Password is wrong!");
    return;
  } else {
    // let index = users.findIndex(item => item.name === userName);
    // users[index].isLogin = true;
    // console.log(index);
    let user = getUser(userName);
    user.isLogin = true;
    changeInLogInUser(userName);
    console.log(inLogIn);
  }
}

// loginUser();

//update account
function updateUserAccount() {
  // console.log(inLogIn);
  if (!inLogIn) {
    alert("Only authorized users can update account!");
    return;
  }
  let updateKey = prompt("What do you want to update: name, password, age?");
  let userObj = getUser(inLogIn);
  if (updateKey.toLowerCase() === "name") {
    let updateName = prompt("Enter new username:");
    userObj.name = updateName;
    changeInLogInUser(updateName);
    alert("You are successfuly change username!");
  } else if (updateKey.toLowerCase() === "password") {
    let password = prompt("Enter old password:");
    if (!checkUserPassword(inLogIn, password)) {
      alert("Invalid password!");
      return;
    }
    let updatePassword = prompt("Enter new password:");
    userObj.password = updatePassword;
    alert("You are successfuly change password!");
  } else if (updateKey.toLowerCase() === "age") {
    let updateAge = +prompt("Enter new age:");
    userObj.age = updateAge;
    alert("You are successfuly change name!");
  }
  // console.log(users);
}
// updateUserAccount();

//logout
function logoutUser() {
  let user = getUser(inLogIn);
  if (user) {
    user.isLogin = false;
    inLogIn = "";
    changeInLogInUser("");
    console.log(inLogIn);
    alert("You are successfuly logged out");
  } else {
    alert("You have to be logged in to logout");
  }
}
// loginUser();

//delete
function deleteUser() {
  if (!inLogIn) {
    alert("Only authorized users can delete account");
    return;
  }
  let password = prompt("Enter your password:");
  if (!checkUserPassword(inLogIn, password)) {
    alert("Invalid password!");
    return;
  }
  let user = getUser(inLogIn);
  users.splice(users.indexOf(user), 1);
  console.log(users);
  alert("You are successfuly deleted account!");
}
// deleteUser();

let login_btn = document.querySelector(".btn-1");
let logout_btn = document.querySelector(".btn-2");
let delete_btn = document.querySelector(".btn-3");
let update_btn = document.querySelector(".btn-4");
let register_btn = document.querySelector(".btn-5");

login_btn.addEventListener("click", () => {
  loginUser();
});

logout_btn.addEventListener("click", () => {
  logoutUser();
});

delete_btn.addEventListener("click", () => {
  deleteUser();
});

update_btn.addEventListener("click", () => {
  updateUserAccount();
});

register_btn.addEventListener("click", () => {
  createUser();
});
