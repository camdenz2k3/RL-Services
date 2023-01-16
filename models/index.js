import user from "./user";
import order from "./order";
import product from "./product";
import service from "./service";

user.hasMany(order, {
    foreignKey: "user_id"
});
order.belongsTo(user, {
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

export { user, order, product, service };
