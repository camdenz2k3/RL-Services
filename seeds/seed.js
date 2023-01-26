import sequelize from "../config/connection.js";
import { user, product, service } from "../models/index.js";

import userData from "./userData.json" assert {type:"json"};
import productData from "./productData.json" assert {type:"json"};
import serviceData from "./serviceData.json" assert {type:"json"};

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await user.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const productSeedData = await product.bulkCreate(productData, {
    individualHooks: true,
    returning: true,
  });

  const serviceSeedData = await service.bulkCreate(serviceData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
