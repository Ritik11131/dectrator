import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Chip, Rating } from '@mui/material';

export default function ItemCard ({title,category,description,image,rating,price,showRating,showPrice}) {
 
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title={title || ''}
        subheader={category || ''}
      />
      <CardMedia
        component="img"
        height="200"
        image={image || ''}
        alt={image}
        style={{ objectFit: "contain", width: "100%" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {!description ? '' : (description?.slice(0,196) + '...')}
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex",justifyContent:"space-between"}}>
        { showRating&&<IconButton aria-label="add to favorites">
       <Rating name="read-only" value={rating?.rate} readOnly />
        </IconButton>}
        {showPrice&&<Chip label={`${price} $`} color="primary" variant="outlined" />}
      </CardActions>
    </Card>
  );
}