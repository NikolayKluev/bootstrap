function isVisible(element) {
    let rect = element.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight / 2
    );
}

function setVisible(elements, time) {
    for (let i = 0; i < elements.length; i++) {
        setTimeout(() => {
            elements[i].classList.add('visible');
        }, time * (i + 1));
    }
}

function appearence(div, elements, time) {
    if (isVisible(div)) {
        setVisible(elements, time);
    }
}


document.addEventListener('DOMContentLoaded', () => {

    const body = document.getElementById('page-top');
    body.style.overflowX = 'hidden';

    const about = document.getElementById('about');
    const project = document.getElementById('projects');
    const signup = document.getElementById('signup');
    let emailAddress = document.getElementById('emailAddress');

    const opacityHeader = document.getElementsByClassName('opacity-header');
    const opacityAbout = document.getElementsByClassName('opacity-about');
    const projectItemLeft = document.getElementsByClassName('project-item-left');
    const projectItemRight = document.getElementsByClassName('project-item-right');
    const contactItems = [document.getElementsByClassName('contact-item')];

    let email = emailAddress.placeholder;
    let currentPlaceholder = '';
    emailAddress.placeholder = currentPlaceholder;
    let interval;

    function fullPlaceholder() {
        interval = setInterval(() => {
            if (currentPlaceholder.length < email.length) {
                currentPlaceholder += email[currentPlaceholder.length];
                emailAddress.placeholder = currentPlaceholder;
                console.log(emailAddress.placeholder);
            } else {
                clearInterval(interval);
            }
        }, 500);    
    }

    

    setVisible(opacityHeader, 200);

    window.addEventListener('scroll', () => {
        appearence(about, opacityAbout, 500);
        if (isVisible(project)) {
            setVisible(projectItemLeft, 500);
            setVisible(projectItemRight, 500);
        }
        contactItems.forEach(element => {
            appearence(signup, element, 500);
        });        
        if (isVisible(signup)) fullPlaceholder();        
    });
});