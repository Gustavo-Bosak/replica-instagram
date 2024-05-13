import { useState } from 'react';

export default function Story (props) {
    const [storyClick, setstoryClick] = useState(0);
    return (
        <div className="Story">
            <div className="profileImage"
                onClick={() => setstoryClick(storyClick + 1)} 
                style={{background: storyClick % 2 != 0 ? 'white' : 'linear-gradient(135deg, rgba(78, 149, 217, 1) 10%, rgba(35, 83, 161, 1) 57%, rgba(11, 48, 65, 1) 98%)', boxShadow: storyClick % 2 != 0 ? '0 0 15px white' : 'none', transition: '0.5s'}}>
                <img src={props.imageStory} alt="Imagem do Story"/>
            </div>
            <div className="atnameUser">
                <p>{props.nameStory}</p>
            </div>
        </div>
    )
}