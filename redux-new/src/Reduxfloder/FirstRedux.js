import React, { Component } from 'react'
// 引入store2
import store2 from './store'


export default class FirstRedux extends Component {
    render() {
        return (
            <div>
                <h2>学习redux，编写redux的累加器</h2>
                <div>
                    {/* 用getState获取当前值 */}
                    <h3>数据累加，当前值：{store2.getState()}</h3>
                    <button onClick={()=>store2.dispatch({type:'increment'})}>+1</button>
                    <button onClick={()=>store2.dispatch({type:'decrement'})}>-1</button>
                </div>
            </div>
        )
    }
}
