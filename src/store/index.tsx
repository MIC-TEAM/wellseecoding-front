import { createWrapper } from 'next-redux-wrapper'
import { applyMiddleware, createStore, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import rootReducer from 'reducers'
import rootSaga from 'sagas'

const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]
  const enhancer = isProd
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares))
  const store: any = createStore(rootReducer, enhancer)

  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

const wrapper = createWrapper(configureStore, {
  debug: isDev,
})

export default wrapper
