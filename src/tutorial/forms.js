import React, {useState} from 'react';

let global_cnt = 0;
const ControlledInput = () => {
    const [person,setPerson] = useState({id: '',firstName: '', lastName: '', email: '', age: ''});
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
            const newPerson = {...person, id: global_cnt};
            global_cnt = global_cnt+1;
            console.log(global_cnt);
            const newpeople = [...people, newPerson];
            setPeople(newpeople);
            setPerson({id:'',firstName:'',lastName:'',email:'',age:''});
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
                    <buton className='btn' onClick={() => {
                        const newPeople = people.filter((p) => p.id !== person.id);
                        console.log(newPeople);
                        setPeople(newPeople);
                    }}>remove</buton>
                </div>
            })}
        </article>
    );
}

export default ControlledInput;