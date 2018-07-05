import React from 'react';
import { render, findDOMNode } from 'react-dom';

export default class Greeting extends React.Component{

	seleccion(){
		let greeting = findDOMNode(this.refs.greeting).value
		this.props.getMensaje.call(null, greeting)
		console.log(greeting)
	}

	render(){
		return <select className="form-control" ref="greeting" name="greeting" onChange={this.seleccion.bind(this)}>
				  <option value="">Voy a...</option>
				  <option value="Greeting">Greeting</option>
				  <option value="Farewell">Farewell</option>
				</select>
	}
}

