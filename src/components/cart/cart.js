import React from 'react';
import {connect} from 'react-redux';
import './cart.css';
import { addItem, removeItem} from '../../redux/cart/cart.actions';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selector';

const Cart = ({cartItems, cartTotal, removeItem, addItem}) => {
    return (
      <div className="cart-items">
      { cartItems.map((data) => {
          if (data) {
            return (
                <>
                <div className='checkout-item'>
                    <span className='name'>{data.name}</span>
                    <span className='quantity'>
                        <div className='arrow' onClick={() => removeItem(data)}>
                        &#10094;
                        </div>
                        <span className='value'>{data.quantity}</span>
                        <div className='arrow' onClick={() => addItem(data)}>
                        &#10095;
                        </div>
                    </span>
                    <span className='price'>{data.price}</span>
                    <div className='remove-button' onClick={() => removeItem(data)}>&#10005;</div>
                </div>
                </>
             )	
           }
           return null;
      }) }
      <div className="total-price">Total {cartTotal}</div>
      </div>
    );
  }

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
  });

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
})

export default connect(mapStateToProps,mapDispatchToProps)(Cart);

