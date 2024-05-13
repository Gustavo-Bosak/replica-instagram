import './Centro.css';
import Post from './Post/Post';
import post from '../../imagens/post.png';
import post1 from '../../imagens/post1.png';
import post2 from '../../imagens/post2.png';
import post3 from '../../imagens/post3.png';
import photoPost from '../../imagens/profile8.png';
import photoPost1 from '../../imagens/profile2.png';
import photoPost2 from '../../imagens/profile3.png';
import photoPost3 from '../../imagens/profile1.png';

var infoPost = [
    {
        photoPost: photoPost,
        title: "jiji_whispers",
        hourPost: '4h',
        imagePost: post,
        whoLike: 'snail_shaman013',
        body: 'Not saying that this guy life is wild, but his fights with his own soul are getting',
        comments: '101'
    },
    {
        photoPost: photoPost1,
        title: "_slyernailer",
        hourPost: '8h',
        imagePost: post1,
        whoLike: 'sheo.artstyle',
        body: '#TBT to the clash of titans! ⚔️💥 this guy here was pretty tough, the turn of events',
        comments: '56'
    },
    {
        photoPost: photoPost2,
        title: "cornifercartog",
        hourPost: '23h',
        imagePost: post2,
        whoLike: 'hallow.ebug',
        body: 'Another peace of work and art 🗺️ thanks to this guy, Greenpath will aways be a sigh',
        comments: '87'
    },
    {
        photoPost: photoPost3,
        title: "niddle.wielder",
        hourPost: '2d',
        imagePost: post3,
        whoLike: 'broken.vessel333',
        body: "Little one here was a bit sweaty, but nothing that a little of silk could'nt handle",
        comments: '543'
    }
]

export default function Feed() {
    return (
        <div className="Feed">
            {infoPost.map((posting) => {
                return <Post photoPost={posting.photoPost} title={posting.title} hourPost={posting.hourPost} imagePost={posting.imagePost} whoLike={posting.whoLike} body={posting.body} comments={posting.comments}/> 
            })}
        </div>
    )
}