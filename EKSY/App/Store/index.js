import {createStore, compose, applyMiddleware} from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import reducers from '../Reducers'
import {createLogger} from 'redux-logger'
import {AsyncStorage} from 'react-native'

let store = null;

export default getStore = async () => {
  if(store) {
    return store
  } else {
    store = await configureStore()
    return store
  }
}

function configureStore() {
  return new Promise((resolve, reject) => {
    try {
      var middlewares = []

      if (__DEV__) {
        middlewares.push(createLogger({}))
      }

      const storeInst = createStore(
        reducers,
        undefined,
        compose(
          applyMiddleware(...middlewares),
          autoRehydrate()
        )
      )

      persistStore(
        storeInst,
        {
          storage: AsyncStorage,
          blacklist: ['markers', 'ui'],
        },
        () => {
          resolve(storeInst)
        }
      )
    } catch (e) {
      reject(e)
    }
  })
}
