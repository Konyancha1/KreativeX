import React, {useRef} from 'react';
import Navbar from './Navbar';
import VC from '../images/VC.png';
import AKR from '../images/AKR.png';
import ALU from '../images/ALU.png';
import GoTell from '../images/GoTell.png';
import ST from '../images/Student Safaris.png';
import Hadassah from '../images/Hadassah.png';

const Home = () => {
    const servicesRef = useRef(null);
    const handleLearnMoreClick = () => {
        servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <nav className='relative z-[1000]'>
                <Navbar />
            </nav>
            <div className='flex flex-col mt-[15rem] relative md:ml-28 mx-4'>
                <h1 className='text-4xl lg:text-7xl w-full md:w-[70%] text-white leading-[1.2] font-quicksand font-semibold text-center md:text-left'>Where Being Creative is the X Factor</h1>
                <p className='relative mt-8 text-xl lg:text-2xl text-white font-quicksand text-center md:text-left'>Elevate Your Brand With Our Digital Marketing Strategies</p>
                <button onClick={handleLearnMoreClick} className='relative md:mx-0 mx-auto mt-10 bg-red-400 text-black font-quicksand md:w-36 w-[90%] h-auto p-1 md:p-3 rounded-lg'>
                    <span>Learn More</span>
                </button>
            </div>
            <div className='relative mt-[15rem] flex flex-col mb-24' ref={servicesRef}>
                <div className='md:px-24'>
                    <h1 className='text-3xl lg:text-5xl text-white font-quicksand mx-auto text-center md:text-left'>Think Big. Go Digital. Be <span className='text-red-400 italic'>Kreative</span></h1>
                    <p className='text-white font-quicksand w-[90%] lg:w-[50%] mt-8 mx-auto md:ml-2 text-base lg:text-xl text-center md:text-left'>
                        Kreative X is a full-service agency that helps businesses of all sizes 
                        increase their online presence and reach their target audience through effective 
                        digital marketing strategies
                    </p>
                    <p className='text-white font-quicksand w-[90%] lg:w-[50%] mt-5 mx-auto md:ml-2 text-base lg:text-xl text-center md:text-left'>
                        Whether you're looking to boost website traffic, generate leads or 
                        improve your brand awareness, we have the skills and experience to help you 
                        succeed in the digital space
                    </p>
                </div>
                <div className='w-[80%] mx-auto'>
                    <div className='grid lg:flex grid-cols-1 md:grid-cols-2 lg:flex-row mx-auto gap-6 mt-10'>
                        <div class='bg-white p-5 h-72 md:w-3/4 w-2/3 mx-auto mt-5 rounded-lg flex flex-col justify-center items-center'>
                            <h1 class='text-center font-bold text-xl text-red-500 mb-6'>Content Creation</h1>
                            <p class='text-center'>Develop and Produce Valuable and Relevant Content for You To Attract and Retain Customers</p>
                        </div>
                        <div class='bg-white p-5 h-72 md:w-3/4 w-2/3 mx-auto mt-5 rounded-lg flex flex-col justify-center items-center'>
                            <h1 class='text-center font-bold text-xl text-red-500 mb-6'>Website Development, Data Analytics and SEO</h1>
                            <p class='text-center'>Design, Build, and Maintain Websites for A Wide Range of Clients, from Small Businesses to Large Corporations</p>
                        </div>
                        <div class='bg-white p-5 h-72 md:w-3/4 w-2/3 mx-auto mt-5 rounded-lg flex flex-col justify-center items-center'>
                            <h1 class='text-center font-bold text-xl text-red-500 mb-6'>Financial Analytics</h1>
                            <p class='text-center'>Provide Financial Analysis, Advice, and Consulting Services to Businesses, Organizations, and Individuals.</p>
                        </div>
                        <div class='bg-white p-5 h-72 md:w-3/4 w-2/3 mx-auto mt-5 rounded-lg flex flex-col justify-center items-center'>
                            <h1 class='text-center font-bold text-xl text-red-500 mb-6'>Talent Training and Management</h1>
                            <p class='text-center'>Designing and Delivering Training Programs to Help Upcoming Creatives Acquire the Knowledge and Skills They Need to Excel</p>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='text-2xl md:text-4xl w-full md:w-[70%] text-white leading-[1.2] font-quicksand font-semibold text-center mx-auto mb-10'>
                Companies That Have Trusted Us
            </h1>
            <div class='grid grid-cols-3 gap-4 mx-auto w-[50%] mb-20'>
                <img src={ALU} alt='ALU.png' className='md:w-3/5 w-[80%]'/>
                <img src={VC} alt='VC.png' className='md:w-3/5 w-[80%]' />
                <img src={GoTell} alt='GOTELL.png' className='md:w-3/5 w-[80%]'/>
                <img src={Hadassah} alt='Hadassah.png' className='md:w-3/5 w-[80%]' />
                <img src={AKR} alt='AKR.png' className='md:w-3/5 w-[80%]'/>
                <img src={ST} alt='StudentSafaris.png' className='md:w-3/5 w-[80%]'/>
            </div>
            <footer className='px-16 h-10 mx-auto flex items-center w-full bg-white'>
                <p className='mx-auto text-base'>© 2023 KreativeX. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Home