const Show = require('../../models/show');

module.exports = {
    create,
    edit,
    delete: deleteMovie,
    addFav,
    removeFav,
    addWatch,
    removeWatch,
    viewFav,
    viewOwned,
    viewTrend,
    viewWatch,
    detail,
    addRating,
    removeRating,
    calcMEC,
};