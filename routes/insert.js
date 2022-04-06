var express = require('express');
var router = express.Router();
var client = require('../config/post')
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
const convert = require('xml-js');
/* GET users listing. */



router.get('/', function(req, res, next) {

    let dd = {};
    let url = 'http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/searchList'
    var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'8MHEoHSGSBOiionhFfjrXfD9UVbr5goBsMUq1rUmUvC2NbpqAX%2FjrheczsfnDWNCQ7HVqXUXPqN7vYmcjf2%2BFA%3D%3D'; /*Service Key*/
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('17'); /**/
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /**/
    queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('WIN'); /**/
    queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest'); /**/
    queryParams += '&' + encodeURIComponent('keyword') + '=' + encodeURIComponent('캠'); /**/
    xhr.open('GET', url + queryParams);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var result = this.responseText
            var xmlToJson = convert.xml2json(result, {compact: true, spaces: 4});
            var jsondata = JSON.parse(xmlToJson);
            var result3 = [];
            console.log(jsondata.response.body.totalCount)
            const items = jsondata.response.body.items.item;
            dd = {items}
               
            dd.items.forEach((item)=>{
                result3.push([
                    item.hasOwnProperty('contentId') ? item.contentId._text : "no data",
                    item.hasOwnProperty('facltNm') ? item.facltNm._text : "no data",
                    item.hasOwnProperty('lineIntro') ? item.lineIntro._text : "no data",
                    item.hasOwnProperty('intro') ? item.intro._text : "no data",
                    item.hasOwnProperty('allar') ? item.allar._text : "no data",
                    item.hasOwnProperty('insrncAt') ? item.insrncAt._text : "no data",
                    item.hasOwnProperty('trsagntNo') ? item.trsagntNo._text : "no data",
                    item.hasOwnProperty('bizrno') ? item.bizrno._text : "no data",
                    item.hasOwnProperty('facltDivNm') ? item.facltDivNm._text : "no data",
                    item.hasOwnProperty('mangeDivNm') ? item.mangeDivNm._text : "no data",
                    item.hasOwnProperty('mgcDiv') ? item.mgcDiv._text : "no data",
                    item.hasOwnProperty('manageSttus') ? item.manageSttus._text : "no data",
                    item.hasOwnProperty('hvofBgnde') ? item.hvofBgnde._text : "no data",
                    item.hasOwnProperty('hvofEnddle') ? item.hvofEnddle._text : "no data",
                    item.hasOwnProperty('featureNm') ? item.featureNm._text : "no data",
                    item.hasOwnProperty('induty') ? item.induty._text : "no data",
                    item.hasOwnProperty('lctCl') ? item.lctCl._text : "no data",
                    item.hasOwnProperty('doNm') ? item.doNm._text : "no data",
                    item.hasOwnProperty('sigunguNm') ? item.sigunguNm._text : "no data",
                    item.hasOwnProperty('zipcode') ? item.zipcode._text : "no data",
                    item.hasOwnProperty('addr1') ?  item.addr1._text : "no data",
                    item.hasOwnProperty('addr2') ? item.addr2._text : "no data",
                    item.hasOwnProperty('mapX') ? item.mapX._text : "no data",
                    item.hasOwnProperty('mapY') ? item.mapY._text : "no data",
                    item.hasOwnProperty('direction') ? item.direction._text : "no data",
                    item.hasOwnProperty('tel') ? item.tel._text : "no data",
                    item.hasOwnProperty('homepage') ? item.homepage._text : "no data",
                    item.hasOwnProperty('resveUrl') ? item.resveUrl._text : "no data",
                    item.hasOwnProperty('resveCl') ? item.resveCl._text : "no data",
                    item.hasOwnProperty('manageNmpr') ? item.manageNmpr._text : "no data",
                    item.hasOwnProperty('gnrlSiteCo') ? item.gnrlSiteCo._text : "no data",
                    item.hasOwnProperty('autoSiteCo') ? item.autoSiteCo._text : "no data",
                    item.hasOwnProperty('glampSiteCo') ? item.glampSiteCo._text : "no data",
                    item.hasOwnProperty('caravSiteCo') ? item.caravSiteCo._text : "no data",
                    item.hasOwnProperty('indvdlCaravSiteCo') ? item.indvdlCaravSiteCo._text : "no data",	
                    item.hasOwnProperty('sitedStnc') ? item.sitedStnc._text : "no data",
                    item.hasOwnProperty('siteMg1Width') ? item.siteMg1Width._text : "no data",
                    item.hasOwnProperty('siteMg2Width') ? item.siteMg2Width._text : "no data",
                    item.hasOwnProperty('siteMg3Width') ? item.siteMg3Width._text : "no data",
                    item.hasOwnProperty('siteMg1Vrticl') ? item.siteMg1Vrticl._text : "no data",
                    item.hasOwnProperty('siteMg2Vrticl') ? item.siteMg2Vrticl._text : "no data",
                    item.hasOwnProperty('siteMg3Vrticl') ? item.siteMg3Vrticl._text : "no data",
                    item.hasOwnProperty('siteMg1Co') ? item.siteMg1Co._text : "no data",
                    item.hasOwnProperty('siteMg2Co') ? item.siteMg2Co._text : "no data",
                    item.hasOwnProperty('siteMg3Co') ? item.siteMg3Co._text : "no data",
                    item.hasOwnProperty('siteBottomCl1') ? item.siteBottomCl1._text : "no data",
                    item.hasOwnProperty('siteBottomCl2') ? item.siteBottomCl2._text : "no data",
                    item.hasOwnProperty('siteBottomCl3') ? item.siteBottomCl3._text : "no data",
                    item.hasOwnProperty('siteBottomCl4') ? item.siteBottomCl4._text : "no data",
                    item.hasOwnProperty('siteBottomCl5') ? item.siteBottomCl5._text : "no data",
                    item.hasOwnProperty('tooltip') ? item.tooltip._text : "no data",
                    item.hasOwnProperty('glampInnerFclty') ? item.glampInnerFclty._text : "no data",	
                    item.hasOwnProperty('caravInnerFclty') ? item.caravInnerFclty._text : "no data",
                    item.hasOwnProperty('prmisnDe') ? item.prmisnDe._text : "no data",
                    item.hasOwnProperty('operPdCl') ? item.operPdCl._text : "no data",
                    item.hasOwnProperty('operDeCl') ? item.operDeCl._text : "no data",
                    item.hasOwnProperty('trlerAcmpnyAt') ? item.trlerAcmpnyAt._text: "no data",	
                    item.hasOwnProperty('caravAcmpnyAt') ? item.caravAcmpnyAt._text : "no data",
                    item.hasOwnProperty('toiletCo') ? item.toiletCo._text : "no data",
                    item.hasOwnProperty('swrmCo') ? item.swrmCo._text: "no data",
                    item.hasOwnProperty('wtrplCo') ? item.wtrplCo._text: "no data",
                    item.hasOwnProperty('brazierCl') ? item.brazierCl._text: "no data",	
                    item.hasOwnProperty('sbrsCl') ? item.sbrsCl._text: "no data",
                    item.hasOwnProperty('sbrsEtc') ? item.sbrsEtc._text: "no data",	
                    item.hasOwnProperty('posblFcltyCl') ? item.posblFcltyCl._text: "no data",
                    item.hasOwnProperty('posblFcltyEtc') ? item.posblFcltyEtc._text: "no data",	
                    item.hasOwnProperty('clturEventAt') ? item.clturEventAt._text: "no data",
                    item.hasOwnProperty('clturEvent') ? item.clturEvent._text: "no data",	
                    item.hasOwnProperty('exprnProgrmAt') ? item.exprnProgrmAt._text: "no data",	
                    item.hasOwnProperty('exprnProgrm') ? item.exprnProgrm._text: "no data",	
                    item.hasOwnProperty('extshrCo') ? item.extshrCo._text : "no data",		
                    item.hasOwnProperty('frprvtWrppCo') ? item.frprvtWrppCo._text: "no data",	
                    item.hasOwnProperty('frprvtSandCo') ? item.frprvtSandCo._text : "no data",	
                    item.hasOwnProperty('fireSensorCo') ? item.fireSensorCo._text : "no data",	
                    item.hasOwnProperty('themaEnvrnCl') ? item.themaEnvrnCl._text : "no data",	
                    item.hasOwnProperty('eqpmnLendCl') ? item.eqpmnLendCl._text : "no data",	
                    item.hasOwnProperty('animalCmgCl') ? item.animalCmgCl._text : "no data",	
                    item.hasOwnProperty('tourEraCl') ? item.tourEraCl._text : "no data",	
                    item.hasOwnProperty('firstImageUrl') ? item.firstImageUrl._text : "no data",	
                    item.hasOwnProperty('createdtime') ? item.createdtime._text : "no data",
                    item.hasOwnProperty('modifiedtime') ? item.modifiedtime._text : "no data"
                ])
            })  

            for (var m =0; m < result3.length; m++) {
                var obj = "";
                var strResult = JSON.stringify(result3[m])
                var strContentid = result3[m][0]
                var asdSliceEnd = strResult.slice(0,-1);
                var asdSliceStart =asdSliceEnd.slice(1);
                var asdReplace = asdSliceStart.replaceAll(`"`, `'`)
                client.query(`
                INSERT INTO openapi(
                    contentid,facltnm,lineintro,intro,allar,insrncat,trsagntno,bizrno,facltdivnm,mangedivnm,
                    mgcdiv,managesttus, hvofbgnde,hvofenddle,featurenm,induty,lctcl,
                    donm,sigungunm,zipcode,addr1,addr2,mapx,mapy,direction, tel,homepage,resveurl,resvecl,
                    managenmpr,gnrlsiteco,autositeco,glampsiteco,caravsiteco,indvdlcaravsiteco,sitedstnc,
                    sitemg1width,sitemg2width,sitemg3width,sitemg1vrticl,sitemg2vrticl,sitemg3vrticl,sitemg1co,
                    sitemg2co,sitemg3co,sitebottomcl1,sitebottomcl2,sitebottomcl3,sitebottomcl4,
                    sitebottomcl5,tooltip,glampinnerfclty,caravinnerfclty,prmisnde,operpdcl,operdecl,
                    trleracmpnyat,caravacmpnyat,toiletco,swrmco,wtrplco,braziercl,sbrscl,
                    sbrsetc,posblfcltycl,posblfcltyetc,cltureventat,clturevent,exprnprogrmat,exprnprogrm,extshrco,frprvtwrppco,frprvtsandco,
                    firesensorco,themaenvrncl,eqpmnlendcl,animalcmgcl,toureracl,firstimageurl,createdtime,modifiedtime) 
                VALUES (${asdReplace})
                ON CONFLICT(contentid)
                DO NOTHING `, (err, res) => {
                })
             }
            res.render('insert',{"data":result3, "total":
            jsondata.response.body.totalCount})  
        }
    };
    xhr.send('');
});

module.exports = router;

    // let result3 = [];
            // let temps = [];
            // dd.items.forEach((item)=>{
            //     const keys = Object.keys(item)
            //     for( var key in keys) {
            //         temps.push(item.hasOwnProperty(keys[key]) ? item[keys[key]]._text : "false");
            //     }

            // })
            //   dd.items.forEach((item)=>{
            //     temps = item
            //     console.log(temps)
            //     temps.push(item.hasOwnProperty(keys[key]) ? item[keys[key]]._text : "false");
            // })
            //result3.push(temps[0]);


            
            // const keys = Object.keys(item)
            //     for( var key in keys) {
            //         result3.push(item.hasOwnProperty(keys[key]) ? item[keys[key]]._text : "false");
            //     }