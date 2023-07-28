import React, { Component } from 'react';
import Table from '../common/table.component';
import getMovies from '../services/get_movies.service';
import Love from './love-icon.component';


class Movies extends Component {
    state = { 
        movies: []
     } 

    componentDidMount(){
        const movies= getMovies();
        this.setState({movies});
    }
     
    render() { 
        const columns = [
            { 
                label: "ID", 
                path: "id", 
                content: (item) => <td>{item}</td> 
            },
            {
                label: "Title",
                path: "title",
                content: (item) => <td>{item}</td>,
            },
            { 
                label: "Year", 
                path: "year", 
                content: (item) => <td>{item}</td> 
            },
            {
                label: "Your Rating",
                path: "love",
                content: (item) => <td><Love isRated={item} /> </td>,
            },
        ];
        return (
            <>
              <Table movies={this.state.movies} columns={columns} />
            </>
        );
    }
}
 
export default Movies;