```markdown
# Sistema de RH — Node.js, TypeORM & PostgreSQL

## Visão Geral

Este projeto é um sistema de Recursos Humanos (RH) desenvolvido em Node.js com TypeScript, Express e TypeORM, utilizando PostgreSQL como banco de dados. O sistema gerencia funcionários, cargos, departamentos, faixas salariais, avaliações de desempenho, benefícios e endereços.

---

## Principais Entidades

- **Employee**: Funcionário, vinculado a um departamento e a um cargo.
- **Department**: Departamento da empresa, possui vários cargos e funcionários.
- **JobPosition**: Cargo, vinculado a um departamento e a uma faixa salarial.
- **SalaryRange**: Faixa salarial, pode ser associada a vários cargos.
- **PerformanceReview**: Avaliação de desempenho do funcionário.
- **Benefit**: Benefícios do funcionário.
- **EmployeeAddress**: Endereço do funcionário.

---

## Relacionamentos

- Um **Department** tem vários **JobPositions** e **Employees**.
- Um **JobPosition** pertence a um **Department** e a um **SalaryRange**.
- Um **Employee** pertence a um **Department** e a um **JobPosition**.

---

## Como rodar o projeto

1. **Clone o repositório**
   ```bash
   git clone <https://github.com/Nanndo9/project0.git>
   cd project0
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure o banco de dados**
   - Edite o arquivo `.env` com as configurações do seu PostgreSQL.

4. **Rode as migrations**
   ```bash
   npm run migration:run
   ```

5. **Inicie o servidor**
   ```bash
   npm start
   ```

---

## Exemplo de criação de funcionário via API

```bash
curl -X POST http://localhost:3000/employees/create \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao.silva@exemplo.com",
    "document": "12345678900",
    "phone": "11999998888",
    "birth_date": "1990-01-15",
    "hire_date": "2023-04-01",
    "salary": 4500.00,
    "active": true,
    "departmentId": "<UUID do departamento>",
    "jobPositionId": "<UUID do cargo>"
  }'
```

---

## Estrutura de Pastas

```
src/
  config/           # Configuração do TypeORM e banco
  entities/         # Entidades do sistema (TypeORM)
  migrations/       # Migrations do banco
  repositories/     # Repositórios customizados
  routes/           # Rotas Express
  service/          # Serviços de negócio
  middlewares/      # Middlewares Express
  interfaces/       # Interfaces e enums
  utils/            # Utilitários e validadores
```

---

## Contribuição

Pull requests são bem-vindos! Para mudanças maiores, abra uma issue primeiro para discutir o que você gostaria de mudar.

---

## Licença

[MIT](LICENSE)
```