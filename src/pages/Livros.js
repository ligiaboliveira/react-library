import React from 'react';
import livrosData from "../data/livros.json"
import { Table, TableCell, TableRow, TableContainer, TableBody, TableHead, Checkbox } from '@mui/material';

const Livros = () => {
    return (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Published Date</TableCell>
                <TableCell>Genre</TableCell>
                <TableCell>Pages</TableCell>
                <TableCell>Available</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {livrosData.map((book) => (
                <TableRow key={book.id}>
                  <TableCell>{book.id}</TableCell>
                  <TableCell>{book.name}</TableCell>
                  <TableCell>{book.author}</TableCell>
                  <TableCell>{book.publishedDate}</TableCell>
                  <TableCell>{book.genre}</TableCell>
                  <TableCell>{book.pages}</TableCell>
                  <TableCell>
                    <Checkbox checked={book.available} disabled />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
};

export default Livros;
