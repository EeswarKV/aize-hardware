import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import useStyles from './product-list-styles.js';
import {connect} from 'react-redux';
import {addItem} from '../../../redux/cart/cart.actions';

//generates the list of products as a card layouts
//recieves inouts productlist from search and additem from redux
const ProductList = ({productList=[], addItem}) => {

  //use the styles for material ui
  const classes = useStyles();

  return (
    <div className={classes.productlist}>
    { productList.map((data) => {
        if (data) {
          return (
            <div className={classes.cardLayout} key={data.index}>
            <Card className={classes.root}>
                  <CardHeader
                    title={data.name}
                  />
                  <CardMedia 
                    image={data.defaultImage}
                    className={classes.media}
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {data.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <div className={classes.cartbutton} size="large" color="secondary" onClick={()=>addItem(data)} >
                    <span>Add to cart</span>
                    </div>
                  </CardActions>
                </Card>
            </div>
    	   )	
    	 }
    	 return null;
    }) }
    </div>
  );
}

//add the item to redux when click on add to cart 
const mapDispatchToProps = dispatch => ({
    addItem:item => dispatch(addItem(item))
})

//connect the component to redux state
export default connect(null,mapDispatchToProps)(ProductList);