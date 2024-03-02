/*Reference Details Table*/
// Changes made 10/1/2021:
// Added reviewphoto1 - reviewphoto5 in assets/references-page
// Changed names and descriptions of references
const referenceTable = document.querySelector(".pain");

const references = [
    {
        sl1:1,
        name1 : "Mehr Un Nisa Javed",
        designation1 : "Co-founder Rights of Women Campaign",
        image1 : "assets/images/references-page/reviewphoto1.png",
        message1 : "It was a pleasure to work with Shanze, she has a lot of knowledge, experience, and creativity.Her passion to make a difference in the community is commendable and I am looking forward for her to reach her milestones",
        

        sl2:2,
        name2 : "Andy Grant",
        designation2 : "Mentor for Mozilla at Google Summer of Code", 
        image2: "assets/images/references-page/reviewphoto2.png",
        message2 : "Shanze was part of my team during Google’s Summer of Code program. As her mentor, I worked with her on the Extension Activity Monitor for Firefox. I was constantly impressed with her expertise in programming and her dedication she displayed for completing the project.",
        
        
    },



    {
        sl1:5,
        name1 : " Lucy Richardson",
        designation1 : "Mentor, PClub Summer of Code",
        image1 : "assets/images/references-page/reviewphoto5.png",
        message1 : "Shanze was my co-mentor for PClub Summer of Code in 2020. During those two months, she worked tirelessly and patiently with our mentees. She helped them set up their work environments and created a fun environment for them to learn and display their knowledge. I enjoyed working with her, and our mentees definitely cherished the experiences that she provided for them.",
        
        
    
        sl1:7,
        name1 : "Hannah D'souza",
        designation1 : "Mentor, GirlScript Summer of Code",
        image1 : "assets/images/references-page/reviewphoto1.png",
        message1 : "Shanze has shown great interest in handling our projects. She is extremely hard-working, honest and dependable. Beyond that, she is an impressive problem solver",
       

        
    },

    {
        sl2:1,
        name2 : "Krystle Thomas",
        designation2 : "Founder, ULHacks",
        image2: "assets/images/references-page/reviewphoto3.png",
        message2 : "Shanze has been a fantastic judge to the hackathon. Very hardworking, smart, and always a learner!",
        

        sl2:1,
        name2 : "Esther Tony",
        //designation2 : "SDE, Flipkart",
        image2: "assets/images/references-page/reviewphoto4.png",
        message2 : "I had worked with Shanze in research intern team. Shanze would be an asset to have on any team. To say she's a team leader would be an understatement. during her tenure at our company, she's gone out of his way to welcome newcomers and resolve any problems they might have. She pitches innovative ideas at company meetings but also listens to what others have to say, including constructive criticism. When budgetary constraints limited the work our company could complete, Shanze put her highly creative mind to use to come up with alternatives.",
        
    }
];

AOS.init();   
const fillData = () => {
    let output = "";
    
    references.forEach(
        (
            { sl1, image1, name1, designation1, message1, absbox_for_linkedin1,
             sl2, image2, name2, designation2, message2, absbox_for_linkedin2 }
        ) =>
           (output +=
            `<tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image1}" class="rImg"></td>
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image1}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name1} </a> 
                    <div> ${designation1} </div> <div class="rConferences">  
                        <div class="referenceY">${message1}</div>
                    </div>  
                </td>
            </tr> 
            
            <tr data-aos="zoom-in-left"> 
                       
                        <td class = "referenceTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img src="${image2}" class="imgRes">
                                </span>
                            </div>
                            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                            <a href="#0" class="paperTitle">${name2} </a> 
                            <div> ${designation2} </div> <div class="rConferences">
                                <div class="referenceY">${message2}</div>
                            </div>
                
                            
                            
                           
                        </td>
                        <td class="imgCol"><img src="${image2}" class="rImg1"></td>
                    </tr>`
                )
            );
            referenceTable.innerHTML = output;
        }
document.addEventListener("DOMContentLoaded", fillData);
