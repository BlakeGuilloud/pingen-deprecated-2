# pingen

## Getting started

For all demo requests, we will be using the [axios](https://www.npmjs.com/package/axios) library.

#### API Key

In order to consume the pingen API, a valid API key is required.

API keys are free and only required a GET request to `http://pingen.herokuapp.com/api`.

The request will return a JSON object that includes an apiKey.

#### Service

Every request made to the pingen service should include a query string that includes your valid API key:

`axios.get('http://pingen.herokuapp.com/fooRoute/?api=YOUR_API_KEY')`

#### Routes

There are three routes included in the pingen service:

1. `/register` - POST
  - Returns newly registered user

  Example request:
  ```
    const payload = { externalId: example@email.com }; // The register payload expects an externalId that can represent data with type String.

    axios.post('http://pingen.herokuapp.com/register?api=YOUR_API_KEY', payload)
      .then((response) => {
        response === {
          "_id": "5866be3a0942480f3b528791" // a unique pingen ID that should be stored in order to make specific requests.
          "externalId": "example@email.com", // the returned external ID that was sent along with register request.
        }
      });

  ```

2. `/request/:id` - POST
  - Returns a generated PIN.

  Example request:
  ```
    const payload = {
      timeout: 15000, // Number - in milliseconds, the amount of time your PIN will exist before expiration. Defaults to 30000 (30 seconds).
      pinLength: 10 // Number - the exponential value of a PIN's length. Defaults to 1000000 (6 digits).
    };

    axios.post('http://pingen.herokuapp.com/request/:id?api=YOUR_API_KEY', payload)
      .then((response) => {
        response === {
          "_id": "5866be3a0942480f3b528791" // a unique pingen ID that should be stored in order to make specific requests.
          "externalId": "example@email.com", // the original external ID that was sent along with register request.
          "pin": 123456 // the newly generated PIN for this object.
        }
      });

  ```

3. `/verify/:id` - POST
  - Returns user if PIN is correct and it has not expired

  Example request:
  ```
    const payload = {
      pin: 123456, // Number - The generated PIN that was returned from the /request route.
    };

    axios.post('http://pingen.herokuapp.com/verify/:id?api=YOUR_API_KEY', payload)
      .then((response) => { // If successful
        response === {
          "_id": "5866be3a0942480f3b528791" // a unique pingen ID that should be stored in order to make specific requests.
          "externalId": "example@email.com", // the original external ID that was sent along with register request.
          "pin": 123456 // the newly generated PIN for this object.
        }
      })
      .catch((err) => { // If unsuccessful
        err === {
          "code": 400,
          "message": "The PIN you entered is incorrect and/on the verify time has expired."
        }
      });

  ```
