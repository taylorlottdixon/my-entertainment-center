const Actor = require('../../models/actor');

module.exports = {
    index,
    show,
    // create,
    // edit,
    // delete: deleteMovie,
    // addFav,
    // removeFav,
    // detail,
    // viewFav,
};

async function index(req, res) {
    const actors = await Actor.find({}).sort('name').exec();
    // re-sort based upon the sortOrder of the populated categories
    res.json(actors);
}
  
async function show(req, res) {
    const actor = await Actor.findById(req.params.id);
    res.json(actor);
}