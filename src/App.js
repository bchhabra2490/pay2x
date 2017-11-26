import React, { Component } from 'react';
import './App.css';
import {Carousel, FormControl, FormGroup, Button,Table} from 'react-bootstrap';
import axios from 'axios';


class CustomCarousel extends Component{
  render(){
    console.log(this.props.images);
    let carousalItem = [];
    this.props.images.split(',').map(function(image,i){
      carousalItem.push(<Carousel.Item key={i}>
        <img width={900} height={500} alt="900x500" src={'/assets/'+image} style = {{width:400,height:300}}  />
      </Carousel.Item>)
    });

    return(
      <Carousel className="col-xs-12 col-md-4 col-sm-6 col-lg-4 ">
        {carousalItem}
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
            <td>{this.props.detail.id}</td>
          </tr>
          <tr>
            <td>Product Name</td>
            <td>{this.props.detail.name}</td>
          </tr>
          <tr>
            <td>Company Name</td>
            <td>{this.props.detail.company_name}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>{this.props.detail.price}</td>
          </tr>
          <tr>
            <td>Rating</td>
            <td>{this.props.detail.rating}/5</td>
          </tr>
          </tbody>
        </Table>
        <div>
          <h4>Product Description</h4>
          <p style={{textAlign:'Justify'}} className = "col-lg-12 col-md-12">{this.props.detail.desc}</p>
        </div>
        </div>
      </div>
    )
  }
}

class ReviewForm extends Component{


  submitForm(e){
    e.preventDefault();

    var productid = 1;
    var rating = window.document.getElementById('rating').value;
    var review = window.document.getElementById('review').value;
    if(0<=rating<=5){
      const url = 'https://internship-pay2x.herokuapp.com';
      axios.post(url+'/api/post/reviews',{
        productid:productid,
        desc:review,
        rating:rating
      }).then(function(response){
        console.log(response);
        alert('Submitted');
      }).catch(function(error){
        console.log(error);
      });
    }else{
      alert('Rating has to be 0 and 5.')
    }
  }

  render(){
    return(
        <form className="col-xs-12 col-md-6 col-sm-6 col-lg-6" onSubmit = {this.submitForm.bind(this)}>
          <FormGroup>
            <FormControl type="text" id="rating" placeholder = "Rating" style={{background:'black',color:'white'}}/>
          </FormGroup>
          <FormGroup>
            <FormControl componentClass="textarea" id="review" placeholder="Write your review" style={{background:'black',color:'white'}} rows="10"/>
          </FormGroup>
          <Button type="submit" className = "btn btn-primary">
            Submit
          </Button>
        </form> 
    )
  }
}

class CustomReview extends Component{
  render(){
    let reviewList = [];
    this.props.reviews.map(function(review,i){
      reviewList.push(<li key={i}>
        <h5>Rating - {review.rating}/5</h5>
        <p>Review:-{review.review}</p>
      </li>)
    });
    return(
      <div style={{overflowY:'scroll',maxHeight:200}}>
        <ul style={{textAlign:'Left',listStyleType:'None'}}>
          {reviewList}
      </ul>
    </div>
    )
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      products:{},
      isLoading:true,
      reviews:[],
      isreviews:true
    }
    const url = 'https://internship-pay2x.herokuapp.com';
    axios.get(url+'/api/products/1').then((response)=>{
      console.log(response.data.response[0])
      this.setState({
        products:response.data.response[0],
        isLoading:false
      })
    }).catch(function(error){
      console.log(error);
    })
    axios.get(url+'/api/reviews/1').then((response)=>{
      console.log(response.data.response[0])
      this.setState({
        reviews:response.data.response,
        isreviews:false
      })
    }).catch(function(error){
      console.log(error);
    });
  }
  render() {
    return (
      <div className="App">
        <div>
          <div className = "row">
          {!this.state.isLoading && <CustomCarousel images = {this.state.products.images}/>}
          {!this.state.isLoading && <DetailTable detail = {this.state.products} />}
          </div>
          <div style={{marginTop:20}} className="container">
            <hr/>
            <h4 style={{textAlign:'Left'}}>Customer Reviews</h4>
            {!this.state.isreviews && <CustomReview reviews = {this.state.reviews} />}
            <hr/>
            <ReviewForm/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
