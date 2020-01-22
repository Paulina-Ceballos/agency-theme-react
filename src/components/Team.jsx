import React from 'react';

export default({ teamLinks }) => {
    return (
        <section className="bg-light page-section" id="team">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div className="row">
                { 
                    teamLinks && teamLinks.map(({ photo, name, jobposition, twitter, facebook, linkedin}, index) => 
                    <div className="col-sm-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={ photo }  alt="" />
                            <h4>{ name }</h4>
                            <p className="text-muted">{ jobposition }</p>
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <a href={ twitter }>
                                    <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href= { facebook }>
                                    <i className="fa fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={ linkedin}>
                                    <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    )
                }
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                    <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                    </div>
                </div>
            </div>
        </section>
    )
};