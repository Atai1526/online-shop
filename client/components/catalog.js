import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeCart } from '../redux/reducers/poducts'

const Catalog = () => {
  const catalog = useSelector((s) => s.products.catalog)
  const selected = useSelector((s) => s.products.selected)
  const rates= useSelector((s) => s.products.rates)
  const base= useSelector((s) => s.products.base)
  const dispatch = useDispatch()
  const valutesSymbols={
    USD:"$",
    EUR:"€",
    CAD:" C$"
  }
  return (
    <div className="flex flex-wrap -mx-4 md:flex ">
      {catalog.map((product) => (
        <div key={product.id} className=" xl:w-1/4 px-4 sm:max-w-xl sm:w-full sm:object-cover sm:object-center pl-24">
          <div className="product-item text-center border-solid border-2 border-gray-600 mb-6 p-4">
            <img src={product.image} alt="" className="w-full h-40 object-contain" />
            <h2>{product.title}</h2>
            <p> Price: {(product.price*(rates[base]|| 1)).toFixed(2)}{valutesSymbols[base]}</p>
            <div className=" mt-6">
              <button
                type="button"
                className="bg-green-400 border-solid border-2 border-gray-600 rounded px-6"
                onClick={() => dispatch(addToCart(product.id))}
              >
                +
              </button>
              <span className="mx-4">{selected[product.id] || 0}</span>
              <button
                type="button"
                className="bg-green-400 border-solid border-2 border-gray-600 rounded px-6"
                onClick={() => dispatch(removeCart(product.id))}
              >
                -
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Catalog
