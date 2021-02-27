// thow, try, catch, finally

let name = "yusuf";
if (name != "yusuf") throw Error("name is not Yusuf");

try {
  let num1 = 10;
  let num2 = 1;
  let result = num1 / num2;
  if(num2 == 0)
    throw Error("num2 == 0");
  else
    console.log(result);
}catch(error){
    console.error(error);
}finally{
    console.log("Finally worked");
};