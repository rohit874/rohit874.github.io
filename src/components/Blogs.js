import React from 'react';

function Blogs() {
    let blogs = [
        {
            title: 'Deploy Your First React App To Heroku',
            descriptions:
                'This is a complete guide to deploy your first react app on heroku live server. In this blog post I’ll teach you a simplest way to deploy...',
            author:"Rohit Kumar",
            date:"Oct 15, 2021",
            live: 'https://medium.com/@rohitk9908/deploy-your-first-react-app-to-heroku-3e97962f3ee0',
        },
        {
            title: 'Adding Dark Mode To Website With CSS And Javascript',
            descriptions:
                'Having a dark mode in a website or app is an hot features nowdays and many famous websites and app like Facebook, WhatsApp, Twitter...',
            author:"Rohit Kumar",
            date:"Oct 15, 2021",
            live: 'https://medium.com/@rohitk9908/adding-dark-mode-to-website-with-css-and-javascript-bc1ad6a0c462',
        },
        {
            title: 'Which Web Hosting is suitable for your website?',
            descriptions:
                'Understanding the web hosting is important when you develop your website and want to established its online presence. This blog post will...',
            author:"Rohit Kumar",
            date:"Oct 15, 2021",
            live: 'https://medium.com/@rohitk9908/which-web-hosting-is-suitable-for-your-website-3cfb46de0319',
        }
    ];
  return (
    <section className="project_section">
    <h2 className="section_heading">BLOGS</h2>
    {
        blogs.map((data)=>{
            return(
                <div key={data.title} className="project">
        <div className="project_heading">
            <h3>{data.title}</h3>
            <div>
                <a target='_blank' rel="noreferrer" href={data.live}>Read</a>
            </div>
        </div>
        <p>{data.descriptions}</p>
        <div className="project_tech">
            <span>- {data.author}</span>
            <span>{data.date}</span>
        </div>
    </div>
            )
        })
    }
    </section>
  );
}

export default Blogs;
