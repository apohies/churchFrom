import React from 'react'

import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import { useSelector, useDispatch } from "react-redux";
import { changeName } from '../redux/userSlice';

function Test(props) {

  const { title , date , description } = props;
  const name = useSelector((state)=>state.user.name);
  const dispatch = useDispatch();

  return (
    <Grid item xs={12} md={6}>
    <CardActionArea component="a" href="#">
      <Card sx={{ display: 'flex' }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {date}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {description}
          </Typography>
          <Typography variant="subtitle1" color="primary">
            <p> info from redux : {name}</p>

            <input
            type='text'
            value ={name}
            onChange={(event)=>dispatch(changeName(event.target.value))}
            />

          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  </Grid>
  )
}

export default Test