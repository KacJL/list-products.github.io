import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import {Pagination} from "react-bootstrap";
import "./Pages.css";

const Pages = observer(() => {
    const {store} = useContext(Context)
    const pageCount = Math.ceil(store.totalCount / store.limitCount)

    return (
        <Pagination hidden={pageCount === 1 || pageCount === 0} className={"mt-5"}>
            <Pagination.First onClick={() => store.setNumPage(1)}/>
            <Pagination.Prev onClick={() => store.setNumPage(store.numPage - 1)}/>
            <Pagination.Ellipsis hidden={store.numPage < 4} disabled/>

            <Pagination.Item
                onClick={() => store.setNumPage(store.numPage - 1)}
                hidden={store.numPage === 1}
            >
                {store.numPage - 1}
            </Pagination.Item>
            <Pagination.Item
                active={true}
            >
                {store.numPage}
            </Pagination.Item>
            <Pagination.Item
                onClick={() => store.setNumPage(store.numPage + 1)}
                hidden={store.numPage === pageCount}
            >
                {store.numPage + 1}
            </Pagination.Item>

            <Pagination.Ellipsis hidden={store.numPage > pageCount - 4} disabled/>
            <Pagination.Next onClick={() => store.setNumPage(store.numPage + 1)}/>
            <Pagination.Last onClick={() => store.setNumPage(pageCount)}/>
        </Pagination>
    );
});

export default Pages;