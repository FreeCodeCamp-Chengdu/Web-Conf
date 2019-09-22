import * as WebCell from 'web-cell';

export default function Card({ image, text, href, children }) {
    return (
        <div className="card mb-4 box-shadow">
            <div
                className="card-img-top"
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className="card-body">
                <p className="card-text">{text}</p>
                {children}
            </div>
        </div>
    );
}
