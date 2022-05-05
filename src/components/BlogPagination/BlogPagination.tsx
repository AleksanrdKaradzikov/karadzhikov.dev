import React, { FC, useCallback } from 'react';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/router';
import { Box } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { MetaPagination } from '../../models';

interface Props {
    pagination: MetaPagination;
};

const BlogPagination: FC<Props> = ({ pagination }) => {
    const router = useRouter();
    const handleChangePage = useCallback(({ selected }: { selected: number }) => {
        const curretQuery = router.query;

        if (selected === 0) {
            delete curretQuery.page;
        } else {
            curretQuery.page = String(selected + 1);
        }

        router.push({
            pathname: router.pathname,
            query: curretQuery,
        });

    }, [pagination]);

    return (
        <Box>
            <ReactPaginate
                className="BlogPagination"
                previousLabel={<FontAwesomeIcon icon={faArrowLeft} />}
                nextLabel={<FontAwesomeIcon icon={faArrowRight} />}
                pageLinkClassName="BlogPagination__link"
                disabledLinkClassName="BlogPagination__link--disabled"
                previousLinkClassName="BlogPagination__link"
                nextLinkClassName="BlogPagination__link"
                activeLinkClassName="BlogPagination__link--active"
                pageCount={pagination.pageCount}
                onPageChange={handleChangePage}
                forcePage={pagination.page - 1}
            />
        </Box>
    );
}

export default BlogPagination;
