import React, { Component } from 'react'
// 引入store2
// import store2 from './store'
import { connect } from 'react-redux'

const mapStateToProps = (state)=>{
    return {
        count:state
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        increment : ()=>dispatch({type:'increment'}),
        decrement : ()=>dispatch({type:'decrement'})
    }
}
class FirstRedux extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h2>学习redux，编写redux的累加器</h2>
                <div>
                    
                    {/* redux获取数据，用getState获取当前值，与dispatch方法的编写 */}
                    {/* <h3>数据累加，当前值：{store2.getState()}</h3>
                    <button onClick={()=>store2.dispatch({type:'increment'})}>+1</button>
                    <button onClick={()=>store2.dispatch({type:'decrement'})}>-1</button> */}

                </div>
                <h2>学习react-redux，编写redux的累加器</h2>
                <div>
                    
                    {/* redux获取数据，用getState获取当前值，与dispatch方法的编写 */}
                    <h3>数据累加，当前值：{this.props.count}</h3>
                    <button onClick={()=>this.props.increment()}>+1</button>
                    <button onClick={()=>this.props.decrement()}>-1</button>

                </div>

            </div>
        )
    }
}


export default  connect(mapStateToProps,mapDispatchToProps)(FirstRedux)