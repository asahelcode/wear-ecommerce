import React from 'react'
import {FaShoppingCart, FaUserPlus} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Wrapper from './style'
import {currentUser, default_profile_image} from '../../utils/constants'

const CartButtons = () => {
  const total_item = 10

  return (
    <Wrapper className='cart-btn-wrapper'>
       <Link to='/cart' className='cart-btn'>
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{total_item}</span>
        </span>
       </Link>
       {
        !currentUser ? (
          <Link to='/login' className='auth-btn'>
            Login <FaUserPlus />
          </Link>
        ) : (
          <Link to='/profile' className='profile-btn'>
            <img 
              src={currentUser?.photoURL || default_profile_image}
              alt="profile image"
            />
          </Link>
        )
       }
    </Wrapper>
  )
}

export default CartButtons