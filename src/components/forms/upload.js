/*
Use this form to add events into the database
For admin use only : Auth. pending
*/
import React from 'react'
// import ReactDOM from 'react-dom'

// Front-end Panding
export default () => {

    return(

        <form action='/api/add-event' encType="multipart/form-data" method="POST">
            <input type="text" placeholder="Title" name="title" />
            <br/>
            <input type="text" placeholder="Subtitle" name="subtitle" />
            <br/>
            <textarea type="text" placeholder="Description" name="description" />
            <br/>
            <input type="text" placeholder="Category" name="Category" />
            <br/>
            <input type="text" placeholder="Author" name="author"/>
            <br/>
            <input type="text" placeholder="Url" name="url"/>
            <br/>
            <input type="date" name="date_start" required/>
            <br/>
            <input type="date" name="date_end" required/>
            <br/>
            <input type="file" name="cover"/>
            <br/>
            <input type="submit"/>
        </form>
    )} 
   