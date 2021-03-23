import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Legend,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { makeStyles } from '@material-ui/core/styles';

import { Animation } from '@devexpress/dx-react-chart';

const useStyles = makeStyles(() => ({
  chart: {
    backgroundColor: "transparent",
    boxShadow: "none"
  },
  legend: {
    display: 'flex',
    alignSelf: 'center'
  },
  pie: {

  },
  stats: {
    fontFamily: 'Ubuntu'
  }
}))

export default function PieChart(props){

  const data = props.keywords

  let newData = [];

  Object.keys(data).map(key => (
    newData.push({name: key, score: data[key]})
  ))



  const classes = useStyles()
    return (
      <Paper className={classes.chart}>
        <Chart data={newData}>

          <PieSeries classname={classes.pie}
          innerRadius='.25'
          outerRadius='.75'
            valueField="score"
            argumentField="name"
          />
          <Legend className={classes.legend}
            position="left"
          />
          <Title text="Keywords Breakdown:" />
          <Animation />
        </Chart>
      </Paper>
    );
  
}
