import { FaFileAlt, FaClipboardCheck, FaCheckSquare, FaGlobe, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const CardSection = () => {
  const cards = [
    {
      color: 'bg-[#ff6b6b]',
      icon: <FaFileAlt />,
      title: 'Resume Builder',
      description: 'Say Goodbye to Dull Resumes, Say Hello to Stunning Designs.',
      link: '/Resume',
    },
    {
      color: 'bg-[#8781bd]',
      icon: <FaClipboardCheck />,
      title: 'Cover Letter',
      description: 'Need a Matching Cover Letter? We Have You Covered 😉',
      link: '/cover-letter',
    },
    {
      color: 'bg-[#4f83cc]',
      icon: <FaCheckSquare />,
      title: 'Job Tracker',
      description: 'Effortlessly Manage and Streamline Your Application Journey.',
      link: '/job-tracker',
    },
    {
      color: 'bg-[#3bbf99]',
      icon: <FaGlobe />,
      title: 'Personal Website',
      description: 'Own a Personal Website with Your Domain in a Snap.',
      link: '/personal-website',
    },
    {
      color: 'bg-[#a788b0]',
      icon: <FaEnvelope />,
      title: 'Email Signature',
      description: 'Add a Sleek and Professional Touch to Your Emails.',
      link: '/email-signature',
    },
  ];

  return (
<>
<div className='p-8 bg-gray-100 rounded-lg my-8 mx-4'>
<h1 className='text-center pt-8 pb-16 text-4xl text-black font-black itim-regular'>Professional Toolkit</h1>  

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center ">
      {cards.map((card, index) => (
          <Link href={card.link} key={index} passHref>
          <div
            className={`${card.color} flex flex-col justify-center items-start p-6 rounded-xl text-white shadow-lg transition-transform transform hover:scale-105 cursor-pointer`}
          >
            <div className="text-3xl mb-3">{card.icon}</div>
            <h3 className="font-bold text-lg">{card.title}</h3>
            <p className="text-sm mt-1">{card.description}</p>
          </div>
        </Link>
      ))}
    </div>
      </div>
    </>
  );
};    

export default CardSection;
