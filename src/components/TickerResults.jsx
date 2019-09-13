import React from 'react';

export default (props) => {
    return props.stocks.map(stock => {
        return (
            <div className="result-item" key={stock.symbol}>
                <h1>{stock.name}</h1>
                <h2>{stock.symbol}</h2>
                <p>Volume: {stock.volume}</p>
                <p>Price: {stock.price} {stock.currency}</p>
                <p>Yesterday's Close: {stock.close_yesterday}</p>
                <p>Day High: {stock.day_high}</p>
                <p>Day Low: {stock.day_low}</p>
                <p>Volume: {stock.volume}</p>
                <button onClick={ props.addFav } >Add to favorites</button>
            </div>
        )}
    )
}