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
ratingPercent=(this.state.rating/5)*100+'%';
console.log(ratingPercent);
if(this.state.sentiment==0){
  sentimentImage="data:image/jpeg;base64,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"
}
else{
  sentimentImage="data:image/jpeg;base64,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"

}
colors="blue";
if(this.state.rating>=0 && this.state.rating<1){
  colors="#f54542"
}
if(this.state.rating>=1 && this.state.rating<2){
  colors="#fffb00"
}
if(this.state.rating>=2 && this.state.rating<3){
  colors="#00ff0d"
}
if(this.state.rating>=3 && this.state.rating<4){
  colors="#00f7ff"
}
if(this.state.rating>=4 && this.state.rating<5){
  colors="#0011ff"
}
if(this.state.rating==5){
  colors="#ff00e1"
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
        <div><p>{this.state.summary[0]}</p></div>
        
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