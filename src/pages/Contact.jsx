export default function Contact() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Have questions? We'd love to hear from you.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Information</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-medium text-gray-800">Email</h3>
                            <p className="text-gray-600">contact@myapp.com</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-gray-800">Phone</h3>
                            <p className="text-gray-600">+1 (555) 123-4567</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-gray-800">Address</h3>
                            <p className="text-gray-600">123 Tech Street</p>
                            <p className="text-gray-600">San Francisco, CA 94107</p>
                            <p className="text-gray-600">United States</p>
                        </div>

                        <div className="bg-gray-200 h-48 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </main>
    )
}