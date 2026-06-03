// 1. BACK TO TOP SMOOTH SCROLL
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 2. OFF-CANVAS SLIDEOUT TOGGLE LOGIC (Works for both Mobile Header and Bottom App Nav)
const menuToggle = document.getElementById("menuToggle");
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const mobileBottomMenuBtn = document.getElementById("mobileBottomMenuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

const toggleSidebar = (open) => {
  if (open) {
    overlay.classList.remove("hidden");
    setTimeout(() => {
      overlay.classList.add("opacity-100");
      sidebar.classList.remove("-translate-x-full");
      closeBtn.classList.remove("hidden");
    }, 10);
    document.body.classList.add("overflow-hidden");
  } else {
    sidebar.classList.add("-translate-x-full");
    overlay.classList.remove("opacity-100");
    closeBtn.classList.add("hidden");
    setTimeout(() => {
      overlay.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    }, 300);
  }
};

if (menuToggle) menuToggle.addEventListener("click", () => toggleSidebar(true));
if (mobileMenuToggle)
  mobileMenuToggle.addEventListener("click", () => toggleSidebar(true));
if (mobileBottomMenuBtn)
  mobileBottomMenuBtn.addEventListener("click", () => toggleSidebar(true));

overlay.addEventListener("click", () => toggleSidebar(false));
closeBtn.addEventListener("click", () => toggleSidebar(false));

// 3. ACCORDION SIDEBAR EXPANSION
const seeAllBtn = document.getElementById("seeAllBtn");
const expandedDepts = document.getElementById("expandedDepartments");
const seeAllChevron = document.getElementById("seeAllChevron");

seeAllBtn.addEventListener("click", () => {
  const isHidden = expandedDepts.classList.contains("hidden");
  if (isHidden) {
    expandedDepts.classList.remove("hidden");
    seeAllBtn.querySelector("span").innerText = "See Less";
    seeAllChevron.classList.add("rotate-180");
  } else {
    expandedDepts.classList.add("hidden");
    seeAllBtn.querySelector("span").innerText = "See All";
    seeAllChevron.classList.remove("rotate-180");
  }
});

// 4. FUNCTIONAL DROPDOWN FOR CENTRAL DEPARTMENTS INTERACTION
const searchDropdownBtn = document.getElementById("searchDropdownBtn");
const searchDeptMenu = document.getElementById("searchDeptMenu");
const currentDeptText = document.getElementById("currentDept");
const deptOptions = document.querySelectorAll(".dept-option");

if (searchDropdownBtn) {
  searchDropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    searchDeptMenu.classList.toggle("hidden");
  });
}

deptOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    currentDeptText.innerText = e.target.innerText;
    searchDeptMenu.classList.add("hidden");
  });
});

document.addEventListener("click", () => {
  if (searchDeptMenu && !searchDeptMenu.classList.contains("hidden")) {
    searchDeptMenu.classList.add("hidden");
  }
});
