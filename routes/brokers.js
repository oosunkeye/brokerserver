const router = require("express").Router();
let Broker = require("../models/broker.model");

router.route("/").get((req, res) => {
	Broker.find()
		.then((brokers) => res.json(brokers))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/test").get((req, res) => {
	res.send("brokers");
	console.log("broker");
});

router.route("/testpost").post((req, res) => {
	// console.log(userInfo);
	res.send(req.body.address);
});

router.route("/add").post((req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const phone = req.body.phone;
	const address = req.body.address;

	const newBroker = new Broker({
		name,
		email,
		phone,
		address,
	});

	newBroker
		.save()
		.then(() => res.json("BrokerPocker User Added!"))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
	Broker.findById(req.params.id)
		.then((broker) => res.json(broker))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
	Broker.findByIdAndDelete(req.params.id)
		.then(() => res.json("BrokerPocker user deleted."))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
	Broker.findById(req.params.id)
		.then((broker) => {
			broker.name = req.body.name;
			broker.email = req.body.email;
			broker.phone = req.body.phone;
			broker.address = req.body.address;

			broker
				.save()
				.then(() => res.json("BrokerPocker user updated!"))
				.catch((err) => res.status(400).json("Error: " + err));
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
