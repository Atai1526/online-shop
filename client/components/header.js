import React from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {setBase} from "../redux/reducers/poducts";

const Header = () => {
  const selected = useSelector((s) => s.products.selected)
  const totalCount = Object.values(selected).reduce((acc, rec) => acc + rec, 0)
    const dispatch=useDispatch()
  return (
    <header className="flex justify-between items-center bg-black px-6 py-6">
      <div className="flex items-center">
          <Link to="/" className="text-white text-4xl">
              Hollyshop
          </Link>
          <div className="ml-8">
              <button type="button" className="bg-white py-3 px-6 rounded mr-3" onClick={()=>dispatch(setBase("USD"))}>USD</button>
              <button type="button" className="bg-white py-3 px-6 rounded mr-3" onClick={()=>dispatch(setBase("EUR"))}>EUR</button>
              <button type="button" className="bg-white py-3 px-6 rounded mr-3" onClick={()=>dispatch(setBase("CAD"))}>CAD</button>
          </div>
      </div>
      <nav className="top menu">
        <Link to="/" className="text-white mr-3">
          Home
        </Link>
        <Link to="/basket" className="text-white mr-3">
          Cart({totalCount})
        </Link>
        <Link to="/logs" className="text-white mr-3">
          Logs
        </Link>
      </nav>
    </header>
  )
}

export default Header
