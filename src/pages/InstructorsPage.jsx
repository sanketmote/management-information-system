import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function InstructorsPage() {

  const [depts, setDepts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/instructors')
      .then((response) => {
        if (response.status === 200) {
          setDepts(response.data);
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  return (
    <div className='container container-fluid'>
      <h3>Instructors Page</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Salary</th>
            <th scope="col">Department</th>
          </tr>
        </thead>
        <tbody>

          {depts.map((ele, ind) => <tr>
            <th key={ind} scope="row">{ind + 1}</th>
            <td>{ele.inst_name}</td>
            <td>{ele.salary}</td>
            <td>{ele.dept_name}</td>
          </tr>)}

        </tbody>
      </table>
      <div class="plus_sign "><a href="/add-instructor">+</a></div>
    </div>
  )
}
