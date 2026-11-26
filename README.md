# Wanessa Walcafre Makeup

Landing page profissional desenvolvida para a maquiadora **Wanessa Walcafre**, com foco em agendamentos rápidos via WhatsApp e apresentação de portfólio de serviços (noivas, madrinhas, formaturas, ensaios e maquiagem social) com atendimento em Mauá e Santo André (SP).

🔗 **Acesse o site online:** [wan.walcafremakeup.workers.dev](https://wan.walcafremakeup.workers.dev/)

## Funcionalidades

- **Design Responsivo (Mobile-First):** Layout adaptável para celulares, tablets e computadores.
- **Agendamento Direto:** Botões de chamada para ação (CTA) integrados com link direto para o WhatsApp e mensagem pré-preenchida.
- **Navegação Fluida:** Rolagem suave (`scroll-behavior: smooth`) entre seções e menu mobile que fecha automaticamente ao selecionar um item.
- **Galeria Assimétrica:** Grade visual personalizada para destaque dos trabalhos realizados.
- **Acessibilidade e Performance:** Uso de HTML semântico, suporte a `prefers-reduced-motion` e carregamento leve sem dependências externas pesadas.

## Tecnologias Utilizadas

- **HTML5:** Estrutura semântica e SEO básico (`meta description`).
- **CSS3:** Variáveis CSS (`:root`), Flexbox, CSS Grid, tipografia fluida (`clamp()`) e media queries.
- **JavaScript (Vanilla):** Controle de fechamento automático do menu mobile (`script.js`).
- **Google Fonts:** Tipografias *Bodoni Moda* (títulos) e *Figtree* (textos).
- **Cloudflare Workers:** Hospedagem e entrega estática de alta velocidade.

## Estrutura de Arquivos

```text
├── index.html      # Estrutura principal da página
├── style.css       # Estilização, paleta de cores e responsividade
├── script.js       # Fechamento automático do menu mobile
├── wan.png         # Foto principal da seção Hero
└── README.md       # Documentação do projeto
