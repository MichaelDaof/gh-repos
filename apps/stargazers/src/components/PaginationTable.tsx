import React, { ReactElement, ReactNode, useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';

export { TableRow as PaginationRow };
export { TableCell as PaginationCell };
export default function PaginationTable<T>({
  data,
  headers = [],
  children,
  onChange,
  pageCount,
  page,
}: {
  data: T[];
  headers?: { field; label }[];
  children: (rowData) => ReactElement;
  onChange?: (e, page) => void;
  pageCount: number;
  page: number;
}) {
  return (
    <Box width="100%" data-testid='pagination-table-container'>
      <Box
        width="100%"
        display="flex"
        height="80px"
        justifyContent="center"
        alignItems="center"
      >
        <Pagination
          data-testid='pagination-controls'
          count={pageCount}
          page={page}
          color="secondary"
          size="large"
          onChange={onChange}
        />
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableCell>
                  <Typography>{header.label}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{data.map(children)}</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
