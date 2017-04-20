import React, { Component } from 'react';
import './Platillos.css';
import VarTiendaController from './tiendaController';
import Ordenar from './Ordenar';

class Platillos extends Component {
  render() {
  	let platillos_div = [];

  	const llener_array_platillos_div = VarTiendaController.platillos.forEach(
  		(value, index)=>(
  			platillos_div.push(
  				<div className="panel panel-default platillo2"  key={index} >
  					<div className="panel-body">
  						<img role="presentation" src={value.direccion} className="ImagenPlatillo"/>
  						<h2 className="nombre"> {value.nombre} </h2>
  						<div className="descripcion"> {value.descripcion} </div>
  						<Ordenar precio= {value.precio} indice={index}
              hacerPedido={(indice_d, evento_d)=>
                { VarTiendaController.ponerEnLaOrden(indice_d, evento_d)}}/>
  					</div>
  				</div>
  				)
  			)
  		)
    return (
	    <div>
		    <div className="platillo">
				  <div className="list-group Pedidos-Menu" >	
					   { platillos_div }
					</div>
				</div>
			</div>
						
    )
  }
}

export default Platillos;