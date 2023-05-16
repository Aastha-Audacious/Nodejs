exports.queryValidation = (req, res, next) => {

  // let name = req.params.name
  // let contact = req.params.contact

  let name = req.query.name
  let contact = req.query.contact


  if (!name) {
      res.send({ messge: "Please enter donar name" })
      return;
  }
  if (!contact) {
      res.send({ message: "please enter donar contact number" })
      return;
  }
  // req.name = name;
  // req.contact =contact;
  next();
}    
