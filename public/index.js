
function getSearchStringFromURL() {
    var path = window.location.pathname
    var pathParts = path.split('/')
    if (pathParts[1] === "search") {
        return pathParts[2]
    } else {
        return null
    }
}

function showModal() {
    var modal = document.getElementById('create-post-modal')
    var modalBackdrop = document.getElementById('modal-backdrop')

    modal.classList.remove('hidden')
    modalBackdrop.classList.remove('hidden')
}

function clearModalInputs() {
    var modalInputElements = document.querySelectorAll('create-post-modal input')
    for (var i = 0; i < modalInputElements.length; i++) {
        modalInputElements[i].value = ''
    }
}

function hideModal() {
    var modal = document.getElementById('create-post-modal')
    var modalBackdrop = document.getElementById('modal-backdrop')

    modal.classList.add('hidden')
    modalBackdrop.classList.add('hidden')

    clearModalInputs()
}

function handleModalAcceptClick() { // not sure if entirely correct
    var title = document.getElementById('post-text-input').value.trim()
    var date = document.getElementById('post-date-input').value.trim()
    var letter = document.getElementById('post-letter-input').value.trim()
    var month = document.getElementById('post-month')
    var tag = document.getElementById('post-condition-fieldset')

    if (!title || !date || !letter || month == 'Month') {
        alert ("Please fill in all of the input fields.")
    } else {

        var reqUrl = "/search/" + getSearchStringFromURL() + "/addPost"
        fetch(reqUrl, {
            method: "POST",
            body: JSON.stringify({
                title: title,
                date: date,
                description: letter,
                month: month,
                tag: tag
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function(res) {
            if (res.status === 200) {
                var letterTemplate = Handlebars.templates.letterCards
                var newLetterHTML = letterTemplate({
                    title: title,
                    date: date,
                    description: letter,
                    month: month,
                    tag: tag
                })
                var letterSection = document.querySelector('posts')
                letterSection.insertAdjacentHTML('beforeend', newLetterHTML)
            } else {
                alert("An error occurred communicating with the server: " + res.status)
            }
        }).catch(function (err) {
            alert("An error occurred communicating with the server: " + err)
        })

        hideModal()
    }
}

window.addEventListener('DOMContentLoaded', function () {

    var createPostButton = document.getElementById('create-post')
    createPostButton.addEventListener('click', showModal)

    var modalAcceptButton = document.getElementById('modal-accept')
    modalAcceptButton.addEventListener('click', handleModalAcceptClick)

    var modalHideButtons = document.getElementsByClassName('modal-hide-button')
    for (var i = 0; i < modalHideButtons.length; i++) {
        modalHideButtons[i].addEventListener('click', hideModal)
    }
})