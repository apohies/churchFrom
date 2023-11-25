import  React, {useEffect,useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Tablix({headers, data}) {

    const [rows, setRows] = useState([]);
   
    // data es un array de objectos que deben ser convertidos a array de arrays

    const convertData = (data) => {
        let arr = [];
        data.map((item) => {
            let row = [];
            for (const key in item) {
                if (item.hasOwnProperty(key)) {
                    const element = item[key];
                    row.push(element);
                }
            }
            arr.push(row);
        });
        return arr;
    } 

    useEffect(() => {


       setRows(convertData(data));

       console.log(rows);

    }, [data]);

    
  

   

    const headersTable = headers.map((header,index) => {
        return <TableCell key={index}>{header}</TableCell>
    });

    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headersTable}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {row.map((cell,index) => {
                  return <TableCell key={index}>{cell}</TableCell>
              })}
            </TableRow>
          ))}

        </TableBody>
       
      </Table>
    </TableContainer>
  );
}


Tablix.prototype   = {

headers: PropTypes.arrayOf(PropTypes.string),
data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))

}