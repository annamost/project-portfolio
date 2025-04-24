// This is a component to make the logo image with the right link

export const LogoLink = ({ link, image }) => {
    return (
        <a href={link} target="_blank">
            <img src={image} alt="" />
        </a>
    );
}