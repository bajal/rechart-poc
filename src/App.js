import React from 'react';
import './App.css';
import { render } from "react-dom";
//import SampleChart from "./SampleChart";
import TwoSimplePieChart from "./TwoSimplePieChart";

const App = () => <TwoSimplePieChart />;

render(<App />, document.getElementById("root"));

export default App;



