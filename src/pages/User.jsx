import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';


console.log('User.jsx')

export default function User() {

    console.log('Component Rendered')

    const { user_id } = useParams();

    const [user, setUser] = useState({});
    const [users, setUsers] = useState([]);

    const getUser = async () => {
        console.log('getUser() fired');

        const api = 'https://dummyjson.com/users/' + user_id;
        const response = await fetch(api);


        console.log(user_id);
        console.log(api);
        console.log(response);

        setUser(await response.json());
        console.log(user);

    }

    const getUsers = async () => {

        const api = 'https://dummyjson.com/users';
        const response = await fetch(api);


        console.log(user_id);
        console.log(api);
        console.log(response);
        const { users } = await response.json();
        setUsers(users);

    }

    console.log('Before UseEffect')

    useEffect(() => {
        console.log('Inside UseEffect')
        getUser();
        getUsers();
    }, [user_id])

    console.log('After UseEffect')





    return (
        <div>
            <div className="flex flex-col items-center pb-10 pt-8 px-5">
                <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover"
                    src={user.image} // Fallback image
                    alt={`${user.firstName} ${user.lastName} image`}
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {user.firstName} {user.maidenName} {user.lastName}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">@{user.username}</span>

                <div className="mt-4 w-full text-center">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong className="font-semibold">Email:</strong> {user.email}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong className="font-semibold">Phone:</strong> {user.phone}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong className="font-semibold">Gender:</strong> {user.gender}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong className="font-semibold">Age:</strong> {user.age}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong className="font-semibold">Born:</strong> {user.birthDate}
                    </p>
                </div>

                <div className="flex mt-6 space-x-3 md:mt-8">
                    <a
                        href={`mailto:${user.email}`}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Message
                    </a>
                    <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                        onClick={() => alert(`Following ${user.firstName}!`)} // Example action
                    >
                        Follow
                    </button>
                </div>
            </div>



            {/* Other Users */}

            <div className="flex flex-row overflow-x-auto gap-4 p-4 scrollbar-hide"> {/* scrollbar-hide is a custom utility if you have it, otherwise remove */}
                {users.map((user) => (
                    <Link
                        to={`/users/${user.id}`}
                        key={user.id}
                        className="flex-shrink-0 w-32 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-3 flex flex-col items-center text-center"
                    >
                        <img
                            className="w-16 h-16 mb-2 rounded-full shadow-md object-cover"
                            src={user.image || 'https://via.placeholder.com/64'} // Fallback image
                            alt={`${user.firstName} ${user.lastName}`}
                        />
                        <h6 className="text-sm font-medium text-gray-900 dark:text-white truncate w-full">
                            {user.firstName} {user.lastName}
                        </h6>
                        <span className="text-xs text-gray-500 dark:text-gray-400 truncate w-full">
                            @{user.username}
                        </span>
                        {/* You can add a simple action button here if needed */}
                        {/*
          <button className="mt-2 text-xs text-blue-600 hover:underline">View</button>
          */}
                    </Link>
                ))}
            </div>


        </div>
    )
}