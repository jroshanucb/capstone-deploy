function loadselectors(){const e=document.querySelectorAll(".panel");e.forEach(s=>{s.addEventListener("mouseenter",()=>{removeActiveClasses(e),s.classList.add("active")})})}function removeActiveClasses(e){e.forEach(e=>{e.classList.remove("active")})}