const request = require('request-promise-native');
const cheerio = require('cheerio');
const _ = require('lodash');

async function getKeywordList(){
    try{
	console.log('get real-time keyword');
	console.log('-----------------');
	const keywordObjectArray = [];
	//네이버같이 큰 홈페이지는 User-Agent를 검사하여 정상적인 접근인지 체크함
	const body = await request(requestOptions ={
	    method: 'GET',
	    uri: 'http://www.naver.com/',
	    headers: { 'User-Agent': 'Mozilla/5.0' }
	});
	const $ = cheerio.load(body);
	const getElement = $('#PM_ID_ct > div.header > div.section_navbar > div.area_hotkeyword.PM_CL_realtimeKeyword_base > div.ah_list.PM_CL_realtimeKeyword_list_base > ul > li');
//	console.log(getElement);
	getElement.each(function(){
	    //임시 객체 생성
	    const keywordData = {};
	    keywordData.num = $(this).find('a').find($('.ah_r')).text();
	    keywordData.text = $(this).find('a').find($('.ah_k')).text();
	    keywordData.link = $(this).find('a').attr('href');
	    keywordObjectArray.push(keywordData);	
	});

	console.log('get real-time keyword complete');
	console.log('-----------------');
//	console.log(keywordObjectArray);
	return keywordObjectArray;
    }catch(error){
	console.log(error);
    }
}

function getRelatedKeywordList(keywordList){
    try{
	console.log('get related keyword');
	console.log('-----------------');
	return Promise.all(_.map(keywordList, async (keyword) => {
	    const body = await request({
		method: 'GET',
		uri: keyword.link,
		headers: {
		    'accept': '*/*',
		    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36'
		}
	    })
	    const $ = cheerio.load(body);
	    const getElement = $('#nx_related_keywords > dl > dd.lst_relate._related_keyword_list > ul > li');
	    const relatedKeywordArray = [];
	    getElement.each(function(){
		relatedKeywordArray.push($(this).find('a').text());
	    });
	    keyword.relatedKeywords = relatedKeywordArray;
	    return keyword;
	}));
    }catch(error){
    }
}


async function key(){
    try{
	console.log('-----------------');
	console.log('get extracting related keyword....');
	console.log('-----------------');

	const keywordList = await getKeywordList();
	//20개 너무많음 10위까지 뽑기
	const relatedKeywordsList = _.slice(await getRelatedKeywordList(keywordList),0,10);
	_.map(relatedKeywordsList,  (keyword) => {
	    console.log('-----------------');
	    console.log(keyword.num +'위 : ' + keyword.text);
	    console.log('연관 검색어 :');
	    _.map(keyword.relatedKeywords,  (relatedKeyword) =>{
		console.log(relatedKeyword);
	    });
	    console.log('-----------------');
	});
    }catch (error) {
	console.log(error);
    }
}

key();
