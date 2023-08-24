import React, {useState} from 'react';
import { useEffect } from 'react/cjs/react.development';

const ControlledInput = () => {
    const [person,setPerson] = useState({firstName: '', lastName: '', email: '', age: ''});
    const [people,setPeople] = useState([]);

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        const newperson = {... person, [name]: value};
        setPerson(newperson);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if( person.firstName && person.lastName && person.email && person.age ){
            const newpeople = [...people, person];
            setPeople(newpeople);
            setPerson('','','','');
        }
        console.log("form submitted");
    }

    return (
        <article>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor='firstName'>First Name: </label> 
                    <input type='text' id='firstName' name='firstName' value={person.firstName} onChange={handleChange}></input>
                </div>
                <div className="form-control">
                    <label htmlFor='lastName'>Last Name: </label>
                    <input type='text' id='lastName' name='lastName' value={person.lastName} onChange={handleChange}></input>
                </div>
                <div className="form-control">
                    <label htmlFor='email'>Email: </label> 
                    <input type='text' id='email' name='email' value={person.email} onChange={handleChange}></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='age'>Age: </label>
                    <input type='number' id='age' name='age' value={person.age} onChange={handleChange}></input>
                </div>
                <button type='submit'>add person</button>
            </form>
            { people.map((person,index) => {
                return <div className='item' key={person.id}>
                    <h4>{person.firstName} {person.lastName}</h4>
                    <p>{person.age}</p>
                    <p>{person.email}</p>
                </div>
            })}
        </article>
    );
}

export default ControlledInput;