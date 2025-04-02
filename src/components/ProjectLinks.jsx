// This is making the buttons for the links 

export const ProjectLinks = ({ github, netlify }) => {
    return (
        <div>
            <a href={github}>
                <button>View Code </button>
            </a>
            <a href={netlify}>
                <button>View live </button>
            </a>
        </div>
    );
}