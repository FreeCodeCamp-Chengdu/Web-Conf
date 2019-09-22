import * as WebCell from 'web-cell';

export default function NavBar({
    title,
    theme = 'dark',
    background = 'dark',
    children
}) {
    return (
        <header>
            <div class={`collapse bg-${background}`} id="navbarHeader">
                {children}
            </div>
            <div class={`navbar navbar-${theme} bg-${background} box-shadow`}>
                <div class="container d-flex justify-content-between">
                    <a href="." class="navbar-brand d-flex align-items-center">
                        <strong>{title}</strong>
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarHeader"
                        aria-controls="navbarHeader"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
