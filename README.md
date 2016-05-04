# Postman-Jasmine

This small utility allows the use of a Jasmine flavour testing framework within [Postman](https://www.getpostman.com/). Some of the benefits of use:

- It allows your test to more closely resemble Jasmine tests, making them easier to port at a later date.
- It provides failure reasons if a test fails
- There are plans to make it extendable to allow you to write common tests.

# Useage Example

```
describe(tests);

it("Status code is 200").expect(responseCode.code).toBe(200);
it("Item Updated Correctly").expect(responseBody).toBe("updated");
```

If this test were to fail for any reason then you would obtain an invalid value:

<img src="https://cloud.githubusercontent.com/assets/1374775/15011533/41ef7a2a-11ea-11e6-967b-48617b6c00a4.png" data-canonical-src="https://cloud.githubusercontent.com/assets/1374775/15011533/41ef7a2a-11ea-11e6-967b-48617b6c00a4.png" width="450" height="200" />

##Differences to Jasmine

There are two key differences between Postman-Jasmine and Jasmine. There are the way `describe()` and `it()` are used. Postman-Jasmine doesn't support nesting of these items because it wouldn't be possible to report the failure reasons.

*describe(tests)* - Use to initialize Postman-Jasmine with the `tests` object.
*it("test name") - Used to setup a test which should have a single assertion.

## Supported Functions

The following functions are currently supported and the best place to view documentation for them is at http://jasmine.github.io/2.0/introduction.html.

- toBe
- toEqual
- toBeUndefined
- toBeNull
- toBeFalsy
- toContain
- toBeLessThan
- ToBeLessThanOrEqual
- ToBeGreaterThan
- ToBeGreaterThanOrEqual

All of the above also support a `.not` clause before hand to inverse them.

#Setup

### Method 1

The first way is slightly simpler however *updates to Postman* will require the setup process to be followed again as it involves modifying some internal Postman HTML. To do this simply navigate your file structure to:

`C:\Users\{Username}\AppData\Local\Google\Chrome\User Data\Default\Extensions\fhbjgbiflinjbdggehcddcbncdddomop\{Version}\html\tester_sandbox.html`

Modify the file to add the following script tag in. `<script type="text/javascript" src="https://raw.githubusercontent.com/IPWright83/Postman-Jasmine/master/postman-jasmine.js"></script>`
