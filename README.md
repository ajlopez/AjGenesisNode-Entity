# AjGenesisNode Entity

AjGenesisNode Entity tasks and templates. WIP.

## Installation

Install [AjGenesis for Node](https://github.com/ajlopez/AjGenesisNode) globally using:
```
npm install -g ajgenesis
```

## Usage

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
- 0.0.2: Published. It uses `models` directory instead of `ajgenesis/models`.
- 0.0.3: Published. add and addproperty process parameters.
- 0.0.4: Published. Fixing add property bug, using a hack.

## Contribution

Feel free to [file issues](https://github.com/ajlopez/AjGenesisNode-Entity) and submit
[pull requests](https://github.com/ajlopez/AjGenesisNode-Entity/pulls) — contributions are
welcome.

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.
