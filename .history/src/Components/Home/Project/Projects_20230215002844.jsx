import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import chatgpt from "../../../Assets/Images/chatgptv2.png"
import booklists from "../../../Assets/Images/booklist.png"
import favorfood from "../../../Assets/Images/favor-food.png"
import freshfood from "../../../Assets/Images/freshdood.png"
import todoApp from "../../../Assets/Images/todo-app.png"
import blogApp from "../../../Assets/Images/blog.png"

const Projects = () => {
    return (
        <section id="projects">
            <div className="container my-5">
                <div className="project__title my-5"> 
                    <div className="project__title-text">
                        <h1>My Recent Works</h1>
                    </div>
                    <p className="project__title__line my-3">
                        Here are a few past UI projects I've worked on. Want to see more? 
                        <a href="http://github.com/badhon252">  GitHub</a>
                    </p> 
                </div>
                
                <div className="row">
                    <div className="col-md-4">
                        <ProjectCard img={chatgpt} 
                        title={"ChatGPT Version 2.0!"}
                        text={"Experience the Future of Chatting with ChatGPT Version 2.0!"}
                        stack={["javascript", "nodejs", "git & gitub", "openaiAPI"]}
                        preview={"https://chatgpt-v2.vercel.app/"} 
                        link={"https://github.com/badhon252/chatGPT-v2"}
                        />
                    </div> 
                  <div className="col-md-4">
                        <ProjectCard img={booklists} 
                        title={"Book's Listing"}
                        text={"Book List app using create read delete & localStorage supported"}
                        stack={["javascript", "localStorage", "git & gitub"]}
                        preview={"https://badhon252.github.io/BookList/"} 
                        link={"https://github.com/badhon252/BookList"}
                        />
                    </div> 
                    <div className="col-md-4">
                        <ProjectCard img={blogApp} 
                        title={"Blogging Website"}
                        text={"This project is a mini version of a working blogging website."}
                        stack={["javascript", "nodejs","CSS", "HTML", "es6", "git & gitub" ]}
                        preview="#" link={"https://github.com/badhon252/personal-blog"}
                        />
                    </div> 
                </div> 
                <div className="row my-5">
                    <div className="col-md-4">
                        <ProjectCard img={todoApp} 
                        title={"todo-app"}
                        text={"This is a todo app. I made it for my CRUD application practice. LocalStorage supported"}
                        stack={["javascript", "nodejs", "git & gitub", "reactjs"]}
                        preview={"https://kind-murdock-61d8e5.netlify.app/"} 
                        link={"https://github.com/badhon252/todo-app"}
                        />
                    </div> 
                   <div className="col-md-4">
                        <ProjectCard img={freshfood}
                        title={"Restaurant landing page"}
                        text={"This site is converted from a figma design file. I converted it into HTML-CSS(SCSS)"}
                        stack={["HTMl", "CSS", "SCSS"]}
                        preview={"https://badhon252.github.io/FreshFood/"} 
                        link={"https://github.com/badhon252/FreshFood"}
                        />
                    </div> 
                    <div className="col-md-4">
                        <ProjectCard img={favorfood} 
                        title={"Favor Food"}
                        text={"This site is converted from a figma design file. I converted it into HTML-CSS(SCSS)"}
                        stack={["javascript", "nodejs", "git & gitub", "openaiAPI"]}
                        preview={"https://badhon252.github.io/favor-food/"} 
                        link={"https://github.com/badhon252/favor-food"}
                        />
                    </div> 
                </div>
                </div>
        </section>
       
    );
}

export default Projects;
