import Story from "./Story"
import './Centro.css'
import profile1 from '../../imagens/profile1.png';
import profile2 from '../../imagens/profile2.png';
import profile3 from '../../imagens/profile3.png';
import profile4 from '../../imagens/profile4.png';
import profile5 from '../../imagens/profile5.png';
import profile6 from '../../imagens/profile6.png';
import profile7 from '../../imagens/profile7.png';
import profile8 from '../../imagens/profile8.png';

var listaUsuarios = [
    {
        nome: 'niddle.wield...',
        url: profile1
    },
    {
        nome: '_slyernailer',
        url: profile2
    },
    {
        nome: 'corniferca...',
        url: profile3
    },
    {
        nome: 'greatkisser_',
        url: profile4
    },
    {
        nome: 'nailsmith.a...',
        url: profile5
    },
    {
        nome: 'major.fan.of...',
        url: profile6
    },
    {
        nome: 'hallow_ebug',
        url: profile7
    },
    {
        nome: 'jiji_whispers',
        url: profile8
    }
]

export default function Stories() {
    return (
        <div className="Stories">
            {listaUsuarios.map((usuario) => {
                    return <Story nameStory={usuario.nome} imageStory={usuario.url} />
                })
            }
        </div>
    )
}