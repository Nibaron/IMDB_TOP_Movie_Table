import React, { Component } from 'react';
import Table from '../common/table.component';
import getMovies from '../services/get_movies.service';
import Love from './love-icon.component';
import _ from 'lodash';
import Pagination from './pagination.component';


class Movies extends Component {
    state = { 
        movies: [],
        sortColumn:{path:'id', order:'asc'},
        pageCount: 7,
        activePage: 1
     } 

    componentDidMount(){
        const movies= getMovies();
        this.setState({movies});
    }

    handleSort = (sortColumn) =>{
        this.setState({...this.state, sortColumn});
    }

    handleActivePage= (activePage) => {
        this.setState({ ...this.state, activePage });
    }

    sortMovies = (movies) =>{
        const {sortColumn} = this.state;
        const sortedMovies= _.orderBy(movies, sortColumn.path, sortColumn.order);
        
        return sortedMovies;
    }

    paginateMovies = (movies)=>{
        const{pageCount,activePage}=this.state;
        const start = (activePage - 1 ) * pageCount;
        const paginatedMovies = movies.slice(start, start+pageCount);

        return paginatedMovies;

    }
     
    render() { 
        const paginatedMovies=this.paginateMovies(this.state.movies);
        const movies=this.sortMovies(paginatedMovies);

        const columns = [
            { 
                label: "ID", 
                path: "id", 
                sortable: true,
                content: (item) => <td>{item}</td> 
            },
            { 
                label: "Poster", 
                path: "posterUrl", 
                content: (item) => <td><img src= {item} style={{ width:'100px', height: 'auto'}}/></td> 
            },
            {
                label: "Title",
                path: "title",
                sortable: true,
                content: (item) => <td>{item}</td>,
            },
            { 
                label: "Year", 
                path: "year", 
                sortable: true,
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
                <Table
                    movies={movies}
                    columns={columns}
                    sortColumn={this.state.sortColumn}
                    onSort={this.handleSort}
                />
                <Pagination
                    totalItems={this.state.movies.length}
                    pageCount={this.state.pageCount}
                    activePage={this.state.activePage}
                    onClickPage={this.handleActivePage}
                />
            </>
        );
    }
}
 
export default Movies;