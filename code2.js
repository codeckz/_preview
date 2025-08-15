<script>
//Men
  document.addEventListener("DOMContentLoaded", function () {
    const targetUrl = "https://barakogym.com/products/collections/woman"; // Replace with your actual URL
    const currentUrl = window.location.href;

    if (currentUrl.includes (targetUrl)) {
      const ids = ["sub-heading-Rzn2fOw3yF", "heading-_usz4B27Zm", "paragraph-O-FdPJprIa"]; // Add your element IDs here
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = "flex"; // Or "flex", depending on layout
      });
    }
  });

//Woman
 document.addEventListener("DOMContentLoaded", function () {
    const targetUrl = "/woman"; // Replace with your actual URL
    const currentUrl = window.location.href;

    if (currentUrl.includes (targetUrl)) {
      const ids = ["sub-heading-W5oDNNwnNp", "heading-lzFx5Nek3k", "paragraph-f1B6uFcp8a"]; // Add your element IDs here
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = "flex"; // Or "flex", depending on layout
      });
    }
  });


//Accessories
  document.addEventListener("DOMContentLoaded", function () {
    const targetUrl = "/accessories"; // Replace with your actual URL
    const currentUrl = window.location.href;

    if (currentUrl.includes (targetUrl)) {
      const ids = ["sub-heading-Wwae6dxd-Y", "heading-WoroCXqsnS", "paragraph-2VY2vPCB8G"]; // Add your element IDs here
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = "flex"; // Or "flex", depending on layout
      });
    }
  });
</script>
