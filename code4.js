  document.addEventListener("DOMContentLoaded", function () {
    const targetUrl = "/men";
    const currentUrl = window.location.href;

    if (currentUrl.includes (targetUrl)) {
      const ids = ["sub-heading-Rzn2fOw3yF", "heading-_usz4B27Zm", "paragraph-O-FdPJprIa"];
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = "flex";
      });
    }
  });

 document.addEventListener("DOMContentLoaded", function () {
    const targetUrl = "/woman"; 
    const currentUrl = window.location.href;

    if (currentUrl.includes (targetUrl)) {
      const ids = ["sub-heading-W5oDNNwnNp", "heading-lzFx5Nek3k", "paragraph-f1B6uFcp8a"]; 
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = "flex";
      });
    }
  });


  document.addEventListener("DOMContentLoaded", function () {
    const targetUrl = "/accessories"; 
    const currentUrl = window.location.href;

    if (currentUrl.includes (targetUrl)) {
      const ids = ["sub-heading-Wwae6dxd-Y", "heading-WoroCXqsnS", "paragraph-2VY2vPCB8G"];
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = "flex"; 
      });
    }
  });
