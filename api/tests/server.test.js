import request from "supertest";
import app from "../src/server";

describe("GET /", () => {
  it("should return welcome message", async () => {
    const res = await request(app).get("/");

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "Welcome to the BerriServer!" });
  });
});
