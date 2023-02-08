import express from "express";
const router = express.Router();
import { orderInfo, User, orderOptions } from "../../models/index.js"

router.post("/", async (req, res) => {
    try {
        const newOrder =await orderInfo.create({
            name: req.body.name,
            orderoptions_id: 1,
            user_id: req.session.user_id
        })
        res.status(200).json(newOrder)
    } catch (err) {
		res.status(400).json(err)
	}
})

router.put('/:id', async (req, res) => {
    try {
        const updatedOrder = await orderInfo.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(updatedOrder)
    } catch (err) {
        res.status(400).json(err);
    }
})

router.get('/vieworders', async (req, res) => {
    try{ 
      let findOrders = await orderInfo.findAll({ include: [orderOptions, User]});
      findOrders = findOrders.map(newOrder=> {
        return {
            ...newOrder.get({ plain: true })
        }
      })
      res.render('vieworders', {
        findOrders
      });
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  });
  
  router.get('/:id', async (req, res) => {
      try {
          const oneOrder = await Category.findOne({
        where: {
          id: req.params.id,
        },
        include: [User, orderOptions]
      })
          res.json(oneOrder)
      } catch(err) {
          console.log(err);
          res.status(500).json(err);
      }
  });

export default router;