import "./Login.css";
import {useFormik} from "formik";
import * as Yup from 'yup';
import AuthService from "../../services/auth.service";
import {useState} from "react";
import {Button} from "react-bootstrap";
import MyToast from "../../components/Toast/MyToast";
import {useNavigate} from "react-router-dom";

function Login() {
    const [isLoading, setLoading] = useState(false);
    const [openToast, setOpenToast] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const formLogin = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            username: Yup.string()
                .required('Required'),
        }),
        onSubmit: values => {
            setLoading(true)
            AuthService.login(values).then((res) => {
                const token = res.data.token;
                localStorage.setItem('token', token)
                navigate("/home");
            }).catch(err => {
                setOpenToast(true)
                setLoading(false)
                setError(err.response.data)
            })
        }
    })

    return (
        <>
            <div className="row shadow p-3 mb-5 bg-body-tertiary rounded">
                <div className="col-12 col-md-6 mt-3">
                    <img
                        src="https://freshcart.codescandy.com/assets/images/logo/freshcart-logo.svg"
                        alt=""
                    />
                </div>
                <div className="col-12 col-md-6 mt-3 text-end">
                    <p>
                        Already have an account?
                        <a
                            href="#"
                            className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                        >
                            Sign in
                        </a>
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-7 d-flex justify-content-center">
                        <img
                            src="https://freshcart.codescandy.com/assets/images/svg-graphics/signin-g.svg"
                            alt=""
                        />
                    </div>
                    <div className="col-12 col-md-5">
                        <form onSubmit={formLogin.handleSubmit}>
                        <div className="col-12 col-md-10 mt-5">
                            <h3>Sign in to FreshCart</h3>
                            <p>Welcome back to FreshCart! Enter your email to get started.</p>
                            <input
                                className="form-control mt-4"
                                type="text"
                                name="username"
                                onChange={formLogin.handleChange}
                                placeholder="Username"
                                aria-label="default input example"
                            />
                            {formLogin.touched.username && formLogin.errors.username ? (
                                <div className="text-danger">{formLogin.errors.username}</div>
                            ) : null}
                            <input
                                className="form-control mt-2"
                                type="text"
                                name="password"
                                onChange={formLogin.handleChange}
                                placeholder="*****"
                                aria-label="default input example"
                            />
                            {formLogin.touched.password && formLogin.errors.password ? (
                                <div className="text-danger">{formLogin.errors.password}</div>
                            ) : null}
                        </div>
                        <div className="col-12 col-md-10 mt-2 mb-2">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <input type="checkbox" />
                                    Remember me
                                </div>
                                <div className="col-12 col-md-6">
                                    <a href="#" className="link-success">
                                        Forgot password
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-10 d-grid gap-2">
                            {/*<button className="btn btn-success" type="submit">*/}
                            {/*    Sign in*/}
                            {/*</button>*/}
                            <Button
                                className="btn btn-success"
                                variant="primary"
                                type="submit"
                            >
                                {isLoading ? 'Loading…' : 'Login'}
                            </Button>
                        </div>
                        </form>
                        <div className="col-12 col-md-12 mt-2 mb-2">
                            <p>
                                Don't have account?
                                <a
                                    href="#"
                                    className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                                >
                                    Sign up
                                </a>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <footer className="footer mt-5">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-12 col-md-2">
                            <h6>categories</h6>
                        </div>
                        <div className="col-12 col-md-2" />
                        <div className="col-12 col-md-2">
                            <h6>Get to khown us</h6>
                        </div>
                        <div className="col-12 col-md-2">
                            <h6>For consumers</h6>
                        </div>
                        <div className="col-12 col-md-2">
                            <h6>Become s shopper</h6>
                        </div>
                        <div className="col-12 col-md-2">
                            <h6>Freshcart programs</h6>
                        </div>
                    </div>
                </div>
            </footer>
            <MyToast open={openToast} message={error} vertical={"bottom"} horizontal={"right"}/>
        </>

    );
}

export default Login;