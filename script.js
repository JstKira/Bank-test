// 🏦 المتغيرات الأساسية
let inventory = []; // الحقيبة الخاصة بالمستخدم
let points = 500; // نقاط المستخدم المبدئية

// 📌 تحديث عرض الحقيبة
function updateInventory() {
    let inventoryList = document.getElementById("inventory-list");
    inventoryList.innerHTML = ""; // مسح المحتوى القديم

    inventory.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - الكمية: ${item.quantity}`;
        inventoryList.appendChild(li);
    });

    // تحديث عرض النقاط
    document.getElementById("points").textContent = `نقاطك: ${points}`;
}

// 🛒 شراء عنصر وإضافته للحقيبة
function buyItem(itemName, itemPrice) {
    if (points >= itemPrice) {
        points -= itemPrice; // خصم النقاط
        let existingItem = inventory.find(item => item.name === itemName);

        if (existingItem) {
            existingItem.quantity += 1; // زيادة الكمية إذا كان العنصر موجودًا
        } else {
            inventory.push({ name: itemName, quantity: 1 }); // إضافة عنصر جديد
        }

        updateInventory(); // تحديث الحقيبة
    } else {
        alert("❌ ليس لديك نقاط كافية!");
    }
}

// 📌 تشغيل عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    updateInventory(); // تحديث الحقيبة عند فتح الموقع
});
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const details = button.nextElementSibling;
            const arrow = button.querySelector("span");

            if (details.style.display === "block") {
                details.style.display = "none";
                arrow.textContent = "⬇️";
            } else {
                details.style.display = "block";
                arrow.textContent = "⬆️";
            }
        });
    });
});
