import express from "express";
const router = express.Router();
import { user } from '../../models';

router.post('/login', async (req, res) => {
  try {
    const userData = await user.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).send();
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post("/signup", async (req, res) => {
	try {
		const userData = await user.findOne({
			where: { email: req.body.email },
		});
		if (userData) {
			res.status(400).json({ message: "Email already exists" });
		}

		const newUserData = await user.create(req.body);
		const newUser = newUserData.get({ plain: true });
		req.session.save(() => {
			req.session.user_id = newUser.id;
			req.session.logged_in = true;
			res.json({ user: newUser, message: "You are now logged in!" });
		});
	} catch (err) {
		res.status(400).send();
	}
});

export default router;
