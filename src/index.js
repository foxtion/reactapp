import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// let dom = <div>hello word</div>
// let dom2 = React.createElement(
//     'h1',
//     {
//         title:'上午好',
//         className:'title'
//     },
//     'hello react!'
// )


//渲染
//参数1：需要渲染的dom
//参数2：渲染在哪个位置
//参数3：渲染完成的回调方法
ReactDOM.render(
    //[dom,dom2],
    <App/>,
    document.querySelector('#root'),
    () => {
        console.log('渲染完成')
    }
)