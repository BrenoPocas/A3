const database = require("../database");


class ModelOng {
    constructor() {
        this.model = database.db.define("ongs", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome_fantasia: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            cnpj: {
                type: database.db.Sequelize.BIGINT,
                allowNull: false,
                unique: true
            },
            estado: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            cidade: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            userId: {
                type: database.db.Sequelize.INTEGER,
                references: {
                    model: "users",
                    key: "id"
                }
            }
        })
    }
}

module.exports = new ModelOng().model