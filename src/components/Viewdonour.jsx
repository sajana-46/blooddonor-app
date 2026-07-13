import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import{useEffect} from 'react'
import Navigationbar from './Navigationbar'



const Viewdonour = () => {
    const[data,changeData]=useState([])


    const fetchData = () =>{
     axios.get("https://host-demo-app.onrender.com/api/donors").then(
        (res)=>{
            changeData(res.data)

        }
    ).catch()   


    }
    useEffect(()=>{
        fetchData()
    },[])
    
  return (
    <div>
        <Navigationbar/>
        
        <div className="container mt-4">
        <h2 className="text-center mb-4">View All Donors</h2>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Blood Group</th>
              <th>Phone</th>
              <th>City</th>
              <th>Weight</th>
            </tr>
          </thead>

          <tbody>
            {data.map(
                (value,index)=>{
                    return(
                         <tr>
                        <td>{value.donor_name}</td>
                        <td>{value.age}</td>
                        <td>{value.gender}</td>
                        <td>{value.blood_group}</td>
                        <td>{value.phone}</td>
                        <td>{value.city}</td>
                        <td>{value.weight_kg}</td>
                        </tr>
                    )
                }
            )
                
            }
           
             </tbody>
        </table>
      </div>

        


    </div>
  )
}

export default Viewdonour