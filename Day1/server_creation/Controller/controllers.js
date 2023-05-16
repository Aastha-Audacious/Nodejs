const dashboard = (req, res) => {
  try {
    res.status(200).send("<h1>Welcome to the Dashboard</h1>");
  } catch (error) {
    res.status(401).send("<h6>Dashboard Error</h6>");
  }
};

const login = (req, res) => {
  try {
    res.status(200).send("<h1>Welcome to the Login</h1>");
  } catch (error) {
    res.status(401).send("<h6>Login Error</h6>");
  }
};

const register = (req, res) => {
  try {
    res.status(200).send("<h1>Welcome to the Register</h1>");
  } catch (error) {
    res.status(401).send("<h6>Register Error</h6>");
  }
};

const services = (req, res) => {
  try {
    res.status(200).send("<h1>Welcome to the Services</h1>");
  } catch (error) {
    res.status(401).send("<h6>Services Error</h6>");
  }
};

module.exports = {
  dashboard,login,register,services
};

// function dashboard(req, res){
//     try {
//         res.status(200).send("<h1>Welcome to the Dashboard</h1>");
//     } catch (error) {
//         res.status(500).send("Server error for Dashboard");
//     }
// }
