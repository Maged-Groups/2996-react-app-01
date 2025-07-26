import { Button, TextInput, Label } from 'flowbite-react';
 
const Login = () => {


    console.log('Login Component Rendered');

    const login = () => { }

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 my-10">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Login to your account</h1>

            <form className="space-y-6">

                <div className="space-y-4">

                    <div>
                        <Label htmlFor="username" value="Username" className="block text-sm font-medium text-gray-900 dark:text-white" />
                        <TextInput id="username" type="text" required className="w-full" placeholder='Username' />
                    </div>


                    <div>
                        <Label htmlFor="password" value="Password" className="block text-sm font-medium text-gray-900 dark:text-white" />
                        <TextInput id="password" type="password" required className="w-full" placeholder='Password' />
                    </div>


                </div>


                {/* Submit Button */}

                <Button onClick={login} type="submit" className="w-full">
                    Login
                </Button>


                <div className="p-3 bg-gray-900 rounded-md"></div>

                {/* Register Link */}
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
                    Do not have an account? <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">Register</a>
                </div>
            </form>


        </div>
    );
};

export default Login;