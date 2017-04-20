import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import './Platillos.css';
import './index.css';
import './bootstrap.css';

import { BrowserRouter, Route} from 'react-router-dom';


const RouterDeMenu =(
	<BrowserRouter>
		<Route path="/" component= { Menu }/>
	</BrowserRouter>
);

ReactDOM.render(
  RouterDeMenu,
  document.getElementById('coffe')
);
