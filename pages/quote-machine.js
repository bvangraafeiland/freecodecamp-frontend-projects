import { useState } from 'react'

function getRandomQuote() {
    return {
        text: 'Quote text ' + Math.random(),
        author: 'Quote author ' + Math.random()
    }
}

export default function QuoteMachine() {
    const [quote, setQuote] = useState(getRandomQuote())
    const getNewQuote = () => setQuote(getRandomQuote())

    return (
        <div id="quote-box" style={{width: '400px', margin: 'auto'}}>
            <div id="text">{quote.text}</div>
            <div id="author">{quote.author}</div>
            <button id="new-quote" onClick={getNewQuote}>Get new quote</button>
            <a href="https://twitter.com/intent/tweet" id="tweet-quote">Tweet quote</a>
        </div>
    )
}