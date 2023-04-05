class Users {
    constructor(name, pass, mail) {
        this.user = name;
        this.password = pass;
        this.mail = mail;
    }
    greet() {
        return `Welcome ${this.user}!`;
    }
    addPost(msg) {
        return "Comment succesfully posted";
    }
}

const pablo = new Users('pablito', 'udechile1', 'pablomail');
