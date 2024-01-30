import "./Home.css";
import {useEffect, useState} from "react";
import ProductService from "../../services/product.service";
import CategoryService from "../../services/category.service";
function Home() {

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        Promise.all([ProductService.getAll(10), CategoryService.getAll()]).then((response) => {
            setProducts(response[0].data)
            setCategories(response[1].data)
        })

    }, []);

    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
            />
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
                            <a className="navbar-brand" href="#">
                                <img src="freshcart-logo.svg" alt="Bootstrap" width={160} />
                            </a>
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
                                    <i className="fa-solid fa-cart-shopping" />
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
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
            <hr />
            <section className="side-bar">
                <div className="container">
                    <div
                        id="carouselExampleCaptions"
                        className="carousel slide pt-2"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to={0}
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            />
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to={1}
                                aria-label="Slide 2"
                            />
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to={2}
                                aria-label="Slide 3"
                            />
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src="https://freshcart.codescandy.com/assets/images/slider/slide-1.jpg"
                                    className="d-block w-100"
                                    alt="..."
                                />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>
                                        Some representative placeholder content for the first slide.
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://freshcart.codescandy.com/assets/images/slider/slider-2.jpg"
                                    className="d-block w-100"
                                    alt="..."
                                />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>
                                        Some representative placeholder content for the second slide.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
            <section className="category">
                <div className="container">
                    <div className="col-12 col-md-12 title-category mt-5">
                        <h2>Featured Categories</h2>
                    </div>
                    <div className="col-12 col-md-12 list-category">
                        <div className="row">
                            <div className="col-12 col-md-3">
                                <div className="card">
                                    <div className="card-body d-flex justify-content-center">
                                        <img
                                            src="https://freshcart.codescandy.com/assets/images/category/category-tea-coffee-drinks.jpg"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text text-center">
                                            Tea, Coffer &amp; Drinks
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-3">
                                <div className="card">
                                    <div className="card-body d-flex justify-content-center">
                                        <img
                                            src="https://freshcart.codescandy.com/assets/images/category/category-tea-coffee-drinks.jpg"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text text-center">
                                            Tea, Coffer &amp; Drinks
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-3">
                                <div className="card">
                                    <div className="card-body d-flex justify-content-center">
                                        <img
                                            src="https://freshcart.codescandy.com/assets/images/category/category-tea-coffee-drinks.jpg"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text text-center">
                                            Tea, Coffer &amp; Drinks
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-3">
                                <div className="card">
                                    <div className="card-body d-flex justify-content-center">
                                        <img
                                            src="https://freshcart.codescandy.com/assets/images/category/category-tea-coffee-drinks.jpg"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text text-center">
                                            Tea, Coffer &amp; Drinks
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="banner-image mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="card">
                                <img
                                    src="https://freshcart.codescandy.com/assets/images/banner/grocery-banner.png"
                                    className="card-img"
                                    alt="..."
                                />
                                <div className="card-img-overlay ms-4  mt-4">
                                    <h5 className="card-title">Fruits &amp; Vegetables</h5>
                                    <p className="card-text">Get Upto 30% Off.</p>
                                    <p className="card-text">
                                        <a className="btn btn-dark">Shop now</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="card">
                                <img
                                    src="https://freshcart.codescandy.com/assets/images/banner/grocery-banner-2.jpg"
                                    className="card-img"
                                    alt="..."
                                />
                                <div className="card-img-overlay ms-4 mt-4">
                                    <h5 className="card-title ">Fruits &amp; Vegetables</h5>
                                    <p className="card-text">Get Upto 30% Off</p>
                                    <p className="card-text">
                                        <button className="btn btn-dark">Shop now</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="popular-products">
                <div className="container">
                    <div className="col-12 col-md-12 popular-products mt-5">
                        <h2>Popular Products</h2>
                    </div>
                    <div className="col-12 col-md-12 list-product">
                        <div className="row">
                            {products.map(product => (
                                <div className="col-12 col-md-3">
                                    <div className="card">
                                        <img
                                            src={product.image}
                                            className="card-img-top image-product-1"
                                            alt="..."
                                        />
                                        <div className="card-body">
                                            <h6 className="card-title text-center">
                                                {product.title}
                                            </h6>
                                            <div className="d-flex justify-content-around">
                                                <span className="mt-2">$ 18</span>
                                                <a href="#" className="btn btn-success card-link">
                                                    + Add
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Home;