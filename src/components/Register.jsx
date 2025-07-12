import { Button, TextInput, Label, Checkbox } from 'flowbite-react';
import { useState } from 'react';

const Register = () => {

    const [termsAccepted, setTermsAccepted] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const termsAndConditionsChanged = () => {
        console.log('termsAndConditionsChanged')

        setTermsAccepted(!termsAccepted);
    }

    const mobileValid = /^01[0125][0-9]{8}$/;
    const emailValid = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    
    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Create an Account</h1>

            <form className="space-y-6">
                {/* Personal Information Section */}
                <div className="space-y-1">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Personal Information</h2>

                    <div>
                        <Label htmlFor="firstName" value="First Name" className="block text-sm font-medium text-gray-900 dark:text-white" />
                        <TextInput maxLength={15} minLength={3} onChange={e => setFirstName(e.target.value)} id="firstName" type="text" required className="w-full" placeholder='First Name' />
                    </div>
                    <div className={`mb-4 flex justify-between ${firstName.length < 3 ? 'text-red-500' : 'text-green-500'}`}>
                        <small>{firstName.length < 3 ? 'Must be at least 3 characters' : 'Accepted'}</small>
                        <small>{firstName.length}/15</small>
                    </div>

                    <div>
                        <Label htmlFor="lastName" value="Last Name" className="block text-sm font-medium text-gray-900 dark:text-white" />
                        <TextInput id="lastName" type="text" required onChange={e => setLastName(e.target.value)} className="w-full" placeholder='last Name' />
                    </div>
                    <div className={`mb-4 flex justify-between ${lastName.length < 3 ? 'text-red-500' : 'text-green-500'}`}>
                        <small>{lastName.length < 3 ? 'Must be at least 3 characters' : 'Accepted'}</small>
                        <small>{lastName.length}/15</small>
                    </div>


                    <div>
                        <Label htmlFor="mobile" value="Mobile Number" className="block text-sm font-medium text-gray-900 dark:text-white" />
                        <TextInput id="mobile" type="tel" required className="w-full"  onChange={e => setMobile(e.target.value)} placeholder='Mobile' />

                    </div>
                    <div className='mb-4'>
                        <small className={mobile.match(mobileValid) ? 'text-green-500' : 'text-red-500'}>{mobile.match(mobileValid) ? "Accepted" : "The mobile number must be start with 010,011,012 OR 015."}</small>
                    </div>

                </div>

                {/* Account Information Section */}
                <div className="space-y-4">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Account Information</h2>

                    <div>
                        <Label htmlFor="email" value="Email Address" className="block text-sm font-medium text-gray-900 dark:text-white" />
                        <TextInput id="email" onChange={e => setEmail(e.target.value)} type="email" required className="w-full" placeholder='Email' />
                    </div>
                    <div className='mb-4 flex flex-col'>
                        <div>
                            <small className={email.match(emailValid) ? 'text-green-500' : 'text-red-500'}>{email.match(emailValid) ? "Accepted" : "Email must be contain only one of (@) and (.) ."}</small>
                        </div>

                    </div>


                    <div>
                        <Label htmlFor="password" value="Password" className="block text-sm font-medium text-gray-900 dark:text-white" />
                        <TextInput id="password" type="password" required className="w-full" onChange={e => setPassword(e.target.value)} placeholder='Password' />

                    </div>
                    <div className='mb-4 text-white flex flex-col'>
                        <small className={password.length >= 8 ? 'text-green-500' : 'text-red-500'}>Password must be at least 8 characters.</small>
                        <small className={password.match(/[A-Z]/) ? 'text-green-500' : 'text-red-500'}>Must contain at least one uppercase letter.</small>
                        <small className={password.match(/[!@#$%^&*(),.?":{}|<>]/) ? 'text-green-500' : 'text-red-500'}>Password must include at least one special character.</small>

                    </div>


                    <div>
                        <Label htmlFor="confirmPassword" value="Confirm Password" className="block text-sm font-medium text-gray-900 dark:text-white" />
                        <TextInput id="confirmPassword" type="password" required className="w-full" onChange={e => setConfirmPassword(e.target.value)} placeholder='Confirm Password' />

                    </div>
                    <div className='mb-4 text-white flex'>
                        <small className={password !== confirmPassword || password.length === 0 ? 'text-red-500' : 'text-green-500'}>{password !== confirmPassword || password.length === 0 ? 'Rejected' : 'Accepted'}</small>
                    </div>

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


                <div className="p-3 bg-gray-900 rounded-md flex flex-col text-white">
                    <small>First-name: {firstName}</small>
                    <small>Last-name: {lastName}</small>
                    <small>Email: {email}</small>
                    <small>Mobile: {mobile}</small>
                </div>

                {/* Login Link */}
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
                    Already have an account? <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">Login</a>
                </div>
            </form>
        </div>
    );
};

export default Register;