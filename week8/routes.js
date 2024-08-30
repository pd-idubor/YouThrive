//Routes defined with corresponding controller actions
const express = require('express');
const User = require('./user');


const router = express.Router();

router.get('/', function(req, res) {
  console.log('Yes');
});

router.post('/add-user', async function(req, res) {
  try {
    const { name, email, age } = req.body;
    if (!name || name.length < 3) {
      return res.status(400).send({ message:'Name is required and must be onger than 3 letters'});
    }
    const user = new User({
	name,
	email,
	age
    });
    await user.save();
    res.send({ message: "User added successfully"});
  } catch (err) {
    console.log(err);
    res.status(500).send({ message:'Error adding new user'});
  }
});


router.post('/update-email', async function(req, res) {
  const { name, email } = req.body
  
  if (!email) {
    return res.status(400).send({message: 'Email is required'});
  }
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(email)) {
    res.status(400).send({message: "Incorrect email format"});
  };

  try {
    await User.findOne({name: req.body.name}).then(async (user) => {
      if (!user) {
        return res.status(404).send({message: "User Not found."});
      }                                                     
      await User.findOneAndUpdate({
	name: name
      }, { $set: { email: email }}).then(result => {
	      (console.log({ updated: true }));
      });
      res.send("Update successful");
    });
  } catch (err) {
	console.log(err);
        res.status(500).send({mesage: "Error updating email"});
  }
});

router.post('/add-users', function(req, res) {
  const Arr = req.body;
  console.log(Arr);

  Arr.forEach(async obj => {
    console.log("Object", obj);
    try {
      const { name, email, age } = obj;
      if (!name || !email || age < 18 || age > 99) {
	return res.status(400).send({message: "A user object has failed validation"});
      }
      const user = new User({
	name,
        email,
        age
    });
      await user.save();
      console.log({ message: "A user in array added successfully"});

    } catch (err) {
	console.log(err);
	res.status(500).send({message: "Error adding multiple users"});
    }
    res.send({message: "Success witb arrays"});
  });
});

router.all('*', (req, res) => {
  res.render('pages/404');
})

module.exports = router;
