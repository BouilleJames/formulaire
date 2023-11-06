const app = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;

chai.use(chaiHttp);

describe("API Tests", function () {
  it("should return all data on /api/data GET", function (done) {
    chai
      .request(app)
      .get("/api/data")
      .end(function (err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe("API Connection Test", function () {
  it("should return Hello World on / GET", function (done) {
    chai
      .request(app)
      .get("/api/roles")
      .end(function (err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });
});
