const pekka = {
  id: "misterpekka",
  name: "Pekka",
};

const ilkka = {
  id: "misterilkka",
  name: undefined,
};

const getUserNameLength = (user) => {
  return user && user.name && user.name.length;
};

// Don't do this at home or work
const getUserNameLength2 = (user) => {
  if (user) {
    if (user.name) {
      return user.name.length;
    }
  }
};

// this is fine too if caller makes sure to give expected shape of an argument
const getUserNameLength3 = (user) => {
  return user.name.length;
};

console.log("getUserNameLength");
console.log(getUserNameLength(null));
console.log(getUserNameLength(pekka));
console.log(getUserNameLength(ilkka));

console.log("getUserNameLength2");
console.log(getUserNameLength2(null));
console.log(getUserNameLength2(pekka));
console.log(getUserNameLength2(ilkka));

console.log("getUserNameLength3");
console.log(getUserNameLength3(pekka));
console.log(getUserNameLength3(ilkka));
