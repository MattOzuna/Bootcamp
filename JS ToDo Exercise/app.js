const form = document.querySelector('form');
const list = document.querySelector('ul');
if(localStorage.getItem('Listitem')){
    const oldList = JSON.parse(localStorage.getItem('Listitem'));
    list.innerHTML = oldList
}

form.addEventListener("submit", function(e){
    e.preventDefault();
    const newItem = document.querySelector('#item')
    const newLi = document.createElement('li')
    const newCheckbox = document.createElement('input')
    const newButton = document.createElement('button')
    newCheckbox.setAttribute('type', 'checkbox')
    newButton.innerText = 'Remove'
    newButton.classList.add('new-button')
    newLi.innerText = newItem.value
    newLi.prepend(newCheckbox)
    newLi.append(newButton)
    list.append(newLi)
    form.reset()
    const completeItem = list.innerHTML
    localStorage.setItem('Listitem', JSON.stringify(completeItem))
})

list.addEventListener('click', function(event){
    const target = event.target.parentElement
    if (event.target.tagName === 'INPUT'){
        target.classList.toggle('done');
    }
    else if (event.target.tagName === 'BUTTON'){
        let localList = localStorage.getItem('Listitem');
        let text = JSON.stringify(target.innerHTML);
        console.log(text);
        localList = localList.replace(text, '');
        localStorage.setItem('Listitem', localList);
        target.remove();
    }
})

