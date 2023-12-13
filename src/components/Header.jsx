export default function Header() {
    return (
        <nav className="blue lighten-3">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">
                    React Shop
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="https://github.com/PonomarevAlexx/shop-react-app" target="_blank" rel="noreferrer">
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
