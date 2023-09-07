// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Movie = require('./models/movie');
const Show = require('./models/show');
const Actor = require('./models/actor');
// const Category = require('./models/category');
// const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, movie, show, actor;
let users, movies, shows, actors;