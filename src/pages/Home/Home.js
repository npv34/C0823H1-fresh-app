import "./Home.css";
import {useEffect, useState} from "react";
import ProductService from "../../services/product.service";
import CategoryService from "../../services/category.service";
import {useDispatch} from "react-redux";
import {addProduct} from "../../redux/features/cartSlice";
function Home() {

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    const dispatch = useDispatch();

    useEffect(() => {
        Promise.all([ProductService.getAll(10), CategoryService.getAll()]).then((response) => {
            setProducts(response[0].data)
            setCategories(response[1].data)
        })

    }, []);

    const addToCart = (product) => {
        dispatch(addProduct(product))
    }

    return (
        <>
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
                                <div key={product.id} className="col-12 col-md-3">
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
                                                <button onClick={() => addToCart(product)} className="btn btn-success">
                                                    + Add
                                                </button>
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