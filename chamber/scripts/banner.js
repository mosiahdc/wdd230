document.addEventListener('DOMContentLoaded', function() {
    
    const modal = document.getElementById('modal-container');

    const bannerDiv = document.createElement('div');
    const close = document.createElement('span');
    const message = document.createElement('p');

    bannerDiv.setAttribute('id', 'banner');

    close.setAttribute('id', 'close-btn');
    close.innerHTML = `&times;`;

    message.innerHTML = `<strong>📢 You are invited! 📢</strong><br><br> Attend our Negros Chamber meet and greet on 📅 Wednesday @ 7:00 pm.`;

    bannerDiv.appendChild(close);
    bannerDiv.appendChild(message);

    modal.appendChild(bannerDiv);

    const today = new Date().getDay();

    if (today >= 1 && today <= 3) {
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
    }

    close.onclick = function() {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    };

});
