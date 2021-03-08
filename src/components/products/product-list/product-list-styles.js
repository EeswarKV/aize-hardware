import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({

    productlist:{display:'flex', flexWrap: 'wrap',marginTop:'220px', [theme.breakpoints.down(648)]:{marginTop: '170px'}},
    cardLayout: {
        padding:'10px', 
        flex: '1 0 21%',
        [theme.breakpoints.down(648)]:{flex: '1 0 50%', padding:'10px'},
        margin: '5px',
        padding:'30px'
    },
    root: {
      maxWidth: 345,
      backgroundColor:'whitesmoke'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    cartbutton:{
        color:'red',
        border:'1px solid grey',
        fontSize:'23px',
        padding:'5px',
        borderRadius:'5px',
        fontFamily:'KareliaWeb',
        fontWeight:'bold',
        cursor:'pointer'
    }
    
  }));
  
  export default useStyles;