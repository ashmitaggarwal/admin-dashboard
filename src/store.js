import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './redux/rootReducer'
import axios from 'axios'
import API from './api/Api'

export default (req) => {
  const axiosInstance = axios.create({
    baseURL: API.BaseUrl,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers':
        'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token',
    },
  })
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose

  const enhancer = composeEnhancers(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
  // const store = createStore(reducers, window.INITIAL_STATE, enhancer)
  const store = createStore(() => reducers, window.INITIAL_STATE, enhancer)

  return store
}
