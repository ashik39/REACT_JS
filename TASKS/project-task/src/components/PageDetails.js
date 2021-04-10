import React from 'react'

function PageDetails(props){
    // const Details = {
    //     firstName : props.firstName,
    //     lastName : props.lastName,
    //     email : props.email,
    //     phone : props.phone,
    //     country : props.country,
    //     state : props.state,
    //     city : props.city
    // }

    return(
        <div>
            <h2 className ="middle">Step - 4</h2>
            <h1>{props.firstName}</h1>
            {/* <h4>{props.lastName}</h4>
            <h4>{props.email}</h4>
            <h4>{props.phone}</h4>
            <h4>{props.country}</h4>
            <h4>{props.state}</h4>
            <h4>{props.city}</h4> */}
        </div>
    )

}

export default PageDetails