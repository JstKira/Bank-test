// 🏦 المتغيرات الأساسية
let inventory = [];
let points = 500;

// 📌 تحديث عرض الحقيبة
function updateInventory() {
    let inventoryList = document.getElementById("inventory-list");
    if (!inventoryList) return; // تأكد من أن العنصر موجود

    inventoryList.innerHTML = "";

    inventory.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - الكمية: ${item.quantity}`;
        inventoryList.appendChild(li);
    });

    document.getElementById("points").textContent = `نقاطك: ${points}`;
}

// 🛒 شراء عنصر وإضافته للحقيبة
function buyItem(itemName, itemPrice) {
    if (points >= itemPrice) {
        points -= itemPrice;
        let existingItem = inventory.find(item => item.name === itemName);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            inventory.push({ name: itemName, quantity: 1 });
        }

        updateInventory();
    } else {
        alert("❌ ليس لديك نقاط كافية!");
    }
}

// 📌 تشغيل عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const details = button.nextElementSibling;
            button.classList.toggle("active");

            details.style.display = (details.style.display === "block") ? "none" : "block";
        });
    });

    updateInventory(); // تحديث الحقيبة عند بدء التشغيل
});
