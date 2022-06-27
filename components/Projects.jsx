import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/img1.png';
import cryptoImg from '../public/assets/projects/img2.png'
import netflixImg from '../public/assets/projects/img3.png'
import twitchImg from '../public/assets/projects/img4.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Anime Search Site'
            backgroundImg={propertyImg}
            projectUrl='/'
            tech='HTML/CSS/JavaScript'
          />
          <ProjectItem
            title='Tutoring Service Site'
            backgroundImg={cryptoImg}
            projectUrl='/'
            tech='HTML/CSS/JavaScript'

          />
          <ProjectItem
            title='Travel Booking'
            backgroundImg={netflixImg}
            projectUrl='/'
            tech='React JS'

          />
          <ProjectItem
            title='Color Game'
            backgroundImg={twitchImg}
            projectUrl='/'
            tech='HTML/CSS/JavaScript'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
