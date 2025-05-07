import React from "react";

const Warning: React.FC = () => {
    return (
        <article className="message is-warning">
            <div className="message-header">
                <p>
                    Warning
                </p>
            </div>
            <div className="message-body">
                The number of search results returned exceeded the maximum limit and has been truncated to 1,000.
                <br />
                If the card you are searching for is not present in the current search results, please restrict your search parameters and try again.
            </div>
        </article>
    );
};

export default Warning;