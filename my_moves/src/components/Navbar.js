import SearchBar from "./SearchBar";

export const Navbar =(params) => {
    return (
        <header className="navbar navbar-expand navbar-dark bg-dark flex-column flex-md-row bd-navbar ">
            <div className="navbar-nav-scroll">
                <ul className="navbar-nav bd-navbar-nav flex-row">
                    <li className="nav-item">
                        <a
                            className="nav-link "
                            href="/"
                            onClick="ga('send', 'event', 'Navbar', 'Community links', 'Bootstrap');"
                        >
                            HOME
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link active"
                            href="/docs/4.0/getting-started/introduction/"
                            onClick="ga('send', 'event', 'Navbar', 'Community links', 'Docs');"
                        >
                            Movies
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link "
                            href="/docs/4.0/examples/"
                            onClick="ga('send', 'event', 'Navbar', 'Community links', 'Examples');"
                        >
                            Disabled
                        </a>
                    </li>

                </ul>
            </div>
                <SearchBar className="form-control form-control-sm" />
        </header>

    )

}

