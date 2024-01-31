import {useSelector} from "react-redux";

function Cart() {
    const cart = useSelector(state => state.cart)
    console.log(cart)

    return (
        <>
            <main>
                {/* section*/}
                <div className="mt-4">
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            {/* col */}
                            <div className="col-12">
                                {/* breadcrumb */}
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item">
                                            <a href="#!">Home</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="#!">Shop</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Shop Cart
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section */}
                <section className="mb-lg-14 mb-8 mt-8">
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            <div className="col-12">
                                {/* card */}
                                <div className="card py-1 border-0 mb-8">
                                    <div>
                                        <h1 className="fw-bold">Shop Cart</h1>
                                        <p className="mb-0">Shopping in 382480</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-8 col-md-7">
                                <div className="py-3">
                                    {/* alert */}
                                    <div className="alert alert-danger p-2" role="alert">
                                        You’ve got FREE delivery. Start
                                        <a href="#!" className="alert-link">
                                            checkout now!
                                        </a>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        {cart.items.map(item => (
                                            <li className="list-group-item py-3 ps-0 border-bottom">
                                                {/* row */}
                                                <div className="row align-items-center">
                                                    <div className="col-6 col-md-6 col-lg-7">
                                                        <div className="d-flex">
                                                            <img
                                                                src={item.image} width={100}
                                                                alt="Ecommerce"
                                                                className="icon-shape icon-xxl"
                                                            />
                                                            <div className="ms-3">
                                                                {/* title */}
                                                                <a
                                                                    href="../pages/shop-single.html"
                                                                    className="text-inherit"
                                                                >
                                                                    <h6 className="mb-0">{item.title}</h6>
                                                                </a>
                                                                <span>
                          <small className="text-muted">100g</small>
                        </span>
                                                                {/* text */}
                                                                <div className="mt-2 small lh-1">
                                                                    <a
                                                                        href="#!"
                                                                        className="text-decoration-none text-inherit"
                                                                    >
                            <span className="me-1 align-text-bottom">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={14}
                                  height={14}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-trash-2 text-success"
                              >
                                <polyline points="3 6 5 6 21 6"/>
                                <path
                                    d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                                <line x1={10} y1={11} x2={10} y2={17}/>
                                <line x1={14} y1={11} x2={14} y2={17}/>
                              </svg>
                            </span>
                                                                        <span className="text-muted">Remove</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* input group */}
                                                    <div className="col-4 col-md-3 col-lg-3">
                                                        {/* input */}
                                                        {/* input */}
                                                        <div className="input-group input-spinner">
                                                            <input
                                                                type="button"
                                                                defaultValue="-"
                                                                className="button-minus btn btn-sm"
                                                                data-field="quantity"
                                                            />
                                                            <input
                                                                type="number"
                                                                step={1}
                                                                max={10}
                                                                defaultValue={1}
                                                                name="quantity"
                                                                className="quantity-field form-control-sm form-input"
                                                            />
                                                            <input
                                                                type="button"
                                                                defaultValue="+"
                                                                className="button-plus btn btn-sm"
                                                                data-field="quantity"
                                                            />
                                                        </div>
                                                    </div>
                                                    {/* price */}
                                                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                                        <span className="fw-bold">$15.00</span>
                                                        <div className="text-decoration-line-through text-muted small">
                                                            $25.00
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    {/* btn */}
                                    <div className="d-flex justify-content-between mt-4">
                                        <a href="#!" className="btn btn-primary">
                                            Continue Shopping
                                        </a>
                                        <a href="#!" className="btn btn-dark">
                                            Update Cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* sidebar */}
                            <div className="col-12 col-lg-4 col-md-5">
                                {/* card */}
                                <div className="mb-5 card mt-6">
                                    <div className="card-body p-6">
                                        {/* heading */}
                                        <h2 className="h5 mb-4">Summary</h2>
                                        <div className="card mb-2">
                                            {/* list group */}
                                            <ul className="list-group list-group-flush">
                                                {/* list group item */}
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="me-auto">
                                                        <div>Item Subtotal</div>
                                                    </div>
                                                    <span>{cart.totalMoney}</span>
                                                </li>
                                                {/* list group item */}
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="me-auto">
                                                        <div>Service Fee</div>
                                                    </div>
                                                    <span>$0.00</span>
                                                </li>
                                                {/* list group item */}
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="me-auto">
                                                        <div className="fw-bold">Subtotal</div>
                                                    </div>
                                                    <span className="fw-bold">{cart.totalMoney}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="d-grid mb-1 mt-4">
                                            {/* btn */}
                                            <button
                                                className="btn btn-primary btn-lg d-flex justify-content-between align-items-center"
                                                type="submit"
                                            >
                                                Go to Checkout
                                                <span className="fw-bold">{cart.totalMoney}</span>
                                            </button>
                                        </div>
                                        {/* text */}
                                        <p>
                                            <small>
                                                By placing your order, you agree to be bound by the Freshcart
                                                <a href="#!">Terms of Service</a>
                                                and
                                                <a href="#!">Privacy Policy.</a>
                                            </small>
                                        </p>
                                        {/* heading */}
                                        <div className="mt-8">
                                            <h2 className="h5 mb-3">Add Promo or Gift Card</h2>
                                            <form>
                                                <div className="mb-2">
                                                    {/* input */}
                                                    <label htmlFor="giftcard" className="form-label sr-only">
                                                        Email address
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="giftcard"
                                                        placeholder="Promo or Gift Card"
                                                    />
                                                </div>
                                                {/* btn */}
                                                <div className="d-grid">
                                                    <button type="submit" className="btn btn-outline-dark mb-1">
                                                        Redeem
                                                    </button>
                                                </div>
                                                <p className="text-muted mb-0">
                                                    <small>Terms &amp; Conditions apply</small>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default Cart