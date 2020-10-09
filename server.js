if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const galleryRouter = require('./routes/gallery');
const contactRouter = require('./routes/contact');
const cartRouter = require('./routes/cart');
const shopDetailRouter = require('./routes/shopDetail');
const checkoutRouter = require('./routes/checkout');
const myaccountRouter = require('./routes/myaccount');
const sidebarRouter = require('./routes/sidebar');
const wishlistRouter = require('./routes/wishlist');
const newsletterRouter = require('./routes/newsletter');
const userRouter = require('./routes/user');


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout','layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));


const mongoose = require('mongoose');
const { use } = require('./routes/index');
mongoose.connect(process.env.DATABASE_URL, { 
useNewUrlParser: true , useUnifiedTopology: true , useCreateIndex: true });
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));



app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/gallery', galleryRouter);
app.use('/contact', contactRouter);
app.use('/cart', cartRouter);
app.use('/shopDetail', shopDetailRouter);
app.use('/checkout', checkoutRouter);
app.use('/myaccount', myaccountRouter);
app.use('/sidebar', sidebarRouter);
app.use('/wishlist', wishlistRouter);
app.use('/newsletter', newsletterRouter);
app.use('/user', userRouter);

app.listen(process.env.PORT || 5000);