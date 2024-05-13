import './Direita.css';
import perfil from '../../imagens/profile.png';
import Suggestions from './ProfileSuggestions';

export default function Direita() {
    return (
        <div className='Direita'>
            <div className='topPerfil'>
                <div className='userPerfil'>
                    <img src={perfil}/>
                    <div>
                        <p>therealpaleking</p>
                        <p>Hollow Knight</p>
                    </div>
                </div>
                <p>Mudar</p>
            </div>
            <div className='suggestPefil'>
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
            </div>
            <Suggestions/>
            <div className='footer'>
                <a>Sobre</a>
                <a>Ajuda</a>
                <a>Imprensa</a>
                <a>API</a>
                <a>Carreiras</a>
                <a>Privacidade</a>
                <a>Termos</a>
                <a>Localizações</a>
                <a>Idioma</a>
                <a>Hallownest Verified</a>
                <div>© 2024 NESTAGRAM FROM HALLOWNEST</div>
            </div>
        </div>
    )
}