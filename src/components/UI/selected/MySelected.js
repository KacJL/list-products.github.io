import React, {useContext} from 'react';
import classes from "./MySelected.module.css";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";

const MySelected = observer(({options, onChange}) => {
    const {store} = useContext(Context)

    return (
        <select
            id={"brand"}
            className={classes.mySelected}
            value={store.searchQuery.brand}
            onChange={e => {
                store.setSearchQueryBrand(e.target.value);
                onChange(e.target.id, e.target.value)
            }}
        >
            <option
                disabled
                selected
                value={store.searchQuery.brand}
            >
                {store.searchQuery.brand}
            </option>
            {options.map(option =>
                <option key={option.name} value={option.name}>
                    {option.name}
                </option>
            )}
        </select>
    );
});

export default MySelected;