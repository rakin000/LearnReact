import React from 'react';
import {data} from '../data';

const UseStateArray = () => {
    const [people,setPeople] = React.useState(data);
    const removePeople = (id) => {
        let newPeople = people.filter((person) => person.id !== id );
        setPeople(newPeople);
    };
    return (
        <>
        <h2>useState Array Example</h2>
        {people.map((person) => {
            return <div key={person.id} className='item'>
                <h4>{person.name}</h4>
                <button className='btn' onClick={() => removePeople(person.id)}>remove</button>
            </div>
        })}
        <button className='btn' onClick={() => setPeople([]) }>clear</button>
        </>
    )
}

export default UseStateArray;