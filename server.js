const express = require('express');
const app = express();
const bodyPerser= require('body-parser')
app.use(bodyParser.json());

 const mockUserData=[
 {name:'Max'},
 {name:'Edvil'}
]

app.get('/users/:id',function(req,res){
		res.json({
			sucess: true,
			message: 'sucessfully got users. Super!',
			users: req.params.id
		})
})

app.listen(8000,function(){
	console.log("server is running")
})

app.post('/login',function(req,res){
	const username= req.body.username;
	const password = req.body.password;
	
	const mockUsername="billyTheKid";
	const mockPassword="superSecret";
	
	if(username=mockUsername && password = mockPassword){
		res.json({
			sucess: true;
			message: 'password and username match!',
			token: 'encrypted token goes here'
		})
	}else {
		res.json({
			sucess: false,
			message: 'password and username do not match'
		})
	}
})