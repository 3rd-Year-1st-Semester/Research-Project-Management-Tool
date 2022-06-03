import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (

        <div class="body">

            <footer class="bg-dark text-center text-lg-start text-white footerstyle">
                <div class="container p-4">
                    <div class="row mt-4">
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase">Research Management Tool</h5>

                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="#!" class="text-white"><i class="fas fa-book fa-fw fa-sm me-2"></i>Bestsellers</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-white"><i class="fas fa-book fa-fw fa-sm me-2"></i>All books</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-white"><i class="fas fa-user-edit fa-fw fa-sm me-2"></i>Our authors</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase">Quick Links</h5>

                            <ul class="list-unstyled">
                                <li>
                                    <a href="#!" class="text-white"><i class="fas fa-shipping-fast fa-fw fa-sm me-2"></i>Student Login</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-white"><i class="fas fa-backspace fa-fw fa-sm me-2"></i>Staff Login</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-white"><i class="far fa-file-alt fa-fw fa-sm me-2"></i>Registration</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-white"><i class="far fa-file-alt fa-fw fa-sm me-2"></i>Student Dashboard</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase">About SLIIT</h5>

                            <ul class="list-unstyled">
                                <li>
                                    <a href="#!" class="text-white">About</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-white">Programs</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-white">Facilities</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase">Contact Us</h5>

                            <ul class="list-unstyled">
                                <li>
                                    <a href="#!" class="text-white"><i class="fas fa-at fa-fw fa-sm me-2"></i>Email</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-white"><i class="fas fa-shipping-fast fa-fw fa-sm me-2"></i>Facebook</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-white"><i class="fas fa-envelope fa-fw fa-sm me-2"></i>Twitter</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                    © 2022 Copyright:
                    <a class="text-white" style={{marginLeft:'10px'}} href="https://superfour.lk/">SUPER 4</a>
                </div>
            </footer>

        </div>


    );
}

export default Footer;