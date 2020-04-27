import React, { Component } from 'react'
// mobx-react的observe  它类似于 redux的connect方法
import { observer, inject } from 'mobx-react'
@observer
@inject(store => {
    return {
        count: store.counter.count,
        doubleCount: store.counter.doubleCount
    }
})
class CounterDisplay extends Component {

    // // 当使用了mobx  之后  会多一个生命周期  componentWillReact()  但是目前已不再支持
    // componentWillReact () {
    //     console.log('aaa')
    // }
    render() {
        // console.log(this.props)
        return (
            <div>
                <div>
                    原值： {this.props.count}
                </div>
                <div>
                    2倍值：{this.props.doubleCount}
                </div>
            </div>
        )
    }
}
export default CounterDisplay