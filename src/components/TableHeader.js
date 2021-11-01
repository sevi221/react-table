import React, { useState} from 'react';
import '../Scss/Table.scss';

const TableHeader = ({ tHeaders, onSorting }) => {
    const [sortingField, setSortingField] = useState("");
    const [sortingOrder, setSortingOrder] = useState("asc");

    const onSortingChange = (field) => {
        const order =
            field === sortingField && sortingOrder === "asc" ? "desc" : "asc";

        setSortingField(field);
        setSortingOrder(order);
        onSorting(field, order);
    };


    return (
        <>
            <thead>
                <tr>
                    {tHeaders.map(({ name, field, isSortable }) => (
                        <th
                            key={name}
                            className="theader"
                        >
                            {name}
                            {isSortable && (
                                <button
                                    className="button-sort"
                                    onClick={() =>
                                        isSortable ? onSortingChange(field) : null
                                    }>
                                    <i className="fa fa-sort"></i>
                                </button>)}
                        </th>
                    ))}
                </tr>
            </thead>
        </>
    );
}

export default TableHeader;