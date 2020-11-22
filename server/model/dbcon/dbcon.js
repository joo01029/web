const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'webproject',
  'root',
  'pure6671',
  {
    'host':'localhost',
    'dialect':'mysql'
  }
);

const user = require('./user');

module.exports = {
  User: user(sequelize, Sequelize)
}

sequelize.sync()
    .then(()=>{
      console.log('database sync')
    })
    .catch((err)=>{
      console.log(err)
    })