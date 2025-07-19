import { memo } from 'react'
import Circle from "./ValidatorCircle";

function PasswordValidator({ password, passwordConfirmation }) {

    console.log('PasswordValidator rendered')

    if (!password) return

    const fields = [
        {
            label: 'Uppercase',
            isValid: /[A-Z]/.test(password)
        },
        {
            label: 'Lowercase',
            isValid: /[a-z]/.test(password)
        },
        {
            label: 'Digit',
            isValid: /[\d]/.test(password)
        },
        {
            label: 'Symbol',
            isValid: /[\W]/.test(password)
        },
        {
            label: '8-16',
            isValid: /.{8,16}/.test(password)
        },
        {
            label: 'Match',
            isValid: password === passwordConfirmation
        }
    ];

    return (
        <div className='mb-4 text-white flex flex-col gap-2'>
            {
                fields.map(field => (
                    <p key={field.label} className="flex items-center gap-1">
                        <Circle isValid={field.isValid} />
                        <small>{field.label}</small>
                    </p>
                ))
            }

        </div>
    )
}

export default memo(PasswordValidator);