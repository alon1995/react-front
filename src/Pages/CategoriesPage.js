import React from 'react'
import { AppBar, Toolbar, Box, Typography, Button, CardHeader, Card, CardMedia, CardContent, CardActions} from '@mui/material'
import axios from 'axios'
import './CategoriesPage.css';

function CategoriesPage() {
  const [categories, setCategories] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [dishes, setDishes] = React.useState([]);

  React.useEffect(() => {
    fetchCategories();
  }, []);

  function fetchCategories() {
    axios.get('https://projectapi.blacktree-6e79657f.germanywestcentral.azurecontainerapps.io/categories/')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  function fetchDishes(categoryId) {
    const url = `https://projectapi.blacktree-6e79657f.germanywestcentral.azurecontainerapps.io/dishes?category_id=${categoryId}`;
  
    axios.get(url)
      .then(response => {
        setDishes(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div>
      <Box>
        <AppBar>
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontFamily: 'cursive' }}>
              Categories
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <br />
      <br />
      <div>
      <div className="categories-container">
      {categories.map(category => (
        <Card key={category.id} sx={{  width: '300px', right: '200px', marginTop: '20px' }}>
          <CardHeader title={category.name} />
          <CardMedia component="img" height="200" image={category.imageUrl} />
          <CardActions>
            <Button
              // ...
              onClick={() => {
                setSelectedCategory(category);
                fetchDishes(category.id); 
              }}
            >
              Show {category.name} Dishes
            </Button>
          </CardActions>
        </Card>
      ))}
      </div>
    </div>
      {selectedCategory && (
        <div>
          <Typography variant="h5" component="h2">
            {selectedCategory.name} Dishes
          </Typography>
          <div className="dishes-container">
          {Array.isArray(dishes) ? (
            dishes.map(dish => (
              <Card key={dish.id} sx={{ width: '300px', right: '200px', marginTop: '20px' }}>
                <CardHeader title={dish.name}/>
                <CardMedia component="img" height="200" image={dish.imageUrl} />
                <CardContent>
                  <div>
                    description: {dish.description}
                  </div>
                  <div>
                    price: {dish.price}$
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography variant="body1" color="text.secondary">
              No dishes available for this category.
            </Typography>
          )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoriesPage;


