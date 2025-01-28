import React, { useState } from "react";

const Add = () => {

    const [formData, setformData] = useState({
        id: "",
        name: "",
        email: "",
        website: "",
        username: "",

    })
    const handleClick = () => {

       
        const detailsRespons = async () => {
            try {

                const res = await fetch("https://jsonplaceholder.typicode.com/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",

                    },
                    body: JSON.stringify(formData),

                });
            
                const data = await res.json();
                alert("Data submitted successfully")
            } catch (error) {
                alert("Error")
            }
           
        }
        detailsRespons()
    }
        const handleChange = (e) => {
            const { name, value } = e.target;
            setformData({ ...formData, 
                [name]:value,
             })
        }

        return (
            <>
                <center>
                    Add Details
                    <br /><br />

                    <input type="text" name="id" value={formData.id} onChange={handleChange} placeholder="ID" /><br /><br />
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="First Name" /><br /><br />
                    <input type="text"name="username"  value={formData.username} onChange={handleChange} placeholder="Last Name" /><br /><br />
                    <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email" /><br /><br />
                    <input type="text" name="website" value={formData.website} onChange={handleChange} placeholder="Department" /><br /><br />
                   
                   
                    <button onClick={handleClick}>Add</button>
                    <br /><br />
                </center>
            </>
        )
    }

export default Add;