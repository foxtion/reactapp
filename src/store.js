import { createStore, compose } from 'redux'


let id = 1;

const initialState = {
  listData: [],
  status:'all'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //新增
    case 'add':
      return {
        ...state,
        listData: [
          ...state.listData,
          {
            id: id++,
            status: 'todo',
            value: action.value
          }
        ]
      }
    //修改状态，根据id查找数据
    case 'finish':
      return {
        ...state,
        listData: state.listData.map(item => {
          return (item.id === action.value) ?{...item,status: 'finish'} : item
        })
      }
      //切换数据显示的状态
    case 'changestatus':
      return {
        ...state,
        status:action.value
      }
    //其他
    default:
      return state
  }

}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers());

export default store

