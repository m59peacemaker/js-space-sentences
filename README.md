# space-sentences

Adds space after sentences that don't have any. This may only be useful after using a strip tag function on a string of html, because sentences across elements get squished together.

## Install
```
npm install space-sentences
```

## Usage

```javascript
var spaceSentences = require('space-sentences');

spaceSentences('Huh?Stuff!!Yeah..Ok.'); // "Huh? Stuff!! Yeah.. Ok."
```

### Parameters

#### str

Type: `String`

#### spaceValue

Type: `String`
Default: `' '`

The character(s) used in between sentences. This option exists because Josh Duff.
