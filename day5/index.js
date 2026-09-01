var products = [
  { id: 1, name: "Laptop", price: 18500, category: "Electronics", quantity: 4 },
  { id: 2, name: "Mouse", price: 180, category: "Electronics", quantity: 25 },
  { id: 3, name: "Notebook", price: 35, category: "Stationery", quantity: 100 },
  { id: 4, name: "Desk Lamp", price: 420, category: "Home", quantity: 0 },
];

var nextId = 5;

function printProducts(list) {
  if (!list || list.length === 0) {
    console.log("No products found.");
    return;
  }
  console.table(list);
}

function createProduct(name, price, category, quantity) {
  if (name === undefined || name === null) name = "";
  if (category === undefined || category === null) category = "";
  name = String(name).trim();
  category = String(category).trim();
  price = Number(price);
  quantity = Number(quantity);

  if (name === "") {
    return "Error: name is required";
  }
  if (isNaN(price) || price <= 0) {
    return "Error: price must be a number greater than 0";
  }
  if (isNaN(quantity) || quantity < 0 || !Number.isInteger(quantity)) {
    return "Error: quantity must be an integer greater than or equal to 0";
  }

  var isDuplicate = products.some(function (p) {
    return p.name.trim().toLowerCase() === name.toLowerCase();
  });
  if (isDuplicate) {
    return "Error: product name already exists";
  }

  var product = {
    id: nextId++,
    name: name,
    price: price,
    category: category,
    quantity: quantity,
  };
  products.push(product);
  return product;
}

function getAllProducts() {
  return products;
}

function getProductById(id) {
  id = Number(id);
  var product = products.find(function (p) {
    return p.id === id;
  });
  return product || null;
}

function updateProduct(id, name, price, category, quantity) {
  id = Number(id);
  var index = products.findIndex(function (p) {
    return p.id === id;
  });
  if (index === -1) {
    return "Error: product not found";
  }

  var product = products[index];

  if (name !== undefined && name !== null && String(name).trim() !== "") {
    product.name = String(name).trim();
  }
  if (price !== undefined && price !== null && String(price).trim() !== "") {
    var newPrice = Number(price);
    if (!isNaN(newPrice) && newPrice > 0) {
      product.price = newPrice;
    }
  }
  if (
    category !== undefined &&
    category !== null &&
    String(category).trim() !== ""
  ) {
    product.category = String(category).trim();
  }
  if (
    quantity !== undefined &&
    quantity !== null &&
    String(quantity).trim() !== ""
  ) {
    var newQty = Number(quantity);
    if (!isNaN(newQty) && newQty >= 0 && Number.isInteger(newQty)) {
      product.quantity = newQty;
    }
  }

  return product;
}

function deleteProduct(id) {
  id = Number(id);
  var index = products.findIndex(function (p) {
    return p.id === id;
  });
  if (index === -1) {
    return "Error: product not found";
  }

  var confirmed = confirm(
    "Are you sure you want to delete product with id " + id + "?",
  );
  if (!confirmed) {
    return "Delete cancelled";
  }

  var deleted = products.splice(index, 1)[0];
  return deleted;
}

function filterProducts(keyword) {
  if (keyword === undefined || keyword === null) keyword = "";
  keyword = String(keyword).trim().toLowerCase();
  if (keyword === "") {
    return products.slice();
  }
  return products.filter(function (p) {
    return (
      p.name.toLowerCase().includes(keyword) ||
      p.category.toLowerCase().includes(keyword)
    );
  });
}

function sortByPrice(order) {
  if (order === undefined || order === null) order = "asc";
  order = String(order).toLowerCase();
  return products.toSorted(function (a, b) {
    if (order === "desc") {
      return b.price - a.price;
    }
    return a.price - b.price;
  });
}

function getStoreStats() {
  var totalProducts = products.length;
  var totalValue = products.reduce(function (sum, p) {
    return sum + p.price * p.quantity;
  }, 0);
  var avgPrice =
    totalProducts === 0
      ? 0
      : products.reduce(function (sum, p) {
          return sum + p.price;
        }, 0) / totalProducts;
  var outOfStock = products.reduce(function (count, p) {
    return count + (p.quantity === 0 ? 1 : 0);
  }, 0);

  return {
    totalProducts: totalProducts,
    totalInventoryValue: Number(totalValue.toFixed(2)),
    averagePrice: Number(avgPrice.toFixed(2)),
    outOfStock: outOfStock,
  };
}

function groupByCategory() {
  return products.reduce(function (acc, p) {
    if (!acc[p.category]) {
      acc[p.category] = [];
    }
    acc[p.category].push(p);
    return acc;
  }, {});
}

function filterByPriceRange(min, max) {
  if (min === undefined || min === null || String(min).trim() === "") min = 0;
  if (max === undefined || max === null || String(max).trim() === "")
    max = Infinity;
  min = Number(min);
  max = Number(max);
  return products.filter(function (p) {
    return p.price >= min && p.price <= max;
  });
}

var inStock = function (list) {
  return list.filter(function (p) {
    return p.quantity > 0;
  });
};

function withAfterAction(fn, callback) {
  var result = fn();
  if (typeof callback === "function") {
    callback();
  }
  return result;
}

function addMany() {
  var items = Array.prototype.slice.call(arguments);
  var results = [];
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var res = createProduct(
      item.name,
      item.price,
      item.category,
      item.quantity,
    );
    results.push(res);
  }
  return results;
}

function startApp() {
  while (true) {
    var choice = prompt(
      "===== NTI Mini Store =====\n" +
        "1) Add product\n" +
        "2) Show all products\n" +
        "3) Show product by ID\n" +
        "4) Update product\n" +
        "5) Delete product\n" +
        "6) Search / Filter\n" +
        "0) Exit",
    );

    if (choice === null || choice === "0") {
      console.log("Goodbye!");
      break;
    }

    switch (choice) {
      case "1": {
        var name = prompt("Enter product name:");
        if (name === null) break;
        var price = prompt("Enter price:");
        if (price === null) break;
        var category = prompt("Enter category:");
        if (category === null) break;
        var quantity = prompt("Enter quantity:");
        if (quantity === null) break;
        var created = createProduct(name, price, category, quantity);
        if (typeof created === "string") {
          console.log(created);
        } else {
          console.log("Product created:");
          console.table([created]);
        }
        break;
      }
      case "2": {
        printProducts(getAllProducts());
        break;
      }
      case "3": {
        var id = prompt("Enter product ID:");
        if (id === null) break;
        var product = getProductById(id);
        if (product === null) {
          console.log("Error: product not found");
        } else {
          console.table([product]);
        }
        break;
      }
      case "4": {
        var id = prompt("Enter product ID to update:");
        if (id === null) break;
        var name = prompt("Enter new name (leave empty to keep current):");
        if (name === null) break;
        var price = prompt("Enter new price (leave empty to keep current):");
        if (price === null) break;
        var category = prompt(
          "Enter new category (leave empty to keep current):",
        );
        if (category === null) break;
        var quantity = prompt(
          "Enter new quantity (leave empty to keep current):",
        );
        if (quantity === null) break;
        var updated = updateProduct(id, name, price, category, quantity);
        if (typeof updated === "string") {
          console.log(updated);
        } else {
          console.log("Product updated:");
          console.table([updated]);
        }
        break;
      }
      case "5": {
        var id = prompt("Enter product ID to delete:");
        if (id === null) break;
        var deleted = deleteProduct(id);
        if (typeof deleted === "string") {
          console.log(deleted);
        } else {
          console.log("Product deleted:");
          console.table([deleted]);
        }
        break;
      }
      case "6": {
        var keyword = prompt("Enter search keyword:");
        if (keyword === null) break;
        var results = filterProducts(keyword);
        printProducts(results);
        break;
      }
      default:
        console.log("Invalid choice. Please enter a number from 0 to 6.");
    }
  }
}
startApp();
