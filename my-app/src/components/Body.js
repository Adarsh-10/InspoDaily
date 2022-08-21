import React from "react"

export default function Body() {

    const [quotes, setQuotes] = React.useState([])
    const [quoteInfo, setQuoteInfo] = React.useState({
        quote: "Learn as if you will live forever, live like you will die tomorrow.",
        author: "Mahatma Gandhi"
    })

    React.useEffect(() => {
        fetch("https://api.quotable.io/quotes?limit=150")
            .then(res => res.json())
            .then(data => setQuotes(data.results))
    }, [])

    function newQuote() {
        const randIndex = Math.floor(Math.random() * quotes.length)
        setQuoteInfo(
            {
                quote: quotes[randIndex].content, 
                author: quotes[randIndex].author
            }
        )
    }

    return (
        <main className="main--styling">
            <h3 className="quote--styling"><span>"</span>{quoteInfo.quote}<span>"</span></h3>
            <h2 className="author--styling">{quoteInfo.author}</h2>
            <button className="button--styling" type="button" onClick={newQuote}>New Quote</button>
        </main>
    )
}