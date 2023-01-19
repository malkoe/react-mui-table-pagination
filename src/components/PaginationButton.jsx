import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import { PaginationItem } from '@mui/material';

export default function PaginationButton({page, setPage}) {
    return (
        <Stack spacing={2}>
            <Pagination onChange={(e,v)=>setPage(v)} page={page} count={10} renderItem={(item) => <PaginationItem {...item} />} />
        </Stack>
    );
}