# EXERCÍCIO DE PRÁTICA — FRONTEND

### 📌 Contexto

Você foi contratado para desenvolver a interface de gerenciamento de pedidos de um restaurante.

O backend já existe (json-server).
Seu trabalho é consumir a API, gerenciar estado no frontend e renderizar corretamente a UI.

### 🔗 API (fake)

Base URL:

```
http://localhost:3000
```

End Point:

```
/orders
```

Estrutura do pedido:

```
{
  "id": "string",
  "client": "string",
  "product": "string",
  "status": "pending" | "preparing" | "delivered"
}
```

### 🎯 Objetivo

Criar uma página web que permita:

- Criar pedidos

- Listar pedidos

- Atualizar status

- Remover pedidos

- Manter UI sincronizada com estado local

### 🧱 Requisitos obrigatórios

1️⃣ HTML (estrutura)

A página deve ter:

#### Um formulário com:

- Input para nome do cliente

- Input para produto

- Botão “Criar pedido”

#### Uma lista de pedidos (ul ou div)

#### Cada pedido deve exibir:

- Cliente

- Produto

- Status

- Botões de ação

❗ Sem frameworks (React, Vue, etc).

### 2️⃣ CSS (visual mínimo)

Você deve:

#### Diferenciar pedidos por status:

- pending → amarelo

- preparing → azul

- delivered → verde

#### Pedido delivered:

- texto riscado

- botões de status desativados

#### Layout simples e organizado (flex ou grid)

Não precisa ser bonito — precisa ser claro.

### 3️⃣ JavaScript (lógica)

Você deve implementar:

#### Estado

```
let orders = [];
```

#### Funções obrigatórias

- fetchOrders()

- createOrder(client, product)

- updateOrderStatus(id, newStatus)

- removeOrder(id)

- renderOrders()

### ⚙️ Regras de negócio

#### Não pode mudar status de pedido delivered

#### Não pode criar pedido sem cliente ou produto

#### Ao atualizar/remover:

- atualizar backend

- atualizar estado local (imutável)

- re-renderizar a UI

### 🔁 Fluxo esperado

1. Página carrega

2. fetchOrders() é executado

3. renderOrders() mostra os pedidos

#### 4. Usuário interage:

- cria

- atualiza status

- remove

5 . UI reflete sempre o estado atual

### 🚫 O que NÃO pode

- Mutar estado diretamente

- Recarregar a página

- Usar innerHTML +=

- Usar bibliotecas externas
