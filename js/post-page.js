// This file uses the postsInfo array of objects found in the posts.js file.
// posts.js should be called in the html along with this current file.

// Below is the post format from the posts.js file
// const postsInfo = [ 
//     {
//         title: "Hello World!",
//         fileName: "2023-03-22-hello-world.html",
//         datePosted: "March 22",
//         monthPosted: 03,
//         yearPosted: 2023,
//         dateCode: 20230322,
//     },
// ];

const currentYear = new Date().getFullYear();

// Build the html that contains the post information.
const createPostHtml = (item) => {
    // This function accepts a given object item and returns an html fragment
    const title = item.title;
    const file = item.fileName;
    const date = item.datePosted;
    const year = item.yearPosted;

    const fragment = new DocumentFragment;
    const postInfoDiv = document.createElement('div');
    const dateDiv = document.createElement('div');
    const b = document.createElement('b');
    const postTitleDiv = document.createElement('div');
    const postUrl = document.createElement('a');

    postInfoDiv.setAttribute('class', 'post-info');
    dateDiv.setAttribute('class', 'date');
    postTitleDiv.setAttribute('class', 'post-title');
    postUrl.setAttribute('href', "../posts/" + file);
    
    b.textContent = date;
    postUrl.textContent = title;
    
    dateDiv.append(b);
    postTitleDiv.append(postUrl);
    postInfoDiv.append(dateDiv);
    postInfoDiv.append(postTitleDiv);
    fragment.append(postInfoDiv);
    return fragment;
}

// Posts are separated by year, so need to separate posts by year, then by month
// Define function to create year html fragment
const createYearHtml = (year) => {
    // This function accepts a given number and returns an html fragment
    const fragment = new DocumentFragment;
    const section = document.createElement('section');
    const h = document.createElement('h2');

    section.setAttribute('class', 'year-container');
    section.setAttribute('id', year);
    h.setAttribute('class', 'year');
    
    h.innerText = year;
    section.append(h);
    fragment.append(section);
    return fragment;
}

// Define function to create month html fragment
const createMonthHtml = (month) => {
    // This funciton accepts a given date adn returns an html fragment
    const fragment = new DocumentFragment;
    const div = document.createElement('div');
    div.setAttribute('id', month);
    div.setAttribute('class', 'posts');
    fragment.append(div);
    return fragment;
}

// Append posts to .page-content
const pageContent = document.getElementsByClassName('page-content');
const compareNumbers = (a, b) => {
    return -(a.dateCode - b.dateCode);
}
postsInfo.sort(compareNumbers).forEach((post) => {
    let postDate = post.yearPosted + '-' + post.monthPosted.toString().padStart(2, '0');

    if (document.getElementById(post.yearPosted) == null) {
        let theYear = createYearHtml(post.yearPosted);
        pageContent[0].append(theYear);
    };
    let yearSection = document.getElementById(post.yearPosted);
    if (document.getElementById(postDate) == null) {
        let theMonth = createMonthHtml(postDate);
        yearSection.append(theMonth);
    };
    let monthSection = document.getElementById(postDate);
    monthSection.append(createPostHtml(post));
});
