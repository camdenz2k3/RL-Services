import User from "./user.js";
import order from "./order.js";
import product from "./product.js";
import service from "./service.js";

User.hasMany(order, {
    foreignKey: "user_id"
});
order.belongsTo(User, {
    foreignKey: "user_id"
});

order.hasMany(product, {
    foreignKey: "order_id"    
});
product.belongsTo(order, {
    foreignKey: "order_id"
});

order.hasMany(service, {
   foreignKey: "order_id" 
});
service.belongsTo(order, {
    foreignKey: "order_id"
});

export { User, order, product, service };
