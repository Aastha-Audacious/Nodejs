const signup =(req, res)=>{
    try {
        const { name, email} = req.body;
        if(!email){
            return res.status(400).send("Email is required.");
        }
        const newuser ={
            name: req.body.name, 
            email: req.body.email
        };
        res.status(200).send(newuser);
        res.status(200).send("<h1>Signup here</h1>");
    } catch (error) {
        res.status(200).send("<h1>Oops! Error is there</h1>");
    }
}

module.exports = signup;