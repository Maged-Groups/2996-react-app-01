export default function About() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" >
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Learn more about our company and what we stand for.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
                    <p className="text-gray-600 mb-4">
                        Founded in 2020, we started with a simple mission: to make technology accessible to everyone.
                        What began as a small team of passionate developers has grown into a thriving community.
                    </p>
                    <p className="text-gray-600">
                        We believe in creating solutions that are both powerful and easy to use, removing the complexity
                        that often comes with modern technology.
                    </p>
                </div>
                <div className="bg-gray-200 h-64 rounded-lg"></div>
            </div>

            <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Team</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="bg-gray-200 h-32 w-32 mx-auto rounded-full mb-4"></div>
                            <h3 className="text-lg font-medium text-gray-800">Team Member {item}</h3>
                            <p className="text-gray-500">Position/Role</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};
