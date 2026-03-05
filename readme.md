# 🍔 Dev Order

Um pequeno sistema de **gerenciamento de pedidos** desenvolvido com
**HTML, CSS e JavaScript**, consumindo uma **API fake com JSON Server**.

Este projeto foi criado como prática de **CRUD no front-end**, consumo
de API com **fetch**, manipulação de **estado local** e **renderização
dinâmica no DOM**.

---

## 🚀 Funcionalidades

- Criar novos pedidos
- Listar pedidos cadastrados
- Atualizar status do pedido
- Excluir pedidos
- Renderização dinâmica dos pedidos no DOM
- Controle de estado no front-end

---

## 📦 Status dos pedidos

Cada pedido possui um status:

- **Pending (Pendente)** → pedido criado
- **Preparing (Preparando)** → pedido em preparação
- **Delivered (Entregue)** → pedido finalizado

Fluxo do pedido:

    pending → preparing → delivered

Pedidos entregues não podem mais ser alterados ou removidos.

---

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Fetch API
- JSON Server

## ▶️ Como rodar o projeto

### 1️⃣ Instalar o JSON Server

```bash
npm install -g json-server
```

### 2️⃣ Criar o arquivo `db.json`

```json
{
  "orders": []
}
```

### 3️⃣ Iniciar a API fake

```bash
json-server --watch db.json
```

A API ficará disponível em:

    http://localhost:3000/orders

---

## 📚 O que foi praticado neste projeto

- CRUD com Fetch API
- Manipulação de arrays (`map`, `filter`, `find`)
- Controle de estado no front-end
- Renderização dinâmica com JavaScript
- Manipulação do DOM
- Organização de lógica de aplicação

---

## 🎯 Objetivo do projeto

Este projeto faz parte do meu processo de estudo para reforçar conceitos
importantes de **JavaScript moderno**, especialmente:

- Consumo de APIs
- Manipulação de estado
- Lógica de programação
- Estruturação de aplicações front-end

---

## 👨‍💻 Autor

Desenvolvido como projeto de estudo para evolução nas tecnologias **HTML - CSS - JAVASCRIPT**.
