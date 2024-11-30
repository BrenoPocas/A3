const database = require("../database");


class ModelVoluntary {
    constructor() {
        this.model = database.db.define("voluntaries", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome_completo: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            cpf: {
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

module.exports = new ModelVoluntary().model