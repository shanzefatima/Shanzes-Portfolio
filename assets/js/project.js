AOS.init();

/* Project Cards */
const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Audio Art",
    cardImage: "assets/images/project-page/p1.jpg",
    description: "An artificial intelligence bot that chats with users like Google does",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://shanzefatima.github.io/CCLAB/Project%20B/main.html",
    Githublink: "https://shanzefatima.github.io/CCLAB/Project%20B/main.html"
  },
  {
    title: "A 3D DATA FOREST OF COVID-19'S IMPACT IN SOUTH ASIA",
    cardImage: "assets/images/project-page/02.jpg",
    description: "In my project, I explored how certain demographic indicators were affected during the course of the pandemic in relation to cases, deaths, and population.",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "https://medium.com/@sj3802/the-covid-19-data-forest-data-visualization-of-the-pandemics-global-impact-35ca0b206512",
    Githublink: "https://s18798.pcdn.co/shanghai-shanze/wp-content/uploads/sites/28491/2023/12/DCMI-updated-poster.pdf"
  }
];

const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, Previewlink, Githublink }) => {
      output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
                <div class="title-div">
                  <h1 class="title"><a href="${Previewlink}" target="_blank">${title}</a></h1> <!-- Add href attribute here -->
                </div>
                <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon">...</a></li>
                  <li><a href="${Githublink}" class="social-icon">...</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
    }
  );
  projectcards.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < title.length; i++) {
    if (
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}