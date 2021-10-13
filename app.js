const form = document.querySelector("#filmForm");
const titleDOM = document.querySelector("#filmName");
const directorDOM = document.querySelector("#filmDirector");
const linkDOM = document.querySelector("#filmPosterLink");

const deleteButtons = [];

// UI Objesini başlatma
const ui = new UI();

// Storage objesini başlatma
const storage = new Storage("films");

// Tüm eventleri yükleme
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", storage.getFilmsFromStorage());
}

function addFilm(e) {
    const title = titleDOM.value
    const director = directorDOM.value;
    const link = linkDOM.value;

    if(title && director && link) {
        // Yeni Film Oluşturma
        const newFilm = new Film(title, director, link);
        ui.addFilmtoUI(newFilm);
        storage.addFilmtoStorage(newFilm);
        $(".success").toast("show");
    } else {
        $(".error").toast("show");
    }
    ui.clearInputs(titleDOM, directorDOM, linkDOM);
    e.preventDefault();
}