import { makeAutoObservable } from "mobx";

export default class Store {
  constructor() {
    this._films = []
    this._ratedFilms = []
    this._selectedFilm={}
    this._genres = []
    makeAutoObservable(this)
  }

  setFilms(films) {
    this._films = films
  }

  setRatedFilms(films) {
    this._ratedFilms = films
  }

  setSelectedFilm(film) {
    this._selectedFilm = film
  }

  setGenres(genres) {
    this._genres = genres
  }

  get films() {
    return this._films
  } 

  get ratedFilms() {
    return this._ratedFilms
  }

  get selectedFilm() {
    return this._selectedFilm
  }

  get genres() {
    return this._genres
  }

}