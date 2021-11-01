import React, { useState, useEffect, useMemo } from 'react';
import TableHeader from '../components/TableHeader';
import '../Scss/Table.scss';
import Search from './Search';


const Table = () => {
    // TODO como próximos pasos implementaría un spinner o un skeleton con 
    // un loading para mostrar al usuario que se está realizando la llamada 
    // que recupera los datos. También añadiría un modal de error en el caso 
    // de que exista algún error en la carga.

    const [questionData, setQuestionData] = useState([]);
    const [sorting, setSorting] = useState({ field: "", order: "" });
    const [search, setSearch] = useState("");

    // Si queremos ordenar por alguna otra categoría, solo tendremos que 
    // cambiar la propiedad isSortable a true.
    const tHeaders = [
        { name: "ID", field: "id", isSortable: true },
        { name: "Category", field: "category", isSortable: false },
        { name: "Type", field: "type", isSortable: false },
        { name: "Difficulty", field: "difficulty", isSortable: true },
        { name: "Question / Statement", field: "question", isSortable: false },
        { name: "Created By", field: "author", isSortable: false }
    ];

    useEffect(() => {
        const fetchData = () => {
            fetch('https://opentdb.com/api.php?amount=10')
                .then(response => response.json())
                .then((res) => {
                    let questions = [];
                    for (let [key, item] of Object.entries(res.results)) {
                        questions.push({
                            id: key,
                            category: item.category,
                            type: item.type,
                            difficulty: item.difficulty,
                            question: item.question,
                        })
                    }
                    setQuestionData(questions)
                }
                )
                .catch(err => console.error(err))
        }
        fetchData()
    }, [])

    const questionsDataTable = useMemo(() => {
        let computedQuestions = questionData;

        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedQuestions = computedQuestions.sort(
                (a, b) =>
                    reversed * b[sorting.field].localeCompare(a[sorting.field])
            );
        }
        if (search) {
            computedQuestions = computedQuestions.filter(
                computedQuestions =>
                    computedQuestions.question.toLowerCase().includes(search.toLowerCase())
            );
        }
        return computedQuestions

    }, [questionData, sorting, search]);


    return (
        <>
            <Search
                onSearch={val => setSearch(val)}
            />
            <table className="table-container tborder">
                <TableHeader
                    tHeaders={tHeaders}
                    onSorting={(field, order) =>
                        setSorting({ field, order })
                    }
                />
                <tbody>
                    {questionsDataTable?.map((qt, i) => (
                        <tr key={i}>
                            <td>{`94${qt.id}`}</td>
                            <td>{qt.category}</td>
                            <td>{qt.type}</td>
                            <td>{qt.difficulty}</td>
                            <td>{qt.question}</td>
                            <td><a href="#">{`user`}</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Table;