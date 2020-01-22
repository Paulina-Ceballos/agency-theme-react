import React from 'react';

export default ({ aboutLinks }) => {
 return(
    <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row">
        {aboutLinks && aboutLinks.map(({ imagen, date, title, description, clase }, index) => 
        <div className="col-lg-12">
          <ul className="timeline">
            <li className={ clase }>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src={ imagen }  alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>{ date }</h4>
                  <h4 className="subheading">{ title }</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">{ description }</p>
                </div>
              </div>
            </li>
          </ul>                 
        </div>
          )}
      </div>
    </div>
  </section>
 )
};