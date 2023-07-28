import React, { Component } from 'react';
import Table from '../common/table.component';
import Rating from './rating.component';

class Movies extends Component {
    state = { 
        movies: [{id:1, title:'Padma Nodir Majhi', year:1998, rating:true}]
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
                label: "Rating",
                path: "rating",
                content: (item) => <td><Rating isRated={item} /> </td>,
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