let endpoint = 	'https://api.adviceslip.com/advice'
let button = document.querySelector('.imgdice')
let div = document.querySelector('.advice')
let id = document.querySelector('.id')
let txt = document.querySelector('.txt')



button.addEventListener('click', async() => {
    let data = await getData()
    renderData(data)
})

let getData = async () => {
    try {
    let info = await fetch(`${endpoint}`)
    info = await info.json() 
        return info
    }catch(error){
        return alert('Error')
    }
}

let renderData = data => {
    id.innerHTML = `ADVICE  #${data.slip.id}`
    txt.innerHTML = `"${data.slip.advice}"`
}
