//1 
const one = document.getElementById('container')
//2
const two = document.querySelector('#container')
//3 
const three = document.querySelectorAll('.second')
//4
const four = document.querySelector('ul > .third')
//5
//one.innerText = 'HELLO!'
//6
const footer = document.querySelector('.footer')
footer.classList.add('main')
//7
footer.classList.remove('main')
//8
const eight = document.createElement('li')
//9
eight.innerText = 'four'
//10
const ul = document.querySelector('ul')
ul.append(eight)
//11
const ol = document.querySelectorAll('ol li')
for (let li of ol){
    li.style.backgroundColor = 'green'
}
//12
footer.remove()
