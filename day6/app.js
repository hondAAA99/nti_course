var editingId = null;

function renderProducts() {
  var tbody = document.getElementById("productsBody");
  tbody.innerHTML = "";

  var list = getAllProducts();
  list.forEach(function (p) {
    var row = document.createElement("tr");
    row.setAttribute("data-id", p.id);

    row.innerHTML =
      "<td>" + p.name + "</td>" +
      "<td>" + p.price + "</td>" +
      "<td>" + p.category + "</td>" +
      "<td>" + p.quantity + "</td>" +
      "<td>" +
      '<button onclick="startEdit(' + p.id + ')">update</button>' +
      '<button onclick="removeProduct(' + p.id + ')">delete</button>' +
      "</td>";

    tbody.appendChild(row);
  });

  document.getElementById("productCount").textContent = list.length;
}

function addProduct() {
  var name = document.getElementById("nameInput").value;
  var price = document.getElementById("priceInput").value;
  var category = document.getElementById("categoryInput").value;
  var quantity = document.getElementById("quantityInput").value;

  var result = createProduct(name, price, category, quantity);

  if (typeof result === "string") {
    alert(result);
    return;
  }

  clearForm();
  renderProducts();
}

function startEdit(id) {
  var product = getProductById(id);
  if (!product) return;

  editingId = id;
  document.getElementById("nameInput").value = product.name;
  document.getElementById("priceInput").value = product.price;
  document.getElementById("categoryInput").value = product.category;
  document.getElementById("quantityInput").value = product.quantity;
}

function saveUpdate() {
  if (editingId === null) {
    alert("Select a product to update first (click its update button).");
    return;
  }

  var name = document.getElementById("nameInput").value;
  var price = document.getElementById("priceInput").value;
  var category = document.getElementById("categoryInput").value;
  var quantity = document.getElementById("quantityInput").value;

  var result = updateProduct(editingId, name, price, category, quantity);

  if (typeof result === "string") {
    alert(result);
    return;
  }

  editingId = null;
  clearForm();
  renderProducts();
}

function removeProduct(id) {
  var result = deleteProduct(id, true);
  if (typeof result === "string") {
    alert(result);
    return;
  }
  renderProducts();
}

function clearForm() {
  document.getElementById("nameInput").value = "";
  document.getElementById("priceInput").value = "";
  document.getElementById("categoryInput").value = "";
  document.getElementById("quantityInput").value = "";
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("addBtn").addEventListener("click", addProduct);
  document.getElementById("updateBtn").addEventListener("click", saveUpdate);
  renderProducts();
});