import React from 'react';

class SearchBar extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {

            target: ''

        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.changeTarget(event.target.children[0].value);
    }

    render() {

        return (

            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type='text'/>
                <button type='submit'>{'Find ' + this.props.type}</button>
            </form>

            )

    }

}


export default SearchBar;