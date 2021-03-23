import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import PieChart, {
  Legend,
  Series,
  Label,
  Connector,
  Title,
  Font
} from 'devextreme-react/pie-chart';
import { makeStyles } from '@material-ui/core/styles';


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

export default function PieChartResults(props){
  const classes = useStyles()

  const data = props.keywords

  let newData = [];

  Object.keys(data).map(key => (
    newData.push({name: key, val: data[key]})
  ))

  function customizeText({ argument, value }) {
    return `${argument}: ${value}`;
  }



  return (
    <PieChart
      className={classes.stats}
      id="pie"
      type="doughnut"
      palette="Soft Pastel"
      dataSource={newData}
    >
    <Title text="Keyword Breakdown:">
      <Font family="Ubuntu"/>
    </Title>
      <Series argumentField="name">
        <Label visible={true} customizeText={customizeText}>
          <Connector visible={true} />
        </Label>
      </Series>
      <Legend
        visible={false}
        margin={0}
        horizontalAlignment="right"
        verticalAlignment="top"
      />
    </PieChart>
  );
  
}