import React from "react";
import { useSelector } from "react-redux";

function Users() {

    const usersArray = useSelector(state => state.users.users);

    return (
        <div>
            <ul>
                Users!
                {usersArray && (
                    usersArray.map((user, index) => (
                        <div key={index}>
                            <p>Username: {user.username}</p>
                        </div>
                    ))
                )}
                {usersArray && <p>Total users: {usersArray.length}</p>}
            </ul>
        </div>
    );
}

export default Users;
