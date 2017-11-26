import React, { Component } from 'react';
import './App.css';
import {Carousel, FormControl, FormGroup, Button,Table} from 'react-bootstrap';

class CustomCarousel extends Component{
  render(){
    return(
      <Carousel className="col-xs-12 col-md-4 col-sm-6 col-lg-4 ">
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

class DetailTable extends Component{
  render(){
    return(
      <div>
        <div style = {{marginTop:10}} className="col-xs-12 col-md-8 col-sm-6 col-lg-8" >
        <Table striped bordered hover>
          <tbody>
          <tr>
            <td>Product Id</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Product Name</td>
            <td>Product Name</td>
          </tr>
          <tr>
            <td>Company Name</td>
            <td>Company Name</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>Rs 12000</td>
          </tr>
          <tr>
            <td>Rating</td>
            <td>4/5</td>
          </tr>
          </tbody>
        </Table>
        <div>
          <h4>Product Description</h4>
          <p style={{textAlign:'Justify'}} className = "col-lg-12 col-md-12">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        </div>
      </div>
    )
  }
}

class ReviewForm extends Component{
  render(){
    return(
        <form className="col-xs-12 col-md-6 col-sm-6 col-lg-6 ">
          <FormGroup>
            <FormControl type="text" id="filter" placeholder = "Rating" style={{background:'black',color:'white'}}/>
          </FormGroup>
          <FormGroup>
            <FormControl componentClass="textarea" placeholder="Write your review" style={{background:'black',color:'white'}} rows="10"/>
          </FormGroup>
          <Button type="submit" className = "btn btn-primary">
            Submit
          </Button>
        </form> 
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <div className = "row">
          <CustomCarousel />
          <DetailTable />
          </div>
          <div style={{marginTop:20}} className="container">
            <hr/>
            <h4 style={{textAlign:'Left'}}>Customer Reviews</h4>
            <div style={{overflowY:'scroll',maxHeight:200}}>
              <ul style={{textAlign:'Left',listStyleType:'None'}}>
                <li>
                  <h4>Rating</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc</p>
                </li>
              </ul>
            </div>
            <hr/>
            <ReviewForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
