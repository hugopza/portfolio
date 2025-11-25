const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  "/": "pages/work.html",
  "/index.html": "pages/work.html",
  "/work": "pages/work.html",
  "/about": "pages/about.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  let route = routes[path] || routes["/"];

  if (!routes[path] && path.endsWith("/")) {
    const trimmedPath = path.slice(0, -1);
    if (routes[trimmedPath]) route = routes[trimmedPath];
  }

  try {
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("content").innerHTML = html;

    updateActiveLink(path);
  } catch (error) {
    console.error("Error loading page:", error);
  }
};

const updateActiveLink = (path) => {
  const links = document.querySelectorAll("nav a");
  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (
      path.endsWith(href) ||
      (path === "/" && href === "index.html") ||
      (path === "/" && href === "/")
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  if (typeof window.moveNavIndicator === "function") {
    const activeLink = document.querySelector("nav a.active");
    if (activeLink) {
      window.moveNavIndicator(activeLink);
    }
  }
};

document.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (link) {
    const href = link.getAttribute("href");
    if (
      href &&
      (href.startsWith("/") ||
        href.startsWith("index") ||
        href.startsWith("about") ||
        href.startsWith("work"))
    ) {
      if (!href.startsWith("#") && !href.startsWith("http")) {
        e.preventDefault();
        window.history.pushState({}, "", href);
        handleLocation();
      }
    }
  }
});

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
