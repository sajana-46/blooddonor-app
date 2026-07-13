import React from 'react'
import { useState } from 'react'
import axios from 'axios'



const Adddonour = () => {
    const [input, changeInput] = useState(
        { 
            donor_name: "",
          age:"" , 
           gender:"" , 

            blood_group: "", 
             phone:"" ,  
             email: "", 
              city: "", 
              weight_kg:"" , 
               last_donation_date: ""
        }  
    )

    
    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const readValue = () => {
        console.log(input);
        axios.post("https://host-demo-app.onrender.com/api/add-donor", input)
            .then((response) => {
                console.log(response.data);
                alert("Donour added successfully");
            })
            .catch((error) => {
                console.error("Error adding donour", error.res.status);
                console.error("Error adding donour", error.res.data);
            });


        
    };
    
  return (
    <div>
        
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h2 className="text-center">Add Donour</h2>

                    
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Donour Name:</label>
                            <input type="text" className="form-control" required
                             name="donor_name"
                                value={input.donor_name}
                                onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Age:</label>
                            <input type="number" className="form-control"
                             name="age"
                                value={input.age}
                                onChange={inputHandler} required />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label" >Gender:</label>
                            <select  className="form-control" name="gender" value={input.gender} onChange={inputHandler}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label" >Blood Group:</label>
                            <select  className="form-control" name="blood_group" value={input.blood_group} onChange={inputHandler}>
                                <option value="A+">A+</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                            
                            
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Phone:</label>
                            <input type="text" className="form-control"
                             name="phone"
                                value={input.phone}
                                onChange={inputHandler} required />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Email:</label>
                            <input type="email" className="form-control"
                             name="email"
                                value={input.email}
                                onChange={inputHandler} optional />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">City:</label>
                            <input type="text" className="form-control"
                             name="city"
                                value={input.city}
                                onChange={inputHandler} required />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Weight_kg:</label>
                            <input type="number" className="form-control"
                             name="weight_kg"
                                value={input.weight_kg}
                                onChange={inputHandler} required/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Last_donation_date:</label>
                           <input type="date" className="form-control"
                            name="last_donation_date"
                                value={input.last_donation_date}
                                onChange={inputHandler} optional />
                        </div>
                        
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                </div>
            </div>
        </div>

    
  )
}

export default Adddonour