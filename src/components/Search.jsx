import React from "react";

class Search extends React.Component {
    state = {
        search: '',
    }

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
                            value= {this.state.search}
                            onChange ={(e) => this.setState({search: e.target.value})}
                            />
                    </div>
                </div>
            </div>

        )
    }

}

export { Search }