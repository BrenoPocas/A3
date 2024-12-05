const database = require("../database");
const ong = require("./ong");

class ModelAction {
  constructor() {
    this.model = database.db.define("actions", {
      id: {
        type: database.db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: database.db.Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: database.db.Sequelize.TEXT,
        allowNull: false,
      },
      location: {
        type: database.db.Sequelize.STRING,
        allowNull: false,
      },
      date: {
        type: database.db.Sequelize.DATE,
        allowNull: false,
      },
      ongId: {
        type: database.db.Sequelize.INTEGER,
        references: {
          model: "ongs",
          key: "id",
        },
      },
    });

    this.model.belongsTo(ong, {
      foreignKey: "ongId",
    });
    ong.hasMany(this.model, {
      foreignKey: "ongId",
    });
  }
}

module.exports = new ModelAction().model;
