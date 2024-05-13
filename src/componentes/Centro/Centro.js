import './Centro.css';
import Stories from './Stories';
import Feed from './Feed';
import Fim from '../../imagens/endfeed.png';

export default function Centro () {
    return (
        <div className='Centro'>
            <Stories />
            <Feed />
            <div className='endFeed'>
                <img src={Fim}/>
                <p>Isso é tudo</p>
                <p>Você viu todas as novas publicações dos últimos 3 dias.</p>
            </div>
        </div>
    )
}