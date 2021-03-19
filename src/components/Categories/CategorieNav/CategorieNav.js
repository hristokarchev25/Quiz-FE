
import { NavLink } from 'react-router-dom';


const CategorieNav = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to='/categories/all'>All</NavLink></li>
                <li><NavLink to="/categories/Cat">Cats</NavLink></li>
                <li><NavLink to="/categories/Dog">Dogs</NavLink></li>
                <li><NavLink to="/categories/Parrot">Parrots</NavLink></li>
                <li><NavLink to="/categories/Reptile">Reptiles</NavLink></li>
                <li><NavLink to="/categories/Other">Other</NavLink></li>
            </ul>
            <style jsx>{`
                .active {
                    background-color: green !important;
                }
                `}</style>
        </nav>
    );
};

export default CategorieNav;