import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap/lib';

export default class TaxesFees extends Component {

    render() {
        return (

            <Row className="show-grid">
				<Col md={6}>Taxes</Col>
				<Col md={6}>{this.props.taxes}</Col>
			</Row>

        )

    }


}