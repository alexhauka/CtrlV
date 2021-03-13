import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { language: 'Javascript', value: 3 },
  { language: 'CSS', value: 3 },
  { language: 'React', value: 2 },
  { language: 'Python', value: 1 },
  { language: 'Storybok', value: 1 },
];

export default function BarChart() {
  
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     data,
  //   };
  // }

  // render() {
    // const { data: Data } = this.state;

    return (
      <Paper>
        <Chart
          data={data}
        >
          <ArgumentAxis />
          <ValueAxis max={7} />
          <BarSeries
            valueField="value"
            argumentField="language"
          />
          <Title text="Keywords for this Posting:" />
          <Animation />
        </Chart>
      </Paper>
    );
  
}
