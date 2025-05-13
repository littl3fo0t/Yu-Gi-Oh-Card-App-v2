import React from "react";

interface ErrorProps {
    error: string
};

const Error: React.FC<ErrorProps> = ({ error }) => {
    return (
        <article className="message is-danger">
            <div className="message-header">
                <p>
                    Error
                </p>
            </div>
            <div className="message-body">
                {error ?? "An unknown error has occured."}. Please try again.
            </div>
        </article>
    );
};

export default Error;