const parent = document.getElementById('commentSection');

initialComment = [{
    name: 'Connor Walton',
    comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.'
}, {
    name: 'Emilie Beach',
    comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.'
}, {
    name: 'Miles Acosta',
    comment: 'I can\'t stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can\'t get enough.'
}
];

function addComment(event) {
    event.preventDefault();

    let lastSubmission = {
        name: form.name.value,
        comment: form.comment.value,
    };

    initialComment.push(lastSubmission);

    function removeAllComments(parent) {
        while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
        };
    };

    removeAllComments(parent);

    for (i=initialComment.length-1; i >= 0; i--) {
        let createLi = document.createElement('li');
        let createH3 = document.createElement('h3');
        let createP = document.createElement('p');

        createH3.innerText = initialComment[i].name;
        createP.innerText = initialComment[i].comment;

        parent.appendChild(createLi);
        createLi.appendChild(createH3);
        createLi.appendChild(createP);
    };
};

const form = document.querySelector('form');
form.addEventListener('submit', addComment);

for (i=initialComment.length-1; i >= 0; i--) {
    let createLi = document.createElement('li');
    let createH3 = document.createElement('h3');
    let createP = document.createElement('p');

    createH3.innerText = initialComment[i].name;
    createP.innerText = initialComment[i].comment;

    parent.appendChild(createLi);
    createLi.appendChild(createH3);
    createLi.appendChild(createP);
};