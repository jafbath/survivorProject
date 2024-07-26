const router = require('express').Router();
const { contestantCtrl } = require('../controllers')


router.get('/', contestantCtrl.getContestant)
router.post('/', contestantCtrl.createContestant)
router.put('/:id', contestantCtrl.updateContestant)
router.delete('/:id', contestantCtrl.deleteContestant)

module.exports = router;