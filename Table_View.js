import React, { useState, useEffect } from 'react';
// import { TablePagination } from '@mui/base/TablePagination';
// import {
//     TablePagination,
//     tablePaginationClasses as classes,
//   } from '@mui/base/TablePagination';



const Table_View = () => {
    const [data, setData] = useState([])


    useEffect(() => {
        const viewData = async () => {
            const details = await fetch("https://jsonplaceholder.typicode.com/users");
            const response = await details.json();
            setData(response);
        }
        viewData();
    }, [])

    return (
        <>
            <center>

                <table border='1'>
                    <thead>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </thead>
                    {data?.map(post => (
                        <tbody>

                            <td>{post.id}</td>
                            <td>{post.name}</td>
                            <td>{post.username}</td>
                            <td>{post.email}</td>
                            <td>{post.website}</td>
                            <td><a href="#">Edit</a>&nbsp;<a href="#">Delete</a>&nbsp;<a href="#">View</a></td>
                           
                        </tbody>
                    ))}
                </table>
            </center>






        </>
    )
}
export default Table_View;