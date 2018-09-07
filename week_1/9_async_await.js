var http = require('http');


function naver() {
    return new Promise((resolve, reject) => {
        http.get({
            host: "naver.com"
        }, function (res) {
            resolve("naver");
        });
    })
};

function daum() {
    return new Promise((resolve, reject) => {
        http.get({
            host: "daum.net"
        }, function (res) {
            resolve("daum");
        })
    });
}

function prography() {
    return new Promise((resolve, reject) => {
        http.get({
            host: "prography.org"
        }, function (res) {
            resolve("prography");
        })
    });
}

function github() {
    return new Promise((resolve, reject) => {
        http.get({
            host: "github.com"
        }, function (res) {
            resolve("github");
        })
    });
}

async function main() {
    let r = await naver();
    console.log(r);
    r = await daum();
    console.log(r);
    r = await prography();
    console.log(r);
    r = await github();
    console.log(r);
}

main();

