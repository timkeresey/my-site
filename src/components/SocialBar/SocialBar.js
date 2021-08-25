import './SocialBar.scss';

import github from '../../assets/images/gh.png';
import linkedin from '../../assets/images/linkedin.png';

const SocialBar = () => {
    
    return (
        <div className="social-bar">
            <a href="https://github.com/timkeresey" target="_blank" rel="noreferrer noopener" className="github">
               <img src={github} alt="Github profile" className='github__icon' />
            </a>
            <a href="https://www.linkedin.com/in/tim-keresey/" target="_blank" rel="noreferrer noopener" className="linkedin">
               <img src={linkedin} alt="Github profile" className='linkedin__icon' />
            </a>
        </div>
    )
}

export default SocialBar;
