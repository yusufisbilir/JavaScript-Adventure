const user = { id: 10, name: "yusuf" };
const friends = [
  { id: 11, name: "emir" },
  { id: 12, name: "işbilir" },
];

const getUser = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(user);
    }, 1000);
  });
};

const getfriend = (userID) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(friends);
    }, 500);
  });
};

// with promise chain

// getUser()
//   .then((user) => {
//     return getfriend(user.id);
//   })
//   .then((friends) => {
//     console.log(friends);
//   });



// with async await

async function asyncFunc(){
    try{
        console.log("Process started");
        const user = await getUser();
        console.log(user);
        console.log("user process end");

        console.log("friend process start");
        const friends = await getfriend(user.id);
        console.log(friends);
        console.log("friend process end");
    }catch(error){
        console.log(error);
    }
};
asyncFunc()