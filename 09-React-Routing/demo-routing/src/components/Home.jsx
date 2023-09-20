import {Link, NavLink } from 'react-router-dom'

const Home = () =>{
    return (
        <div>
            <h1>Home de Anthony</h1>

            <button>
                <Link to='/about'>About</Link>
            </button>
            <button>
                <NavLink to='/profile'>
                    Profile
                </NavLink>
            </button>
        </div>
    )
}

export default Home