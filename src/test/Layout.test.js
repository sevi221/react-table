import { render } from '@testing-library/react';
import Layout from '../pages/Layout';
import Navbar from '../components/Navbar';
import Table from '../components/Table';
import Pagination from '../components/Pagination';

test('START:renders Layout page', () => {
    render(<Layout />);
});

test('Renders Navbar component', () => {
    render(<Navbar />);
});

test('Renders Table component', () => {
    render(<Table />);
});

test('Renders Pagination component', () => {
    render(<Pagination/>);
});