import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Footer from './components/Footer';
import Contact from './components/Contact';


function App() {
  const aboutLinks = [
    {
      imagen: "https://blackrockdigital.github.io/startbootstrap-agency/img/about/1.jpg",
      title: "Our Humble Beginnings",
      date:'2009-2011',
      Description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
      clase:''
    },
    {
      imagen: "https://blackrockdigital.github.io/startbootstrap-agency/img/about/2.jpg",
      title: "An Agency is Born",
      date:'March 2011',
      Description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
      clase:'timeline-inverted'
    },
    {
      imagen: "https://blackrockdigital.github.io/startbootstrap-agency/img/about/3.jpg",
      title: "Transition to Full Service",
      date:'December 2012',
      Description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
      clase:''
    },
    {
      imagen: "https://blackrockdigital.github.io/startbootstrap-agency/img/about/4.jpg",
      title: "Phase Two Expansion",
      date:'July 2014',
      Description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
      clase:'timeline-inverted'
    }
  ]


  const portfolioLinks = [
    {
      title: 'Thread',
      caption: 'Illustrations',
      imagen: "https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/01-thumbnail.jpg"
    },
    {
      title: 'Explore',
      caption: 'Graphic Design',
      imagen: 'https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/02-thumbnail.jpg'
    },
    {
      title: 'Finish',
      caption: 'Identity',
      imagen: 'https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/03-thumbnail.jpg'
    },
    {
      title: 'Lines',
      caption: 'Branding',
      imagen:'https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/04-thumbnail.jpg'
    },
    {
      title: 'Southwest',
      caption: 'Website Design',
      imagen:'https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/05-thumbnail.jpg'

    },
    {
      title: 'Window',
      caption: 'Photography',
      imagen:'https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/06-thumbnail.jpg'
    }
  ]
  const servicesLinks = [
    {
      icon : 'fa fa-shopping-cart fa-stack-1x fa-inverse',
      title: 'E-Commerce',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
    },
    {
      icon: 'fa fa-laptop fa-stack-1x fa-inverse',
      title: 'Responsive Design',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'
    },
    {
      icon: 'fa fa-lock fa-stack-1x fa-inverse',
      title: 'Web Security',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'
    }
  ]
  const teamLinks = [
    {
      photo:'https://blackrockdigital.github.io/startbootstrap-agency/img/team/1.jpg',
      name:'Kay Garland',
      jobposition: 'Lead Designer',
      twitter:'https://twitter.com/LaNegr4',
      facebook:'',
      linkedin: 'https://www.linkedin.com/in/paulinaceballos/'
    },
    {
      photo:'https://blackrockdigital.github.io/startbootstrap-agency/img/team/2.jpg',
      name:'Larry Parker',
      jobposition: 'Lead Marketer',
      twitter:'',
      facebook:'',
      linkedin: ''
    },
    {
      photo:'https://blackrockdigital.github.io/startbootstrap-agency/img/team/3.jpg',
      name:'Diana Pertersen',
      jobposition: 'Lead Developer',
      twitter:'',
      facebook:'',
      linkedin: ''
    }
  ]


  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <Services servicesLinks ={ servicesLinks }>></Services>
      <About aboutLinks ={ aboutLinks }></About>
      <Portfolio portfolioLinks ={ portfolioLinks }></Portfolio>
      <Team teamLinks ={ teamLinks }></Team>
      <Contact></Contact>  
      <Footer></Footer>
    </div>
  );
}

export default App
