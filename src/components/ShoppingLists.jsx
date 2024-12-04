import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa"; // Importa ícone de lixeira

function ShoppingLists() {
  const [lists, setLists] = useState([]);
  const [newItemName, setNewItemName] = useState("");
  const [newItemQuantity, setNewItemQuantity] = useState(1);
  const [newListName, setNewListName] = useState("");
  const token = localStorage.getItem("token");

  const fetchShoppingLists = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/shopping-lists", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLists(res.data);
    } catch (error) {
      console.error("Erro ao buscar listas de compras:", error);
    }
  }, [token]);

  useEffect(() => {
    fetchShoppingLists();
  }, [fetchShoppingLists]);

  const handleAddItem = async (listId) => {
    if (!newItemName || !newItemQuantity) {
      alert("Por favor, insira um nome e quantidade válidos para o item.");
      return;
    }

    try {
      await axios.post(
        "http://localhost:3000/api/items",
        {
          name: newItemName,
          quantity: newItemQuantity,
          shoppingListId: listId,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setNewItemName("");
      setNewItemQuantity(1);
      fetchShoppingLists();
    } catch (error) {
      console.error("Erro ao adicionar item:", error);
      alert("Erro ao adicionar item. Por favor, tente novamente.");
    }
  };

  const handleCreateList = async () => {
    if (!newListName) {
      alert("Por favor, insira um nome para a nova lista.");
      return;
    }

    try {
      await axios.post(
        "http://localhost:3000/api/shopping-lists",
        { title: newListName },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setNewListName("");
      fetchShoppingLists();
    } catch (error) {
      console.error("Erro ao criar lista de compras:", error);
      alert("Erro ao criar lista de compras. Por favor, tente novamente.");
    }
  };

  const handleDeleteList = async (listId) => {
    try {
      await axios.delete(`http://localhost:3000/api/shopping-lists/${listId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchShoppingLists();
    } catch (error) {
      console.error("Erro ao deletar lista de compras:", error);
      alert("Erro ao deletar lista de compras. Por favor, tente novamente.");
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3000/api/items/${itemId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchShoppingLists();
    } catch (error) {
      console.error("Erro ao deletar item:", error);
      alert("Erro ao deletar item. Por favor, tente novamente.");
    }
  };

  return (
    <div className="shopping-lists-container">
      <h1>Listas de Compras</h1>
      <div className="new-list-container">
        <input
          type="text"
          placeholder="Nova Lista de Compras"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
        />
        <button className="create-btn" onClick={handleCreateList}>
          Criar Lista
        </button>
      </div>
      <div className="lists-container">
        {lists.map((list) => (
          <div key={list.id} className="list">
            <div className="list-header">
              <h3>{list.title}</h3>
              <button
                className="delete-list-btn"
                onClick={() => handleDeleteList(list.id)}
              >
                Deletar lista
              </button>
            </div>
            <ul>
              {list.items.map((item) => (
                <li key={item.id} className="item">
                  {item.name} - {item.quantity}
                  <button
                    className="delete-item-btn"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    <FaTrash />
                  </button>
                </li>
              ))}
            </ul>
            <div className="new-item-container">
              <input
                type="text"
                placeholder="Novo Item"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
              />
              <input
                type="number"
                min="1"
                value={newItemQuantity}
                onChange={(e) => setNewItemQuantity(parseInt(e.target.value, 10))}
              />
              <button className="add-item-btn" onClick={() => handleAddItem(list.id)}>
                Adicionar Item
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingLists;
