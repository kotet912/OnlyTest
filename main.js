document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        const buttonContent = button.querySelector('.button__content');
        const buttonContentHidden = button.querySelector('.button__content.hidden');

        if (buttonContent && buttonContentHidden) {
            button.addEventListener('click', function (event) {
                event.stopPropagation(); 
                buttonContent.classList.toggle('hidden');
                buttonContentHidden.classList.toggle('hidden');
            });

            document.addEventListener('click', function (event) {
                if (!button.contains(event.target)) {
                    buttonContent.classList.remove('hidden');
                    buttonContentHidden.classList.add('hidden');
                }
            });
        }
    });
});
