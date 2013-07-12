
/* Responsive Magento
 * Scripts for implementing responsive features in Magento components
 */

/* Responsive Magento navbar
 * Supports desktop and touch enabled devices
 */

function respond(notResize){
    var navbars = document.getElementsByClassName('navbar');
    var navbar, navContainer, button, nav;
    body = $(document.getElementsByTagName('body')[0]);

    for(var i = 0; i < navbars.length; i++){
        navbar = $(navbars[i]);
        navContainer = $(navbar.getElementsByClassName('nav-container')[0]);

        if(notResize){
            button = navbar.getElementsByClassName('expander')[0];
            nav = $(navbar.getElementsByClassName('nav')[0]);

            if(button.touch){
                button.on('touch', 'button', function(e){
                    button.click();
                });
            }
            button.on('click', 'button', function(e){
                if(nav.className == 'nav open'){
                    navContainer.slideUp({duration: 0.2});
                    nav.className = 'nav';
                }
                else{
                    navContainer.slideDown({duration: 0.5});
                    nav.addClassName('open');
                }
            });
        }

        if(body.measure('width') < 979){
            navbar.addClassName('collapse');
            navContainer.hide();
        }
        else{
            navbar.className = 'navbar';
            navContainer.show();
        }
    }
}

window.onload = function(){
    respond(true);
};

window.onresize = function(){
    respond(false);
};

