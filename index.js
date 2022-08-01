const express = require('express');
const request = require('request-promise');

const app = express();

const PORT = process.env.PORT || 5005;

const api_key = '27138293e69f51efa4f030e6b15abe73'

const baseURL = `http://api.scraperapi.com?api_key=${api_key}&autoparse=true`;


app.use(express.json());


app.get('/', (req,res) => {
    res.send('Welcome to Zaophos Amazon Scrapper API');
});

// Route to Get Product details
app.get('/products/:productId', async (req,res)=>{
    const {productId} = req.params;

    try{
        const response = await request(`${baseURL}&url=https://www.amazon.com/dp/${productId}`);
        res.json(JSON.parse(response));
        console.log(response);
    }catch(error){
        res.json(error);
    }
})

// Route to Get Product reviews
app.get('/products/:productId/reviews', async (req,res)=>{
    const {productId} = req.params;

    try{
        const response = await request(`${baseURL}&url=https://www.amazon.com/product-reviews/${productId}`);
        res.json(JSON.parse(response));
        console.log(response);
    }catch(error){
        res.json(error);
    }
})


// Route to Get Product offers
app.get('/products/:productId/offers', async (req,res)=>{
    const {productId} = req.params;

    try{
        const response = await request(`${baseURL}&url=https://www.amazon.com/gp/offer-listing/${productId}`);
        res.json(JSON.parse(response));
        console.log(response);
    }catch(error){
        res.json(error);
    }
})

// Route to Get Search Results
app.get('/search/:searchQuery', async (req,res)=>{
    const {searchQuery} = req.params;

    try{
        const response = await request(`${baseURL}&url=https://www.amazon.com/s?k=${searchQuery}`);
        res.json(JSON.parse(response));
        console.log(response);
    }catch(error){
        res.json(error);
    }
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));