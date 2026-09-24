const amountButtons = document.querySelectorAll(".amount");
const customAmount = document.getElementById("customAmount");
const donationButton = document.getElementById("donationButton");
const donorName = document.getElementById("donorName");
const paymentMethod = document.getElementById("paymentMethod");
const donationMessage = document.getElementById("donationMessage");

amountButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        customAmount.value = button.dataset.value;
    });
});

donationButton.addEventListener("click", function() {

    const name = donorName.value.trim();
    const amount = Number(customAmount.value);
    const payment = paymentMethod.value;

    if (name === "") {
        alert("Silakan masukkan nama donatur.");
        return;
    }

    if (amount <= 0 || isNaN(amount)) {
        alert("Silakan pilih atau masukkan nominal donasi.");
        return;
    }

    if (payment === "") {
        alert("Silakan pilih metode pembayaran.");
        return;
    }

    const confirmDonation = confirm(
        "Nama: " + name +
        "\nNominal: Rp" + amount.toLocaleString("id-ID") +
        "\nPembayaran: " + payment +
        "\n\nApakah data donasi sudah benar?"
    );

    if (confirmDonation) {
        donationMessage.textContent =
            "Terima kasih " + name + " telah membantu PawRescue ❤️";

        donationMessage.style.display = "block";

        donorName.value = "";
        customAmount.value = "";
        paymentMethod.value = "";
    }
});