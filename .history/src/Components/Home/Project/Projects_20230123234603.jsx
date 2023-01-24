import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <ProjectCard/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
