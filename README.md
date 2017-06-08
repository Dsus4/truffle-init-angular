# truffle-init-angular
Example Truffle project integrated with Angular. Includes contracts, migrations, tests, user interface and Angular build pipeline.

## Usage

To initialize a project with this example, clone the project and run `npm install`.

## Building and the frontend

1. First run `truffle compile` to compile the contracts
2. Then run `truffle migrate` to deploy the contracts onto your network of choice (default "development").
3. Finally run `truffle build` to build the app and serve it on http://localhost:3000

## Compiling new Smart contracts

To compile new smart contracts and expose them to the app, store them in the 'contracts' directory and run `truffle compile` and `truffle migrate` again. The contract's ABIs will be generated, converted to .ts files and stored in 'src/app/web3/contracts' directory for you. Now you can conveniently import them into your services.

## References

Project based on:

https://github.com/trufflesuite/truffle-init-webpack

https://github.com/angular/quickstart
