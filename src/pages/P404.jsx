import img404 from '../assets/imgs/404.jpg';

export default function P404() {
    return (
        <div className="text-center mt-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Page not found.
            </p>

            <img src={img404} width={500} height={500} alt='404 page not found' className='mx-auto max-w-100 h-auto' />
        </div>
    )

}