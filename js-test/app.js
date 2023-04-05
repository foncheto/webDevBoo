let answer = prompt("Welcome to your To Do List! What do you want to do?").toLowerCase()
const list = []
while (answer!== "quit") {
    if (answer === "list") {
        console.log("*********");
        for (let i = 0;i < list.length; i++) {
            console.log(list[i]);
        }
        console.log("*********");
        answer = prompt("What do you want to do now?").toLowerCase();
    }
    else if (answer === "add") {
        let addition = prompt("Enter what activity you would like to add to the list!");
        list.push(addition);
        console.log(`${addition} has been added to your To Do List`);
        answer = prompt("What do you want to do now?").toLowerCase();
    }

    else if (answer === "delete"){
        let del = prompt("Enter what activity you would like to erase from the list!");
        list.push(del);
        console.log(`${del} has been added to your To Do List`);
        answer = prompt("What do you want to do now?").toLowerCase();
    }
    else {
        console.log("Invalid Action")
        answer = prompt("Try with add, delete, list or quit.").toLowerCase();
    }
}
console.log("See ya!")