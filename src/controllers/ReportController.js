const { Op } = require('sequelize')
const User = require('../models/User')

module.exports = {
    async show(_, res) {
        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.like]: '%@gmail.com'
                }
            },
            include: [
                {
                    association: 'addresses',
                    where: {
                        street: 'Rua teste'
                    }
                },
                {
                    association: 'techs',
                    required: false,
                    where: {
                        name: {
                            [Op.like]: 'Node%'
                        }
                    }
                }
            ]
        })

        return res.json(users)
    }
}
