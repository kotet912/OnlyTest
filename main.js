document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button');
    let currentlyOpen = null;

    function toggleButton (button) {
        if (currentlyOpen === button) {
            button.classList.remove('open');
            currentlyOpen = null;
        } else {
            if (currentlyOpen) {
                currentlyOpen.classList.remove('open');
            }
            button.classList.add('open');
            currentlyOpen = button;
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            toggleButton(button);
        });
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.button') && currentlyOpen) {
            currentlyOpen.classList.remove('open');
            currentlyOpen = null;
        }
    });
});
