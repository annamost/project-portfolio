// This is the component for the skills coloums

export const SkillsColumn = ({ name, skills }) => {
    return (
        <>

            <div className="skill-column">

                <h3 key={name} className={name}>{name}</h3>
                {skills.map((skill) => {
                    return <p key={skill}>{skill}</p>
                })}

            </div>
            <div className="vl"></div>
        </>
    );
}