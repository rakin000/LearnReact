import React, {useState,useEffect} from 'react';
/*
function UseEffect(){
    const [value,setValue] = useState(0);
    console.log('render component');
    document.title = `New Messages(${value})`;
    return (<>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(value+1)}>fix me</button>
    </>);
}
*/
const url = 'https://api.github.com/users';

function UseEffect(){
    const [users,setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch(url);
        const users_response = await response.json();
        setUsers(users_response);
    };

    useEffect(()=>{
        getUsers();
    }, []);
    return (<>
        <h2>github users</h2>
        <div className='users'>
            {users.map((user) => {
                return (<li><img src={user.avatar_url} alt={user.login}/>
                    <div><h4>{user.login}</h4><a href={user.html_url}>profile</a></div>
                 </li>) ;
            })}
        </div>
    </>)
}

export default UseEffect;