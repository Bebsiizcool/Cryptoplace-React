import React, { useContext } from 'react'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import './nav.css'
import { coinContext } from '../../context/coin-context'


const Nav = () => {
    const {setcurrency} = useContext(coinContext)

    
    const currencyhandler = (event) => {
    switch (event.target.value) {
        case "usd":
            setcurrency({ name: "usd", symbol: "$" })
            break
        case "eur":
            setcurrency({ name: "eur", symbol: "€" })
            break
        case "inr":
            setcurrency({ name: "inr", symbol: "₹" })
            break
        default:
            setcurrency({ name: "usd", symbol: "$" })
            break
    }
}  
  return (
    <nav>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select onChange={currencyhandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>

            <button>SignUp <img src={arrow_icon} alt="" /></button>
        </div>
    </nav>
  )
}

export default Nav;
