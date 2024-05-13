import './Post.css';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { FaRegHeart } from "react-icons/fa";
import { PiChatCircleBold } from 'react-icons/pi';
import { LuSend } from 'react-icons/lu';
import { RiBookmarkLine } from "react-icons/ri";

export default function Post(props) {
    return (
        <div className="card Post">
            <div className="card-header">
                <div>
                    <div>
                        <img src={props.photoPost}/>
                    </div>
                    <p>{props.title}</p><span>• {props.hourPost}</span>
                </div>
                <HiOutlineDotsHorizontal style={{fontSize: '1.2rem'}}/>
            </div>
            <div className="card-body">
                <img src={props.imagePost}/>
                <div className="card-top">
                    <span>
                        <FaRegHeart />
                        <PiChatCircleBold />
                        <LuSend/>
                    </span>
                    <span>
                        <RiBookmarkLine />
                    </span>
                </div>
                <p>Curtido por <strong style={{cursor: 'pointer'}}>{props.whoLike}</strong> e <strong style={{cursor: 'pointer'}}>outras pessoas</strong></p>
                <p><strong style={{cursor: 'pointer'}}>{props.title}</strong> {props.body}... <span>mais</span></p>
                <p>Ver todos os {props.comments} comentários</p>
                <div className="card-bottom">
                    <form>
                        <textarea name='text' placeholder='Adicione um comentário...' rows='1' cols="10"></textarea>
                    </form>
                    <i>☺</i>
                </div>
            </div>
        </div>
    )
}

// import { useState } from "react";
// import './Post.css';
// import like from '../../../imagens/border_cf.png';
// import likeFull from '../../../imagens/icon.png';
// import { FaRegGrinHearts} from "react-icons/fa";
// import { AiOutlineMessage } from "react-icons/ai";

// export default function Post(props) {
//     return (
//         <div className="card Post">
//             <div className="card-header">
//                 <p>{props.title}</p>
//             </div>
//             <div className="card-body">
//                 <img src={props.imagePost}/>                
//                 <img src={like} style={{width: '3rem'}}/>
//                 <AiOutlineMessage />
//                 <p>{props.body}</p>
//             </div>
//             <div className="card-footer">
//             </div>
//         </div>
//     )
// }

// style={{color: likes % 2 === 0 ? 'black' : 'red', cursor: 'pointer', animation: 'ease-in', transition: '0.5s'}}