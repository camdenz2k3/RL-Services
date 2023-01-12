import user from "./user";
import order from "./order";
import product from "./product";
import service from "./service";

User.hasMany(order, {

});
order.belongsTo(user, {

});

order.hasMany(product, {
    
});
product.belongsTo(order, {

})

order.hasMany(service, {
    
});
service.belongsTo(order, {

})

export { user, order, product, service };
