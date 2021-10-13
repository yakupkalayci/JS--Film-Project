function Storage(name) {
    this.name = name;
} 

Storage.prototype.addFilmtoStorage = function(newFilm) {
    let films;
    if(localStorage.getItem(this.name)) {
        films = JSON.parse(localStorage.getItem(this.name));
    } else {
        films = [];
    }

    films.push(newFilm);
    localStorage.setItem(this.name, JSON.stringify(films));
}

Storage.prototype.getFilmsFromStorage = function() {
    let films = JSON.parse(localStorage.getItem(this.name));
    let uiObject = new UI();
    films.forEach((film) => {
        uiObject.addFilmtoUI(film);
    })
}