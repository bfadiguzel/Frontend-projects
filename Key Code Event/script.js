const content = document.getElementById("content");

window.addEventListener('keydown', (key) => {
    content.innerHTML = `

    <div class="key-prop">

        <label>Event.Key</label>
        ${key.key === ' ' ? 'space' : key.key}

    </div>

    <div class="key-prop">
    <label>Event.KeyCode</label>
    ${key.keyCode}</div>


    <div class="key-prop">
    <label>Event.Code</label>
    ${key.code}</div>
    `;
});