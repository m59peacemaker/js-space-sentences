var test = require('tape');
var spaceSentences = require('../');

test('handles various punctuation', function(t) {
  t.plan(1);
  var input = "Hey!Hello.How are you?I'm well.";
  var spaced = "Hey! Hello. How are you? I'm well.";
  t.equal(spaceSentences(input), spaced);
});

test('handles repeated punctuation', function(t) {
  t.plan(1);
  var input = "Hey!!!Hello.How are you??I'm well.";
  var spaced = "Hey!!! Hello. How are you?? I'm well.";
  t.equal(spaceSentences(input), spaced);
});

test('handles mixed sets of punctuation', function(t) {
  t.plan(1);
  var input = "Hey!Hello..?How are you?!I'm well.";
  var spaced = "Hey! Hello..? How are you?! I'm well.";
  t.equal(spaceSentences(input), spaced);
});

test("doesn't space already spaced sentences", function(t) {
  t.plan(1);
  var input = "Hey!Hello. How are you?I'm well.";
  var spaced = "Hey! Hello. How are you? I'm well.";
  t.equal(spaceSentences(input), spaced);
});

test('allows optional space value', function(t) {
  t.plan(1);
  var input = "Hey!Hello.How are you?I'm well.";
  var spaced = "Hey!  Hello.  How are you?  I'm well.";
  t.equal(spaceSentences(input, '  '), spaced);
});
