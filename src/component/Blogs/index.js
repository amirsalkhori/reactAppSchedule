import React, { useEffect, useState } from 'react';
import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { Card, Grid, Paper } from '@material-ui/core';
import { blogsGet } from '../../services/blogsService';

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Blogs() {
  const classes = useStyles();
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchBlogs() {
      const {data} = await blogsGet()
      setData(data);
    }
    fetchBlogs()
  }, [])

  return (
    <Card>
      <h1 style={{textAlign: "center"}}>Blog</h1>
      <Grid item xs={8} style={{margin: "0 auto", padding: "30px"}}>
        <Paper className="">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell align="left">Body</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.title}
                    </TableCell>
                    <TableCell>{row.body}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Card>
  );
}
