const header = document.querySelector(".site-header");

function updateHeader() {
  if (header) {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Add future media coverage items here
const mediaItems = [
  {
    publication: "EIN Presswire",
    date: "July 13, 2026",
    datetime: "2026-07-13",
    language: "English",
    title: "25-Year-Old Japanese Entrepreneur Brings Tea Ceremony to San Francisco Homes in the Age of AI",
    url:
      "https://www.einpresswire.com/article/925934035/25-year-old-japanese-entrepreneur-brings-tea-ceremony-to-san-francisco-homes-in-the-age-of-ai?n=2&fbclid=IwY2xjawTE_lxleHRuA2FlbQIxMABicmlkETExN0UyUjhGbkU3ZERhVmpYc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHu-O6fprIgT5GFvAgxmSDCTq6BZo3kfayYmgdYucht0Ed9daKzsUeNS62NWt_aem_ubVpxYBXc3Y16gwagHZXkg",
  },
  {
    publication: "Vivinavi San Francisco",
    date: "July 14, 2026",
    datetime: "2026-07-14",
    language: "Japanese",
    title: "Bringing the Spirit of Japanese Culture to San Francisco in the Age of AI",
    url: "https://sanfrancisco.vivinavi.com/cf/desc/_wid_ad1a04bb943d6e7ef21a2119c9999ce7c68a072614",
  },
  {
    publication: "PR TIMES",
    date: "",
    datetime: "",
    language: "Japanese",
    title: "A 25-Year-Old Entrepreneur Brings Visiting-Style Tea Ceremony to San Francisco",
    url:
      "https://prtimes.jp/main/html/rd/p/000000001.000186887.html?fbclid=IwY2xjawTFAKpleHRuA2FlbQIxMQBzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEexIt4mve_8YfXhh4j-FIvECpvK8WzqwfZWvoEfFSb1ItxDlAhyAXxDu8ftvs_aem_mMG_5THXv2ottUuYo240xg",
  },
];

function renderMediaItems() {
  const mediaGrid = document.querySelector(".media-grid");
  if (!mediaGrid) return;

  mediaItems.forEach((item) => {
    const article = document.createElement("article");
    article.className = "media-card";

    const link = document.createElement("a");
    link.className = "media-card-link";
    link.href = item.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", `Read article from ${item.publication}: ${item.title}`);

    const meta = document.createElement("div");
    meta.className = "media-meta";

    const publication = document.createElement("span");
    publication.textContent = item.publication;
    meta.appendChild(publication);

    if (item.date) {
      const date = document.createElement("time");
      date.textContent = item.date;
      if (item.datetime) {
        date.dateTime = item.datetime;
      }
      meta.appendChild(date);
    }

    const language = document.createElement("span");
    language.textContent = item.language;
    meta.appendChild(language);

    const title = document.createElement("h3");
    title.textContent = item.title;

    const readMore = document.createElement("span");
    readMore.className = "media-read-more";
    readMore.textContent = "Read Article";
    readMore.setAttribute("aria-hidden", "true");

    const external = document.createElement("span");
    external.className = "external-indicator";
    external.textContent = "↗";
    external.setAttribute("aria-hidden", "true");
    readMore.appendChild(external);

    link.append(meta, title, readMore);
    article.appendChild(link);
    mediaGrid.appendChild(article);
  });
}

renderMediaItems();

const revealElements = document.querySelectorAll(".reveal-on-scroll");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.18 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
