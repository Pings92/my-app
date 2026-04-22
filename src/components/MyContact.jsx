import useUpdateDocTitle from "../hooks/useUpdateDocTitle";
import Search from "./Search";
import React, { useEffect, useState } from 'react'
import TableUsers from "./TableUsers";

const MyContact = () => {

    const [search, setSearch] = useState('');
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [resultSearch, setResultSearch] = useState([]);

    const filterUsers =() => {
        const foundUsers = users.filter(
            user => {
                return Object.values(user)
                    .join(' ')
                    .toLowerCase()
                    .includes(search.toLowerCase())
            })
        setResultSearch(foundUsers)
        }
    
    useEffect(() => {
        if (search !== ''){
            filterUsers();
        } else{
            setResultSearch([])
        }
    }, [search])

    const handleChange = e => {
        setSearch(e.target.value)
    }

    console.log(users)

    //Custom Hook
    useUpdateDocTitle(search)
    // useEffect (() => {
    //     axios.get("api/user")
    //     .then(setUser)
    //     .catch(
    //         error => setError(error.message)
    //     )
    // }, [])    
    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            setUsers(json);
            setIsLoading(false)
        })
        .catch (
            error => console.log(error.message)
        )
        
    },[])
    


    console.log(search)

    const msgDisplay = (msg, color) => {
        return (
            <p style={{textAlign: 'center', color: color}}>
                {msg}
            </p>
        )
    }


    return (
        <>
            {
                isLoading ? msgDisplay('Veuillez patienter!', 'red') 
                        : (
                                <Search 
                                searchStr = {search}
                                searchhandler = {handleChange}
                                />
                            )
            }
            {
                resultSearch.length === 0 && search !== '' ? msgDisplay('Pas de résultat')
                        : (
                            search === '' ? null 
                                : <TableUsers 
                                    dataArray={resultSearch}
                                  />
                        )

            }
        </>
    )
}

export default MyContact
