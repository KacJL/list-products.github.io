import {makeAutoObservable} from "mobx";

export default class MainStore {
    constructor() {
        this._listItems = []
        this._nameBrands = []
        this._searchQuery = {price: '', product: '', brand: 'По брэнду'}
        this._numPage = 1
        this._limitCount = 50
        this._totalCount = 8000
        makeAutoObservable(this)
    }

    setListItems(item) {
        this._listItems = item
    }

    setNameBrands(brandName) {
        this._nameBrands = brandName
    }

    setSearchQueryProduct(text) {
        this._searchQuery.product = text
    }

    setSearchQueryPrice(text) {
        this._searchQuery.price = text
    }
    setSearchQueryBrand(text) {
        this._searchQuery.brand = text
    }

    setNumPage(page) {
        this._numPage = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    get listItems() {
        return this._listItems;
    }

    get nameBrands() {
        return this._nameBrands;
    }

    get searchQuery() {
        return this._searchQuery;
    }

    get numPage() {
        return this._numPage;
    }

    get limitCount() {
        return this._limitCount;
    }

    get totalCount() {
        return this._totalCount;
    }
}
