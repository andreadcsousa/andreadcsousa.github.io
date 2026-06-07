# Andrea Sousa — Portfólio de Dados

Repositório central do meu portfólio profissional. Desenvolvido com foco em performance, design minimalista, responsivo e modularidade, aplicando boas práticas de arquitetura front-end sem dependência de frameworks pesados e com semântica estrutural.

## 🎯 Objetivo do Projeto

Apresentar soluções consolidadas para ecossistemas de dados, demonstrando habilidades práticas na construção de fluxos automatizados, engenharia de recursos, modelagem analítica de dados e criação de painéis focados em Storytelling e suporte à tomada de decisão estratégica.

## 💻 Tecnologias Empregadas no Desenvolvimento

- **Estrutura:** HTML5 Semântico para máxima acessibilidade e SEO.
- **Estilização:** CSS3 Moderno estruturado de forma modular (arquivos por seção, CSS Variables, Flexbox e Grid Simétrico).
- **Interatividade:** JavaScript Vanilla (ES6 Modules) com separação de conceitos e manipulação dinâmica de escopo global.
- **Vetores:** SVGs customizados de forma inline para garantir um carregamento otimizado.

## 📁 Arquitetura do Projeto & Estrutura de Pastas

Para garantir a escalabilidade e facilitar futuras manutenções, o projeto foi refatorado saindo de arquivos monolíticos para uma estrutura modular:

```
Plaintext
├── index.html             # Ponto de entrada estrutural e semântico do portfólio
└── assets/
    ├── image/             # Ilustrações e ativos visuais do projeto
    ├── css/               # Arquitetura modular de estilos (Separado por Escopo)
    │   └── style.css      # Arquivo centralizador (Orquestrador via @import)
    │   ├── global.css     # Variáveis (:root), resets globais e tipografia
    │   ├── header.css     # Menu de navegação e comportamento responsivo mobile
    │   ├── home.css       # Estilos específicos da seção de introdução (Hero)
    │   ├── about.css      # Layout do painel (Browser UI) e histórico profissional
    │   ├── projects.css   # Vitrine e alinhamento dos cartões de projetos
    │   ├── stack.css      # Grade analítica da nuvem de ferramentas
    │   ├── footer.css     # Rodapé e links sociais
    └── js/                # Engine de Comportamento Dinâmico (ES6 Modules)
        └── main.js        # Inicializador e centralizador de módulos
        ├── nav.js         # Controle de estado do menu hambúrguer responsivo
        ├── tabs.js        # Controle de alternância de abas da seção Perfil
        ├── projects.js    # Filtro lógico e dinâmico da galeria de projetos
        ├── modals.js      # Sistema comportamental dos modais de detalhes
        ├── stack.js       # Inspetor dinâmico de metadados da Tech Stack
        ├── scroll.js      # Gatilhos de rolagem suave e retorno ao topo
```
