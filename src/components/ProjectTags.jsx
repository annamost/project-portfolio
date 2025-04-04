// This is making the tags

export const ProjectTags = ({ tags }) => {
    return (
        <div className="all-tags">
            {tags.map((tag, index) => {
                return <p key={index}> {tag} </p>
            })}
        </div>
    );
}