import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { Box, Container, Grid, Typography } from '@material-ui/core';


const styles = (theme) => ({
  popoverPaper: {
    width: '90%',
    height: '80%',
    maxHeight: 'unset',
    left: '5% !important',
  },
});

const CustomizedMenu = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }


  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onMouseOver={handleClick}
        
        
      >
        Open Menu
      </Button>
      <Menu
      PopoverClasses={{paper: props.classes.popoverPaper}}
        id="customized-menu"
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom' }}
        transformOrigin={{ vertical: 'top' }}
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        onMouseOut={handleClose}
      >


      <Container>
        <Grid container spacing={2}>
          <Grid item>
          


          <Box sx={{display:'flex'}}> 
            <Box>
                <Typography variant='h6'>Arts & Crafts</Typography>
                <Typography variant='body2'>GPS & Guidance Equipment</Typography>
                <Typography variant='body2'>Livestock Supplies</Typography>
                <Typography variant='body2'>Other Agriculture & Forestry</Typography>
                <Typography variant='body2'>Wholesale Lots</Typography>
            </Box>

            <Box>
                <Typography variant='h6'>Furnitures And Elecronics</Typography>
                <Typography variant='body2'>GPS & Guidance Equipment</Typography>
                <Typography variant='body2'>Livestock Supplies</Typography>
                <Typography variant='body2'>Other Agriculture & Forestry</Typography>
                <Typography variant='body2'>Wholesale Lots</Typography>
            </Box>

            <Box>
                <Typography variant='h6'>Sports & Games</Typography>
                <Typography variant='body2'>GPS & Guidance Equipment</Typography>
                <Typography variant='body2'>Livestock Supplies</Typography>
                <Typography variant='body2'>Other Agriculture & Forestry</Typography>
                <Typography variant='body2'>Wholesale Lots</Typography>
            </Box>
             
            </Box> 
          </Grid>
       </Grid>
      </Container>
      
      

    
        
      </Menu>
    </div>
  );
  }

export default withStyles(styles)(CustomizedMenu);