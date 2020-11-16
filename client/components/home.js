import React, { useEffect } from 'react'
    import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Header from './header'
import Catalog from './catalog'
import {getCatalog, getLogs, getRates} from '../redux/reducers/poducts'
import Basket from './basket'
import Logs from "./logs";

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCatalog())
      dispatch(getRates())
      dispatch(getLogs())
  })
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <Route exact path="/" component={() => <Catalog />} />
        <Route exact path="/basket" component={() => <Basket />} />
          <Route exact path="/logs" component={() => <Logs />} />
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
