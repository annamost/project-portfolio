// This is making the tags

export const ProjectTags = ({ tags }) => {
    return (
        <div>
            {tags.map((tag, index) => {
                return <h4 key={index}> {tag} </h4>
            })}
        </div>
    );
}