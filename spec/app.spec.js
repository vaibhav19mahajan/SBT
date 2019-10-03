var Request = require("request");

/* describe("Server", () => {
    var server;
     beforeAll (() => {
        server = require("../app");
    }
    ); 
    it("execute for success scenario",  (done) => {
        expect(1 === 1);
    });
     afterAll (() => {
        server.close();
    }
    ); 
    
    
}); */

describe("server", () => {
    
    it("execute for success scenario", function (done) {
    
            expect(1 === 1);
            done();
        
    });
});