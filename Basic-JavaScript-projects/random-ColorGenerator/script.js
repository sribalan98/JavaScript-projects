const body = document.body
const btn$color = document.querySelector('.btn-change')
const color$code = document.querySelector('.color-code')


btn$color.addEventListener('click', function(e){
        let code = Math.random().toString(16).substring(2,8)
        body.style.backgroundColor = `#${code}`
        color$code.textContent  = `#${code}`
        color$code.style.color = `#${code}`
    })