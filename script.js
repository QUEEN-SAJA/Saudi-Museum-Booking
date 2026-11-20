document.getElementById("bookingForm")
.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const visitors = document.getElementById("visitors").value;
    const bookingNumber = "EXP-" +
        Math.floor(100000 + Math.random() * 900000);
    const result = document.getElementById("confirmation");
    result.hidden = false;
    result.innerHTML = `
        <h2>تم استلام طلب الحجز بنجاح!</h2>
        <p>مرحباً ${name}</p>
        <p>رقم الحجز: ${bookingNumber}</p>
        <p>رقم الجوال: ${phone}</p>
        <p>عدد الزوار: ${visitors}</p>
        <p>سيتم إبلاغكم بموعد الزيارة قريبًا.</p>
        <p>يرجى اخذ لقطة شاشة لتأكيد الحجز والأحتفاظ بها لإبرازها عند الزيارة </p>
        <p> We are excited to see you </p> 
    `;
    result.scrollIntoView({ behavior: "smooth" });
});