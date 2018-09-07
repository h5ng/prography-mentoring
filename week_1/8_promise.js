const http = require('http');

function naver() {
    return new Promise((resolve, reject) => {
        http.get({
            host: "naver.com"
        }, function (res) {
            return resolve("naver");
        })
    });
}

function daum() {
    return new Promise((resolve, reject) => {
        http.get({
            host: "daum.net"
        }, function (res) {
            return resolve("daum");
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

function main() {
    naver()
        .then(result => {
            console.log(result);
            return daum();
        })
        .then(result => {
            console.log(result);
            return prography();
        })
        .then(result => {
            console.log(result);
            return github();
        })
        .then(result => {
            console.log(result);
            console.log("end")
        });
}

main();
