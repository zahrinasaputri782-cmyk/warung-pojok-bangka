const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: data,
    headers: { "Accept": "application/json" }
  })
    .then(response => {
      if (response.ok) {
        showToast("✅ Pesan berhasil dikirim! Terima kasih telah menghubungi kami.", "success");
        form.reset();
      } else {
        showToast("❌ Gagal mengirim pesan. Coba lagi nanti.", "error");
      }
    })
    .catch(() => {
      showToast("⚠️ Tidak dapat terhubung ke server. Periksa koneksi Anda.", "error");
    });
});

function showToast(message, type) {
  toast.textContent = message;
  toast.className = "toast show " + type;
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 4000);
}
