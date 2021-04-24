import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from "react-bootstrap"
import NavigationBar from './components/navbar'
import Section from './components/section1'

function App() {
  return (
  <div>
   <NavigationBar/>
   <div class="container">
<div class="icon"><img src="https://www.docplanner.com/img/sygnet.png"/></div>
<div className="myH"><h1>Making the healthcare experience more humens</h1></div>
<div className="parag"><p id="p1">We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.</p>
<p id="p2">We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.</p>
</div>

<div className="container card-gr animate__bounceOut">

<Card id="c-one"style={{ width: '18rem' }}>
  <Card.Body>
    <img src="https://www.docplanner.com/icons/icon-patients.svg"/>
    <Card.Title>For patients</Card.Title>
   
    <Card.Text class="card-t">
    Find a doctor, book a visit and solve any health-related doubt

    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
<Card id="c-tow" style={{ width: '18rem' }}>
  <Card.Body>
    <img src="https://www.docplanner.com/icons/icon-doctors.svg"/>
    <Card.Title>For doctors</Card.Title>
    
    <Card.Text class="card-t">
    Save time managing visits and cut no-shows by half
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
<Card id="c-three"style={{ width: '18rem' }}>
  
  <Card.Body>
  <img src="https://www.docplanner.com/icons/icon-clinics.svg"/>
    <Card.Title>For clinics</Card.Title>
   
    <Card.Text class="card-t">
    Deliver an exceptional patient experience in your clinic
    </Card.Text>
    
   
  </Card.Body>
</Card>
</div>
<div class="partners-logo ">
<div className="glob ">
<h2>We are a global company
with local culture</h2></div>
             <div className="par ">
               <ul>
                 <li><img src="images/par1.png"></img></li>
                 <li><img src="images/par2.svg"></img></li>
                 <li><img src="images/par3.png"></img></li>
                 <li><img src="images/par4.png"></img></li>
                 <li><img src="images/par5.png"></img></li>
                 <li><img src="images/par6.png"></img></li>
                 <li><img src="images/par8.png"></img></li>
               </ul>
               </div>
           </div>

</div>
<Section/>

</div>


  );
}

export default App;

