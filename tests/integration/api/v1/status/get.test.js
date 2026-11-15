test("Get to /api/v1/status should reunt 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.updated_at).toBeDefined();

  const parseUpdatedAt = new Date(responseBody.updated_at).toISOString();

  expect(responseBody.updated_at).toEqual(parseUpdatedAt);

  expect(responseBody.depedencies.database.version).toEqual("16.0");

  expect(responseBody.depedencies.database.max_connections).toEqual("100");

  expect(responseBody.depedencies.database.opened_connections).toEqual(1);
});
