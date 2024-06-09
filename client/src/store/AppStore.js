import { makeAutoObservable } from "mobx";

export default class Store {
  constructor() {
    this._films = []
    this._selectedFilm={}
    makeAutoObservable(this)
  }

}