import React from 'react';

class TickerForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ticker: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            ticker: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchStock(this.state.ticker)
        this.setState({
            ticker: ''
        });
    }



    render () {
        return (
            <form className="ticker-form" onSubmit={ this.handleSubmit }>
                <h1>Look up a stock below:</h1>
                <div className="form-input">
                    <input type="text"
                            value={ this.state.ticker }
                            placeholder="Please enter a ticker symbol"
                            onChange={ this.handleChange }    
                    />
                    <button onClick={ this.handleSubmit }>Search</button>
                </div>
            </form>
        )
    }
}

export default TickerForm;