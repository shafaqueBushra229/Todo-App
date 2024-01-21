let todoList =[{
    item:'js complete krna hai', 
    date: '01/22/2024',
}];

displayItem();


function add(){
    let dateEle = document.querySelector("#date-selector");
    let dateValue = dateEle.value;
    let element = document.querySelector("#text-area");
    let valeofTextArea = element.value;
    todoList.push({item: dateValue , date: valeofTextArea});
    displayItem();
    element.value = '';
    dateValue = '';
    
}

function displayItem(){
     let displayMsg = document.querySelector(".todo-container");

    let newHtml= '';


    for(let i=0; i<todoList.length;i++){
        
       
        newHtml +=`
        <span>${todoList[i].date}</span>
        <span>${todoList[i].item}</span>  
        <button class='dltBtn' onClick="todoList.splice(${i},1);
        displayItem();">Delete</button>
        `;
    }
    displayMsg.innerHTML = newHtml;

}

