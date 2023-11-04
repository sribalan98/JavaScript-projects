let joke_type = document.getElementById("joketype")
let joke_line = document.querySelector(".jokeline")
let punchline = document.querySelector(".punchline")
let gen_button = document.querySelector(".gen-button")

gen_button.addEventListener('click',() => {
    setTimeout(() => {
        fetch('https://official-joke-api.appspot.com/jokes/random')
        .then(res => {
            if (res.ok){
                console.log("passed")
            } else {
                console.log('failed')
            }
            return res.json()
        })
         .then(msg =>  {
            console.log(msg) 
            console.log(msg.type)
            joke_type.textContent = `Type : ${msg.type}`
            joke_line.textContent = `Joke : ${msg.setup}`
            punchline.textContent = `Punchline : ${msg.punchline}`
        })
    },3000)
    
        
})