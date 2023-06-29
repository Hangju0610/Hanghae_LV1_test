const express = require('express');
const Users = require('../schemas/users');
const Router = express.Router();

Router.get('/', async (req, res) => {
    try {
        const findList = await Users.find();
        const userList = findList.map((list) => {
            return {
                userId: list['_id'],
                name: list['name'],
                email: list['id'] + '@teamsparta.co',
                password: list['password'],
            };
        });
        res.status(200).json(userList);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: '회원목록 조회 실패' });
    }
});

Router.get('/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const findList = await Users.findOne({ _id: userId });
        const user = {
            userId: findList['_id'],
            name: findList['name'],
            email: findList['id'] + '@teamsparta.co',
            password: findList['password'],
        };
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: '회원 상세 정보 조회 실패' });
    }
});

module.exports = Router;
