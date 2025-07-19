export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <span className="text-gray-500">© {new Date().getFullYear()} MyApp. All rights reserved.</span>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-500 hover:text-gray-700">Terms</a>
                        <a href="#" className="text-gray-500 hover:text-gray-700">Privacy</a>
                        <a href="#" className="text-gray-500 hover:text-gray-700">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
