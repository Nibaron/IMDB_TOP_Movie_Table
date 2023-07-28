import React, { Component } from 'react';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <nav
                    className="navbar navbar-light"
                    style={{ backgroundColor: "#e3f2fd" }}
                >
                    <a class="navbar-brand" href="#">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                            width="35"
                            height="35"
                            class="d-inline-block align-top"
                            alt=""
                        />
                        IMDB
                    </a>
                    <form className="form-inline">
                        <div className="input-group">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <div className="input-group-append">
                                <button
                                    className="btn btn-outline-success"
                                    type="submit"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                </nav>
            </>
        );
    }
}
 
export default Navbar;