// This is making the buttons for the links 

export const ProjectLinks = ({ github, netlify }) => {
    return (
        <div className="button-container">
            <a href={github}>
                <button className="code-button">View Code </button>
            </a>
            <a href={netlify}>
                <button className="link-button">View live </button>
            </a>
        </div>
    );
}