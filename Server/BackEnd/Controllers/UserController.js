const bcrypt = require("bcrypt");
const User = require("../Models/Users.js");

exports.createUser = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      password,
      country,
      city,
      address,
   
      dateJoined,
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hashedPassword,
      country: country, // Previously used 'number', corrected to 'age'
      city: city, // Corrected variable name
      address:address,
      dateJoined: dateJoined,
      //courses: courses, // Corrected variable name
    });

    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to create user / Email Already Registered" });
  }
};
