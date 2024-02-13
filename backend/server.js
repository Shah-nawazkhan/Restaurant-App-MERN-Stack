const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// connect to mongodb
mongoose.connect("Your mongodb connection string", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const restaurantSchema = new mongoose.Schema({
	name: String,
	image: String,
	menu: [
		{
			name: String,
			price: Number,
			image: String,
		},
	],
	rating: Number,
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

// Seed initial data
const seedData = [
	{
		name: "Italian Delight",
		image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		menu: [
			{
				name: "Pasta Alfredo",
				price: 10,
				image: "https://images.pexels.com/photos/11220209/pexels-photo-11220209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			},
			{
				name: "Margherita Pizza",
				price: 15,
				image: "https://images.pexels.com/photos/18431672/pexels-photo-18431672/free-photo-of-sourdough-pizza-time.jpeg?auto=compress&cs=tinysrgb&w=600",
			},
			{
				name: "Chicken Parmesan",
				price: 20,
				image: "https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=600",
			},
		],
		rating: 4.5,
	},
	{
		name: "Seafood Paradise",
		image: "https://media.istockphoto.com/id/1156027693/photo/fresh-salmon-steak-with-a-variety-of-seafood-and-herbs.jpg?s=1024x1024&w=is&k=20&c=Zqo2as6_WsexC3CtFkshB7KwjDRviLvryQUbv0dulTo=",
		menu: [
			{
				name: "Grilled Salmon",
				price: 12,
				image: "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			},
			{
				name: "Lobster Bisque",
				price: 18,
				image: "https://images.pexels.com/photos/6510284/pexels-photo-6510284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			},
			{
				name: "Shrimp Scampi",
				price: 25,
				image: "https://images.pexels.com/photos/8697539/pexels-photo-8697539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			},
		],
		rating: 3.8,
	},
	{
		name: "Vegetarian Haven",
		image: "https://media.istockphoto.com/id/1147252758/photo/healthy-vegetarian-food-background-vegetables-pesto-and-lentil-curry-with-tofu.jpg?s=1024x1024&w=is&k=20&c=YaXdh9gt99orf5e4CqVd0pR4ZV1oF2CjQqiFVT02e6o=",
		menu: [
			{
				name: "Quinoa Salad",
				price: 8,
				image: "https://images.pexels.com/photos/13637427/pexels-photo-13637427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			},
			{
				name: "Eggplant Parmesan",
				price: 12,
				image: "https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			},
			{
				name: "Mushroom Risotto",
				price: 16,
				image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			},
		],
		rating: 4.2,
	},
	{
		name: "Sizzling Steakhouse",
		image: "https://images.pexels.com/photos/2878738/pexels-photo-2878738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		menu: [
			{
				name: "Filet Mignon",
				price: 22,
				image: "https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			},
			{
				name: "New York Strip",
				price: 18,
				image: "https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			},
			{
				name: "Ribeye Steak",
				price: 25,
				image: "https://images.pexels.com/photos/7613568/pexels-photo-7613568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			},
		],
		rating: 4.7,
	},
	{
		name: "Asian Fusion",
		image: "https://images.pexels.com/photos/2689419/pexels-photo-2689419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		menu: [
			{
				name: "Sushi Platter",
				price: 20,
				image: "https://images.pexels.com/photos/6790331/pexels-photo-6790331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			},
			{
				name: "Pad Thai",
				price: 15,
				image: "https://images.pexels.com/photos/12561883/pexels-photo-12561883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			},
			{
				name: "Mongolian Beef",
				price: 18,
				image: "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			},
		],
		rating: 4.0,
	},
];

const seedDatabase = async () => {
	try {
		await Restaurant.deleteMany(); // Clear existing data
		await Restaurant.insertMany(seedData);
		console.log("Database seeded successfully.");
	} catch (error) {
		console.error("Error seeding the database:", error.message);
	}
};

// Seed data when the server starts
seedDatabase();

app.get("/restaurants", async (req, res) => {
	try {
		// Use the 'find' method of the 'Restaurant' model to retrieve all restaurants
		const restaurants = await Restaurant.find({});

		// Send the retrieved restaurants as a JSON response
		res.json(restaurants);
	} catch (error) {
		// Handle any errors that may occur during the process and send a 500 Internal Server Error response
		res.status(500).json({ error: error.message });
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
