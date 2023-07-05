import React, { useCallback, useEffect, useState } from 'react';
import Cards from './Cards';

export default function News(props) {
    const [item, setItem] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const lastDay = String(day - 1).padStart(2, '0');
    const currentDate = `${year}-${month}-${day}`;
    const previousDate = `${year}-${month}-${lastDay}`

    const fetchData = useCallback(async () => {
        try {
            let res = await fetch(`https://newsapi.org/v2/everything?q=${props.category}&from=${previousDate}&to=${currentDate}&sortBy=popularity&apiKey=64100fc5eeb24df4bb7e33ae51d12c75`);
            let data = await res.json();
            setItem(data.articles);
        } catch (error) {
            console.error(error);
        }
    }, [props.category]);

    useEffect(() => {
        fetchData();
    }, [fetchData, currentDate, previousDate]);

    // Calculate the index range of items to display on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = item.slice(indexOfFirstItem, indexOfLastItem);

    // Function to handle page changes
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className='container'>
                <div className={`heading text-center my-5 text-${props.mode === "light" ? "dark" : "light"}`}>
                    <h2 className='fw-bold'>NEWSBEAT - {props.category.toUpperCase()} HEADLINES</h2>
                </div>

                <div className="row">
                    {currentItems.map((element, index) => (
                        <div className='col-md-4' key={index}>
                            <Cards title={element.title} url={element.url} description={element.description} urlToImage={element.urlToImage} mode={props.mode} />
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className='pagination my-5 d-flex justify-content-center'>
                    {Array.from({ length: Math.ceil(item.length / itemsPerPage) }).map((_, index) => (
                        <button
                            key={index + 1}
                            type="button"
                            className={`page-item ${currentPage === index + 1 ? 'active' : ''} mx-2 btn btn-outline-info`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
            <footer style={{ backgroundColor: "black", width: "100%", height: "70px", color: "white" }} className='d-flex justify-content-center align-items-center'>
                <p>&copy; Copyrights by Newsbeat.</p>
            </footer></>
    );
}
