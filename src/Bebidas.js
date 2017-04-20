import React, { Component } from 'react';
import './Platillos.css';
import VarTiendaController from './tiendaController';
import Ordenar from './Ordenar';

class Bebidas extends Component {
  render() {
  	let bebidas_div = [];

  	const llener_array_bebidas_div = VarTiendaController.bebidas.forEach(
  		(value, index)=>(
  			bebidas_div.push(
  				<div className="panel panel-default platillo2"  key={index} >
  					<div className="panel-body">
  						<img role="presentation" src={value.direccion} className="ImagenPlatillo"/>
  						<h2 className="nombre"> {value.nombre} </h2>
  						<div className="descripcion"> {value.descripcion} </div>
  						<Ordenar precio={value.precio} indice={index}
              hacerPedido={(indice_d, evento_d)=>
                { VarTiendaController.bebidasEnLaOrden(indice_d, evento_d)}}/>
  					</div>
  				</div>
  				)
  			)
  		)
    return (
	    <div>
		    <div className="platillo">
				  <div className="list-group Pedidos-Menu" >	
					   { bebidas_div }
					</div>
				</div>
			</div>
						
    )
  }
}

export default Bebidas;