function UI() {

}

UI.prototype.addFilmtoUI = function(newFilm) {

  const filmList = document.querySelector("#films");
  filmList.innerHTML += `
    <tr>
    <td><img src="${newFilm.link}" class="img-fluid img-thumbnail"></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete</a></td>
  `
  deleteButtons.push(document.querySelector("#delete-film"));
}

UI.prototype.clearInputs = function(element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
}

UI.prototype.deleteFilmFromUI = function(element) {
  tBody.removeChild(element.parentElement.parentElement);
}