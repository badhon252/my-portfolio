import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import chatgpt from "../../../Assests/Images/chatgptv2.png"
import booklists from "../../../Assests/Images/booklist.png"
import favorfood from "../../../Assests/Images/favor-food.png"
import freshfood from "../../../Assests/Images/freshdood.png"
import todoApp from "../../../Assests/Images/todo-app.png"
import blogApp from "../../../Assests/Images/blog.png"

const Projects = () => {
    return (
        <div>
            <div className="container">
                <div className="project__title my-5"> 
                    <h2>My Recent Work</h2>
                    <div className="project__title__line">
                        Here are a few past design projects I've worked on. Want to see more? Email me
                    </div> 
                </div>
                
                <div className="row">
                    <div className="col-md-4">
                        <ProjectCard img={chatgpt} 
                        title={"ChatGPT Version 2.0!"}
                        text={"Experience the Future of Chatting with ChatGPT Version 2.0!"}
                        stack={["javascript", "nodejs", "git & gitub", "openaiAPI"]}
                        link={"https://github.com/badhon252/chatGPT-v2"}
                        />
                    </div> 
                  <div className="col-md-4">
                        <ProjectCard img={booklists} 
                        title={"ChatGPT Version 2.0!"}
                        text={"Experience the Future of Chatting with ChatGPT Version 2.0!"}
                        stack={["javascript", "nodejs", "git & gitub", "openaiAPI"]}
                        link={"https://github.com/badhon252/chatGPT-v2"}
                        />
                    </div> 
                    <div className="col-md-4">
                        <ProjectCard img={blogApp} 
                        title={"ChatGPT Version 2.0!"}
                        text={"Experience the Future of Chatting with ChatGPT Version 2.0!"}
                        stack={["javascript", "nodejs", "git & gitub", "openaiAPI"]}
                        link={"https://github.com/badhon252/chatGPT-v2"}
                        />
                    </div> 
                </div> 
                <div className="row my-5">
                    <div className="col-md-4">
                        <ProjectCard img={todoApp} 
                        title={"ChatGPT Version 2.0!"}
                        text={"Experience the Future of Chatting with ChatGPT Version 2.0!"}
                        stack={["javascript", "nodejs", "git & gitub", "openaiAPI"]}
                        link={"https://github.com/badhon252/chatGPT-v2"}
                        />
                    </div> 
                   <div className="col-md-4">
                        <ProjectCard img={freshfood}
                        title={"ChatGPT Version 2.0!"}
                        text={"Experience the Future of Chatting with ChatGPT Version 2.0!"}
                        stack={["javascript", "nodejs", "git & gitub", "openaiAPI"]}
                        link={"https://github.com/badhon252/chatGPT-v2"}
                        />
                    </div> 
                    <div className="col-md-4">
                        <ProjectCard img={favorfood} 
                        title={"ChatGPT Version 2.0!"}
                        text={"Experience the Future of Chatting with ChatGPT Version 2.0!"}
                        stack={["javascript", "nodejs", "git & gitub", "openaiAPI"]}
                        link={"https://github.com/badhon252/chatGPT-v2"}
                        />
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default Projects;
