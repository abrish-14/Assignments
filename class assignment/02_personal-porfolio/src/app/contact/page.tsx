"use client"; // Add this line to mark the component as a client component

import { useState } from 'react';
import Navbar from '../../components/Navbar'; 
import Footer from '../../components/Footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setError('');

        if (!formData.name || !formData.email || !formData.phone) {
            setError('All fields are required.');
            return;
        }

        console.log('Form submitted:', formData);
        setSubmitted(true);

        setFormData({
            name: '',
            email: '',
            phone: '',
        });
    };

    return (
        <div
            className="h-screen w-full bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('/background4.jpg')" }}
        >
            <Navbar /> 
            <div className="p-[20vmin] pr-[97vmin] pt-10 max-w-[800px] mx-auto">
                <h1 className="text-center text-[5vmin] font-serif">Contact Me</h1>
                {submitted ? (
                    <p className="text-center">Thank you for your message! I will get back to you soon.</p>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <div>
                            <label className="block mb-1" htmlFor="name">Name:</label>
                            <input 
                                className="mb-4 p-5 text-base border border-[#6011bb]" 
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1" htmlFor="email">Email:</label>
                            <input 
                                className="mb-4 p-5 text-base border border-[#6011bb]" 
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1" htmlFor="phone">Phone Number:</label>
                            <input 
                                className="mb-4 p-5 text-base border border-[#6011bb]" 
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {error && <p className="text-red-500">{error}</p>} 
                        <button 
                            type="submit" 
                            className="mt-4 p-10 pr-20 pl-10 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Send
                        </button>
                    </form>
                )}
            </div>
            <Footer /> 
        </div>
    );
};

export default Contact;