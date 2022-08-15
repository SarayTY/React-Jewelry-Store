const express = require("express");
const router = express.Router();
const {validateProductId} = require("../models/User");
const {Products} = require("../models/Products");
const {User} = require("../models/User");

const validateProductAndUser = async (req, res, next) => {
    try {
        const { error } = validateProductId(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        let user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(400).send('User was not found');
        }

        let product = await Products.findById(req.body.productId);
        if (!product) {
            return res.status(400).send('Product was not found');
        }
        next();

    }
    catch (err) {
        res.status(400).send(err.message);
    }
}

router.get('/:userId', async (req, res) => {
    try {
        let user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(400).send('User was not found');
        }

        res.send(user.products);
        }
    catch (err) {
        res.status(400).send(err.message);
    }
});

router.patch('/:userId/add-to-cart', validateProductAndUser, async (req, res) => {
    const { productId } = req.body;
    const userId = req.params.userId;

    let user = await User.findById(userId);

    const product = user.products.find((p) => p.id === productId);
    if (product) {
        await User.updateOne({ _id: userId, "products.id": productId }, { $inc: { "products.$.count": 1 } });
    }
    else {
        await user.updateOne({ $addToSet: { products: { id: productId, count: 1 } } });
    }

    user = await User.findById(userId);
    res.send(user.products);
});

router.patch('/:userId/remove-from-cart', validateProductAndUser, async (req, res) => {
    const { productId } = req.body;
    const userId = req.params.userId;

    let user = await User.findById(userId);

    const product = user.products.find((p) => p.id === productId);
    if (product) {
        await User.updateOne({ _id: userId }, { $inc: { "products.$[elem].count": -1 } }, { arrayFilters: [{ "elem.id": productId, "elem.count": { $gte: 2 } }] });
    }

    user = await User.findById(userId);
    res.send(user.products);
});

router.patch('/:userId/remove-all-from-cart', validateProductAndUser, async (req, res) => {
    const { productId } = req.body;
    const userId = req.params.userId;

    let user = await User.findById(userId);

    const product = user.products.find((p) => p.id === productId);
    if (product) {
        await User.updateOne({ _id: userId }, { $pull: { products: { id: productId } } });
    }

    user = await User.findById(userId);
    res.send(user.products);
});

router.patch('/:userId/clear', async (req, res) => {
    try {
        const { userId } = req.params;
        let user = await User.findById(userId);
        if (!user) {
            return res.status(400).send('User was not found');
        }

        await User.updateOne({ _id: userId }, { $set: { products: [] } });

        user = await User.findById(userId);
        res.send(user.products);
    }
    catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;