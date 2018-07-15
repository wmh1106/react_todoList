import { createStore } from 'redux'
import reducers from './reducers'

// 创建 store
const store = createStore(reducers,
    // 用于激活 Redux DevTools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
