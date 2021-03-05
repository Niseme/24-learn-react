import '../Style/Logo.css';
import LogoImg from '../Images/logo.png'

function Logo() {
    return (
        <img src={LogoImg} className="logo" alt="Learn project logo" />
    );
}

export default Logo;
