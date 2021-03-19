import { Component } from 'react';

import * as petService from '../../services/petService';
import Pet from '../Pet/Pet';
import CategorieNav from './CategorieNav/CategorieNav';


class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pets: [],
            currentCategory: 'all',
        }

    }

    componentDidMount() {
        petService.getAll()
            .then(res => this.setState({ pets: res }));
    }

    componentDidUpdate() {
        petService.getAll(this.props.match.params.category)
            .then(res =>
                this.setState({ pets: res, currentCategory: this.props.match.params.category }));
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