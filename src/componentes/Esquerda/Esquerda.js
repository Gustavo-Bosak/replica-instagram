import logo from '../../imagens/logo.png';
import Menu from './TextMenu';
import './Esquerda.css';
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import { TbFreezeRow } from "react-icons/tb";
import { LiaFacebookMessenger } from "react-icons/lia";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiPlusCircle } from "react-icons/fi";
import perfil from "../../imagens/profile.png";
import { RiThreadsFill } from "react-icons/ri";
import { HiMiniBars3 } from "react-icons/hi2";

export default function Esquerda() {
    return (
        <div className='Esquerda'>
            <img src={logo} alt='Logo' className='Logo'/>
            <ul>
                <Menu nome = 'Página Inicial' classe = "text-menu" icone={<GoHomeFill/>}/>
                <Menu nome = "Pesquisa" classe = "text-menu" icone = {<FiSearch/>}/>
                <Menu nome = "Explorar" classe = "text-menu" icone = {<MdOutlineExplore/>}/>
                <Menu nome = "Reels" classe = "text-menu" icone = {<TbFreezeRow/>}/>
                <Menu nome = "Mensagens" classe = "text-menu" icone = {<LiaFacebookMessenger/>}/>
                <Menu nome = "Notificações" classe = "text-menu" icone = {<IoMdHeartEmpty/>}/>
                <Menu nome = "Criar" classe = "text-menu" icone = {<FiPlusCircle/>}/>
                <Menu nome = "Perfil" classe = "text-menu" icone = {<img src={perfil}/>}/>
                <div className='Divisor'></div>
                <Menu nome = "Threads" classe = "text-menu" icone = {<RiThreadsFill/>}/>
                <Menu nome = "Mais" classe = "text-menu" icone = {<HiMiniBars3/>}/>
            </ul>
        </div>
    );
}