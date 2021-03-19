
import { NavLink } from 'react-router-dom';


const CategorieNav = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to='/categories/all'>All</NavLink></li>
                <li><NavLink to="/categories/cats">Cats</NavLink></li>
                <li><NavLink to="/categories/dogs">Dogs</NavLink></li>
                <li><NavLink to="/categories/parrots">Parrots</NavLink></li>
                <li><NavLink to="/categories/reptails">Reptiles</NavLink></li>
                <li><NavLink to="/categories/other">Other</NavLink></li>
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