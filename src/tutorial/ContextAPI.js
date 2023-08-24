import React, {useContext,useState} from 'react';
import {data} from '../data';

const PersonContext = React.createContext();

const ContextAPI = () => {
    const [people,setPeople] = useState(data);
    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id);
        });
    };
    return (<PersonContext.Provider value={{removePerson,people}}>
        <h3>Context API/ useContext</h3>
        <List/>
    </PersonContext.Provider> )
}

const List = ()=>{
    const mainData = useContext(PersonContext);
    console.log(mainData);
    return (<>
        {mainData.people.map((person) =>{
            return <SinglePerson key={person.id} {...person} />
        })}
    </>);
};

const SinglePerson = ({id, name}) => {
    const {removePerson} = useContext(PersonContext);

    return (<>
        <div className='item'>
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>rem</button>
        </div>
    </>)
}

export default ContextAPI;