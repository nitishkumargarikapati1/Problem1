import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Location, Views, Sales, Conversion,Total) {
  return { Location, Views, Sales, Conversion,Total };
}

const rows = [
  createData('google', 159, 25,"24%","400RS"),
  createData('facebook', 237,21, "25%", "422RS"),
  createData('Eclair', 262, 16, "24%", "230RS"),
  createData('Cupcake', 305, 31, "67%", "210RS"),
  createData('Gingerbread', 356, 16,"21%","203RS"),
  createData('google', 159, 25,"24%","400RS"),
  createData('facebook', 237,21, "25%", "422RS"),
  
];

const Tablular = () => {
  return (
    <div>
        <h3 style={{marginLeft:5}}>
            Reffer
        </h3>
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow style={{backgroundColor:" #F4F1F0"}}>
            <TableCell>Location</TableCell>
            <TableCell align="right">Views</TableCell>
            <TableCell align="right">Sales</TableCell>
            <TableCell align="right">Conversion</TableCell>
            <TableCell align="right">Total RS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Location}
              </TableCell>
              <TableCell align="right">{row.Location}</TableCell>
              <TableCell align="right">{row.Views}</TableCell>
              <TableCell align="right">{row.Sales}</TableCell>
              <TableCell align="right">{row.Total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
  )
}

export default Tablular;