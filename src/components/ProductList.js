import React from 'react';
import ProductItem from "./ProductItem";
import Pages from "./UI/pages/Pages";

const ProductList = ({list}) => {
    return (
        <div>
            {list.length !== 0
                ?
                <div className={"container__data"}>
                    {list.map((item) =>
                        <ProductItem item={item} key={item.id}/>
                    )}
                    <Pages/>
                </div>
                :
                <div className={"container__empty"}>
                    <h2>Список товаров пуст...</h2>
                </div>
            }

        </div>
    );
};

export default ProductList;