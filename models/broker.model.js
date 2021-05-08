const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const brokerSchema = new Schema(
	{
		name: { type: String, required: false },
		email: { type: String, required: false },
		phone: { type: String, required: false },
		address: { type: String, required: false },
	},
	{
		timestamps: true,
	}
);

const Broker = mongoose.model("Broker", brokerSchema);

module.exports = Broker;
