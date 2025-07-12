import { Button, TextInput, Label, Checkbox } from 'flowbite-react';
import { useState, useMemo } from 'react';
import PasswordValidator from './PasswordValidator';

const Register = () => {

    console.log('Register Component Rendered');

    const [termsAccepted, setTermsAccepted] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    // useMemo Syntax
    // const x = useMemo(  () => { }  , [] )

    const firstNameValidator = useMemo(() => {
        console.log('firstNameValidator fired')

        const len = firstName.length;

        if (len === 0) return <small className='text-sky-400'>3-15 (a-z, spaces, and -) accepted.</small>
        else if (len < 3 || len > 15) return <small className='text-red-400'>Out of range</small>
        else if (!/^[a-z -]{3,15}$/i.test(firstName)) return <small className='text-red-400'>Not Accepted</small>
        else return <small className='text-green-400'>Accepted</small>

    }, [firstName])

    const lastNameValidator = useMemo(() => {
        console.log('LastNameValidator fired')

        const len = lastName.length;

        if (len === 0) return <small className='text-sky-400'>3-15 (a-z, spaces, and -) accepted.</small>
        else if (len < 3 || len > 15) return <small className='text-red-400'>Out of range</small>
        else if (!/^[a-z -]{3,15}$/i.test(lastName)) return <small className='text-red-400'>Not Accepted</small>
        else return <small className='text-green-400'>Accepted</small>

    }, [lastName])

    const termsAndConditionsChanged = () => {
        console.log('termsAndConditionsChanged')

        setTermsAccepted(!termsAccepted);
    }


    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 my-10">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Create an Account</h1>

            <form className="space-y-6">
                {/* Personal Information Section */}
                <div className="space-y-1">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Personal Information</h2>


                    {/* FirstName */}
                    <div>
                        <Label htmlFor="firstName" value="First Name" className="block text-sm font-medium text-gray-900 dark:text-white" />
                        <TextInput maxLength={15} minLength={3} onChange={e => setFirstName(e.target.value)} id="firstName" type="text" required className="w-full" placeholder='First Name' />
                    </div>
                    <div className='mb-4 text-white flex justify-between'>
                        {firstNameValidator}
                        <small>{firstName.length}/15</small>
                    </div>

                    {/* lastName */}
                    <div>
                        <Label htmlFor="lastName" value="Last Name" className="block text-sm font-medium text-gray-900 dark:text-white" />
                        <TextInput onChange={e => setLastName(e.target.value)} id="lastName" type="text" required className="w-full" placeholder='last Name' />
                    </div>
                    <div className='mb-4 text-white flex justify-between'>
                        {lastNameValidator}
                        <small>0/15</small>
                    </div>


                    <div>
                        <Label htmlFor="mobile" value="Mobile Number" className="block text-sm font-medium text-gray-900 dark:text-white" />
                        <TextInput id="mobile" type="tel" required className="w-full" placeholder='Mobile' />
                    </div>
                    <div className='mb-4 text-white flex justify-end'>
                        <small>0/15</small>
                    </div>

                </div>

                {/* Account Information Section */}
                <div className="space-y-4">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Account Information</h2>

                    <div>
                        <Label htmlFor="email" value="Email Address" className="block text-sm font-medium text-gray-900 dark:text-white" />
                        <TextInput id="email" type="email" required className="w-full" placeholder='Email' />
                    </div>
                    <div className='mb-4 text-white flex justify-end'>
                        <small>0/15</small>
                    </div>


                    <div>
                        <Label htmlFor="password" value="Password" className="block text-sm font-medium text-gray-900 dark:text-white" />
                        <TextInput onChange={e => setPassword(e.target.value)} id="password" type="password" required className="w-full" placeholder='Password' />
                    </div>


                    <div>
                        <Label htmlFor="confirmPassword" value="Confirm Password" className="block text-sm font-medium text-gray-900 dark:text-white" />
                        <TextInput onChange={e => setPasswordConfirmation(e.target.value)} id="confirmPassword" type="password" required className="w-full" placeholder='Confirm Password' />
                    </div>

                    <PasswordValidator password={password} passwordConfirmation={passwordConfirmation} />
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <Checkbox id="terms" onClick={termsAndConditionsChanged} />
                    </div>
                    <Label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        I agree to the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">Terms and Conditions</a>
                    </Label>
                </div>

                {/* Submit Button */}


                <Button type="submit" className="w-full" disabled={!termsAccepted}>
                    Create Account
                </Button>


                <div className="p-3 bg-gray-900 rounded-md"></div>

                {/* Login Link */}
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
                    Already have an account? <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">Login</a>
                </div>
            </form>


        </div>
    );
};

export default Register;