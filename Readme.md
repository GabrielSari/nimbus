# Nimbus.js

**Framework UI JavaScript puro para interfaces de sistemas internos.**  
Zero dependências. Sem etapa de build. Componha com propósito. Escale com clareza.

> Não é um wrapper de Vue, React ou qualquer outro framework.  
> JavaScript puro. Nenhuma dependência de runtime. Funciona direto no navegador.

🌐 [nimbusjs.org](https://nimbusjs.org) &nbsp;·&nbsp; [![npm](https://img.shields.io/npm/v/@coreops/nimbus?label=npm&color=cb3837)](https://www.npmjs.com/package/@coreops/nimbus) &nbsp;·&nbsp; MIT &nbsp;·&nbsp; [![GitHub](https://img.shields.io/badge/GitHub-GabrielSari%2Fnimbus-181717?logo=github)](https://github.com/GabrielSari/nimbus)

---

## Por que Nimbus.js?

Sistemas internos — ERPs, painéis administrativos, ferramentas de gestão — raramente precisam de um framework reativo completo. Precisam de **componentes funcionais, rápidos de compor e fáceis de manter**.

Nimbus.js entrega exatamente isso:

- **Zero dependências** — nenhum `node_modules` em runtime
- **Zero build step** — sem Webpack, Vite ou Babel
- **API fluente** — componha interfaces com `.add()` e reaja a eventos com `.on()`
- **Windowed UI** — janelas arrastáveis e redimensionáveis como base do layout

---

## Instalação

Via npm:

```bash
npm install @coreops/nimbus
```

Via CDN (sem build step):

```html
<script src="https://unpkg.com/@coreops/nimbus"></script>
```

---

## Uso rápido

```js
const grid = WM.Grid({
  columns: [
    { field: 'codigo',    title: 'Código',    sortable: true },
    { field: 'descricao', title: 'Descrição', sortable: true },
    { field: 'status',    title: 'Status',    badge: true    },
  ],
  data: ativos
})

const toolbar = WM.Toolbar()
  .addButton({ label: 'Novo',     onClick: () => abrirCadastro()         })
  .addButton({ label: 'Exportar', onClick: () => grid.exportCSV()        })
  .addSearch({ placeholder: 'Buscar...', onSearch: q => grid.filter(q)  })

WM.openWindow({ title: 'Ativos', width: 760, height: 480 })
  .add(toolbar)
  .add(grid)
```

---

## Componentes

| Componente | API                  | Descrição                                                       |
|------------|----------------------|-----------------------------------------------------------------|
| Window     | `WM.openWindow(opts)`| Janela arrastável, redimensionável, com minimize/maximize       |
| Grid       | `WM.Grid(opts)`      | Tabela com sort, filtro, badge automático e exportação CSV      |
| Form       | `WM.Form(opts)`      | Formulário em duas colunas com validação nativa                 |
| Toolbar    | `WM.Toolbar()`       | Barra de ações com botões, dropdown e campo de busca            |

---

## API Reference

### `WM.openWindow(opts)`

```js
WM.openWindow({
  title:  'Nome da Janela', // string
  width:  800,              // number (px)
  height: 600,              // number (px)
  modal:  false             // boolean (opcional)
})
.add(componente)
.on('close', () => console.log('fechou'))
```

### `WM.Grid(opts)`

```js
WM.Grid({
  columns: [
    { field: 'nome', title: 'Nome', sortable: true },
    { field: 'tipo', title: 'Tipo', badge: true    }
  ],
  data: [],        // array de objetos
  pageSize: 20     // paginação (opcional)
})
.on('rowClick', row => console.log(row))
```

### `WM.Form(opts)`

```js
WM.Form({
  fields: [
    { name: 'nome',   label: 'Nome',   type: 'text',   required: true },
    { name: 'status', label: 'Status', type: 'select', options: ['Ativo', 'Inativo'] }
  ]
})
.on('submit', data => salvar(data))
```

### `WM.Toolbar()`

```js
WM.Toolbar()
  .addButton({ label: 'Novo',     icon: 'plus',   onClick: fn })
  .addButton({ label: 'Remover',  icon: 'trash',  onClick: fn })
  .addSearch({ placeholder: 'Buscar...', onSearch: fn })
```

---

## Conceitos

### Composição por declaração

Nimbus.js segue o princípio de composição: você descreve **o que** a interface tem, não **como** ela renderiza. Cada componente é independente e pode ser reutilizado em múltiplas janelas.

```js
// Componente criado uma vez
const formCadastro = WM.Form({ fields: [...] })

// Reutilizado em contextos diferentes
WM.openWindow({ title: 'Novo Ativo'    }).add(formCadastro)
WM.openWindow({ title: 'Editar Ativo'  }).add(formCadastro)
```

### Eventos com `.on()`

Todos os componentes emitem eventos nomeados. Nenhum callback é obrigatório no momento da criação — você conecta a lógica quando precisar.

```js
const grid = WM.Grid({ columns, data })

grid.on('rowClick',   row  => detalhar(row))
grid.on('rowDelete',  row  => remover(row))
grid.on('sort',       col  => console.log('ordenou por', col))
```

---

## Casos de uso

- Painéis administrativos e dashboards internos
- ERPs e sistemas de gestão de ativos
- Ferramentas de operações (TI, infraestrutura, suporte)
- Interfaces de backoffice sem necessidade de framework reativo

---

## Roadmap

- [x] Window Manager (`WM.openWindow`)
- [x] Grid com sort e filtro
- [x] Form com validação nativa
- [x] Toolbar com busca integrada
- [ ] Chart (`WM.Chart`)
- [ ] Tabs e painéis colapsáveis
- [ ] Tema escuro nativo
- [ ] SSE / WebSocket integration helpers

---

## Contribuindo

Contribuições são bem-vindas. Abra uma issue descrevendo o problema ou a feature antes de enviar um PR.

---

## Licença

MIT © 2026 [CoreOps](https://nimbusjs.org)
