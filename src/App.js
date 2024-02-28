import React, {useContext, useEffect} from 'react';
import PostService from "./API/PostService";
import ProductList from "./components/ProductList";
import ProductFilter from "./components/ProductFilter";
import Loader from "./components/UI/loader/Loader";
import {useFetching} from "./hooks/useFetching";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import useDebounce from "./hooks/useDebounce";

const App = observer(() => {
    const {store} = useContext(Context)

    const [fetchItems, isProductListLoading] = useFetching(async (offset = 0) => {
        const responseListIds = await PostService.getIds({"offset": offset, "limit": store.limitCount})
        store.setListItems(responseListIds)
    })

    const [fetchFieldsBrands, isFieldsBrandsLoading] = useFetching(async () => {
        const responseFieldsBrands = await PostService.getFieldsBrands({"field": "brand"})
        store.setNameBrands(responseFieldsBrands)
    })

    useEffect(() => {
        fetchFieldsBrands()
    }, [])

    useEffect(() => {
        fetchItems((store.numPage * 50) - store.limitCount)
    }, [store.numPage])

    const [fetchFilter, isFilterLoading] = useFetching(async (type, query) => {
        if (query && query.trim().length) {
            let findIds
            if (type === "product") {
                findIds = await PostService.getIdsFilter({"product": query})
                store.setSearchQueryProduct('')
            }
            if (type === "price") {
                findIds = await PostService.getIdsFilter({"price": Number.parseInt(query)})
                store.setSearchQueryPrice('')
            }
            if (type === "brand") {
                findIds = await PostService.getIdsFilter({"brand": query})
                store.setSearchQueryBrand('По брэнду')
            }
            store.setTotalCount(findIds.length)
            store.setListItems(findIds)
        }
    })

    const debouncedSearch = useDebounce(fetchFilter)

    return (
        <div className={"main__container"}>
            <h1>Список товаров:</h1>
            <ProductFilter
                fetchFilter={fetchFilter}
                debouncedSearch={debouncedSearch}
            />
            {isProductListLoading || isFieldsBrandsLoading || isFilterLoading
                ?
                <div className={"loading"}>
                    <h2>Идет Загрузка...</h2>
                    <Loader/>
                </div>
                :
                <ProductList list={store.listItems}/>
            }
        </div>
    );
});

export default App;
