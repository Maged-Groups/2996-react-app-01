import { Link } from "react-router";

const response = await fetch('https://dummyjson.com/users');

const data = await response.json();

console.log(data);

const { users } = data;

console.log(users);



console.log('Users.jsx')

export default function Users() {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Full Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map(user =>
                            <tr key={user.id} className="bg-white border-b  hover:bg-gray-50">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {user.id}
                                </th>
                                <td className="px-6 py-4">
                                    <img src={user.image} alt={user.firstName} className="w-10 h-10 rounded-full" />
                                </td>
                                <td className="px-6 py-4">
                                    {user.firstName} {user.lastName}
                                </td>
                                <td className="px-6 py-4">
                                    {user.email}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Link to={`/users/${user.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                </td>
                            </tr>

                        )
                    }


                </tbody>
            </table>
        </div>
    )
}
