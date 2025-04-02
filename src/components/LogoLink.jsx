// This is a component to make the logo image with the right link

export const LogoLink = ({ link, image }) => {
    return (
        <a href={link}>
            <img src={image} alt="" />
        </a>
    );
}