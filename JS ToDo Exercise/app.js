const form = document.querySelector('form');
const list = document.querySelector('ul');
const taskList = JSON.parse(localStorage.getItem("Listitem")) || [];
console.log(taskList)
for (let i = 0; i<taskList.length; i++){
    if (taskList[i].task !== ''){
        const newLi = document.createElement('li')
        const newCheckbox = document.createElement('input')
        const newButton = document.createElement('button')
        newCheckbox.setAttribute('type', 'checkbox')
        newButton.innerText = 'Remove'
        newButton.classList.add('new-button')
        newLi.innerText = taskList[i].task
        newLi.prepend(newCheckbox)
        newLi.append(newButton)
        list.append(newLi)
    }

}

form.addEventListener("submit", function(e){
    e.preventDefault();
    const newItem = document.querySelector('#item')
    const newLi = document.createElement('li')
    const newCheckbox = document.createElement('input')
    const newButton = document.createElement('button')
    newCheckbox.setAttribute('type', 'checkbox')
    newLi.innerText = newItem.value
    taskList.push({task: newLi.innerText})
    localStorage.setItem('Listitem', JSON.stringify(taskList))
    newButton.innerText = 'Remove'
    newButton.classList.add('new-button')
    newLi.prepend(newCheckbox)
    newLi.append(newButton)
    list.append(newLi)
    form.reset()
    
})

list.addEventListener('click', function(event){
    const target = event.target.parentElement
    if (event.target.tagName === 'INPUT'){
        target.classList.toggle('done');
    }
    else if (event.target.tagName === 'BUTTON'){
        
        for (let i = 0; i<taskList.length; i++){
            const savedValue = taskList[i].task.concat('Remove')
            if (target.innerText === savedValue){
                taskList.splice(i, 1)
            }
            localStorage.setItem('Listitem', JSON.stringify(taskList))
        }
        target.remove();
    }
})
