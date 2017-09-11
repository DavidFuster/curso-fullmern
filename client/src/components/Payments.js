import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="Comprar 5€ de créditos para emails"
        amount={500}
        currency="EUR"
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Añadir Crédito </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
