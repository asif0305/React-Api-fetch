import React, { useEffect, useState } from 'react'

const Index = () => {

    const [users, setUsers] = useState([]);
  


    const getUsers = async () => {
        const response = await fetch("https://api.github.com/users");
        const FinalData=await response.json();
        setUsers(FinalData)
        // setUsers(await response.json());
    }



    useEffect(() => {
        getUsers();
    }, [])


    return (
        <>
            <h2>GitHub Users</h2>
            <div className="row">
                {
                    users.map((curElem) => {
                        return (

                            <div className="column" key={curElem.id}>
                                <div className="card">
                                    <div className="card-details">
                                        <img className="image" src={curElem.avatar_url} alt="" />
                                        <h1>{curElem.login}</h1>
                                        <p >Type: {curElem.type}</p>
                                        <p className="title">Profile:<a href="#">{curElem.url}</a></p>
                                        <div>
                                            <a>Articles: <i className="fas">13</i></a>

                                            <a>Followers: <i className="fas">32</i></a>

                                            <a>Rating: <i className="fas">7.9</i></a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>

    )
}

export default Index;