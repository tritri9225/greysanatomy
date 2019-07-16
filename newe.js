function toggleSection(im) {
  var elt = document.getElementById(im)

  if (elt.style.visibility === 'hidden') {
    elt.style.visibility = 'visible';
  } else {
    elt.style.visibility = 'hidden';
  }
}
