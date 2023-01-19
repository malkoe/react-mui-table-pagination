import React from "react";
import CompanyTable from './CompanyTable';
import { Container } from '@mui/material';
import PaginationButton from "./PaginationButton";
import { useState } from "react";

export default () => {
  const [page, setPage] = useState(1)

  return (
    <Container>
      <CompanyTable page={page} />
      <PaginationButton page={page} setPage={setPage}/>
    </Container>
  )
};
