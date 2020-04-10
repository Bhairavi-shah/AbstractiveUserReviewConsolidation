import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import swal from '@sweetalert/with-react'
import color from '@material-ui/core/colors/amber';
const dataBase = require('./product_details (2).json');
let productId = "";
let image="";
let sentimentImage="";
var colors="";
var ratingPercent =null;

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
    rating: null,
    sentiment:null,
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
    data = {summ:["lorem ipsom lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum"],
            rating:3.4,
            sentiment:0};
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
ratingPercent=(this.state.rating/5)*100+'%';
console.log(ratingPercent);
if(this.state.sentiment==0){
  sentimentImage=require("./images/down.png")}
else{
  sentimentImage=require("./images/up.png")
}
colors="blue";
if(this.state.rating>=0 && this.state.rating<1){
  colors="#f54542"
}
if(this.state.rating>=1 && this.state.rating<2){
  colors="#f5a005"
}
if(this.state.rating>=2 && this.state.rating<3){
  colors="#fadc0c"
}
if(this.state.rating>=3 && this.state.rating<4){
  colors="#cdd301"
}
if(this.state.rating>=4 && this.state.rating<=5){
  colors="#7ec900"
}



swal(
  
  <div id="wrapper"  style={{
    backgroundColor: colors,
  
  }}>

  <div id="header"><h3>{this.state.name}</h3></div>
  <div id="left-sidebar">
    
    <div id="imageBody"><img id="pic" src={this.state.picture}></img></div>
  </div>
  <div id="content" style={{
    backgroundColor: colors,
  
  }}>
    <div id="inner-content">
      <div>
      <div className="sentimentBody"><img id="sentimentPic" src={sentimentImage}></img></div>
        <div className="summBody"><p>{this.state.summary[0]}</p></div>
        
      </div>
     
    </div>
  </div>
  <div id="footer">
  <div className='rating_bar'>
   <div  className='rating' style={{width: ratingPercent}}>
    </div>
</div>
  </div>
</div>
)



  }

  render () {
    return(
      <div style={{ width: 300 }}>
      <Autocomplete
      
        id="product-name"
        className="autoClass"
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
        <div className="colorBarHolder"><img id="colorbar" src={require("./images/Untitledgradient.png")}></img></div>
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