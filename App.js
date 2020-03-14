import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
const data = require('./product_details.json');

export default function FreeSolo() {
  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        id="product-name"
        options={productDetails}
        getOptionLabel={option => option.productName}
        renderInput={params => (
          <TextField {...params} label="Product Name" margin="normal" variant="outlined" />
        )}
        onChange={(event,value) => console.log(value)}
      />
    </div>
  );
}

const productDetails = data["product_details"];