import "../landingpage/LandingPage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "../../assets/img/hero-img.png"
import { useNavigate } from "react-router-dom";
import Card from "../card/Card";
import Search from "../search/Search";


export default function LandingPage() {
    const navigate = useNavigate()
    return (
        <>
            <header id="header" style={{ backgroundColor: "#37517e" }}>
                <div className="container d-flex align-items-center">

                    <h1 className="logo me-auto"><a href="#">Badranaya</a></h1>
                    <nav id="navbar" className="nav">
                        <ul>
                            <li><a className="nav-link scrollto active" href="#">Home</a></li>
                            <li><a className="nav-link scrollto" href="#">Features</a></li>
                            <li><a className="nav-link scrollto" href="#">Pricing</a></li>
                            <li><a className="nav-link   scrollto" href="#">FAQs</a></li>
                            <li><a className="nav-link scrollto" href="#">About</a></li>
                        </ul>
                    </nav>

                </div>
            </header>
            <section id="hero" className="d-flex align-items-center">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                            data-aos="fade-up" data-aos-delay="200">
                            <h1>Better Solutions For Your Business</h1>
                            <h2>We are team of talented designers making websites with Bootstrap</h2>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <button onClick={() => navigate("/createproduct")} style={{ border: "none" }} className="btn-get-started scrollto">Get Started</button>
                                <a href="#" className="glightbox btn-watch-video"><i className="bi bi-play-circle"></i><span>Watch
                                    Video</span></a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                            <img src={Image} style={{ width: "500px" }} className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>

            </section>
            <Search />
            <section id="contact" className="d-flex align-items-center" style={{ backgroundColor: "#e1e4ec" }}>
                <div className="container">
                    <div className="row" style={{ margin: "auto" }}>
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                            data-aos="fade-up" data-aos-delay="200">
                            <h1 style={{ paddingBottom: "50px" }}>Contact Us</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatem culpa quae iste, minus
                                vel sequi
                                ad accusamus tempora, voluptatum dolorum magnam porro animi itaque doloribus voluptas
                                consequuntur.
                                Consequuntur recusandae repellendus saepe maiores, eveniet aliquid doloremque tempora laborum
                                architecto
                                eaque!</p>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                            <form id="form">
                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" style={{ width: "600px" }} />
                                    <div className="form-text">your full name</div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" style={{ width: "600px" }} />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Phone</label>
                                    <input type="number" className="form-control" id="phone" style={{ width: "600px" }} />
                                    <div className="form-text">Your Phone</div>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                                        style={{ width: "600px" }}></textarea>
                                    <label>Message</label>
                                </div>
                                <button type="submit" id="kirim" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>Badranaya</h3>
                                <p>Suhendar</p>
                                <p>Bandung</p>
                                <p>Indonesia</p><br /><br />
                                <p><strong>Phone:</strong> +62 8380 5267 711</p>
                                <p><strong>Email:</strong> suhendarteguh0@gmail.com</p>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li> <a href="#">Home</a></li>
                                    <li> <a href="#">Features</a></li>
                                    <li> <a href="#">Pricing</a></li>
                                    <li> <a href="#">FAQs</a></li>
                                    <li> <a href="#">About</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li> <a href="#">Web Design</a></li>
                                    <li> <a href="#">Web Development</a></li>
                                    <li> <a href="#">Product Management</a></li>
                                    <li> <a href="#">Marketing</a></li>
                                    <li> <a href="#">Graphic Design</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Social Networks</h4>
                                <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                                    <a href="https://www.facebook.com/profile.php?id=100011396948269" className="facebook"><i
                                        className="bi bi-facebook"></i></a>
                                    <a href="https://www.instagram.com/suhendar70100/" className="instagram"><i
                                        className="bi bi-instagram"></i></a>
                                    <a href="https://www.linkedin.com/in/suhendar-89003b219/" className="linkedin"><i
                                        className="bi bi-linkedin"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container footer-bottom clearfix">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Badranaya</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="#">BootstrapMade</a>
                    </div>
                </div>
            </footer>
        </>
    )
}