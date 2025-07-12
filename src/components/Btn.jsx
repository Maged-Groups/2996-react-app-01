function Btn({ color, children, size = 'sm' }) {

    const btn_size = {
        sm: 'py-2 px-4',
        md: 'py-3 px-6',
        lg: 'py-4 px-8',
    }

    return (
        <button className={`${color} hover:brightness-75 text-white font-bold ${btn_size[size]} rounded`}>
            {children}
        </button>
    )
}

export default Btn