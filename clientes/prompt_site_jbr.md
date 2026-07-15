# Prompt — Site Institucional JBR Eletrotécnica Transformadores

---

## CONTEXTO DO PROJETO

Crie um site institucional completo e responsivo para a empresa **JBR Eletrotécnica Transformadores** (Razão Social: JBR CATANDUVA ELETRO-TECNICA LTDA - ME), atuante no setor elétrico e manutenção industrial em Catanduva - SP. O objetivo principal do site é **transmitir credibilidade e converter visitantes em contatos via WhatsApp**, com carregamento rápido e experiência otimizada para celular.

---

## IDENTIDADE VISUAL — PALETA DE CORES OBRIGATÓRIA

A paleta deve ser extraída diretamente do logotipo oficial da empresa:

| Função | Cor | Hex |
|---|---|---|
| Primária (fundo hero, navbar, rodapé) | Azul Marinho Institucional | `#1c335a` |
| Secundária (botões de ação, destaques, ícones) | Laranja Elétrico | `#F97316` |
| Neutra clara (fundos de seções alternadas) | Cinza Gelo | `#F1F5F9` |
| Texto principal | Quase Preto | `#1E293B` |
| Texto sobre fundo escuro | Branco | `#FFFFFF` |

> O azul `#1c335a` é a cor dominante extraída do arquivo SVG do logotipo — use-o como âncora visual em toda a identidade do site. O laranja deve aparecer **exclusivamente** em elementos de conversão (botões CTA, ícones de serviço, hover states).

---

## LOGOTIPO

O site deve exibir o logotipo oficial em duas versões:
- **Logo completo** (símbolo + tipografia "JBR ELETROTÉCNICA / TRANSFORMADORES"): usar no cabeçalho (navbar) em versão desktop.
- **Símbolo isolado** (ícone JBR): usar no cabeçalho em versão mobile e no favicon.

Ambos os arquivos SVG foram fornecidos — utilize-os como `<img>` ou inline SVG para garantir nitidez em qualquer resolução.

---

## ESTRUTURA DE PÁGINAS (máximo 4 seções em single-page ou 4 páginas)

### 1. Início — Vitrine de Impacto
- Fundo com cor `#1c335a` ou imagem escura com overlay nessa cor.
- Título principal em destaque (ex.: *"Soluções em Transformadores e Motores Elétricos para a Indústria"*).
- Subtítulo curto reforçando localização e experiência.
- **Dois botões CTA lado a lado**, ambos com cor laranja `#F97316`:
  - `📲 Fale pelo WhatsApp` → link `https://wa.me/5517996584418`
  - `📋 Solicitar Orçamento` → âncora para seção de Contato.
- Abaixo do hero: faixa com **3 a 4 ícones** resumindo os pilares do negócio (ex.: ⚙️ Transformadores, 🔧 Motores Elétricos, 🏭 Instalações Industriais, 🚛 Transporte de Cargas). Usar ícones SVG ou da biblioteca Lucide/Heroicons.

### 2. Quem Somos
- Fundo branco ou cinza gelo `#F1F5F9`.
- Texto curto (máx. 4 parágrafos), direto, com tom de confiança. Incluir obrigatoriamente:
  - Data de fundação: **12 de fevereiro de 2019**.
  - Referência a **mais de 6 anos de atuação** no mercado de Catanduva e região.
  - Compromisso com qualidade, agilidade e atendimento personalizado.
- **Espaço reservado para foto** (fachada ou equipe) com placeholder cinza e texto *"[Inserir foto da fachada ou da equipe]"* — tamanho sugerido: 600×400px, arredondado.

### 3. Serviços e Produtos
- Layout em **cards ou grid**, com ícone, título e descrição curta para cada serviço.
- Listar os seguintes serviços:
  - Manutenção, Compra e Venda de Transformadores Elétricos
  - Manutenção, Compra e Venda de Motores Elétricos
  - Manutenção e Reparação de Geradores
  - Instalação de Máquinas e Equipamentos Industriais
  - Aluguel de Máquinas e Equipamentos Industriais (sem operador)
  - Transporte Rodoviário de Cargas
- Cards com borda superior na cor laranja `#F97316` para criar hierarquia visual.

### 4. Contato
- Dividir em duas colunas (desktop) / empilhado (mobile):
  - **Coluna esquerda:** Formulário simples com campos: Nome, E-mail, Assunto, Mensagem + botão "Enviar Mensagem" (laranja).
  - **Coluna direita:** Dados de contato + mapa do Google Maps embutido via `<iframe>` apontando para o endereço oficial.
- **Dados obrigatórios na seção de contato:**
  - 📍 Av. Cônego Oscar Serra do Amaral, 725 — Loteamento Bom Pastor, Catanduva - SP, CEP 15808-250
  - 📞 (17) 99658-4418
  - 🕐 Seg–Sex: 08h às 18h (Terça até 18h30) | Sáb: 08h às 12h | Dom: Fechado

---

## ELEMENTOS GLOBAIS

- **Botão flutuante do WhatsApp:** fixo no canto inferior direito em todas as páginas/seções, cor verde `#25D366`, ícone do WhatsApp, com animação de pulso suave. Link: `https://wa.me/5517996584418`.
- **Navbar fixa no topo:** logo à esquerda, links de navegação à direita, fundo `#1c335a`. Em mobile: menu hambúrguer.
- **Rodapé:** fundo `#1c335a`, texto branco. Deve conter obrigatoriamente:
  - Logotipo símbolo (versão branca ou clara)
  - CNPJ: **32.741.325/0001-11**
  - Endereço completo
  - Telefone/WhatsApp
  - Horário de atendimento
  - © 2025 JBR Eletrotécnica Transformadores — Todos os direitos reservados.

---

## DIRETRIZES TÉCNICAS E DE PERFORMANCE

- **Stack:** HTML5 semântico + CSS3 (variáveis CSS para a paleta) + JavaScript vanilla. Sem dependências pesadas desnecessárias.
- **Responsividade obrigatória:** mobile-first. Testar breakpoints em 375px, 768px e 1280px.
- **Tipografia:** Google Fonts — usar `Barlow Condensed` (títulos, bold/extrabold) + `Barlow` (corpo de texto).
- **Performance:** imagens com `loading="lazy"`, SVGs inline para ícones críticos, sem carrossel pesado na hero.
- **SEO básico:** `<title>`, `<meta description>`, `<meta viewport>`, `lang="pt-BR"` no HTML, `alt` em todas as imagens.
- **Acessibilidade mínima:** contraste AA, `aria-label` nos botões de ação e no link do WhatsApp.

---

## TOM DE VOZ E ESTILO GERAL

- Objetivo: **conversão**, não estética complexa. Cada elemento deve ter um propósito.
- Textos curtos, diretos, sem jargão técnico excessivo.
- Evitar animações pesadas — transições suaves de no máximo `0.3s`.
- Design **sóbrio e industrial**, não corporativo genérico.
- O visual deve remeter a: precisão técnica, solidez, confiabilidade regional.
