const express = require('express');
const app = express();


 const mockUserData=[
 {name:'Max'},
 {name:'Edvil'}
]

app.get('/users',function(req,res){
		res.json({
			sucess: true,
			message: 'sucessfully got users. Super!',
			users: mockUserData
		})
})

app.listen(8000,function(){
	console.log("server is running")
})