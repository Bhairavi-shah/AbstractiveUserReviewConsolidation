import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import swal from '@sweetalert/with-react'
const dataBase = require('./product_details (2).json');
let productId = "";
let image="";


class App extends Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  state={
    loading: true,
    asin:"",
    name:"",
    summary: null,
    rating: "",
    sentiment:"",
    picture:""
    
  };

  async handleClick () {
    const response = await fetch('/preprocess', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'product_id': productId }),
    })
    let data = await response.json();
    let Name="lets see";
    data = {summ:["lorem ipsom","lorem ipsum","lorem ipsum"],
            rating:4,
            sentiment:1};
    this.setState({summary:data.summ, name: Name, loading: false, asin:productId, rating:data.rating, sentiment:data.sentiment, picture:image});
//console.log(await response.json())
console.log("the summary text is", data);
for(var i=0;i<productDetails.length;i++){
  if(productDetails[i].asin==productId){
    this.state.name=productDetails[i].productName;
    this.state.picture=productDetails[i].img;
  }
}
console.log(this.state.name);
console.log(this.state.picture);
swal(
  
  <div id="wrapper">
  <div id="header"><h1>{this.state.name}</h1></div>
  <div id="left-sidebar">
    
    <div id="imageBody"><img id="pic" src={this.state.picture}></img></div>
  </div>
  <div id="content">
    <div id="inner-content">
      <ul>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
      </ul>
    </div>
  </div>
  <div id="footer"><h2>Rating:{this.state.rating}</h2></div>
</div>
)



  }

  render () {
    return(
      <div style={{ width: 300 }}>
      <Autocomplete
        id="product-name"
        options={productDetails}
        getOptionLabel={option => option.productName}
        renderInput={params => (
          <TextField {...params} label="Product Name" margin="normal" variant="outlined" />
        )}
        onChange={(event,value) => {
          productId = value.asin
          image = value.img
          console.log(productId)
          console.log(image)
        }
      }
      />

        <Button variant="outlined" onClick={this.handleClick}>Submit</Button>
        <div className="summaryText">
          {this.state.loading || !this.state.summary ? (<div></div> ) : (<div>{this.state.charat}</div>)}
       

        </div>
    </div>

    )
  }

}


// export default function FreeSolo() {
//   return (
//     <div style={{ width: 300 }}>
//       <Autocomplete
//         id="product-name"
//         options={productDetails}
//         getOptionLabel={option => option.productName}
//         renderInput={params => (
//           <TextField {...params} label="Product Name" margin="normal" variant="outlined" />
//         )}
//         onChange={(event,value) => productId = value.asin}
//       />

//     <Button variant="outlined" onClick={this.handleClick}>Submit</Button>

    
//     </div>

//   );
// }


const productDetails = dataBase["product_details"];

export default App