import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../layout/index";

function Contact() {
    return (
        <Layout>
            <div className="container mt-32">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">Contact Us</h2>
                    <div className="mt-2 h-1 w-24 bg-green-500 inline-block" />
                </div>
                <div className="row g-4">
                    {/* Sales, Purchase, and Management Department */}
                    <div className="col-12 col-md-4">
                        <div className="bg-white p-5 shadow-lg rounded-lg">
                            <h2 className="text-lg font-semibold">Sales Department</h2>
                            <p className="mt-2 text-sm font-medium">Mihir Patel</p>
                            <p className="mt-2 text-sm">Mobile: +91-9081805700</p>
                            <p className="mt-2 text-sm">Email: salesryshaya@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white p-5 shadow-lg rounded-lg">
                            <h2 className="text-lg font-semibold">Purchase Department</h2>
                            <p className="mt-2 text-sm font-medium">Hardik Gajera</p>
                            <p className="mt-2 text-sm">Mobile: +91 90818 04600</p>
                            <p className="mt-2 text-sm">Email: esryshaya@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white p-5 shadow-lg rounded-lg">
                            <h2 className="text-lg font-semibold">Management Department</h2>
                            <p className="mt-2 text-sm font-medium">Raj Dobariya</p>
                            <p className="mt-2 text-sm">Mobile: +91 90818 04700</p>
                            <p className="mt-2 text-sm">Email: sryshayagroup@gmail.com</p>
                        </div>
                    </div>

                    {/* Google Maps and Contact Form */}
                    <div className="col-12 col-md-6 mt-4">
                        <div className="bg-white p-3 shadow-sm rounded-lg h-100">
                            <iframe className="rounded w-100 h-100" title='map'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d966.3276543162918!2d72.89594983987354!3d21.2201893863492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f63270d941d%3A0x573d13b875fdb179!2sSRYSHAYA%20CORPORATION%20LLP!5e0!3m2!1sen!2sin!4v1710149295126!5m2!1sen!2sin"
                                width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" frameborder="0"
                                style={{ minHeight: "350px", border: "0" }} aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-4">
                        <div className="bg-white p-5 shadow-md rounded-md contact-form">
                            <form className='w-100'>
                                <div className="mb-3">
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                                        Your Name
                                    </label>
                                    <input id="name" className="form-control" placeholder="John Doe" type="text" />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                                        Your Email
                                    </label>
                                    <input id="email" className="form-control" placeholder="john@example.com" type="email" />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="number">
                                        Your Number
                                    </label>
                                    <input id="number" className="form-control" placeholder="+1234567890" type="tel" />
                                </div>
                                <div className="mb-5">
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="message">
                                        Your Message
                                    </label>
                                    <textarea id="message" className="form-control" placeholder="Hello, I would like to..."></textarea>
                                </div>
                                <button className="btn btn-primary w-full">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Contact;
