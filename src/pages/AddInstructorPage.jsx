import axios from 'axios';
import React, {useState, useEffect} from 'react'

export default function AddInstructorPage() {


    const [theVals, setTheVals] = useState({})
    const [depts, setDepts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/departments')
        .then((response)=>{
            if(response.status === 200)
            {
                setDepts(response.data);
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])


    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/instructors', theVals)
        .then((response)=>{
            alert("Added Successfully!")
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const changeHandler = (event) => {
        setTheVals({...theVals, [event.target.name]: event.target.value})
    }

  return (
    <div className='container container-fluid text-center   ' style={{margin : 100}}>
        <h3>Add Instructor</h3>
        <br />
        <form onSubmit={submitHandler}>
            <label className='form-label' htmlFor="inst_name">Name</label><br />
            <input className='form-control' value={theVals.name} onChange={changeHandler} type="text" name="inst_name" id="name" required /><br /><br />
            
            <label className='form-label' htmlFor="salary">Salary</label><br />
            <input className='form-control' value={theVals.salary} onChange={changeHandler} type="text" name="salary" id="salary" required /><br /><br />

            <label className='form-label' htmlFor="dept_name">Department</label><br />
            <select className='form-select' name="dept_name" id="department" onChange={changeHandler}>
            <option value={-1}>Select</option>
                {depts.map((ele, ind)=><option key={ind} value={ele.id}>{ele.dept_name}</option>)}
            </select><br /><br />

            <button type="submit" className='btn btn-success'>Add</button>
        </form>
    </div>
  )
}
