import React, { Component } from 'react';
import Platillos from './Platillos';
import Pedidos from './Pedidos';
import Bebidas from './Bebidas';
import { BrowserRouter, Route, Link } from 'react-router-dom';


class Menu extends Component {
	render() {
		return (
			<div>
			<section className="menu">
						<div className="contenedor">
							<h3 className="titulo" id="platillos">Menus</h3>
								<div className="contenedor-menu">
									<div className="contenedor-menu2">
										<article>
											<p className="categoria">De Comer</p>
												<BrowserRouter>
													<div className="platillo">
														<ul className="nav nav-tabs">
													  <li role="presentation" className="active"><Link to="/platillos">Platillos</Link></li>
													  <li role="presentation" className="active"><Link to="/bebidas">Bebidas</Link></li>
													</ul>
														<Route path="/platillos" component={Platillos}/>
														<Route path="/bebidas" component={Bebidas}/>
													</div>
											</BrowserRouter>
										</article>
										<article>
											<p className="categoria">Pedidos</p>
											<div className="platillo">
												<Pedidos/>
											</div>
										</article>
									</div>
								</div>
						</div>
		</section>
	</div>
		)
	}
}

export default Menu;
