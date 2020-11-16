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
      <div className="flex items-center sm:max-w-xl sm:w-full sm:object-cover sm:object-center">
          <Link to="/" className="text-white xl:text-4xl sm:text-2xl ">
              MVP
          </Link>
          <div className="ml-8 sm:max-w-l">
              <button type="button" className="bg-white py-3 px-6 rounded mr-3" onClick={()=>dispatch(setBase("USD"))}>USD</button>
              <button type="button" className="bg-white py-3 px-6 rounded mr-3" onClick={()=>dispatch(setBase("EUR"))}>EUR</button>
              <button type="button" className="bg-white py-3 px-6 rounded mr-3" onClick={()=>dispatch(setBase("CAD"))}>CAD</button>
          </div>
      </div>
      <nav className="top menu sm:max-w-">
        <Link to="/" className="text-white mr-1">
          Home
        </Link>
        <Link to="/basket" className="text-white mr-1">
          Cart({totalCount})
        </Link>
        <Link to="/logs" className="text-white mr-1">
          Logs
        </Link>
      </nav>
    </header>
  )
}

export default Header
