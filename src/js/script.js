const form = document.getElementById("order-form");
const client = document.getElementById("client");
const product = document.getElementById("product");

const orderList = document.getElementById("order-list");

const baseURL = "http://localhost:3000";

let orders = [];

fetchOrders();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  createOrder(client.value, product.value);
});

async function fetchOrders() {
  try {
    const response = await fetch(`${baseURL}/orders`);

    if (response.status === 200) {
      const data = await response.json();

      if (data.length === 0) {
        if (orders.length <= 0) {
          const msg = document.createElement("span");
          msg.classList.add("msg");
          msg.textContent = "Não existem pedidos no momento!";

          orderList.appendChild(msg);
        }
        return;
      }

      orders = data;
      renderOrders();
    }
  } catch (error) {
    console.log(error);
  }
}

function renderOrders() {
  orderList.innerHTML = "";

  orders.forEach((order) => {
    const orderCard = document.createElement("div");
    orderCard.classList.add("order-card");

    const orderInfo = document.createElement("div");
    orderInfo.classList.add("order-info");

    const strongName = document.createElement("strong");
    strongName.textContent = order.client;

    const spanProduct = document.createElement("span");
    spanProduct.textContent = order.product;

    const spanStatus = document.createElement("span");
    spanStatus.classList.add("status");

    if (order.status === "pending") {
      spanStatus.classList.add("pending");
      spanStatus.textContent = "PENDENTE";
    } else if (order.status === "preparing") {
      spanStatus.classList.add("preparing");
      spanStatus.textContent = "PREPARANDO";
    } else if (order.status === "delivered") {
      spanStatus.classList.add("delivered");
      spanStatus.textContent = "ENTREGUE";
    }

    const orderActions = document.createElement("div");
    orderActions.classList.add("order-actions");

    const btn = document.createElement("button");

    const btnRemove = document.createElement("button");
    btnRemove.classList.add("remove");
    btnRemove.textContent = "Excluir";
    btnRemove.addEventListener("click", function () {
      removeOrder(order.id);

      renderOrders();
    });

    if (order.status === "pending") {
      btn.textContent = "Preparar";

      btn.addEventListener("click", function () {
        updateOrderStatus(order.id, "preparing");
      });
    } else if (order.status === "preparing") {
      btn.textContent = "Entregar";

      btn.addEventListener("click", function () {
        updateOrderStatus(order.id, "delivered");
      });
    } else {
      btn.textContent = "Entregar";
      btn.setAttribute("disabled", true);
      btnRemove.setAttribute("disabled", true);
      orderCard.classList.add("card-delivered");
    }

    orderInfo.append(strongName, spanProduct, spanStatus);
    orderActions.append(btn, btnRemove);

    orderCard.append(orderInfo, orderActions);
    orderList.append(orderCard);
  });
}

async function createOrder(client, product) {
  try {
    const response = await fetch(`${baseURL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client,
        product,
        status: "pending",
      }),
    });

    if (!response.ok) {
      console.log("Erro ao cadastrar pedido. Tente novamente!");
      return;
    }

    alert("Pedido cadastrado com sucesso!");

    clearForm();

    await fetchOrders();
  } catch (error) {
    console.log(error);
  }
}

async function updateOrderStatus(id, newStatus) {
  const order = orders.find((order) => order.id === id);

  if (!order) {
    alert("Pedido não encontrado!");
    return;
  }

  try {
    const response = await fetch(`${baseURL}/orders/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: newStatus,
      }),
    });

    if (!response.ok) {
      alert("Erro ao alterar o status do pedido. Tente novamente!");
    }

    const updatedStatus = await response.json();

    orders = orders.map((order) => (order.id === id ? updatedStatus : order));

    alert("Status do pedido alterado!");

    renderOrders();
  } catch (error) {
    console.log(error);
  }
}

async function removeOrder(id) {
  try {
    const response = await fetch(`${baseURL}/orders/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      alert("Erro ao excluir pedido. Tente novamente!");
    }

    orders = orders.filter((order) => order.id !== id);

    alert("Pedido removido com sucesso!");

    renderOrders();
  } catch (error) {
    console.log(error);
  }
}

function clearForm() {
  client.value = "";
  product.value = "";
}
