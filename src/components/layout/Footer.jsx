import React from 'react'

const Footer = () => {
    return (
        <footer className='relative pt-12 pb-8 bg-dark-gray text-light-gray max-h-[500px]'>
            <div className='mb-4 text-center'>
                <h3 className='text-sm sm:text-lg'>
                    © Shop<span className='text-sad-yellow'>ify</span> 2023 | Developed by @aswinstevin
                </h3>
            </div>

            <div className='flex justify-center items-center gap-x-4'>
                <a className='text-4xl text-light-gray hover:text-sad-yellow hover:animate-bounce' target='_blank' href="https://wa.me/+971552989059">
                    <i className='bx bxl-whatsapp' ></i>
                </a>

                <a className='text-4xl text-light-gray hover:text-sad-yellow hover:animate-bounce' target='_blank' href="https://www.linkedin.com/in/aswin-stevin-683524224/">
                    <i className='bx bxl-linkedin-square' ></i>
                </a>

                <a className='text-4xl text-light-gray hover:text-sad-yellow hover:animate-bounce' target='_blank' href="https://stevinportfolio.vercel.app/">
                    <i className='bx bxs-user-circle' ></i>
                </a>

            </div>
        </footer>
    )
}

export default Footer
