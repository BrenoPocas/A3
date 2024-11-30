const database = require("../database");
const voluntary = require("./voluntary")
const ong = require("./ong")


class ModelUser {
    constructor(){
        this.model = database.db.define("users", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            email: {
                type: database.db.Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            }
        })

        this.model.hasOne(voluntary, {
            foreignKey: "userId"
        })

        this.model.hasOne(ong, {
            foreignKey: "userId"
        })

        voluntary.belongsTo(this.model, {
            foreignKey: "userId"
        })
        
        ong.belongsTo(this.model, {
            foreignKey: "userId"
        })  
    }
}

module.exports = new ModelUser().model