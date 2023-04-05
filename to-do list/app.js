let answer = prompt("Welcome to your To Do List! What would you like to do?").toLowerCase()
const list = []
while (answer!== "quit") {
    if (answer === "add") {
        console.log("Please enter what you want to add to your list!")
        let newEntry = prompt("Please enter what you want to add to your list!")
        list.push(newEntry) 
        console.log(`${newEntry} has been added to your list!`)

        answer = prompt("What do we do now?")
    }
    else if (answer === "delete") {
        console.log("Please enter what you want to delete from your list!")
        console.log("*********")
        for (let i = 0; i< list.length; i++){
            console.log(list[i])
        }
        console.log("*********")
        let newDelete = prompt("Please enter what you want to delete from your list!")
        let indexDelete = list.indexOf(newDelete.toLowerCase())
        if (indexDelete) {
            console.log(`${newDelete} has been deleted from your list!`)
            list.splice(indexDelete,1)
        }
        else {
            console.log("Invalid task, probably not in list!")
        }

        answer = prompt("What do we do now?")
    }
    else if (answer === "list") {
        console.log("Your to do list!")
        console.log("*********")
        for (let i = 0; i< list.length; i++){
            console.log(list[i])
        }
        console.log("*********")

        answer = prompt("What do we do now?")
    }
    else {
        console.log("Invalid entry, try with one of our commands: add, delete, list or quit!")

        answer = prompt("What do we do now?")
    }
}

console.log("To do list closed here you go!")
for (let i = 0; i < list.length; i++){
    console.log(list[i])
}