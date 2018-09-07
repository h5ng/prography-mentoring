var http = require('http');

function naver(callback) {
    http.get({
        host: "naver.com"
    }, function (response) {
        callback("naver");
    })
}

function daum(callback) {
    http.get({
        host: "daum.net"
    }, function (response) {
        callback("daum");
    })
}

function prography(callback) {
    http.get({
        host: "prography.org"
    }, function (response) {
        callback("prography");
    })
}

function github(callback) {
    http.get({
        host: "github.com"
    }, function (response) {
        callback("github");
    })
}

function main() {
    naver(function (r) {
        console.log(r);
        daum(function (r) {
            console.log(r);
            prography(function (r) {
                console.log(r);
                github(function (r) {
                    console.log(r);
                    console.log("end");
                });
            });
        });
    });
}

main();
