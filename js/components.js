async function loadComponent(id, file) {
  try {
    console.log(`Attempting to load ${file} into ${id}`);
    const response = await fetch(file);
    if (!response.ok)
      throw new Error(
        `Failed to load ${file}: ${response.status} ${response.statusText}`
      );
    const html = await response.text();
    console.log(`Loaded ${file}, length: ${html.length}`);
    const container = document.getElementById(id);
    if (!container) throw new Error(`Container #${id} not found`);
    container.innerHTML = html;
    console.log(`Injected ${file} into ${id}`);
  } catch (error) {
    console.error(`Error loading component ${file}:`, error);
  }
}

Promise.all([
  loadComponent("site-header", "components/header.html"),
  loadComponent("site-footer", "components/footer.html"),
]).then(() => {
  if (typeof initHeader === "function") initHeader();
  if (typeof initFooter === "function") initFooter();

  requestAnimationFrame(() => {
    document.body.classList.add("loaded");
  });
});
