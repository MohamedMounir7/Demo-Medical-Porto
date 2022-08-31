console.log("hello");
const singleDocContainer = document.querySelector("singleDoctor");
const doctorsContainer = document.getElementById("doctor");

// const doctorList = [
//   {
//     name: "John Doe",
//     description: "Cardiology",
//     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedtempus nibh sed elimttis adipiscing. Fusce in hendrerit purus.Suspendisse potenti. Proin quis eros odio, dapibus dictum mauris.Donec nisi libero, adipiscing id pretium eget, consectetur sitamet leo. Nam at eros quis mi egestas fringilla non nec purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedtempus nibh sed elimttis adipiscing. Fusce in hendrerit purus.Suspendisse potenti. Proin quis eros odio, dapibus dictum mauris.Donec nisi libero, adipiscing id pretium eg et, consectetur sitamet leo",
//     src: "./Images/doctor-1.jpg",
//   },
//   {
//     name: "Robin Doe",
//     description: "Gastroenterology",
//     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedtempus nibh sed elimttis adipiscing. Fusce in hendrerit purus.Suspendisse potenti. Proin quis eros odio, dapibus dictum mauris.Donec nisi libero, adipiscing id pretium eget, consectetur sitamet leo. Nam at eros quis mi egestas fringilla non nec purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedtempus nibh sed elimttis adipiscing. Fusce in hendrerit purus.Suspendisse potenti. Proin quis eros odio, dapibus dictum mauris.Donec nisi libero, adipiscing id pretium eg et, consectetur sitamet leo",
//     src: "./Images/doctor-2.jpg",
//   },
//   {
//     name: "Mailk Doe",
//     description: "Pulmonology",
//     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedtempus nibh sed elimttis adipiscing. Fusce in hendrerit purus.Suspendisse potenti. Proin quis eros odio, dapibus dictum mauris.Donec nisi libero, adipiscing id pretium eget, consectetur sitamet leo. Nam at eros quis mi egestas fringilla non nec purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedtempus nibh sed elimttis adipiscing. Fusce in hendrerit purus.Suspendisse potenti. Proin quis eros odio, dapibus dictum mauris.Donec nisi libero, adipiscing id pretium eg et, consectetur sitamet leo",
//     src: "./Images/doctor-3.jpg",
//   },
//   {
//     name: "Rose Doe",
//     description: "Dental",
//     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedtempus nibh sed elimttis adipiscing. Fusce in hendrerit purus.Suspendisse potenti. Proin quis eros odio, dapibus dictum mauris.Donec nisi libero, adipiscing id pretium eget, consectetur sitamet leo. Nam at eros quis mi egestas fringilla non nec purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedtempus nibh sed elimttis adipiscing. Fusce in hendrerit purus.Suspendisse potenti. Proin quis eros odio, dapibus dictum mauris.Donec nisi libero, adipiscing id pretium eg et, consectetur sitamet leo",
//     src: "./Images/doctor-4.jpg",
//   },
// ];

// const displayALLDoctors = () => {
//   let content = "";
//   doctorList.map((doc) => {
//     content += ` 
//     <div class="col-sm-12 col-md-3" onclick="toggleText()">
//     <div class="img">
//       <img src=${doc.src} />
//     </div>
//     <div class="text">
//       <p>${doc.description}</p>
//       <h5>
//          ${doc.name}<img src="./Images/arrow-right-circle.svg" alt="" />
//       </h5>
//     </div>
//   </div>;`;
//   });
//   doctorsContainer.innerHTML = content;
// };
// displayALLDoctors();



function toggleText(){
    var x = document.querySelector(".Doc");
    console.log(x)
    x.style.display === "none";
    x.style.display = "block";
  }

