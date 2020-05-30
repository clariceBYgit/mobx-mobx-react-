// 1.从redux中引入createRedux创建仓库store
import { createStore } from 'redux'

const firstReducer = ( state = 0, action)=>{
    switch (action.type) {
        case 'increment':
            return state + 1 ;
        case 'decrement':
            return state - 1;
        default:
            return state ;
    }
}

const store2 = createStore(firstReducer)

export default store2