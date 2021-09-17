const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Initial get route just to check that it can render the dashboard.
router.get('/', async (req, res) => {
    try {
      res.render('dashboard', {});
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;