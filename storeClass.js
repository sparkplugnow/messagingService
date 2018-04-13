const Message = require('./messageClass');
const User = require('./userClass');

function Store(){
  let storage = [];
  let userStorage = [];
  let id = getID();
  let Created_on = getcurrTime();
  let Description = 'Message storage'

function sendMsg(msg){
  if (areUsersValid(msg.to, msg.from, userStorage) === true){
    storage.push(msg)
  }
};

function storeUser(user) {
  userStorage.push(user);
}

function deleteMsg(msg){
if (areUsersValid(msg.to, msg.from, userStorage) === true){
  for (let object of storage){
    if(object === msg){
      storage = storage.filter(left => left !== msg)
    }
    return storage;
  }
}
};

function purgeStorage(){
  if (storage.length !== 0){
    storage.length = 0;
    console.log('Storage purged');
    console.log(storage);
  }else {
    console.log('Storage already empty');
  }
};

function getInbox(username){
  if (isUserValid(username, userStorage)){
    let inbox = storage.filter(msg => msg.to === username);
    console.log(inbox);
    return inbox;
  }
};

function getOutbox(username){
if (isUserValid(username, userStorage)){
  let outbox = storage.filter(msg => msg.from === username);
  console.log(outbox);
  return outbox;
}
};

let user1 = new User('Temi','TemiOgb','temi@temi.com');
let user2 = new User('Chris','ChrisR','Chris@temi.com');
let user3 = new User('Sean','SeanCon','SeanC@temi.com');

storeUser(user1);
storeUser(user2);
storeUser(user3);


let message1 = new Message("Grab my phone", user1.username, user2.username);
let message2 = new Message("Check it", user1.username, user3.username);
let message3 = new Message("Thanks", user2.username, user1.username);
let message4 = new Message("Hi", user2.username, user3.username);
let message5 = new Message("Hello", user3.username, user1.username);
let message6 = new Message("Waddup", user3.username, user2.username);
// let goodnight6 = new Message("Coming", 'Cristiano', 'Gregg');
// let goodnight7 = new Message("Why Not?", 'Sade', 'Gregg');


sendMsg(message1);
sendMsg(message2);
sendMsg(message3);
sendMsg(message4);
sendMsg(message5);
sendMsg(message6);

//getInbox('ChrisR');
//getOutbox('TemiOgb');
deleteMsg(message1);
//purgeStorage();
console.log(storage);
//console.log(userStorage);
//console.log(newarray);

//console.log(message1['to']);
};

Store();

function getID(){
        return Math.round(Math.random()*1000)
        }
function getcurrTime(){
        return Date.now();
    }

function areUsersValid(to, from, userArray) {
  let newArray = userArray.map(user => user.username);
    if (newArray.includes(to) && newArray.includes(from)){
      return true;
        }
      return false;
};

function isUserValid(username, userArray) {
  let newArray = userArray.map(user => user.username);
    if (newArray.includes(username)){
      return true;
        }
      return false;
};
//Pushing to git repo
