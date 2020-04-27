
import { observable, computed, action } from 'mobx'

class Counter {
    name = 'Counter App' //name不需要被观察的
    @observable count = 100   //@observeable 可被观察的
    @computed get doubleCount (){  //@computed  可用于计算 get  取得 方法
        return this.count*2
    } 
    @action.bound increment () {
        // return this.count +=1
        this.count +=1
    }
    @action.bound decrement () {
        // return this.count +=1
        this.count -=1
    }
}

const counterStore = new Counter()

export default counterStore