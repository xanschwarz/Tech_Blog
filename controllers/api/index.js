/*  ----------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------  TAKEN FROM AN ACTIVITY, HASN'T BEEN EDITED YET  ---------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------  */

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
