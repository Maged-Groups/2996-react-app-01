export default function Home() {
    return (
        <div className="bg-gray-50">
            {/* Navbar */}


            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Our Platform</h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        A simple, clean solution for your needs. No complicated setup, just straightforward tools.
                    </p>
                    <div className="space-x-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium text-lg">
                            Get Started
                        </button>
                        <button className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-3 rounded-md font-medium text-lg">
                            Learn More
                        </button>
                    </div>
                </div>
            </main>

            {/* Footer */}


        </div>
    )
}