async function loadComponent(id, file) {
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`Failed to load ${file}`);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

Promise.all([
  loadComponent("site-header", "components/header.html"),
  loadComponent("site-footer", "components/footer.html"),
]).then(() => {
  if (typeof initHeader === "function") initHeader();

  requestAnimationFrame(() => {
    document.body.classList.add("loaded");
  });
});
