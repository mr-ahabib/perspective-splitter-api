const User = require('./user.model');
const Perspective = require('./perspective.model');
const Perspective_Bid=require('./perspectivebid.model');
// Define association 

User.hasMany(Perspective, { foreignKey: 'user_email', sourceKey: 'email' });
Perspective.belongsTo(User, { foreignKey: 'user_email', targetKey: 'email' });
Perspective.hasMany(Perspective_Bid, { foreignKey: 'pers_id', sourceKey: 'id' });
Perspective_Bid.belongsTo(Perspective,{foreignKey:'pers_id', targetKey:'id'});
Perspective_Bid.belongsTo(User,{foreignKey:'user_email', targetKey:'email'});

module.exports = { User, Perspective,Perspective_Bid };
