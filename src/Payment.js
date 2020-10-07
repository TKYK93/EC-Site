import React, {useEffect, useState} from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import {Link, useHistory} from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer';
import axios from './axios';

const Payment = () => {

    const [{basket, user}, dispatch] = useStateValue();
    const history  = useHistory();


    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");


    const [error, setError] = useState(null);
    const [disabled, setDisabled]= useState(true);

    const [clientSecret, setClientSecret]= useState(true);

    // stripeに命令するために、useEffectで、clientSecretを生成する。ただし、バスケットの中身が変われば、再度生成する。
    useEffect(()=> {
        const getClientSecret = async () => {
            // axiosとは、情報を送るのに必要なもの
            const response = await axios(
                {
                    method: 'post',
                    url: '/payments/create?total=${getBasketTotal(basket)*100}'
                }
            );
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket]

    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        
        

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replace('/orders');

        })
    };

    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    };


    return (
        <div className="payment">
            <div className="payment_container">
             <h1>Checkout (<Link to="/checkout">{basket?.length}items</Link>)</h1>

                {/* delivery adreess */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>address</p>
                    </div>
                </div>
                {/* review items */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment_items">
                            {basket.map(item => (
                                <CheckoutProduct
                                   key={item.id}
                                   id={item.id}
                                   title={item.title}
                                   image={item.image}
                                   price={item.price}
                                   rating={item.rating}
                                   />
                            ))}
                    </div>
                </div>
                {/* payment method */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        {/* Stripe */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment_priceContainer">
                                <CurrencyFormat 
                                    renderText={(value)=>(
                                        <h3>Order Total: {value}</h3>
                                        )}
                                    value={getBasketTotal(basket)}
                                    decimalScale={2}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}                                
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                                    {error && <div>{error}</div>}

                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Payment;