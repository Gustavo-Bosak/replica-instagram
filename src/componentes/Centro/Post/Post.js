import './Post.css';
import { useState } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from 'react-icons/fa';
import { PiChatCircleBold } from 'react-icons/pi';
import { LuSend } from 'react-icons/lu';
import { RiBookmarkFill, RiBookmarkLine } from "react-icons/ri";
import { RiBookMarkFill } from 'react-icons/ri';

export default function Post(props) {
    const [likes, setLikes] = useState(true);
    const [favorited, setFavorited] = useState(true)

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
                        {likes ? <FaRegHeart onClick={() => {setLikes(!likes)}}/> :
                            <FaHeart onClick={() => {setLikes(!likes)}}style={{color: 'white'}}/>}
                        <PiChatCircleBold />
                        <LuSend/>
                    </span>
                    <span>
                        {favorited ? <RiBookmarkLine onClick={() => {setFavorited(!favorited)}}/> :
                            <RiBookmarkFill onClick={() => {setFavorited(!favorited)}}style={{color: 'white'}}/>}
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