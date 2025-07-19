import { useState } from "react"

export default function Services() {

    const [service, setService] = useState('market');

    const activeClass = 'bg-sky-600 text-sky-100';
    const inactiveClass = 'text-sky-600';



    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Optional heading (can be removed if not needed) */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Professional solutions tailored to your business needs
                    </p>
                </div>

                {/* Tabs Navigator */}
                <div className="px-4 bg-gray-200 text-green-800 flex gap-3 cursor-pointer">
                    <span onClick={() => setService('web')} className={`p-4 ${service === 'web' ? activeClass : inactiveClass} `} >Web Apps</span>
                    <span onClick={() => setService('mob')} className={`p-4 ${service === 'mob' ? activeClass : inactiveClass} `} >Mobile Apps</span>
                    <span onClick={() => setService('market')} className={`p-4 ${service === 'market' ? activeClass : inactiveClass} `} >Marketing</span>
                    <span onClick={() => setService('devops')} className={`p-4 ${service === 'devops' ? activeClass : inactiveClass}`} >DevOps</span>
                </div>

                {/* Web Apps */}
                {
                    service === 'web' &&
                    <div className="">
                        <div
                            className="bg-white"                    >
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Web Apps</h3>
                                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellat quae rem quam impedit incidunt, aspernatur iste totam molestiae, praesentium, eaque unde dignissimos eum dolorem doloribus pariatur. Incidunt nam totam facilis ducimus aperiam eius neque quasi officia, quia repellendus eum quo distinctio, quibusdam expedita, quisquam rem ipsum! Sequi nemo quas, distinctio esse nulla dicta quos id quisquam mollitia non quis eaque doloremque animi rem recusandae quia corporis modi magnam reiciendis doloribus reprehenderit, fuga accusamus? Doloremque, neque omnis maiores deserunt perspiciatis fugiat tenetur earum fuga architecto rem soluta inventore eum et similique, ea qui possimus alias quisquam reiciendis sunt minus! Deleniti?</p>
                                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellat quae rem quam impedit incidunt, aspernatur iste totam molestiae, praesentium, eaque unde dignissimos eum dolorem doloribus pariatur. Incidunt nam totam facilis ducimus aperiam eius neque quasi officia, quia repellendus eum quo distinctio, quibusdam expedita, quisquam rem ipsum! Sequi nemo quas, distinctio esse nulla dicta quos id quisquam mollitia non quis eaque doloremque animi rem recusandae quia corporis modi magnam reiciendis doloribus reprehenderit, fuga accusamus? Doloremque, neque omnis maiores deserunt perspiciatis fugiat tenetur earum fuga architecto rem soluta inventore eum et similique, ea qui possimus alias quisquam reiciendis sunt minus! Deleniti?</p>
                                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellat quae rem quam impedit incidunt, aspernatur iste totam molestiae, praesentium, eaque unde dignissimos eum dolorem doloribus pariatur. Incidunt nam totam facilis ducimus aperiam eius neque quasi officia, quia repellendus eum quo distinctio, quibusdam expedita, quisquam rem ipsum! Sequi nemo quas, distinctio esse nulla dicta quos id quisquam mollitia non quis eaque doloremque animi rem recusandae quia corporis modi magnam reiciendis doloribus reprehenderit, fuga accusamus? Doloremque, neque omnis maiores deserunt perspiciatis fugiat tenetur earum fuga architecto rem soluta inventore eum et similique, ea qui possimus alias quisquam reiciendis sunt minus! Deleniti?</p>
                                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellat quae rem quam impedit incidunt, aspernatur iste totam molestiae, praesentium, eaque unde dignissimos eum dolorem doloribus pariatur. Incidunt nam totam facilis ducimus aperiam eius neque quasi officia, quia repellendus eum quo distinctio, quibusdam expedita, quisquam rem ipsum! Sequi nemo quas, distinctio esse nulla dicta quos id quisquam mollitia non quis eaque doloremque animi rem recusandae quia corporis modi magnam reiciendis doloribus reprehenderit, fuga accusamus? Doloremque, neque omnis maiores deserunt perspiciatis fugiat tenetur earum fuga architecto rem soluta inventore eum et similique, ea qui possimus alias quisquam reiciendis sunt minus! Deleniti?</p>
                            </div>
                        </div>

                    </div>
                }

                {/* Mobile Apps */}
                {
                    service == 'mob' &&
                    <div className="">
                        <div
                            className="bg-white"                    >
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Mobile Apps</h3>
                                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellat quae rem quam impedit incidunt, aspernatur iste totam molestiae, praesentium, eaque unde dignissimos eum dolorem doloribus pariatur. Incidunt nam totam facilis ducimus aperiam eius neque quasi officia, quia repellendus eum quo distinctio, quibusdam expedita, quisquam rem ipsum! Sequi nemo quas, distinctio esse nulla dicta quos id quisquam mollitia non quis eaque doloremque animi rem recusandae quia corporis modi magnam reiciendis doloribus reprehenderit, fuga accusamus? Doloremque, neque omnis maiores deserunt perspiciatis fugiat tenetur earum fuga architecto rem soluta inventore eum et similique, ea qui possimus alias quisquam reiciendis sunt minus! Deleniti?</p>
                                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellat quae rem quam impedit incidunt, aspernatur iste totam molestiae, praesentium, eaque unde dignissimos eum dolorem doloribus pariatur. Incidunt nam totam facilis ducimus aperiam eius neque quasi officia, quia repellendus eum quo distinctio, quibusdam expedita, quisquam rem ipsum! Sequi nemo quas, distinctio esse nulla dicta quos id quisquam mollitia non quis eaque doloremque animi rem recusandae quia corporis modi magnam reiciendis doloribus reprehenderit, fuga accusamus? Doloremque, neque omnis maiores deserunt perspiciatis fugiat tenetur earum fuga architecto rem soluta inventore eum et similique, ea qui possimus alias quisquam reiciendis sunt minus! Deleniti?</p>
                                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellat quae rem quam impedit incidunt, aspernatur iste totam molestiae, praesentium, eaque unde dignissimos eum dolorem doloribus pariatur. Incidunt nam totam facilis ducimus aperiam eius neque quasi officia, quia repellendus eum quo distinctio, quibusdam expedita, quisquam rem ipsum! Sequi nemo quas, distinctio esse nulla dicta quos id quisquam mollitia non quis eaque doloremque animi rem recusandae quia corporis modi magnam reiciendis doloribus reprehenderit, fuga accusamus? Doloremque, neque omnis maiores deserunt perspiciatis fugiat tenetur earum fuga architecto rem soluta inventore eum et similique, ea qui possimus alias quisquam reiciendis sunt minus! Deleniti?</p>
                                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellat quae rem quam impedit incidunt, aspernatur iste totam molestiae, praesentium, eaque unde dignissimos eum dolorem doloribus pariatur. Incidunt nam totam facilis ducimus aperiam eius neque quasi officia, quia repellendus eum quo distinctio, quibusdam expedita, quisquam rem ipsum! Sequi nemo quas, distinctio esse nulla dicta quos id quisquam mollitia non quis eaque doloremque animi rem recusandae quia corporis modi magnam reiciendis doloribus reprehenderit, fuga accusamus? Doloremque, neque omnis maiores deserunt perspiciatis fugiat tenetur earum fuga architecto rem soluta inventore eum et similique, ea qui possimus alias quisquam reiciendis sunt minus! Deleniti?</p>
                            </div>
                        </div>

                    </div>
                }

                {/* Marketing */}
                {
                    service === 'market' &&
                    <div className="">
                        <div
                            className="bg-white"                    >
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Marketing</h3>
                                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellat quae rem quam impedit incidunt, aspernatur iste totam molestiae, praesentium, eaque unde dignissimos eum dolorem doloribus pariatur. Incidunt nam totam facilis ducimus aperiam eius neque quasi officia, quia repellendus eum quo distinctio, quibusdam expedita, quisquam rem ipsum! Sequi nemo quas, distinctio esse nulla dicta quos id quisquam mollitia non quis eaque doloremque animi rem recusandae quia corporis modi magnam reiciendis doloribus reprehenderit, fuga accusamus? Doloremque, neque omnis maiores deserunt perspiciatis fugiat tenetur earum fuga architecto rem soluta inventore eum et similique, ea qui possimus alias quisquam reiciendis sunt minus! Deleniti?</p>
                                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellat quae rem quam impedit incidunt, aspernatur iste totam molestiae, praesentium, eaque unde dignissimos eum dolorem doloribus pariatur. Incidunt nam totam facilis ducimus aperiam eius neque quasi officia, quia repellendus eum quo distinctio, quibusdam expedita, quisquam rem ipsum! Sequi nemo quas, distinctio esse nulla dicta quos id quisquam mollitia non quis eaque doloremque animi rem recusandae quia corporis modi magnam reiciendis doloribus reprehenderit, fuga accusamus? Doloremque, neque omnis maiores deserunt perspiciatis fugiat tenetur earum fuga architecto rem soluta inventore eum et similique, ea qui possimus alias quisquam reiciendis sunt minus! Deleniti?</p>
                                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellat quae rem quam impedit incidunt, aspernatur iste totam molestiae, praesentium, eaque unde dignissimos eum dolorem doloribus pariatur. Incidunt nam totam facilis ducimus aperiam eius neque quasi officia, quia repellendus eum quo distinctio, quibusdam expedita, quisquam rem ipsum! Sequi nemo quas, distinctio esse nulla dicta quos id quisquam mollitia non quis eaque doloremque animi rem recusandae quia corporis modi magnam reiciendis doloribus reprehenderit, fuga accusamus? Doloremque, neque omnis maiores deserunt perspiciatis fugiat tenetur earum fuga architecto rem soluta inventore eum et similique, ea qui possimus alias quisquam reiciendis sunt minus! Deleniti?</p>
                                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellat quae rem quam impedit incidunt, aspernatur iste totam molestiae, praesentium, eaque unde dignissimos eum dolorem doloribus pariatur. Incidunt nam totam facilis ducimus aperiam eius neque quasi officia, quia repellendus eum quo distinctio, quibusdam expedita, quisquam rem ipsum! Sequi nemo quas, distinctio esse nulla dicta quos id quisquam mollitia non quis eaque doloremque animi rem recusandae quia corporis modi magnam reiciendis doloribus reprehenderit, fuga accusamus? Doloremque, neque omnis maiores deserunt perspiciatis fugiat tenetur earum fuga architecto rem soluta inventore eum et similique, ea qui possimus alias quisquam reiciendis sunt minus! Deleniti?</p>
                            </div>
                        </div>

                    </div>
                }

                {/* DevOps */}
                {
                    service == 'devops' &&
                    <div className="">
                        <div
                            className="bg-white"                    >
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">DevOps</h3>
                                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellat quae rem quam impedit incidunt, aspernatur iste totam molestiae, praesentium, eaque unde dignissimos eum dolorem doloribus pariatur. Incidunt nam totam facilis ducimus aperiam eius neque quasi officia, quia repellendus eum quo distinctio, quibusdam expedita, quisquam rem ipsum! Sequi nemo quas, distinctio esse nulla dicta quos id quisquam mollitia non quis eaque doloremque animi rem recusandae quia corporis modi magnam reiciendis doloribus reprehenderit, fuga accusamus? Doloremque, neque omnis maiores deserunt perspiciatis fugiat tenetur earum fuga architecto rem soluta inventore eum et similique, ea qui possimus alias quisquam reiciendis sunt minus! Deleniti?</p>
                                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellat quae rem quam impedit incidunt, aspernatur iste totam molestiae, praesentium, eaque unde dignissimos eum dolorem doloribus pariatur. Incidunt nam totam facilis ducimus aperiam eius neque quasi officia, quia repellendus eum quo distinctio, quibusdam expedita, quisquam rem ipsum! Sequi nemo quas, distinctio esse nulla dicta quos id quisquam mollitia non quis eaque doloremque animi rem recusandae quia corporis modi magnam reiciendis doloribus reprehenderit, fuga accusamus? Doloremque, neque omnis maiores deserunt perspiciatis fugiat tenetur earum fuga architecto rem soluta inventore eum et similique, ea qui possimus alias quisquam reiciendis sunt minus! Deleniti?</p>
                                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellat quae rem quam impedit incidunt, aspernatur iste totam molestiae, praesentium, eaque unde dignissimos eum dolorem doloribus pariatur. Incidunt nam totam facilis ducimus aperiam eius neque quasi officia, quia repellendus eum quo distinctio, quibusdam expedita, quisquam rem ipsum! Sequi nemo quas, distinctio esse nulla dicta quos id quisquam mollitia non quis eaque doloremque animi rem recusandae quia corporis modi magnam reiciendis doloribus reprehenderit, fuga accusamus? Doloremque, neque omnis maiores deserunt perspiciatis fugiat tenetur earum fuga architecto rem soluta inventore eum et similique, ea qui possimus alias quisquam reiciendis sunt minus! Deleniti?</p>
                                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellat quae rem quam impedit incidunt, aspernatur iste totam molestiae, praesentium, eaque unde dignissimos eum dolorem doloribus pariatur. Incidunt nam totam facilis ducimus aperiam eius neque quasi officia, quia repellendus eum quo distinctio, quibusdam expedita, quisquam rem ipsum! Sequi nemo quas, distinctio esse nulla dicta quos id quisquam mollitia non quis eaque doloremque animi rem recusandae quia corporis modi magnam reiciendis doloribus reprehenderit, fuga accusamus? Doloremque, neque omnis maiores deserunt perspiciatis fugiat tenetur earum fuga architecto rem soluta inventore eum et similique, ea qui possimus alias quisquam reiciendis sunt minus! Deleniti?</p>
                            </div>
                        </div>

                    </div>
                }
            </div>
        </div >
    )
}