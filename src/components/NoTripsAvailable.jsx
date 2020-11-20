import { Avatar, Card, CardContent, CardHeader, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";
import { portrait9 } from './images/images';
const NoTripsAvailable = ({formatedDate}) => {
    const useStyles = makeStyles((theme) => ({
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
        backgroundSize: 'cover',
        width: '50%',
        height: '50%'
      },
      margin: {
        margin: '2rem',
        minWidth: '30vw',
        maxWidth: '45vw',
      },
      root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }));

    const classes = useStyles();


  return (
    <Grid className={classes.margin} item xs={12}>
      <Card className={classes.root} display="flex" justifyContent="center">
        
            <Avatar aria-label="recipe" src={portrait9} className={classes.avatar} />
          
        <CardContent>
          <Typography variant="body2" color="textPrimary" component="p">
             {formatedDate}Sorry, but it looks like there are no carriages available for this trip yet ! Maybe next century...
        </Typography>
        </CardContent>
      </Card>
    </Grid>
   );
}
 
export default NoTripsAvailable;