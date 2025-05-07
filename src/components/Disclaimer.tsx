import React from "react";

const Disclaimer: React.FC = () => {
    return (
        <article className="message is-danger">
            <div className="message-header">
                <p>
                    Disclaimer
                </p>
            </div>
            <div className="message-body">
                The literal and graphical information presented on this site about <strong>Yu-Gi-Oh!</strong>, including card images, the attribute, level/rank and type symbols, and card text, is copyright 4K Media Inc, a subsidiary of Konami Digital Entertainment, Inc.
                <br />
                This website is not produced by, endorsed by, supported by, or affiliated with 4k Media or Konami Digital Entertainment.
                <br />
                This website is built and intended only for educational purposes.
            </div>
        </article>
    );
};

export default Disclaimer;