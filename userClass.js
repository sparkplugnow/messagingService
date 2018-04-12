module.exports = function User(name, username, email){
    this.name = name;
    this.username = username;
    this.email = email;
    this.active = new Boolean(true);
}
