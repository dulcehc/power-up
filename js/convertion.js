// convertion from seconds to "hours:minutes" format

function time(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  return `${hours}:${minutes}`;
}