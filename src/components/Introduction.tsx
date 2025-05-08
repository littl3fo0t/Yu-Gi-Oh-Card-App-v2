import React from "react";

const Introduction: React.FC = () => {
    return (
        <div className="box">
            <div className="content">
                <p>
                    This is a simple app to search for and fetch card data from
                    the <strong>Yu-Gi-Oh! Trading Card Game</strong> using the
                    free API provided by the <a href="https://ygoprodeck.com/api-guide/">YGOPRODeck</a>
                    &nbsp;webiste and styling done using <a href="https://bulma.io/">Bulma CSS</a>,
                    built using Vite, React and Redux with TypeScript.
                    <br />
                    Built by <a href="https://github.com/littl3fo0t">@littl3fo0t</a> - 
                    see the full source code <a href="https://github.com/littl3fo0t/Yu-Gi-Oh-Card-App-v2">here</a>.
                    <br />
                    Or click <a href="https://github.com/littl3fo0t/Yu-Gi-Oh-Card-App">here</a> to see the first version (built using only HTML and Vanilla JavaScript).
                </p>
                <p>
                    Select how you would like to search by in the dropdown below and provide any further necessary information and click on the <strong>Search</strong> button or press <kbd>Enter</kbd>.
                    <br />
                    The app can search cards using the following parameters:
                    <br />
                    &#9989; <strong>Exact</strong> Name
                    <br />
                    &#9989; <strong>Fuzzy</strong> Name
                    <br />
                    &#9989; <strong>Level/Rank/Link Value</strong>
                    <br />
                    &#10060; Or just return a <strong>random</strong> card (not yet supported)
                </p>
            </div>
        </div>
    );
};

export default Introduction;