import sequelize from "../config/connection.js";
import { User, orderInfo, orderOptions } from "../models/index.js";

import userData from "./userData.json" assert {type:"json"};
import orderData from "./orderData.json" assert {type:"json"};
import orderOptionsData from "./orderOptionsData.json" assert {type:"json"};

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const orderOptionSeedData = await orderOptions.bulkCreate(orderOptionsData, {
    individualHooks: true,
    returning: true,
  });

  for (const orderinfo of orderData) {
    await orderInfo.create({
      ...orderinfo,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    })
  }

  process.exit(0);
};

seedDatabase();
