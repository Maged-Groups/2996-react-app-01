const Circle = ({ isValid }) => <small className={`inline-flex w-4 h-4 rounded-full border ${isValid ? 'bg-green-500' : 'bg-red-500'}`}></small>

export default Circle;
