import React from 'react';

function Projects() {
    let projects = [
        {
            name: 'Hummingbird - Social Media App',
            descriptions:
                'This is a social media app like twitter where users can follow each other and post their thoughts.',
            tech: ['ReactJs', 'NodeJs', 'ExpressJs', 'MongoDB'],
            live: 'https://social-media-6612b.web.app/',
            code: 'https://github.com/rohit874/social-media',
        },
        {
            name: 'Tomato - Online Food Ordering',
            descriptions:
                'This is an online food ordering app where user can search for the restaurant and order food.',
            tech: ['ReactJs', 'NodeJs', 'ExpressJs', 'MongoDB'],
            live: 'https://online-food-5c892.web.app/',
            code: 'https://github.com/rohit874/online-food',
        },
        {
            name: 'MineChat - Real Time Chat App',
            descriptions:
                'This is a Messaging app where users can connect each other and send real time messages.',
            tech: ['ReactJs', 'NodeJs', 'ExpressJs', 'Socket.io', 'MongoDB'],
            live: 'https://chat-app-598e8.web.app/',
            code: 'https://github.com/rohit874/messenger',
        },
        {
            name: 'Favmovies - Movie Searching App',
            descriptions:
                'This is a Movie searching app where users find information of a movie. Used TMDB API for getting movie data.',
            tech: ['ReactJs', 'HTML5', 'CSS3'],
            live: 'https://favmovies-480d6.web.app/',
            code: 'https://github.com/rohit874/favmovies',
        },
        {
          name: 'GKeep - Notes Taking App',
          descriptions:
              'This is a Notes taking app like google keep. User can create, update and delete note',
          tech: ['ReactJs', 'HTML5', 'CSS3'],
          live: 'https://keep-notes-5b1ad.web.app/',
          code: 'https://github.com/rohit874/Keep-Notes-App-in-Reactjs',
      }
    ];
  return (
    <section className="project_section">
    <h2 className="section_heading">PROJECTS</h2>
    {
        projects.map((data)=>{
            return(
                <div key={data.name} className="project">
        <div className="project_heading">
            <h3>{data.name}</h3>
            <div>
                <a href={data.live}>Demo</a>
                <a href={data.code}>Github</a>
            </div>
        </div>
        <p>{data.descriptions}</p>
        <div className="project_tech">
            {
                data.tech.map((skill)=>{
                    return(
                        <span key={skill}>{skill}</span>
                    )
                })
            }
        </div>
    </div>
            )
        })
    }
    </section>
  );
}

export default Projects;
