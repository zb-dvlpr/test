const { createMocks } = require("node-mocks-http");
const handler = require("../pages/api/health");

describe("GET /api/health", () => {
  it("returns ok status and ISO time", async () => {
    const { req, res } = createMocks({ method: "GET" });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const body = JSON.parse(res._getData());
    expect(body.status).toBe("ok");
    expect(new Date(body.time).toISOString()).toBe(body.time);
  });
});
