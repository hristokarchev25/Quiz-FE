import { Component } from 'react';

import Pet from '../Pet/Pet';
import CategorieNav from './CategorieNav/CategorieNav';


class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pets: []
        }

    }

    componentDidMount() {
        fetch('http://localhost:3000/pets')
            .then(res => res.json())
            .then(res => this.setState({ pets: res }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <section className="dashboard">
                <h1>Dashboard</h1>

                <CategorieNav />

                <ul className="other-pets-list">
                    {this.state.pets.map(x =>
                        <Pet key={x.id}{...x} />
                    )}
                </ul>
            </section>
        );
    }
}

export default Categories;