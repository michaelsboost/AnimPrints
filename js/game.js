// Version: 0.0.1
// AnimaPrints, copyright (c) by Michael Schwartz and others
// Distributed unde the MIT license: https://github.com/michaelsboost/AnimaPrints/blob/gh-pages/LICENSE
// 
// This is AnimaPrints (https://michaelsboost.github.io/AnimaPrints), A simple game that teaches you how to identify animal footprints

var anim, gameMode = false;
var audioElement   = document.createElement('audio');
var rightSound     = function() {
  audioElement.src = 'sounds/correct.mp3';
  audioElement.play();
};
var missedSound    = function() {
  audioElement.src = 'sounds/missed.mp3';
  audioElement.play();
};
var animals = [
  'blueheron', 'grouse', 'wildturkey', 'pheasant', 'crow', 'quail', 'baldeagle', 'mallardduck', 'goose', 'gull', 'alligator', 'bobcat', 'domesticcat', 'canadianlynx', 'cougar', 'panther', 'redfox', 'domesticdog', 'coyote', 'graywolf', 'whitetaileddeer', 'mountaingoat', 'horse', 'buffalo', 'elk', 'moose', 'blackbear', 'grizzlybear', 'squirrel', 'weasel', 'beaver', 'badger', 'woodchuck', 'skunk', 'opossum', 'armadillo'
];

$('.footer img[data-foot]').on('click', function() {
  if (gameMode === false) {
    $('#animalprint').html('<img src="'+ $(this).attr('data-foot') +'">');
  } else {
    if ($(this).attr('data-foot').toString() === $('#animalprint img').attr('src').toString()) {
      rightSound();
      randomAnimal();
    } else {
      missedSound();
    }
  }
});
$('.footer [data-init]').on('click', function() {
  gameMode = true;
  $(this).remove();
}).trigger('click');

// generate a random number
function randomNumber(n) {
  return Math.floor( Math.random() * n );
}

function randomAnimal() {
  var ranNum = randomNumber(animals.length);
  
  switch(ranNum) {
    case 0:
      anim = 'blueheron';
      break;
    case 1:
      anim = 'grouse';
      break;
    case 2:
      anim = 'wildturkey';
      break;
    case 3:
      anim = 'pheasant';
      break;
    case 4:
      anim = 'crow';
      break;
    case 5:
      anim = 'quail';
      break;
    case 6:
      anim = 'baldeagle';
      break;
    case 7:
      anim = 'mallardduck';
      break;
    case 8:
      anim = 'goose';
      break;
    case 9:
      anim = 'gull';
      break;
    case 10:
      anim = 'alligator';
      break;
    case 11:
      anim = 'bobcat';
      break;
    case 12:
      anim = 'domesticcat';
      break;
    case 13:
      anim = 'canadianlynx';
      break;
    case 14:
      anim = 'cougar';
      break;
    case 15:
      anim = 'panther';
      break;
    case 16:
      anim = 'redfox';
      break;
    case 17:
      anim = 'domesticdog';
      break;
    case 18:
      anim = 'coyote';
      break;
    case 19:
      anim = 'graywolf';
      break;
    case 20:
      anim = 'whitetaileddeer';
      break;
    case 21:
      anim = 'mountaingoat';
      break;
    case 22:
      anim = 'horse';
      break;
    case 23:
      anim = 'buffalo';
      break;
    case 24:
      anim = 'elk';
      break;
    case 25:
      anim = 'moose';
      break;
    case 26:
      anim = 'blackbear';
      break;
    case 27:
      anim = 'grizzlybear';
      break;
    case 28:
      anim = 'squirrel';
      break;
    case 29:
      anim = 'weasel';
      break;
    case 30:
      anim = 'beaver';
      break;
    case 31:
      anim = 'badger';
      break;
    case 32:
      anim = 'woodchuck';
      break;
    case 33:
      anim = 'skunk';
      break;
    case 34:
      anim = 'opossum';
      break;
    case 35:
      anim = 'armadillo';
      break;
  }
  console.log('Animal is ' + anim);
  $('#animalprint').html('<img src="'+ $(".footer ul li[data-name="+ anim +"] img").attr('data-foot') +'" id="'+ anim +'">');
}
randomAnimal();