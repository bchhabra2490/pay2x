import React, { Component } from 'react';
import './App.css';
import {Carousel, FormControl, FormGroup, Button} from 'react-bootstrap';

class CustomCarousel extends Component{
  render(){
    return(
      <Carousel>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="/assets/image1.png" style = {{width:400,height:300}}  />
        {/* <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="/assets/image2.png" style = {{width:400,height:300}}/>
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="/assets/image2.png"style = {{width:400,height:300}}/>
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    )
  }
}

class ReviewForm extends Component{
  render(){
    return(
      <form>
        <FormGroup>
          <FormControl type="text" id="filter" placeholder = "Rating" style={{background:'black',color:'white'}}/>
        </FormGroup>
        <FormGroup>
          <FormControl componentClass="textarea" placeholder="Write your review" style={{background:'black',color:'white'}} />
        </FormGroup>
        <Button type="submit" className = "btn btn-primary">
          Submit
        </Button>
      </form> 
    )
  }
}

class Details extends Component{
  render(){
    return(
      <div>
        <div>
          <h2>Hello World</h2>
          <h3>Company Name</h3>
          <br/>
          <h6>Price</h6>
          <h4>Rs 12000</h4>
          <br/>
          <h5>Product Quality:Excellent</h5>
          <br/>
          <h4>Product Id</h4>
          <h4>1</h4>
          <br/>
          <h4>Product Ratings</h4>
          <h5>4.4/5</h5>
          <h4><u>Detailed Description</u></h4>
          <h5>Good Product</h5>
          <h4><u>Reviews</u></h4>
          <h5>Good Product</h5>
        </div>
        <ReviewForm />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="col-xs-12 col-md-4 col-sm-6 col-lg-4 col-sm-offset-3 col-md-offset-4 col-lg-offset-4">
          <CustomCarousel />
          <Details />
        </div>
        
      </div>
    );
  }
}

export default App;
