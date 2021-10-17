import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { useEffect, useState } from 'react';
import BookService from '../services/BookService';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#05445E',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


interface Irow {
  id: number;
  title: string;
  author: string;
  shelfNumber: string;
  copies   : number;
  available: number;
}

export default function BookComponentTest() {

    const [rows, setRows] = useState<Irow[]>([])
    useEffect(() => {
      BookService.getBooks().then((res) => {
        setRows(res.data)
      })
    }, [])
  
    const handleDelete = (id: number) => {
        BookService.deleteUser(id)
        .then(response => {
            BookService.getBooks().then((res) => {
            setRows(res.data)
          })
        })
    }
  
    const handleEdit = (id: number, data: any) => {
      // UserService.editUser(id,data)
      // console.log(id )
    }
  

    return (
        <TableContainer component={Paper}>

        <div className="AddButton">
          <IconButton
            href="/api/command/book"
            aria-label="add" size="large" color="success" className="fa-plus-circle"
            sx={{ fontSize: 20, }}>
            Add New Book &nbsp;
            <AddCircleIcon />
          </IconButton>
        </div>
  
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">Id</StyledTableCell>
              <StyledTableCell align="right">Title</StyledTableCell>
              <StyledTableCell align="right">Author</StyledTableCell>
              <StyledTableCell align="right">Shelf Number</StyledTableCell>
              <StyledTableCell align="right">Copies</StyledTableCell>
              <StyledTableCell align="right">Available</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
  
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell align="right">{row?.id}</StyledTableCell>
                <StyledTableCell align="right" component="th" scope="row">{row?.title}</StyledTableCell>
                <StyledTableCell align="right">{row?.author}</StyledTableCell>
                <StyledTableCell align="right">{row?.shelfNumber}</StyledTableCell>
                <StyledTableCell align="right">{row?.copies}</StyledTableCell>
                <StyledTableCell align="right">{row?.available}</StyledTableCell>
                <StyledTableCell align="right">
                  <Stack spacing={2} direction="row-reverse">
                    <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={() => handleDelete(row.id)}>
                      Delete
                    </Button>
                    <Button size="medium" variant="outlined" startIcon={<EditIcon />} onClick={() => handleEdit(row.id, row)}>
                      Edit
                    </Button>
                  </Stack>
                </StyledTableCell>
              </StyledTableRow>
  
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}
