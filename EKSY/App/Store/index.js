import {createStore, compose, applyMiddleware} from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import reducers from '../Reducers'
import {createLogger} from 'redux-logger'
import {AsyncStorage} from 'react-native'

export default function configureStore() {
  return new Promise((resolve, reject) => {
    try {
      const logger = createLogger({

      })

      const store = createStore(
        reducers,
        undefined,
        compose(
          applyMiddleware(logger),
          autoRehydrate()
        )
      )

      persistStore(
        store,
        {storage: AsyncStorage},
        () => resolve(store)
      )
    } catch (e) {
      reject(e)
    }
  })
}
