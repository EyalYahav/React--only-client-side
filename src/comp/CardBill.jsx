import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';

export default function CardBill({ bill, favs, moreInfo, handleClickForFavs }) {
  const navigate = useNavigate()
  let count = bill.finalWorth * 1000 * 1000
  let rank = `#` + bill.rank
  let name = rank + " " + bill.person.name
  return (
    <Card className="cardMain" sx={{ maxWidth: 200 }}>
      <CardMedia
        component="img"
        height="50%"
        image={bill.person.squareImage}
        alt={bill.person.name}
      />
      <div className='cardDiv'>

        <CardContent sx={{ padding: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {count.toLocaleString()}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => {
              handleClickForFavs(bill)
          }}>
            {favs.find(e=> e.person.name == bill.person.name) ? "Remove From Favorites" : "Add To Favorites"}
          </Button>
          <Button 
            size="small" 
            onClick={() => {
              navigate("/about")
              moreInfo(bill)

            }}>
            More
          </Button>
        </CardActions>
      </div>
    </Card>
  )
}