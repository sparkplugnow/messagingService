const User = require('./userClass');


module.exports = function Message (body, to, from){
        this.body = body;
        this.to = to;
        this.from = from;
        var id = getID();
        var time = getcurrTime();



    }
function getID(){
        return Math.round(Math.random()*1000)
        }
function getcurrTime(){
        return Date.now();
    }
