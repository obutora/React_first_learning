import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PrimaryButton from './Button';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';

ReactDOM.render(
  returnWidget(),
  // <React.StrictMode>
  // </React.StrictMode>,
  document.getElementById('root')
);

function returnWidget() {
  let widgetList = [];
  for (let i = 0; i < 100; i++) {

    //App(props)と直接プロパティを渡すこともできる。
    //<App num= "">はprops.numにアクセスしていることになる。
    widgetList.push(

      <Box m={0.3} >
        <PrimaryButton num={i} />
      </Box>

    );

  }

  return <Grid container
    direction="row"
    justify="left"
  >
    {widgetList}
  </Grid>
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


