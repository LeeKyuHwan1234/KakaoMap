const { Pool, Client } = require('pg'); 
const client = new Client({ 
    user: 'root', 
    password: 'qwerty12', 
    host: 'hodudeuk.myds.me', 
    port: 43046, 
    database: 'camping' 
}); 
client.connect();
// function GetUserList() {
//     client.connect(); 
//     client.query('SELECT * FROM review', (err, res) => {
//        console.log(res.rows); 
//        client.end();
//     }); 
// }; 

// function InsertUserList() {
//     client.connect(); 
//     client.query(`INSERT INTO review(rtitle, rcontent) VALUES ('asd','asdasd') `, (err, res) => {
//        console.log('insert success');
//        client.end();
//     }); 
// }; 

// function UpdateUserList() {
//     client.connect(); 
//     client.query(`UPDATE review SET rtitle ='123', rcontent ='asdasd' WHERE rtitle='asd' `, (err, res) => {
//        console.log('update success');
//        client.end();
//     }); 
// }; 


module.exports = client
