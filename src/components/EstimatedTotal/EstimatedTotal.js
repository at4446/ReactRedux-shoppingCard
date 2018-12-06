import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap/lib';

export default class EstimatedTotal extends Component{

	render(){
		return(

			<Row className="">
				<Col md={6}><h2>Estimated total</h2></Col>
				<Col md={6}>{this.props.price}</Col>
			</Row>

			)


	}



}