import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeCart } from '../redux/reducers/poducts'

const Basket = () => {
  const selected = useSelector((s) => s.products.selected)
  const catalog = useSelector((s) => s.products.catalog)
  const cart = catalog.filter((el) => Object.keys(selected).includes(el.id))
    const total=cart.reduce((acc,rec)=>acc+rec.price * selected[rec.id], 0)
  const dispatch = useDispatch()
  return (
    <div>
      <div className="bg-green-200 py-3 flex mb-3">
        <div className="w-1/4">Название </div>
          <div className="w-1/4">Изображение</div>
        <div className="w-1/4">Кол-во</div>
        <div className="w-1/4">Обшая стоимость</div>
      </div>
      {cart.map((item) => (
        <div key={item.id} className="bg-green-300 py-3 flex mb-3">
          <div className="w-1/4">{item.title} </div>
            <div className="w-1/4">
                <img src={item.image} className="h-16" alt=""/></div>
          <div className="w-1/4">
            <div className="">
              <button
                type="button"
                className="bg-green-400 border-solid border-2 border-gray-600 rounded px-6"
                onClick={() => dispatch(addToCart(item.id))}
              >
                +
              </button>
              <span className="mx-4">{selected[item.id] || 0}</span>
              <button
                type="button"
                className="bg-red-400 border-solid border-2 border-gray-600 rounded px-6"
                onClick={() => dispatch(removeCart(item.id))}
              >
                -
              </button>
            </div>
          </div>
          <div className="w-1/4">{item.price * selected[item.id]}</div>
        </div>
      ))}
      <div className="text-right">
          Total:{total}
      </div>
    </div>
  )
}

export default Basket
