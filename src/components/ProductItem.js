import React from 'react';

const ProductItem = ({item}) => {

    return (
        <div className={"product"}>
            <div className={"product__content"}>
                <div><strong>Название продукта: </strong>{item.product}</div>
                <div><strong>ID: </strong>{item.id}</div>
                <div><strong>Цена: </strong>{item.price}</div>
                <div><strong>Брэнд: </strong>{item.brand !== null ? item.brand : ""}</div>
            </div>
        </div>
    );
};

export default ProductItem;