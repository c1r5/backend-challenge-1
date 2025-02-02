# Desafio Backend

### Plataforma simplificada de pagamentos

Especificações:

- 2 tipos de usuários: Comuns e Lojistas
- Carteira com saldo
- CPF, Email, CNPJ ( Unicos )

### Usuário

- CPF
- CNPJ
- Email
- Nome completo

### Recursos

- Cadastro de usuário
- Transferencia entre usuários
- Validar saldo
- Consultar serviço autorizador externo ( https://util.devi.tools/api/v2/authorize )

### Rotas

```js
POST /transfer
Content-Type: application/json

{
  "value": 100.0,
  "payer": 4,
  "payee": 15
}
```

