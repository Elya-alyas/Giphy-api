/// ===========================giphy-api=========================

const baseURL = 'https://api.giphy.com/v1/gifs/search?'
const key = 'api_key=QiR6DTO4Qcm44JVhdw80nu41wmK1UeUr'
const limit = '&limit='
const params = '&q='


const search = document.querySelector('#search')
const form = document.querySelector('form')
const input = document.querySelector('#inp')
const select = document.querySelector('#count')
const output = document.querySelector('#output')
const option = document.querySelector('option')

const searchGiphy = async () => {
    let API = baseURL + key + limit + select.value + params + input.value
    const req = await fetch(API)
    const res = await req.json()
    render(res.data);
    input.value = ''
}

const render = (data) => {
    output.innerHTML = ''
    data.map(e => {
        console.log(e);
        const card = document.createElement('div')
        const title = document.createElement('h3')
        const giff = document.createElement('iframe')
        title.textContent = e.title
        giff.src = e.embed_url
        card.append(title, giff)
        output.append(card)

    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    searchGiphy()
})


// добавить 12 символов и удалить 2 символа