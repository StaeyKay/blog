import React from 'react';
import SubHeader from '../../../components/subHeader';

const ContactCategory = () => {
    return (
        <div className='bg-[#F8F9FA] px-[128px]'>
            <SubHeader title="Contact Us" />
            <form action="" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="firstName" className="block text-sm text-gray-500 mb-1">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            className='shadow-md border-none rounded-full px-4 py-3 outline-none w-full'
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm text-gray-500 mb-1">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            className='shadow-md border-none rounded-full px-4 py-3 outline-none w-full'
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm text-gray-500 mb-1">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className='shadow-md border-none rounded-full px-4 py-3 outline-none w-full'
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm text-gray-500 mb-1">Tel. Number</label>
                        <input
                            type="tel"
                            id="phone"
                            className='shadow-md border-none rounded-full px-4 py-3 outline-none w-full'
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm text-gray-500 mb-1">Message</label>
                    <textarea
                        id="message"
                        rows="6"
                        className='shadow-md border-none rounded-lg px-4 py-3 outline-none w-full'
                    ></textarea>
                </div>
            </form>
        </div>
    );
}

export default ContactCategory;
