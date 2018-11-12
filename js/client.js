const Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize({
  'card-badges': function(t, options) {
    return t.card('desc')
    .get('desc')
    .then(function(description){
      return [{
        title: 'Coding duration',
        color: description ? 'green' : null,
        icon: 'https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Frocket-ship-grey.png?1496162964717',
        text: 'Time coding: ' + time(description) || '0'
      }];
    });
  }
});