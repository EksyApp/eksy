import {createStore, compose, applyMiddleware} from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import reducers from '../Reducers'
import {createLogger} from 'redux-logger'
import {AsyncStorage} from 'react-native'

const logger = createLogger({

});

const store = createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(logger),
    autoRehydrate()
  )
)

persistStore(store, {storage: AsyncStorage})

export default store
