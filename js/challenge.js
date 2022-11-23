const counter = document.getElementById('counter')
let number = counter.textContent
let intervalID = setInterval(increaseCounter, 1000)
console.log(intervalID)

//Counter that increases by 1 every second
// function changeNumber(){
//     const intervalID = setInterval(increaseCounter, 1000)
//     console.log(intervalID)
// }
// changeNumber()

//Function that increases the number by 1
function increaseCounter(){
     ++number
     counter.textContent = number
}

//Grabbing button and adding event listener
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
plus.addEventListener('click', addOncSecond)
minus.addEventListener('click', removeOncSecond)
//making function to increase the number by 1 and decrease number by 1

function addOncSecond(){
    ++number
}
function removeOncSecond(){
    number--
}

// use interpolation to add the likes to the page
//grab buttons and add event listeners
const like = document.getElementById('heart')
const ul = document.querySelector('.likes')
like.addEventListener('click', addLike)
//make function that adds text, and appends it to the ul element on the page
function addLike(){
    if(document.getElementById(number)){
        console.log(document.getElementById(number))
        let foundLi = document.getElementById(number)
        foundLi.dataset.like_count++
        foundLi.textContent = `You like ${number} ${foundLi.dataset.like_count} times`
    }else{
    const li = document.createElement('li')
    li.id = number
    li.dataset.like_count = 1
    li.textContent = `You liked ${number}`
    console.log(li)
    ul.appendChild(li)
    }
}



//working on pause function
//get buttons and add event listeners
const stop = document.getElementById('pause')
stop.addEventListener('click', pause)
const submitBtn = document.getElementById('submit')
//make a function that will stop the timer, disable the buttons, and change the button text content to resume
function pause(){
    if (stop.textContent === ' pause '){
        clearInterval(intervalID)
        stop.textContent = 'resume'
        like.disabled = true
        plus.disabled = true
        minus.disabled = true
        submitBtn.disabled = true
    }else {
        stop.textContent = ' pause '
        like.disabled = false
        plus.disabled = false
        minus.disabled = false
        submitBtn.disabled = false
        intervalID = setInterval(increaseCounter, 1000)
    }
}

//form
//grab form and add event listeners
const form = document.querySelector('form')
form.addEventListener('submit',(event) => {
    event.preventDefault()
    const commentList = document.querySelector('#list')
    const comment = document.createElement('div')
    comment.textContent = event.target.comment_input.value
    commentList.appendChild(comment)
    form.reset()
    
})