import express from "express";
const router = express.Router();
import { user, order, product, service } from "../models/index.js";


router.get('/', async (req, res) => {
  console.log('homeroutes present');

  try {
      const userData = await user.findAll({
          include: [{ model: user }],
      });

      const user = userData.map(run =>  run.get({ plain: true }));

      console.log(user)
      res.render('homepage',
          {
              user,
              logged_in: req.session.logged_in,
          });
  } catch (error) {
      res.status(500).json(error.message)
  }
});

router.get('/login', async (req, res) => {
  if (req.session.logged_in) {
      res.redirect('/');
      return;
  }
  res.render('login')
});

// router.get('/', async (req, res) => {
//   try {
//     const userData = await user.findAll({
//       attributes: { exclude: ['password'] },
//       order: [['name', 'ASC']],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));
//   console.log(userData)
//     res.render('homepage', {
//       users,
//       logged_in: req.session.logged_in,
//       message: "heres message",
//       userId: userData.email
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


router.get("/product", async (req, res) => {


  res.render("product", {

  })
})

router.get("/service", async (req, res) => {


  res.render("service", {
    
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
