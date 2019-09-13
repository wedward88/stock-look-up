import React from 'react';

class MarketOpen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: null
        }
    }

    componentDidMount () {
        const currTime = new Date();
        const hours = currTime.getHours();
        const mins = currTime.getMinutes();

        // If it's earlier than 9:30am or later than 4pm, market is closed.
        if (((hours <= 9) && (mins < 30)) || (hours < 9) || (hours >= 16)) {
            console.log(hours)
            console.log(mins)
            this.setState({
                open: false
            });
        } else {
            this.setState({
                open: true
            });
        }
    }

    render () {
       return (
           <h2>The stock market is: <span>{this.state.open ? 'OPEN' : 'CLOSED'}</span></h2>
       )
    }
}

export default MarketOpen;