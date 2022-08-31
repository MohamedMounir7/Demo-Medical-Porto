const depart = document.querySelector(".Depart");
const departmentsContainer = document.getElementById("departments");
const singleDepContainer = document.getElementById("singleDep");
const sideNavUl = document.getElementById("sideNavUl");


const departmentList = [
  {
    name: "Cardiology",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor quam, sagittis eget pulvinar id, vulputate sit amet nisi. Etiam dui massa, semper eget pulvinar eget, imperdiet et neque. Donec rutrum purus a lectus consequat cursus. Curabitur sed lacinia felis. Phasellus non purus sit amet purus molestie molestie. Phasellus ornare volutpat nibh ut vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    src: "./Images/department-icon-cardiology.png",
  },
  {
    name: "Gastroenterology",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor quam, sagittis eget pulvinar id, vulputate sit amet nisi. Etiam dui massa, semper eget pulvinar eget, imperdiet et neque. Donec rutrum purus a lectus consequat cursus. Curabitur sed lacinia felis. Phasellus non purus sit amet purus molestie molestie. Phasellus ornare volutpat nibh ut vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    src: "./Images/department-icon-gastroenterology.png",
  },
  {
    name: "Pulmonology",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor quam, sagittis eget pulvinar id, vulputate sit amet nisi. Etiam dui massa, semper eget pulvinar eget, imperdiet et neque. Donec rutrum purus a lectus consequat cursus. Curabitur sed lacinia felis. Phasellus non purus sit amet purus molestie molestie. Phasellus ornare volutpat nibh ut vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    src: "./Images/department-icon-pulmonology.png",
  },
  {
    name: "Dental",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor quam, sagittis eget pulvinar id, vulputate sit amet nisi. Etiam dui massa, semper eget pulvinar eget, imperdiet et neque. Donec rutrum purus a lectus consequat cursus. Curabitur sed lacinia felis. Phasellus non purus sit amet purus molestie molestie. Phasellus ornare volutpat nibh ut vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    src: "./Images/department-icon-dental.png",
  },
  {
    name: "Gynecology",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor quam, sagittis eget pulvinar id, vulputate sit amet nisi. Etiam dui massa, semper eget pulvinar eget, imperdiet et neque. Donec rutrum purus a lectus consequat cursus. Curabitur sed lacinia felis. Phasellus non purus sit amet purus molestie molestie. Phasellus ornare volutpat nibh ut vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    src: "./Images/department-icon-gynecology.png",
  },
  {
    name: "Hepatology",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor quam, sagittis eget pulvinar id, vulputate sit amet nisi. Etiam dui massa, semper eget pulvinar eget, imperdiet et neque. Donec rutrum purus a lectus consequat cursus. Curabitur sed lacinia felis. Phasellus non purus sit amet purus molestie molestie. Phasellus ornare volutpat nibh ut vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    src: "./Images/department-icon-hepatology.png",
  },
];

const displayALLDepartments = () => {
  let content = "";
  departmentList.map((dep) => {
    content += `<div class="lolo d-flex">
    <div class="icon">
      <img src=${dep.src} />
    </div>
    <div class="text p-3">
      <h3>${dep.name}</h3>
      <p>${dep.description}</p>
      <button
        type="button"
        class="btn btn-outline-dark"
        onclick="toggleText('${dep.name}')"
      >
        VIEW MORE...
      </button>
    </div>
  </div>
  <br />
  <hr />
  <br />`;
  });
  departmentsContainer.innerHTML = content;
};

const displaySideElements = () => {
  
let url = window.location.href;
let idx = url.indexOf('#');
let href = url.substring(idx+1)

  let items = "";
  departmentList.map((dep) => {
    items += `
    <li class="nav-item">
      <a
        class="nav-link ${href === dep.name && "active"}"
        href="#${dep.name}"
        onclick="toggleText('${dep.name}')"
        >${dep.name}</a
      >
    </li>
    `;
  });
  sideNavUl.innerHTML = items;
};

function toggleText(depName) {
  window.location.href = `Department.html#${depName}`
  var x = document.querySelector(".Depart");
  var y = document.querySelector(".demo");
  const depart = departmentList.find((dep) => dep.name === depName);
  singleDepContainer.innerHTML = `
  <div class="feature-box feature-box-style-2 mb-4">
            <div class="feature-box-icon w-auto d-none d-sm-block">
              <img
                src=${depart.src}
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="feature-box-info ps-0 ps-sm-3">
              <h2 class="font-weight-semibold mb-3">${depart.name}</h2>
              <p class="lead font-weight-semibold">
                At Porto Medical, we offer a wide array of departments, gravida
                nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
                amet mauris.
              </p>

              <p class="lead font-weight-normal">${depart.description}</p>
            </div>
          </div>
  `;
  x.style.display = "block";
  y.style.display = "none";
  displaySideElements()
}

displayALLDepartments();
displaySideElements();
