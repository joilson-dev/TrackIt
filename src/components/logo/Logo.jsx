import LogoSvg from '../../assets/trackItLogo.svg';
import { ImgLogoStyles } from './ImgLogoStyles';

export default function Logo() {
    return (
        <>
            <ImgLogoStyles src={LogoSvg} alt="Logo Track" />
        </>
    );
}
