import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    };

    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };

    handleFilter = (e) => {
        this.setState(
            () => ({
                type: e.target.dataset.type,
            }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    };

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div classNameName="input-field inline">
                        <input
                            classNameName="validate"
                            placeholder="search"
                            id="email_inline"
                            type="email"
                            value={this.state.search}
                            onChange={(e) =>
                                this.setState({ search: e.target.value })
                            }
                            onKeyDown={this.handleKey}
                        />
                    </div>
                    <div>
                        <p>
                            <label>
                                <input
                                    className="with-gap"
                                    name="group3"
                                    type="radio"
                                    data-type="all"
                                    onChange={this.handleFilter}
                                    checked={this.state.type === 'all'}
                                />
                                <span>All</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input
                                    className="with-gap"
                                    name="group3"
                                    type="radio"
                                    data-type="movie"
                                    onChange={this.handleFilter}
                                    checked={this.state.type === 'movie'}
                                />
                                <span>Movies only</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input
                                    className="with-gap"
                                    name="group3"
                                    type="radio"
                                    data-type="series"
                                    onChange={this.handleFilter}
                                    checked={this.state.type === 'series'}
                                />
                                <span>Series only</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export { Search };
