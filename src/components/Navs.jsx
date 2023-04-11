import { Link } from 'react-router-dom';

const links = [
    {
        text: 'Home',
        to: '/'
    },
    {
        text: 'Starred',
        to: '/Starred'
    }
]


const Navs = () => {
    return (
        <div>
            <ul>
                {links.map(item => <li key={item.to}>
                    <Link to={item.to} >{item.text} </Link>
                </li>)}
            </ul>
        </div>
    )
}

export default Navs