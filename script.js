const header = document.querySelector(".site-header");
const bookingFallbackUrl = "https://www.supersaas.jp/schedule/tea_ceremony/Tea_Ceremony";

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

function openTawkChat() {
  const tawk = window.Tawk_API;

  if (tawk && typeof tawk.maximize === "function") {
    tawk.maximize();
    return true;
  }

  if (tawk && typeof tawk.toggle === "function") {
    tawk.toggle();
    return true;
  }

  window.dispatchEvent(
    new CustomEvent("teaCeremonyChatRequested", {
      detail: { bookingFallbackUrl },
    })
  );

  return false;
}

window.openTawkChat = openTawkChat;

document.querySelectorAll("[data-chat-trigger]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    openTawkChat();
  });
});
