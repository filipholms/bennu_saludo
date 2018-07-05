import React from 'react'
import { render, findDOMNode } from 'react-dom'
import axios from 'axios'
import Greeting from './components/Lista'

class Main extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			mensaje: "",
		}
		this.getMensaje = this.getMensaje.bind(this)
	}

	getMensaje(e){
		this.setState({
			mensaje: e
		})
	}

	enviar(){
		var this_ = this

		var name = findDOMNode(this.refs.nombre).value

		
		if (this.state.mensaje == "Greeting"){


				var bodyFormData = new FormData();

				bodyFormData.set('name', name);

				axios({
			    method: 'post',
			    url: 'http://localhost/v1/greeting',
			    data: bodyFormData,
			    config: { headers: {'Content-Type': 'multipart/form-data' }}
			    })
			    .then(function (response) {
			        findDOMNode(this_.refs.mensaje).value = response.data.message

			        console.log(response);
			    })
			    .catch(function (response) {
			        
			        console.log(response);
			    });
			
		} else {

				axios.post("http://localhost/v1/farewell", 
				
					{  
						name: name 
					}	
				).then(function(response) {
					findDOMNode(this_.refs.mensaje).value = response.data.message
					console.log(response)
				
				}).catch(function (error) {
	    			console.log(error);
	  			});
			
		}
	}


	render(){
		return <div>

			<div className="container">
				<div className="row">
					<div className="col-sm-4 offset-md-4">
						<h1>SALUDO WEBAPP</h1>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-4 offset-md-4 ">
						<Greeting getMensaje={this.getMensaje}/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-4 offset-md-4">
						<input type="text" className="form-control" placeholder="nombre" ref="nombre"/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-4 offset-md-4 ">
						<button type="button" className="form-control bg-success text-white" onClick={this.enviar.bind(this)}>Enviar</button>	
					</div>
				</div>
				<div className="row">
					<div className="col-sm-4 offset-md-4">
						<input type="text" className="form-control" ref="mensaje" placeholder="texto"/>
					</div>
				</div>

			</div>

		</div>
	}
}


render(<Main />, document.getElementById('app'))