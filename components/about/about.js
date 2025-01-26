import React from 'react'
import aImg from '../../images/about/staff.jpg'

const About = (props) => {
    return (

        <section className="tf-about-section section-padding">
            <div className="container">
                <div className="tf-about-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="tf-about-img">
                                <img src={aImg} alt="" />
                                <div className="tf-about-img-text">
                                    <div className="tf-about-icon">
                                        <h3>1</h3>
                                        <span>Year Exprience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="tf-about-text">
                                <small>about Me</small>
                                <h2>Welcome to Tonu, Best Software Services</h2>
                                <h5>I have 1 year of experiences in Software Development for give you better services.</h5>
                                <p>
                                My name is Mehdia Humais  I am 13 years old , I am a webdevolper I mke web using HTML ,CSS , JAVASCRIPT and React JS </p>

                                <div className="tf-funfact">
                                    <div className="tf-funfact-item">
                                        <h3><span>5</span>+</h3>
                                        <p>Projects Completed</p>
                                    </div>
                                    <div className="tf-funfact-item">
                                        
                                    </div>
                                    <div className="tf-funfact-item">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>About Me</h1>
            </div>
        </section>
    )
}

export default About;