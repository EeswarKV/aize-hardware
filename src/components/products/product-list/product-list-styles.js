import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    productlist:{display:'flex', flexWrap: 'wrap',marginTop:'220px', [theme.breakpoints.down(648)]:{marginTop: '170px'}},
    cardLayout: {
        padding:'10px', 
        flex: '0 0 21%',
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
    cartbutton:{
        color:'white',
        border:'1px solid grey',
        fontSize:'23px',
        padding:'5px',
        borderRadius:'5px',
        fontFamily:'KareliaWeb',
        fontWeight:'bold',
        cursor:'pointer',
        background:'#27aae1',
        marginLeft:'30%'
    }
    
  }));
  
  export default useStyles;