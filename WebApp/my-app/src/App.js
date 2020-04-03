import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button'
const data = require('./product_details (2).json');
let productId = "";



class App extends Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  state={
    loading: true,
    summary: null,
    charat: "",
  };

  async handleClick () {
    const response = await fetch('/preprocess', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'product_id': productId }),
    })
    const data = await response.json();

    this.setState({summary:data, loading: false, charat:data.Sentiment[0]});
//console.log(await response.json())
console.log("the summary text is", data);



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
          console.log(productId)
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


const productDetails = data["product_details"];

export default App