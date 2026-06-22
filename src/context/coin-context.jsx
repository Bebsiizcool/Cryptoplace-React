import { createContext, useState, useEffect } from "react";

export const coinContext = createContext();

const CoinContextProvider = (props) => {

    const [allcoin, setallcoin] = useState([])
    const [currency, setcurrency] = useState({
        name: "usd",
        symbol: "$"
    })

    const fetchallcoin = async () => {
        const options = {
            method: "GET",
            headers: {
                "x-cg-demo-api-key": "CG-DkgB6cRrbEtYqFjSJLAQNY9Q",
            },
        };

        fetch(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options
        )
            .then((response) => response.json())
            .then((response) => setallcoin(response))
            .catch((err) => console.error(err));

    }

    useEffect(() => {
        fetchallcoin()
    }, [currency])

    const contextvalue = {
        allcoin, currency, setcurrency
    }

    return (
        <coinContext.Provider value={contextvalue}>
            {props.children}
        </coinContext.Provider>
    )
}

export default CoinContextProvider