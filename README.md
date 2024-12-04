
# Frontend MVC com React

Este projeto é um frontend desenvolvido com React, utilizando o Axios para comunicação com APIs. Ele permite gerenciar usuários, listas de compras e itens, integrando-se ao backend desenvolvido em Node.js.

---

## Funcionalidades

- **Integração com o Backend**:
  - Operações de autenticação, listas de compras e itens.
- **Estrutura Modular**:
  - Componentes bem definidos e reutilizáveis.
- **Gerenciamento de Estado**:
  - Utilização do useState e useEffect.
- **Estilização Responsiva**:
  - Aplicação de CSS personalizado.

---

## Tecnologias Utilizadas

- **React**: Biblioteca para criação de interfaces.
- **Axios**: Cliente HTTP para integração com APIs.
- **CSS**: Estilização das páginas.

---

## Estrutura do Projeto

```plaintext
src/
├── components/          # Componentes React
├── styles/              # Arquivos CSS para estilização
├── App.js               # Componente principal da aplicação
├── index.js             # Ponto de entrada da aplicação
└── README.md            # Documentação do projeto
```

---

## Instalação

### Pré-requisitos
- **Node.js** instalado.
- **Backend em execução** para integração.

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/frontend-mvc.git
   cd frontend-mvc
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o endpoint da API no arquivo `src/services/api.js`, se necessário.

4. Inicie o servidor:
   ```bash
   npm start
   ```

---

## Estrutura de Rotas

| Rota             | Descrição                       |
|-------------------|---------------------------------|
| `/`              | Página inicial (Login)         |
| `/shopping-lists`| Gerenciamento de listas         |
| `/users`         | Visualização de usuários        |

---

## Funcionalidades Detalhadas

- **Login e Autenticação**:
  - Integração com o backend para autenticar e armazenar o token JWT no `localStorage`.
- **Gerenciamento de Listas**:
  - CRUD completo para listas de compras e itens.
- **Estilização Responsiva**:
  - Uso de CSS para layouts limpos e responsivos.

---

## Contribuição

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça um push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

---

