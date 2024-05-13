import './Direita.css';
import Suggest from './ProfileSuggested';
import suggest1 from '../../imagens/suggest1.jpg';
import suggest2 from '../../imagens/suggest2.png';
import suggest3 from '../../imagens/suggest3.png';
import suggest4 from '../../imagens/suggest4.png';
import suggest5 from '../../imagens/suggest5.png';

var profiles = [
    {
        image: suggest1,
        atname: 'circusgrimm',
    },
    {
        image: suggest2,
        atname: 'quirrel.squirrel',
    },
    {
        image: suggest3,
        atname: 'dreamcatcher_',
    },
    {
        image: suggest4,
        atname: 'mightyzote48',
    },
    {
        image: suggest5,
        atname: 'last_hunter',
    }
]


export default function ProfileSuggestions() {
    return (
      <ul>
            {profiles.map((user) => {
                return <Suggest picture={user.image} atname={user.atname}/> 
            })}
      </ul>
    );
  }