import express from "express";
const router = express.Router();
import { User, order, orderOptions } from "../models/index.js";



router.get('/', async (req, res) => {
  try {

    res.render('homepage', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/product", async (req, res) => {
  try {

  res.render("product", {
    logged_in: req.session.logged_in,
  });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/service", async (req, res) => {
  try {

  res.render("service", {
    logged_in: req.session.logged_in,
  });
} catch (err) {
  res.status(500).json(err);
}
});

router.get("/createorder", async (req, res) => {
  try {
    let user = await User.findOne({
      where: {
        id: req.session.user_id
      }
    })
    user = user.get({ plain: true })

    res.render("createorder", {
      user,
      logged_in: req.session.logged_in,
    })
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get("/vieworders", async (req, res) => {
  try {
    let user = await User.findOne({
      where: {
        id: req.session.user_id
      }
    })
    user = user.get({ plain: true })
    
  res.render("vieworders", {
    logged_in: req.session.logged_in,
  });
} catch (err) {
  res.status(500).json(err);
}
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

export default router;
