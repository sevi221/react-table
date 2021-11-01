import React, { useMemo } from 'react';
import '../Scss/Pagination.scss';

const Pagination = ({
    currentPage = 1,
}) => {

// TODO: este componente debería recibir el totalItems que 
// queremos mostrar como una prop que viene establecido 
// desde el componente padre (Layout). En este caso hemos
// forzado para que muestre 5 elementos. 
// Lo ideal sería que la paginación fuese de servidor y 
// la llamada fetch recuperase dinámicamente los resultados. 

    const paginationItems = useMemo(() => {
        const pages = [];
        for (let i = 1; i <= 5; i++) {
            pages.push(
                <li key={i}>
                    <a>{i}</a>
                </li>
            );
        }
        return pages;
    }, []);

    return (
        <>
            <div className="pagination-container">
                <ul className="pagination-list">
                    {paginationItems}
                </ul>
            </div>
        </>
    );
}

export default Pagination;