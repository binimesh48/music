var wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: 'red',
  progressColor: 'hsla(200, 200%, 30%, 0.5)',
  cursorColor: '#fff',
   barWidth: 4
});

wavesurfer.load('https://ia601307.us.archive.org/14/items/SylviaPlathOnThePlethoraOfDryads/Perseus-The%20Triumph%20Of%20Wit%20Over%20Suffering.mp3');

wavesurfer.on('ready', function () {
  $(wavesurfer.params.container).removeClass('loading');
  $('#play-pause').click(function () {
    wavesurfer.playPause();
  });
});