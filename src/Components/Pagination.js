/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export const Pagination = ({ mangaPerPage, totalMangas, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalMangas / mangaPerPage); i++) {
        pageNumbers.push(i);
    }



    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((pageNumber, id) => {
                    return (
                        <li key={id}>
                            <a
                                onClick={() => paginate(pageNumber)}
                                href="#"
                                className="pagination-list"
                            >
                                {pageNumber}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
