import React, {useEffect, useState} from 'react';
import ReactPaginate from "react-paginate";
import {useAppSelector} from "../../state/hooks";
import './Paginator.css';

type PaginatorProps = {
    currentPage: number
    repositoriesCount: number;
    setCurrentPage: (currentPage: number) => void;
}


export const Paginator: React.FC<PaginatorProps> = ({
                                                                  repositoriesCount,
                                                                  currentPage,
                                                                  setCurrentPage
                                                              }) => {

    const userName = useAppSelector(state => state.user.userData?.name)

    const [currentItems, setCurrentItems] = useState<number[]>([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 4

    let pages: number[] = [];

    if (repositoriesCount) {
        for (let i = 1; i <= repositoriesCount; i++) {
            pages.push(i)
        }
    }
    let lastItem = currentItems[itemsPerPage - 1]
    const range = lastItem ? `${currentItems[0]} - ${lastItem}` : currentItems[0];


    useEffect(() => {
        setItemOffset(0)
        setCurrentItems(pages.slice(itemOffset, itemsPerPage));
        setPageCount(Math.ceil(pages.length / itemsPerPage));
    }, [userName])

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(pages.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(pages.length / itemsPerPage));
    }, [itemOffset]);


    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % pages.length;
        setItemOffset(newOffset);
        setCurrentPage(event.selected + 1)
    };

    return (
        <div className='pagination-container'>
            <div className='pagination-description'>
                {`${range} of items ${repositoriesCount}`}
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                forcePage={currentPage - 1}
                previousLabel="<"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
            />
        </div>
    );
}