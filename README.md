# Postman-Jasmine

This small utility allows the use of a Jasmine flavour testing framework within [Postman](https://www.getpostman.com/). Some of the benefits of use:

- It allows your test to more closely resemble Jasmine tests, making them easier to port at a later date.
- It provides failure reasons if a test fails
- There are plans to make it extendable to allow you to write common tests.

## Useage Example

```
describe(tests);

it("Status code is 200").expect(responseCode.code).toBe(200);
it("Item Updated Correctly").expect(responseBody).toBe("updated");
```

If this test were to fail for any reason then you would obtain an invalid value:

