// This is the component for the skills coloums

export const SkillsColumn = ({ name, skills }) => {
    return (
        <div>
            <h2>{name}</h2>
            {skills.map((skill) => {
                return <p>{skill}</p>
            })}
        </div>
    );
}