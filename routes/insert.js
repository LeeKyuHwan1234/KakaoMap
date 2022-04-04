var express = require('express');
var router = express.Router();
var client = require('../config/post')
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
const convert = require('xml-js');
/* GET users listing. */
router.get('/', function(req, res, next) {
    var tt = {};
    let url = 'http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/searchList'
    var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'8MHEoHSGSBOiionhFfjrXfD9UVbr5goBsMUq1rUmUvC2NbpqAX%2FjrheczsfnDWNCQ7HVqXUXPqN7vYmcjf2%2BFA%3D%3D'; /*Service Key*/
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('3'); /**/
    queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('WIN'); /**/
    queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest'); /**/
    queryParams += '&' + encodeURIComponent('keyword') + '=' + encodeURIComponent('대'); /**/
    xhr.open('GET', url + queryParams);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var result = this.responseText
            var xmlToJson = convert.xml2json(result, {compact: true, spaces: 4});
            var jsondata = JSON.parse(xmlToJson);

                let column1 = jsondata.response.body.items.item[0].addr1._text;
                let column2 = jsondata.response.body.items.item[0].doNm._text; 
                let column3 = jsondata.response.body.items.item[0].animalCmgCl._text; 
                let column4 = jsondata.response.body.items.item[0].autoSiteCo._text; 
                let column7 = jsondata.response.body.items.item[0].caravAcmpnyAt._text; 
                let column8 = jsondata.response.body.items.item[0].caravSiteCo._text; 
                let column9 = jsondata.response.body.items.item[0].clturEventAt._text; 
                let column10 = jsondata.response.body.items.item[0].contentId._text; 
                let column11 = jsondata.response.body.items.item[0].createdtime._text; 
                console.log(column1+column2+column3+column4+column7+column8+column9+column10+column11)
           res.render('insert',{"data":tt})  
        }
    };
    xhr.send('');
});

module.exports = router;
    // var data = [];
    // var tt = [];
    // var cc = [];
    // var ttArr =[];

    // var datalength = Object.keys(jsondata.response.body.items.item).length //3
            // var k=0;
            // for (var i=0; i<datalength; i++) {
            //     var dd =  Object.values(jsondata.response.body.items.item[i]); //dd.length 50~70
            //     for (var j =0; j< dd.length; j++) {
            //         cc[i] = dd[j]._text
            //         console.log(cc[i])
            //         data[k] = cc[i]
            //         tt.push(data[k])
            //         k++;
            //         ttArr.push(tt[j])
            //     }    
            // }  