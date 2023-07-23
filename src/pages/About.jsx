import React from "react";

const about =()=>{
    return(
        <div>
            <header id="page-header">
                <div class="container">
                <div class="row">
                    <div class="col-md-6 m-auto text-center">
                    <h1>About Us</h1>
                    <p>Get about complete data of our site </p>
                    </div>
                </div>
                </div>
            </header>

            {/* <!-- ABOUT SECTION --> */}
            <section id="about" class="py-3">
                <div class="container">
                <div class="row">
                    <div class="col-md-6">
                    <h1>What We Do</h1>
                    <p>The About page mainly contains information about the organisation including the number of employees, what they actually do, etc. Different categories have been created in the about us page. The organisation can create different categories to define what it does. The category boxes are filled with randomly generated texts.</p>
                    
                    </div>
                    <div class="col-md-6">
                    <img src="http://lorempixel.com/400/400/business/8" alt="" class="about-img img-fluid rounded-circle d-none d-md-block"/>
                    </div>
                </div>
                </div>
            </section>

            {/* <!-- ICON BOXES --> */}
            <section id="icon-boxes" class="p-5">
                <div class="container">
                <div class="row mb-4">
                    <div class="col-md-4">
                    <div class="card bg-danger text-center text-white">
                        <div class="card-body">
                        <i class="fa fa-building"></i>
                        <h3>Building</h3>
                       
                        </div>
                    </div>
                    </div>
                    <div class="col-md-4">
                    <div class="card bg-danger text-center text-white">
                        <div class="card-body">
                        <i class="fa fa-bullhorn"></i>
                        <h3>Notification</h3>
                       
                        </div>
                    </div>
                    </div>
                    <div class="col-md-4">
                    <div class="card bg-danger text-center text-white">
                        <div class="card-body">
                        <i class="fa fa-comments"></i>
                        <h3>Messenger</h3>
                       
                        </div>
                    </div>
                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col-md-4">
                    <div class="card bg-danger text-center text-white">
                        <div class="card-body">
                        <i class="fa fa-clock-o"></i>
                        <h3>Time</h3>
                       
                        </div>
                    </div>
                    </div>
                    <div class="col-md-4">
                    <div class="card bg-danger text-center text-white">
                        <div class="card-body">
                        <i class="fa fa-cc"></i>
                        <h3>CC Member</h3>
                      
                        </div>
                    </div>
                    </div>
                    <div class="col-md-4">
                    <div class="card bg-danger text-center text-white">
                        <div class="card-body">
                        <i class="fa fa-coffee"></i>
                        <h3>Break</h3>
                       
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* <!-- TESTIMONIALS --> */}
            <section id="testimonial-section" class="p-4 bg-dark text-white">
                <div class="container">
                <h2 class="text-center">Testimonials</h2>
                <div class="row">
                    <div class="col">
                    <div class="slider">
                        <div>
                        <blockquote class="blockquote">
                            <p class="mb-0">Whats special in John Doe</p>
                            <footer class="blockquote-footer">John Doe From <cite title="Company 1">Company 1</cite></footer>
                        </blockquote>
                        </div>
                        <div>
                        <blockquote class="blockquote">
                            <p class="mb-0">What makes special in Steve Smith </p>
                            <footer class="blockquote-footer">Steve Smith From <cite title="Company 2">Company 2</cite></footer>
                        </blockquote>
                        </div>
                        <div>
                        <blockquote class="blockquote">
                            <p class="mb-0">Qualities in Megan </p>
                            <footer class="blockquote-footer">Megan Williams From <cite title="Company 3">Company 3</cite></footer>
                        </blockquote>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default about