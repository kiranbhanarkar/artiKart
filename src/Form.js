import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useStateValue } from './ContextProvider';
import { Link, useHistory } from "react-router-dom";
import './form.css'
// import { useDispatch, useSelector } from 'react-redux';
// import { saveUser } from './redux/action';

function Form() {
  const [{ form, user }, dispatch] = useStateValue();
  const history = useHistory();
  // const user = useSelector((store) => store.user)
  // const dispatch = useDispatch()
    const [productInfo, setProductInfo] = useState({
        title: "",
        image: "",
        rating: "",
        price: '',
      });
    const submit = (event) =>{
        event.preventDefault();
        console.log(productInfo);
        console.log(form);

        dispatch({
          type: "ADD_TO_FORM",
          item: {
              title: productInfo.title,
              image: productInfo.image,
              price: parseInt(productInfo.price),
              rating: productInfo.rating,
          },
      });
      history.push('/')

      // dispatch(saveUser(productInfo))
      // console.log(user.title)
    }
  return (
    <div>
      {!user ? <h1 style={{margin:"40px 35% auto", marginLeft:"50px auto"}}>Please Login to Sell your Products</h1> : 
        <form  style={{margin:"40px 25% auto", marginLeft:"50px auto", display: 'flex', flexDirection: 'column', columnGap:'20px'}}>
        <h2>Product Form</h2><br></br>
        <h3>Hello {!user ? 'Guest' : user.email}</h3><br></br>

        <TextField id="outlined-basic" label="Seller Name" variant="outlined"></TextField><br></br>
        <TextField id="outlined-basic" label="Title" name='title' onChange={(e) => setProductInfo({...productInfo, title: e.target.value})} value={productInfo.title} variant="outlined" /><br></br>
        <TextField id="outlined-basic" label="Image Link" variant="outlined" onChange={(e) => setProductInfo({...productInfo, image: e.target.value})} value={productInfo.image}/><br></br>
        {/* <TextField id="outlined-basic" label="Rating" variant="outlined" onChange={(e) => setProductInfo({...productInfo, rating: e.target.value})} value={productInfo.rating}/><br></br> */}
        <TextField id="outlined-basic" label="Price" variant="outlined" onChange={(e) => setProductInfo({...productInfo, price: e.target.value})} value={productInfo.price}/><br></br>
        <Button onClick={submit} variant="contained" style={{backgroundColor:'rgb(229, 1, 14)', color:'pink'}}>Add Product</Button>
        </form>
       }
    </div>
  )
}

export default Form