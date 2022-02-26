import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

export default function CardAbout({ bill, favs, handleClickForFavs }) {
    const location = useLocation()
    const navigate = useNavigate()
    let count = bill.finalWorth * 1000 * 1000
    let rank = `#` + bill.rank
    let info = bill.bios
    let name = rank + " " + bill.person.name
    return (
        <Card className="cardAbout" sx={{ maxWidth: 600 }}>
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
                        {
                            info
                        }
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => {
                        handleClickForFavs(bill)
                    }}>
                        {favs.find(e => e.person.name == bill.person.name) ? "Remove From Favorites" : "Add To Favorites"}
                    </Button>
                    <Button size="small" onClick={() => {
                        navigate("/");

                    }}>Back</Button>
                </CardActions>
            </div>
        </Card>
    );
}