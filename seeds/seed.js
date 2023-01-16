import sequelize from "../config/connection";
import { user, product, service } from "../models";

import userData from "./userData.json";
import productData from "./productData.json";
import serviceData from "./serviceData.json";

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await user.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const productData = await product.bulkCreate(productData, {
    individualHooks: true,
    returning: true,
  });

  const serviceData = await service.bulkCreate(serviceData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
