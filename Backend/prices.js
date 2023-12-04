const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://0.0.0.0:27017', {
    dbName: 'Prices',
    useNewUrlParser: true,
    useUnifiedTopology: true
},  err=> err ? console.log(err) :
    console.log('Connected to database'));

    const UserSchema = new mongoose.Schema({
        product: {
            type: String,
        },
        price: {
            type: String,
        }
    });
    
    
    const User = mongoose.model('Amazon', UserSchema);
    User.createIndexes();
    const User1 = mongoose.model('Flipkart', UserSchema);
    User1.createIndexes();
    const User2 = mongoose.model('Meesho', UserSchema);
    User2.createIndexes();

const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 2000");
app.use(express.json());
app.use(cors());

app.get("/amazon", async (req, resp) => {
	try {
		const { query } = req.query;
		const price = await User.findOne({ product:  { $regex: query, $options: 'i' } })
		if (price) {
			resp.json(price)
		}
	} catch (e) {
		resp.status("Something Went Wrong");
	}
});

app.get("/flip", async (req, resp) => {
	try {
		const { query } = req.query;
		const price = await User1.findOne({ product:  { $regex: query, $options: 'i' } })
		if (price) {
			resp.json(price)
		}
	} catch (e) {
		resp.status("Something Went Wrong");
	}
});

app.get("/mees", async (req, resp) => {
	try {
		const { query } = req.query;
		const price = await User2.findOne({ product:  { $regex: query, $options: 'i' } })
		if (price) {
			resp.json(price)
		}
	} catch (e) {
		resp.status("Something Went Wrong");
	}
});

app.listen(2000)