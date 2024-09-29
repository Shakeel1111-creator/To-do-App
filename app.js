let todo=[];
let req=prompt("please enter your request:");
while(true){
    if(req == "quit"){
        console.log("quitting the to-do app");
        break;
    }
    else if(req == "list"){
        console.log("______________________");
        for(task of todo){
            console.log(task);
        }
        console.log("______________________");
    }
    else if(req=="add"){
        let task=prompt('enter the task you want to enter:');
        todo.push(task);
        console.log("task added");
    }
    else if(req=="delete"){
        let idx=prompt("enter the index you want to delete");
        todo.splice(idx,1);
        console.log("task deleted");
    }
    else{
        console.log("invalid request");
    }
    req=prompt("please enter your request:");
}
