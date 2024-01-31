import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function AppHeader() {

    const cart = useSelector(state => state.cart)

    return (
        <>
            <div className="top-bar bg-secondary-subtle">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p className="m-0">Super Value Deals - Save more with coupons</p>
                        </div>
                        <div className="col-12 col-md-6 ">
                            <div className="dropdown d-flex justify-content-end">
                                <p
                                    className="dropdown-toggle m-0"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    English
                                </p>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            English
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            VietNam
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="banner mt-4 ">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <Link className="navbar-brand" to={"/home"}>
                                <img src="freshcart-logo.svg" alt="Bootstrap" width={160} />
                            </Link>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="row g-3">
                                <div className="col-12 col-md-8">
                                    <label htmlFor="search-input" className="visually-hidden">
                                        Search
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="search-input"
                                        placeholder="Search"
                                    />
                                </div>
                                <div className="col-12 col-md-4">
                                    <button type="button" className="btn btn-outline-secondary mb-3">
                                        Location
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 d-flex justify-content-end">
                            <ul className="list-group list-group-horizontal">
                                <li className="list-group-item border border-0 position-relative">
                                    <i className="fa-regular fa-heart" />
                                    <span className="position-absolute top-1 start-70 translate-middle badge rounded-pill bg-success">
                                        9
                                      </span>
                                </li>
                                <li className="list-group-item border border-0">
                                    <i className="fa-regular fa-user" />
                                </li>
                                <li className="list-group-item border border-0">
                                    <Link to={'/cart'}>
                                        <i className="fa-solid fa-cart-shopping" />
                                        <span className="position-absolute top-1 start-70 translate-middle badge rounded-pill bg-success">
                                        {cart.totalQuantity}
                                    </span>
                                    </Link>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="menu">
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="btn btn-success navbar-brand text-white" href="#">
                                <i className="fa-solid fa-list" />
                                All Departments
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Home
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Action
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Another action
                                                </a>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Shop
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Action
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Another action
                                                </a>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Pages
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className="dropdown-item" to={'/cart'}>
                                                    Cart
                                                </Link>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Another action
                                                </a>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    )
}

export default AppHeader;