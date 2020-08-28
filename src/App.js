import React from 'react';
import logo from './logo.svg';
import './App.css';
import DonutChart from './DonutChart';
import BarChart from './BarChart';

function App() {

  const DonutChartData = [{country:'Netherlands',value: 20},
  {country:'Belgium',value: 5},
  {country:'UK',value: 7},
  {country:'Austria',value: 13},
  {country:'Australia',value: 26},
  {country:'Germany',value: 4},
  {country:'Ireland',value: 25}];


  const barChartData = [10,20,12,66,30];
  return (
    <React.Fragment>
    <BarChart data={barChartData}/>
    <DonutChart data={DonutChartData}/>
    </React.Fragment>

  );
}

export default App;
