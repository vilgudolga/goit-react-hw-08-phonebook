import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contact/FiltersSlice';
import { selectFilters } from 'redux/contact/selectors';

import styles from "./Filter.module.css";

export const Filter = () => {
    const filters = useSelector(selectFilters);
    const dispatch = useDispatch();

    return (
        <div className={styles.section}>
            <h2>Find contacts by name</h2>
            <input
                className={styles.input}
                type="text"
                name="filter"
                value={filters}
                onChange={(e) => dispatch(setFilter(e.target.value))}>             
            </input>
        </div>
    )
};
