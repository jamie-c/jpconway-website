// Set the base URL for the Github repository
const ghBaseUrl = 'https://github.com/jamie-c/jpconway-website';

// Set the suffixes for the raw source and history URLs
const ghRawSrc = 'blob';
const ghHistory = 'commits';

// Set the branch name to use
const ghBranch = 'main';

// Function to set link attributes for rel and target
let setRelTarget = (frag) => {
  frag.setAttribute('rel', 'noopener noreferrer');
  frag.setAttribute('target', '_blank');
}

// Function to build a Github URL with the given suffix
let buildGhUrl = (suffix) => {
  return ghBaseUrl + '/' + suffix + '/' + ghBranch + location.pathname;
}

// Build the raw source and history URLs
const ghRawUrl = buildGhUrl(ghRawSrc)
const ghHistoryUrl = buildGhUrl(ghHistory)

// Create a new DocumentFragment to hold the link elements
const fragmentGH = document.createDocumentFragment();

// Create a new div element to hold the link elements
const divGH = document.createElement('div');
divGH.setAttribute('id', 'gh-links');

// Create a new p element to hold the link text
const pGH = document.createElement('p');

// Create a new a element for the raw source link
const rawLink = document.createElement('a');
rawLink.setAttribute('href', ghRawUrl);
setRelTarget(rawLink);
rawLink.textContent = 'Github';

// Create a new a element for the history link
const histLink = document.createElement('a');
histLink.setAttribute('href', ghHistoryUrl);
setRelTarget(histLink);
histLink.textContent = 'history';

// Add the text and link elements to the p element
pGH.append('Updated on ');
pGH.append(rawLink);
pGH.append(' (see ');
pGH.append(histLink);
pGH.append(').');

// Add the p element to the div element
divGH.append(pGH);

// Add the div element to the DocumentFragment
fragmentGH.append(divGH);

// Find the element on the page to add the Github links to
const mainElement = document.getElementsByClassName('footer')[0];

// Add the DocumentFragment with the link elements to the main element
mainElement.append(fragmentGH);
