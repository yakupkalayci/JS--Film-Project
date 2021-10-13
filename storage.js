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
    if(films) {
        films.forEach((film) => {
            uiObject.addFilmtoUI(film);
        })
    }
}

Storage.prototype.deleteFilmFromStorage = function(element) {
    let films = JSON.parse(localStorage.getItem(this.name));
    let deletedFilm = element;
    for(let i = 0; i < films.length; i++) {
        if(films[i].title === deletedFilm) {
            films.splice(i, 1);
        }
    }

    localStorage.setItem(this.name, JSON.stringify(films));
}

Storage.prototype.deleteAll = function() {
    localStorage.clear();
}