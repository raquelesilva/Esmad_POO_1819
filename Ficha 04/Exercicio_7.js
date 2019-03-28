// Definir array para filmes
const movies = []

// Definir a caixa de texto para o ano
const txtYear = document.querySelector("#txtYear");
txtYear.max = new Date().getFullYear();

// Definir um listener para o botão de submissão do formulário
const myForm = document.querySelector("form");
myForm.addEventListener("submit", function (event) {
    // 1. Obter os valores de todos os elementos do formulário
    const txtTitle = document.querySelector("#txtTitle").value;
    const txtGenre = document.querySelector("#sltGenre").value;
    const txtYear = document.querySelector("#txtYear").value;
    const txtCover = document.querySelector("#txtCover").value;
    const txtTrailer = document.querySelector("#txtTrailer").value;

    // 2. Verificar se o filme já existe no array
    const result = isMovie(txtTitle);

    if (result === true) {
        alert("Filme já existe!!!!")
    } else {
        // 3. Criar um objeto
        const newMovie = {
            title: txtTitle,
            genre: txtGenre,
            year: txtYear,
            cover: txtCover,
            trailer: txtTrailer
        }

        // 4. Guardar o objeto no array
        movies.push(newMovie);
        // em alternativa movies[movies.length] = newMovie
    }

    // 5. Exibir os filmes na tabela
    renderTable();

    // Prevenir que o formulário é submetido ao servidor
    event.preventDefault();

})

const btnCloseCover = document.querySelector("#btnCloseCover")
btnCloseCover.addEventListener("click", function(){
    const dlgCover = document.querySelector("#dlgCover");
    dlgCover.close();
})


// ***************************************************** FUNÇÕES ********************************************
// Função que vai verificar se um título de filme existe
function isMovie(txtTitle) {
    for (const movie of movies) {
        if (movie.title === txtTitle) {
            return true
        }
    }
    return false;
}

// Função responsável por exibir todos os filmes do array na tabela HTML
function renderTable() {
    // Obter a referência á tabela
    const myTable = document.querySelector("table");

    // Injetar o cabeçalho na tabela
    myTable.innerHTML = `
        <tr>
            <th>Título</th>
            <th>Género</th>
            <th>Opções</th>
        </tr>
    `

    // Exibir todos os filmes em linhas independentes
    for (const movie of movies) {
        myTable.innerHTML += `
        <tr>
            <td>${movie.title}</td>
            <td>${movie.genre}</td>
            <td>
                <button onclick="showCover('${movie.cover}')"> Ver Capa</button>
                <button onclick="showTrailer('${movie.trailer}')"> Ver Trailer</button>
                <button onclick="removeMovie('${movie.title}')"> Remover Filme</button>
            </td>
        </tr>
        `
    }

}

//Função para exibir uma janela modal com a imagem  da capa do filme
function showCover(cover){
    // Injetar a imagem da capa na imagem
    const imgCover = document.querySelector("#imgCover");
    imgCover.src = cover;

    // Exibir a janela
    const dlgCover = document.querySelector("#dlgCover");
    dlgCover.showModal();
}

// Função vai remover um filme dado o seu titulo
function removeMovie(title){
    for (let i = 0; i<movies.length; i++) {
        if(movies[i].title === title){
            // Remover o filme
            movies.splice(i,1);
        }
    }
    renderTable();
}