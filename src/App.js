/** @format */

import './App.css'
import linkedin from './icon/linkedin.svg'
import email from './icon/email.svg'
import github from './icon/github.svg'
import Projects from './components/Projects'
import avatar from './img/avatar.jpg'
import Blogs from './components/Blogs'

function App() {
    let text = 'Hi! I am Rohit kumar';
    function TextAnimation() {
        let newText = '';
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                newText = newText + text[i];
                document.getElementById('spanTag').innerText = newText;
            }, 100 * i)
        }
    }
    TextAnimation()
    return (
        <div className="App">
            <section className="top_section">
                <div className="main_heading">
                    <h1>
                        <span id="spanTag"></span>&nbsp;
                        <span className="anim_typewriter"></span>
                    </h1>
                    <img className="avatar" src={avatar} alt="" />
                </div>
                <h3>
                    A front-end softwere developer with a passion, who really
                    love to build products for the web. I have been in
                    development since 2018. With time, I explored a bunch of
                    things in web development by building personal and
                    freelancing projects.
                </h3>
            </section>
            <div className="social_icons">
                <a href="mailto:rohitk9908@gmail.com">
                    <img src={email} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/rohit-kumar3/">
                    <img src={linkedin} alt="" />
                </a>
                <a href="https://github.com/rohit874">
                    <img src={github} alt="" />
                </a>
            </div>

            <section className="skills_section">
                <h2 className="section_heading">SKILLS</h2>
                <div className="skills">
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>JavaScript (ES6+)</span>
                    <span>ReactJs</span>
                    <span>NodeJs</span>
                    <span>ExpressJs</span>
                    <span>Redux</span>
                    <span>C++</span>
                    <span>PHP</span>
                    <span>MongoDB</span>
                    <span>MySQL</span>
                </div>
            </section>

            <Projects />
            <Blogs />

            <footer>
                <div className="footer_social_icon">
                    <a href="mailto:rohitk9908@gmail.com">
                        <img src={email} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/rohit-kumar3/">
                        <img src={linkedin} alt="" />
                    </a>
                    <a href="https://github.com/rohit874">
                        <img src={github} alt="" />
                    </a>
                </div>
                <p>Developed by Rohit Kumar</p>
            </footer>
        </div>
    )
}

export default App
