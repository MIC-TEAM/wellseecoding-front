import { createWrapper } from 'next-redux-wrapper'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import rootReducer from 'src/reducers'
import rootSaga from 'src/sagas'

const isDev = process.env.NODE_ENV === 'development'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares))
  const store: any = createStore(rootReducer, enhancer)

  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

const wrapper = createWrapper(configureStore, {
  debug: isDev,
})

export default wrapper
