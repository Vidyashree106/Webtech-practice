let fetchapi = async () => {
    const root = document.getElementById('root')

    let apidtata = await fetch('https://api.github.com/users')
    let array = await apidtata.json()

    array.map((elem) => {
        root.innerHTML += `
        <div class=card>
            <div><img src=${elem.avatar_url}></div>
            <div class=title>${elem.login}</div>
        </div> `
    })
}
fetchapi()