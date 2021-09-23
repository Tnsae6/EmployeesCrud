import { createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './rootSaga'

import rootReducer from './reducer';

const initialState = {}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);

export default store;