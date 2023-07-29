import React, { Component } from 'react';
import Table from '../common/table.component';
import getMovies from '../services/get_movies.service';
import getGenres from '../services/get_genres.service';
import Love from './love-icon.component';
import _ from 'lodash';
import Pagination from './pagination.component';
import Filtering from './filtering.component';


class Movies extends Component {
    state = { 
        movies: [],
        sortColumn:{path:'id', order:'asc'},
        pageCount: 7,
        activePage: 1,
        genres: [],
        activeGenre: 'All Genres'
     } 

    componentDidMount(){
        const movies= getMovies();
        const genres= ['All Genres', ...getGenres()];
        this.setState({ ...this.state, movies, genres});
    }

    handleSort = (sortColumn) =>{
        this.setState({...this.state, sortColumn});
    }

    handleActivePage= (activePage) => {
        this.setState({ ...this.state, activePage });
    }

    handleActiveGenre = (activeGenre) =>{
        this.setState({ ...this.state, activeGenre });
    }

    sortMovies = (movies) =>{
        const {sortColumn} = this.state;
        const sortedMovies= _.orderBy(movies, [sortColumn.path], [sortColumn.order]);
        
        return sortedMovies;
    }

    paginateMovies = (movies)=>{
        const{pageCount,activePage}=this.state;
        const start = (activePage - 1 ) * pageCount;
        const paginatedMovies = movies.slice(start, start+ pageCount);

        return paginatedMovies;
    

    }

    filteredMovies=() =>{
        const { movies, activeGenre } = this.state;
        const filteredMovies = movies.filter( movie=> {
            if(activeGenre === 'All Genres') return true;

            if(movie.genres.includes(activeGenre)) return true;

            return false;
        });
        return filteredMovies;
    }
     
    render() { 
        const filteredMovies = this.filteredMovies();
        const paginatedMovies = this.paginateMovies(filteredMovies);
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
                <div className="container">
                    <div className="row">
                        <Filtering
                            items={this.state.genres}
                            activeItem={this.state.activeGenre}
                            onFilterClick={this.handleActiveGenre}
                        />

                        <div className="col-lg-8">
                            <Table
                                movies={movies}
                                columns={columns}
                                sortColumn={this.state.sortColumn}
                                onSort={this.handleSort}
                            />
                            <Pagination
                                totalItems={filteredMovies.length}
                                pageCount={this.state.pageCount}
                                activePage={this.state.activePage}
                                onClickPage={this.handleActivePage}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default Movies;