import * as WebCell from 'web-cell';

export default function NavBar({
    title,
    theme = 'dark',
    background = 'dark',
    children
}) {
    return (
        <header>
            <div className={`collapse bg-${background}`} id="navbarHeader">
                {children}
            </div>
            <div
                className={`navbar navbar-${theme} bg-${background} box-shadow`}
            >
                <div className="container d-flex justify-content-between">
                    <a
                        href="."
                        className="navbar-brand d-flex align-items-center"
                    >
                        <strong>{title}</strong>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarHeader"
                        aria-controls="navbarHeader"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
