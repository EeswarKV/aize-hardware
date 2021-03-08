import React from 'react';
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './product-list-styles.js';
import {connect} from 'react-redux';
import {addItem} from '../../../redux/cart/cart.actions';


const renderButtonText = () => {
    return(<span>Add to cart</span>);
}

const ProductList = ({productList=[], addItem}) => {
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
                    <div className={classes.cartbutton} size="large" color="secondary" onClick={()=>addItem(data)}>
                        {renderButtonText()}
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

const mapDispatchToProps = dispatch => ({
    addItem:item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(ProductList);

// export default ProductList;
