# Chinese Postcode Library
[![CI Build](https://github.com/xtu/chinese-postcode/actions/workflows/node.js.yml/badge.svg)](https://github.com/xtu/chinese-postcode/actions/workflows/node.js.yml)

In Chinese postal system, a postcode is identified by three levels: _province_, _city_ and _county_. This package allows you to search search the postcode by the given address identified by those three parameters. It also provides the functionality to search address from a given postcode.

# Install
To get started, simply install it with npm:
```
npm install chinese-postcode
```

# Usage

```
var pc = require('chinese-postcode');

// search addresses by postcode
var addresses = pc.getAddress('100093');

// search postcode by address
var postcode = pc.getPostcode({
    province: '湖南',
    city: '怀化市',
    county: '靖州苗族侗族自治县'
});
```

# Contribution
Clone the repo:
```
git clone https://github.com/xtu/chinese-postcode.git
```

Run tests:
```
npm test
```

Create branch. Make changes. Push branch and create a pull request.

### License

[ISC](/LICENSE.md)
