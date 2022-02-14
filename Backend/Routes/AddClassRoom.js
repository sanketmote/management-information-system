const Express = require('../ServiceHost').Express;
const DatabaseRepository = require('../MySqlDb/MySqlDBrepository');
const classroom = require('../Models/classroom')

const router = Express.Router();

router.post('/', async (req, res, next) => {
    try {
        res.statuscode(200).send(req.body);
    } catch (err) {
        res.statuscode(500).send(err);
    }
});

module.exports = router;