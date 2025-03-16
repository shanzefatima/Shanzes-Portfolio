AOS.init();

/* Project Cards */
const projectcards = document.querySelector(".projectcards");

// Array of objects for projects
const projects = [
  

  {
    title: "A 3D DATA FOREST OF COVID-19'S IMPACT IN SOUTH ASIA",
    cardImage: "assets/images/project-page/02.jpg",
    //description: "In my project, I explored how certain demographic indicators were affected during the course of the pandemic in relation to cases, deaths, and population.",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "https://medium.com/@sj3802/the-covid-19-data-forest-data-visualization-of-the-pandemics-global-impact-35ca0b206512",
    //Githublink: "https://s18798.pcdn.co/shanghai-shanze/wp-content/uploads/sites/28491/2023/12/DCMI-updated-poster.pdf",

  }
  , 
 {
  title: "Sustainable Energy Management via IoT — Implementation",
  cardImage: "assets/images/project-page/p3.jpg",
  //description: "In my project, I explored how certain demographic indicators were affected during the course of the pandemic in relation to cases, deaths, and population.",
  tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
  Previewlink: "https://medium.com/@sj3802/sustainable-energy-management-via-iot-implementation-19887962fa39",
  //Githublink: "https://s18798.pcdn.co/shanghai-shanze/wp-content/uploads/sites/28491/2023/12/DCMI-updated-poster.pdf",

}
, 

{
  title: "Digital Product Design: Meal App"  ,
  cardImage: "assets/images/project-page/p8.jpg",
  //description: "In my project, I explored how certain demographic indicators were affected during the course of the pandemic in relation to cases, deaths, and population.",
  tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
  Previewlink: "https://medium.com/@sj3802/digital-product-design-meal-app-db3d1d6199dd",
  //Githublink: "https://s18798.pcdn.co/shanghai-shanze/wp-content/uploads/sites/28491/2023/12/DCMI-updated-poster.pdf",

}

, 

{
  title: "Hyper Market : Grocery Shopping Experience",
  cardImage: "assets/images/project-page/ph.jpg",
  //description: "In my project, I explored how certain demographic indicators were affected during the course of the pandemic in relation to cases, deaths, and population.",
  tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
  Previewlink: "https://medium.com/@sj3802/hyper-market-redefining-the-online-grocery-shopping-experience-e0bc33cf3636",
  //Githublink: "https://s18798.pcdn.co/shanghai-shanze/wp-content/uploads/sites/28491/2023/12/DCMI-updated-poster.pdf",

}
,

{
  title: "Redesigning Snapchat Interface"  ,
  cardImage: "assets/images/project-page/p6.jpg",
  //description: "In my project, I explored how certain demographic indicators were affected during the course of the pandemic in relation to cases, deaths, and population.",
  tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
  Previewlink: "https://medium.com/@sj3802/redesigning-snapchat-interface-0135c70069d3",
  //Githublink: "https://s18798.pcdn.co/shanghai-shanze/wp-content/uploads/sites/28491/2023/12/DCMI-updated-poster.pdf",

}

];

// Function to render project cards
const showCards = () => {
  let output = "";
  projects.forEach((project, index) => {
    output += `       
      <div class="column skill-card card" style="margin: 15px" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600">
        <div class="wrapper" style="background: url(${project.cardImage}) center / cover no-repeat;">
          <div class="header">
          </div>
          <div class="data">
            <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="${project.Previewlink}" target="_blank">${project.title}</a></h1>
              </div>
              <ul class="menu-content"><br>
                <li><a href="${project.Previewlink}" class="social-icon">...</a></li>
                <li><a href="${project.Githublink}" class="social-icon">...</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>`;
  });
  projectcards.innerHTML = output;

  // Add event listeners to buttons
  document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', () => {
      const index = button.getAttribute('data-index');
      const caseStudyContent = projects[index].caseStudy;
      document.querySelector('#caseStudyModal .modal-body').innerHTML = caseStudyContent;
    });
  });
};

// Render project cards when the DOM is loaded
document.addEventListener("DOMContentLoaded", showCards);

// Search functionality
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
    if (title[i].innerHTML.toUpperCase().includes(input)) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}