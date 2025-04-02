// Here is the component for the individual project card 

import { ProjectDescription } from "./ProjectDescription";
import { ProjectImg } from "./ProjectImg";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectName } from "./ProjectName";
import { ProjectTags } from "./ProjectTags";

export const Project = ({ name, description, tags, github, netlify, id, image }) => {

    return (
        <div>
            <ProjectImg key={image} image={image} />
            <ProjectName key={name} name={name} />
            <ProjectDescription key={description} description={description} />
            <ProjectTags key={id} tags={tags} />
            <ProjectLinks key={github} github={github} netlify={netlify} />

        </div>
    );
}