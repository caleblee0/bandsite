const parent2 = document.getElementById('shows__container');

showsArray = [{
    Date: 'Mon Sept 06 2021',
    Venue: 'Ronald Lane',
    Location: 'San Francisco, CA'
}, {
    Date: 'Tue Sept 21 2021',
    Venue: 'Pier 3 East',
    Location: 'San Francisco, CA'    
}, {
    Date: 'Fri Oct 15 2021',
    Venue: 'View Lounge',
    Location: 'San Francisco, CA'    
}, {
    Date: 'Sat Nov 06 2021',
    Venue: 'Hyatt Agency',
    Location: 'San Francisco, CA' 
}, {
    Date: 'Fri Nov 26 2021',
    Venue: 'Moscow Center',
    Location: 'San Francisco, CA'    
}, {
    Date: 'Wed Dec 15 2021',
    Venue: 'Press Club',
    Location: 'San Francisco, CA'    
}
];

function displayShows() {
    for (i=showsArray.length-1; i >= 0; i--) {
    let createLi = document.createElement('li');
    let createH3 = document.createElement('h3');
    let createP = document.createElement('p');

    createH3.innerText = showsArray[i].Date;
    createP.innerText = showsArray[i].Venue;
    createP.innerText = showsArray[i].Location;

    parent.appendChild(createLi);
    createLi.appendChild(createH3);
    createLi.appendChild(createP);
    createLi.appendChild(createP);
};
};

displayShows();
