import React from 'react'
import MyContact from './MyContact'

const TableUsers = ({dataArray}) => {

        // const myTodos = todos.map (todo =>{
        //     return(
        //         <li className="list-group-item" key={todo.id}>{todo.todo}</li>
        //     )
        // });

  return (
      <table id="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {
              dataArray.map(({id, name, email, phone}) => {
                return (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                  </tr>

                )
              }
            )
            }
          </tbody>
      </table>
    
  )
}

export default TableUsers
