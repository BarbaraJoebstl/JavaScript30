const checkboxes = document.querySelectorAll('.chefchecker input[type="checkbox"]');
let lastChecked;
function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
        draw( checkbox, checkbox );
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));


function draw( el, type ) {
  var paths = [], pathDef,
    animDef,
    svg = el.parentNode.querySelector( 'svg' );

  switch( type ) {
    case 'cross': pathDef = pathDefs.cross; animDef = animDefs.cross; break;
    case 'fill': pathDef = pathDefs.fill; animDef = animDefs.fill; break;
    case 'checkmark': pathDef = pathDefs.checkmark; animDef = animDefs.checkmark; break;
    case 'circle': pathDef = pathDefs.circle; animDef = animDefs.circle; break;
    case 'boxfill': pathDef = pathDefs.boxfill; animDef = animDefs.boxfill; break;
    case 'swirl': pathDef = pathDefs.swirl; animDef = animDefs.swirl; break;
    case 'diagonal': pathDef = pathDefs.diagonal; animDef = animDefs.diagonal; break;
    case 'list': pathDef = pathDefs.list; animDef = animDefs.list; break;
  };

  paths.push( document.createElementNS('http://www.w3.org/2000/svg', 'path' ) );

  if( type === 'cross' || type === 'list' ) {
    paths.push( document.createElementNS('http://www.w3.org/2000/svg', 'path' ) );
  }

  for( var i = 0, len = paths.length; i < len; ++i ) {
    var path = paths[i];
    svg.appendChild( path );

    path.setAttributeNS( null, 'd', pathDef[i] );

    var length = path.getTotalLength();
    // Clear any previous transition
    //path.style.transition = path.style.WebkitTransition = path.style.MozTransition = 'none';
    // Set up the starting positions
    path.style.strokeDasharray = length + ' ' + length;
    if( i === 0 ) {
      path.style.strokeDashoffset = Math.floor( length ) - 1;
    }
    else path.style.strokeDashoffset = length;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    path.getBoundingClientRect();
    // Define our transition
    path.style.transition = path.style.WebkitTransition = path.style.MozTransition  = 'stroke-dashoffset ' + animDef.speed + 's ' + animDef.easing + ' ' + i * animDef.speed + 's';
    // Go!
    path.style.strokeDashoffset = '0';
  }
}

function reset( el ) {
  Array.prototype.slice.call( el.parentNode.querySelectorAll( 'svg > path' ) ).forEach( function( el ) { el.parentNode.removeChild( el ); } );
}
