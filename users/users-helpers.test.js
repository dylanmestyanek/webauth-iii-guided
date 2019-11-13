const { validateUser } = require("../users/users-helpers");

describe("users helpers", () => {
    describe("validateUser()", () => {
        it("should succeed if called with a valid user", () => {
            const result = validateUser({
                username: "test",
                password: "valid password"
            })

            expect(result.isSuccessful).toBe(true);
        })
    })
})