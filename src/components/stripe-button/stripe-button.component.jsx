import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51KRZWgK123wK8N5IK22zUZxen81WjYZYHSJceDxirpkjGacOrjNksuC1EmwrATF2okjYGnT9LZXjOLqeq1zhaDxG00bJmUsewv';
    
// a call back function on the stript Checkout Button
    const onToken =() =>{
          console.log('Payment Successful')
        alert('Payment Successful');
        // this is where you log the payment info to the database and redirect user
    }
      
   
    return(
        <StripeCheckout
        label='Pay Now'
        name='Soma Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey} />
    );
}

export default StripeCheckoutButton