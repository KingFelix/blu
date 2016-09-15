// -- Toggle Fixed Header -- //

var header             = document.querySelector('#header-wrap'),		
    shadow             = 'shadow',
    unfix              = 'un-fixed';

var lastScroll = 0;

    function fixedNav() {
        var newScroll = window.scrollY;
 
        if (newScroll > lastScroll) {
            
            header.classList.remove(shadow);
            header.classList.add(unfix);

        } else if (newScroll == 0) {

            header.classList.remove(shadow);

        } else {
            
            header.classList.add(shadow);
            header.classList.remove(unfix);

        }
        lastScroll = newScroll;
    }

// -- Ensures backward compatibility with IE old versions -- //
function scrollNav() {

	if ( document.addEventListener ) {

		window.addEventListener('scroll', fixedNav);

	} else if ( document.attachEvent ) {

		window.attachEvent('onscroll', fixedNav);

	} else {

		return;
	}
}

scrollNav();

// -- Collapsing Menu -- //

var icon    = document.querySelector('.icon'),
    ham     = document.querySelector('.bar'),
    nav     = document.querySelector('.menu'),
    body    = document.querySelector('body');


function toggle() {
  if ( ham.classList.contains('active') ) {

    ham.classList.remove('active');
    nav.classList.remove('open');
    body.classList.remove('fixed');

    nav.classList.add('close');

  } else {

    ham.classList.add('active');
    nav.classList.add('open');
    body.classList.add('fixed');

    nav.classList.remove('close');
  }
}

function menuClick() {

  icon.addEventListener('click', toggle);

}

menuClick();