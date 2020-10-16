import axios from 'axios'

const initialState = {
  catalog: [],
  selected: {},
  rates:{},
  base: "EUR"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case '@@SET_CATALOG':
      return { ...state, catalog: action.catalog }
    case '@@SET_RATES':
      return { ...state, rates: action.rates }
    case 'SET_BASE':
      return { ...state, base: action.base }
    case 'REMOVE_CART': {
      const updateSelection = {
        ...state.selected,
        [action.id]: state.selected[action.id] - 1
      }
      if ((updateSelection[action.id] || 0) <= 0) {
        delete updateSelection[action.id]
      }
      return { ...state, selected: updateSelection }
    }
    case 'ADD_TO_CART':
      return {
        ...state,
        selected: { ...state.selected, [action.id]: (state.selected[action.id] || 0) + 1 }
      }
    default:
      return state
  }
}

export function getCatalog() {
  return (dispatch) => {
    return axios('/api/v1/catalog').then(({ data }) =>
      dispatch({ type: '@@SET_CATALOG', catalog: data })
    )
  }
}

export function getRates() {
  return (dispatch) => {
    return axios('/api/v1/rates').then(({ data }) =>
        dispatch({ type: '@@SET_RATES', rates: data })
    )
  }
}

export function getLogs() {
  return (dispatch) => {
    return axios('/api/v1/logs').then(({ data }) =>
        dispatch({ type: '@@SET_LOGS', logs: data })
    )
  }
}

export function removeCart(id) {
  return { type: 'REMOVE_CART', id }
}

export function addToCart(id) {
  return { type: 'ADD_TO_CART', id }
}

export function setBase(base) {
  return { type: 'SET_BASE', base }
}
