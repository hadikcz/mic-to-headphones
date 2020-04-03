function start() {
  navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia || navigator.msGetUserMedia);
  var aCtx;
  var analyser;
  var microphone;
  if (navigator.getUserMedia) {
    navigator.getUserMedia({audio: true}, function (stream) {
      try {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        aCtx = new AudioContext();
      } catch (e) {
        alert('Web Audio API is not supported in this browser');
      }
      analyser = aCtx.createAnalyser();
      microphone = aCtx.createMediaStreamSource(stream);
      microphone.connect(analyser);
      analyser.connect(aCtx.destination);
    }, function () {
      console.warn('Error getting audio stream from getUserMedia')
    });
  };
}

