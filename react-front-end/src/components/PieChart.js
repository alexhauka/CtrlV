import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { makeStyles } from '@material-ui/core/styles';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { country: 'Russia', area: 12 },
  { country: 'Canada', area: 7 },
  { country: 'USA', area: 7 },
  { country: 'China', area: 7 },
  { country: 'Brazil', area: 6 },
  { country: 'Australia', area: 5 },
  { country: 'India', area: 2 },
  { country: 'Others', area: 55 },
];
const useStyles = makeStyles((theme) => ({
  chart: {
    backgroundColor: "#3f51b5",
    boxShadow: "none"
  }
}))

export default function PieChart(){

  const classes = useStyles()
    return (
      <Paper className={classes.chart}>
        <Chart
          data={data}
          
        >
          <PieSeries
            valueField="area"
            argumentField="country"
          />
          <Title
            text="Keyword Scores for this Posting:"
          />
          <Animation />
        </Chart>
      </Paper>
    );
  
}
