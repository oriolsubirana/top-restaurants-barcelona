import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReceiptIcon from '@mui/icons-material/Receipt';

const fetchRestaurants = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export async function ListOfRestaurants() {
  const restaurants = await fetchRestaurants();

  return (
    <main>
      <Container sx={{ py: 8 }} maxWidth='md'>
        <Grid container spacing={4}>
          {restaurants.slice(0, 9).map((restaurant: IRestaurant) => (
            <Grid item key={restaurant.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component='div'
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image='https://source.unsplash.com/random?wallpapers'
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      top: '20%',
                      width: '100%',
                      color: 'white',
                      padding: '10px',
                    }}
                  >
                    <Typography variant='h4' align='center'>
                      Healthy Poke
                    </Typography>
                    <Typography variant='body2' align='center'>
                      Saludable
                    </Typography>
                  </Box>
                </Box>
                <CardContent>
                  <Typography
                    sx={{ display: 'flex', alignItems: 'center' }}
                    variant='h6'
                    component='h3'
                  >
                    <FavoriteBorderIcon />
                    1.5K
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
