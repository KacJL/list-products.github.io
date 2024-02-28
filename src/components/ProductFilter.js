import React, {useContext} from 'react';
import MyInput from "./UI/input/MyInput";
import MySelected from "./UI/selected/MySelected";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const ProductFilter = observer(({fetchFilter, debouncedSearch}) => {
    const {store} = useContext(Context)

    return (
        <div className={"option__container"}>
            <MyInput
                id={"product"}
                value={store.searchQuery.product}
                onChange={e => {
                    store.setSearchQueryProduct(e.target.value)
                    debouncedSearch(e.target.id, e.target.value)
                }}
                placeholder={"По названию"}/>
            <MyInput
                id={"price"}
                value={store.searchQuery.price}
                onChange={e => {
                    store.setSearchQueryPrice(e.target.value)
                    debouncedSearch(e.target.id, e.target.value)
                }}
                placeholder={"По цене"}/>
            <MySelected
                onChange={fetchFilter}
                options={store.nameBrands.map(brand => ({name: brand}))}
            />
        </div>
    );
});

export default ProductFilter;