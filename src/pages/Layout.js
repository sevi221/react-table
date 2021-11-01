import React, { useState } from 'react';

//COMPONENTS
import Navbar from '../components/Navbar';
import Table from '../components/Table';
import Pagination from '../components/Pagination';
import '../Scss/Layout.scss'

const Layout = () => {
    // TODO: para la paginación hay que definir una constante 
    // con el total de páginas que queremos mostrar en el footer 
    // y pasarlo como props al componente Pagination  
    const [totalItems, setTotalItems] = useState(0);
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <main className="front-container">
                <h1>Browse Questions</h1>
                <Table />
                <Pagination
                    total={totalItems}
                />
            </main>
        </>
    );
}

export default Layout;