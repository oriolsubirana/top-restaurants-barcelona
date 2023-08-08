import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styles from './ListOfRestaurants.module.css';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

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
          {restaurants.slice(0, 27).map((restaurant: IRestaurant) => (
            <Grid item key={restaurant.id} xs={12} sm={6} md={4}>
              <Card className={styles.card}>
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    sx={{
                      pt: '56.25%',
                    }}
                    image='https://source.unsplash.com/random?wallpapers'
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      top: '30%',
                      width: '100%',
                      color: 'white',
                      padding: '10px',
                    }}
                  >
                    <Typography variant='h4' align='center'>
                      Healthy Poke
                    </Typography>
                    <Typography variant='body2' align='center'>
                      Healthy
                    </Typography>
                  </Box>
                </Box>
                <CardContent className={styles.cardContent}>
                  <div className={styles.rating}>
                    <ThumbUpOffAltIcon fontSize='medium' />
                    <span className={styles.ratingLabel}>300</span>
                  </div>
                  <div className={styles.topPrice}>
                    <div className={styles.top}>
                      <div className={styles.topInfo}>TOP HEALTHY</div>
                    </div>
                    <div className={styles.price}>
                      <div className={styles.priceInfo}>€€</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
