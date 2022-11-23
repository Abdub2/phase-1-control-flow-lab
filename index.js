function scuberGreetingForFeet(d){
  let result;
  if(d<=400){
    result="This one is on me!"
  }else if(d>2500){
    result="No can do."
  }else if(d>2000){
    result="I will gladly take your thirty bucks."
   }
  return result;

}
scuberGreetingForFeet(2501);


function ternaryCheckCity(city) {
  const cityMessage=city==="NYC" ? "Ok, sounds good." : "No go.";
  return cityMessage;
}
console.log(ternaryCheckCity("NYC"))
console.log(ternaryCheckCity("Pittsburgh"))

function switchOnCharmFromTip(tip){
  let response;
switch(tip){
  case 'generous':
    return'Thank you so much.';
  case 'not as generous':
    return('Thank you.');
  default:
    return'Bye.'
}
}
console.log(switchOnCharmFromTip("generous"));
console.log(switchOnCharmFromTip("not as generous"));
console.log(switchOnCharmFromTip("thanks for everything"));
