import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <div>
            <div className="container">
                <h2 className="project__title"> My Recent Work </h2>
                <div className="project__title__line">
                    Here are a few past design projects I've worked on. Want to see more? Email me
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <ProjectCard/>
                    </div> 
                    <div className="col-md-4">
                        <ProjectCard/>
                    </div> 
                    <div className="col-md-4">
                        <ProjectCard/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
