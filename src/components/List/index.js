import React, {Component} from 'react';

const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
]

class List extends Component {
    render(){
    //  const userElements = []
    //  for(let user of users){
    //      userElements.push(
    //          <div key={user.username}>
    //              <div>姓名:{user.username}</div>
    //              <div>年龄:{user.age}</div>
    //              <div>行呗:{user.gender}</div>
    //              <hr></hr>
    //          </div>
    //      )
    //  }
        return (
        //   <div>{userElements}  </div>
        <div>
            {users.map((user)=>{
                return (
                    <div key={user.username}>
                      <div>姓名：{user.username}</div>
                      <div>年龄：{user.age}</div>
                     <div>性别：{user.gender}</div>
                     <hr />
                    </div>
                )
            })}
        </div>
        )
    }
}

export default List


// 为数组的每一项都创建了一个jsx 并 push到一个数组中