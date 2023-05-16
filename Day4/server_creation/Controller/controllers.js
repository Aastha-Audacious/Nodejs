const register = (req, res) => {
  try {
    let name = req.body.username;
    let email = req.body.email;
    let contact = req.body.contact;
    let city = req.body.city;
    let bloodGroup = req.body.Bloodgrup;

    res.status(200).send({ message: "Donar successfully created", "donar_name": name , "contact":contact});
  } catch (error) {
    res.status(500), send("Error in donar creation");
  }
};

const donar = (req, res) => {
  try {
    let donar_id = req.params.donar_id;
    res.satus(200).send({ message: "Login succesfully" });  
  } catch (error) {
    res.status(500), send("Error in Login");
  }
};

const validate =(req, res)=>{
try {
  res.status(200).send({message:`Hey! Happy Birthday ${req.query.name} can i call you on this number ${req.query.contact}`});

  // res.status(200).send({message:`Hey! Happy Birthday ${req.name} can i call you on this number ${req.contact}`});
} catch (error) {
  res.status(401).send("Error in validation");
}
}
module.exports = {
  register,
  donar,
  validate
};
