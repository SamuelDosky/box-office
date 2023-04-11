import {Link} from 'react-router-dom'
import {useState} from 'react';
import axios from 'axios'

const Home = () => {

    const [search , setSearch] = useState("");

    const handleChange = (e) => {
       setSearch(e.target.value)
    }

    const handleSearch = () => {
        axios.get(`https://api.tvmaze.com/search/shows?q =${search}`)
        .then(response => console.log(response.data))
    }

    return(
    <div className="Home">
<Link to="/starred"> Go to starred page </Link>


<form onSubmit={handleSearch}>
<input type="text" name="search" placeholder="search" value={search} onChange={handleChange}/>
<input type="submit" value="submit" />
</form>
    </div>
    )
}

export default Home;