# AjGenesisNode Entity

AjGenesisNode Entity tasks and templates. WIP.

## Installation

Install [AjGenesis for Node](https://github.com/ajlopez/AjGenesisNode) globally using:
```
npm install -g ajgenesis
```
On Linux, you should use `sudo` to install a module globally.

## Usage

In your project directory, run:
```
npm install ajgenesisnode-entity
```
in order to have this module available.

Add an entity to the current AjGenesis project
```
ajgenesis entity:add customer
```
It adds a `models/customer.json` file with an entity named customer.

Add a property `address` to entity `customer`
```
ajgenesis entity:addproperty customer address
```
## Development

```
npm install -g ajgenesis
git clone git://github.com/ajlopez/AjGenesisNode-Entity.git
cd AjGenesisNode-Entity
npm link ajgenesis
npm install
npm test
```

## Versions

- 0.0.1: Published
- 0.0.2: Published. It uses `models` directory instead of `ajgenesis/models`
- 0.0.3: Published. add and addproperty process parameters
- 0.0.4: Published. Fixing add property bug, using a hack
- 0.0.5: Published. Using `ajgenesis/models` for model files
- 0.0.6: Published. Use createModelDirectory, getModelDirectory
- 0.0.7: Published. Install method
- 0.0.8: Published. Copy lib directory on install

## Contribution

Feel free to [file issues](https://github.com/ajlopez/AjGenesisNode-Entity) and submit
[pull requests](https://github.com/ajlopez/AjGenesisNode-Entity/pulls) — contributions are
welcome.

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.
