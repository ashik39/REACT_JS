import React from 'react'
import Person from './Person'


function NameList(){
    const persons = [
        {
            id :1, name : 'Tony', age: 30, skill : 'dancing'
        },
        {
            id :2, name : 'steve', age:32, skill : 'drawing'
        },
        {
            id: 3, name : 'bruce', age: 31, skill : 'swimming'
        }]

    const personList = persons.map(person => (<Person key= {person.id} person={person}/>))
    return <div><ul>{personList}</ul></div>
}

export default NameList