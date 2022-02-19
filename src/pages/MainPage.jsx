import React from 'react'
import Sidebar from './sidebar'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MainPage() {
    return (
        <>
            {/* <Sidebar /> */}
            <div className="home">
                <div>
                    <div className='container container-fluid text-center text-primary'>
                        <h3 style={{ marginBottom: '10px', paddingTop: '15px' }}>STUDENT MANAGEMENT SYSTEM </h3>
                    </div>
                </div>
                <section id="about" class="about">
                    <div class="container">

                        <div class="row">
                            <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="150">
                                <img src="/lmg.png " class="img-fluid" alt="" />
                            </div>
                            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
                                <h3>About Us - </h3>
                                <p class="font-italic">
                                    Wce Student Management System is a part of Assignment 4 of ADS.
                                    In This Portal you can add or view student , Instructor.
                                    Here You can add prerequisites for particular subjet and you can assign teachers to class
                                    and also fix the time slot for students and teachers  , you can add class details also.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>


    )
}
