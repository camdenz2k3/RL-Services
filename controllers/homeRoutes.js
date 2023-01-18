import express from "express";
const router = express.Router();
import { user, order, product, service } from "../models/index.js";



router.get('/', async (req, res) => {
  try {
    const userData = await user.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/product", async (req, res) => {


  res.render("product", {
    
  })
})

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

export default router;
