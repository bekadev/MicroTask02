import React from "react";
import {FilterButton} from "./FilterButton/FilterButton";

export const Filter = () => {

    const FilterButtonAll = (t: string) => {
        console.log(t)
    }

    return (
        <div>
            <FilterButton name={'all'} callBack={() =>FilterButtonAll('All')} />
            <FilterButton name={'usd'} callBack={() =>FilterButtonAll('USD')} />
            <FilterButton name={'rub'} callBack={() =>FilterButtonAll('RUB')} />
        </div>
    )
}