const frmFilm = document.querySelector("#formFilm")

frmFilm.addEventListener("submit", function(event) {
    const txtFilmYear = document.querySelector("#year").value
    const currentYear = new Date().getFullYear()

    if(txtFilmYear > 1950 && txtFilmYear <= currentYear) {
        alert("Validação OK")
        addFilmTable()
        frmFilm.reset()
    } else {
        alert("erro")
    }
    event.preventDefault()
})


function addFilmTable() {
    const table = document.querySelector("table")
    const filmTitle = document.querySelector("#title").value
    const filmYear = document.querySelector("#year").value
    const filmGenre = document.querySelector("#genre").value
    const filmCover = document.querySelector("#cover").value

    table.innerHTML += `
        <tr>
            <td>${filmTitle}</td>
            <td>${filmYear}</td>
            <td>${filmGenre}</td>
            <td><img src="${filmCover}"/></td>
            <td></td>
        </tr>
    `
}