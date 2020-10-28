var express = require('express');
var router = express.Router();
var mailer = require('nodemailer')
var conf = require('../config')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//post request 

router.post('/send',(req,res)=>{



  const transporter = mailer.createTransport({
    service:'gmail',
     //service is the e-mail service that you want to use
    auth:{
    user:conf.email,
     //user should be the email id from which you want to send the mail
    pass:conf.pass
     //pass should be the password for the said email id
      }
    
    })
    


    const mailOptions={
        from:conf.email,
        to:'rahmonblog@gmail.com',
        cc:'',
        bcc:'',
        subject: 'mail from '+req.body.name,
        text: 'From '+req.body.name+
            ':'+req.body.email+': \n\n messsage :"'
            +req.body.content+'"'
            
        }
        

    transporter.sendMail(mailOptions, function(err, info){
        if(err) console.log("Error: "+err);
        else
        console.log("Email Sent: " + info.response);
        })
        if (req)
       
        res.redirect('/');
})

module.exports = router;
