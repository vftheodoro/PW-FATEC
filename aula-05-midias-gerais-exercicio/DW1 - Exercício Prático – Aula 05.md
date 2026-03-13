# DW1 - Exercício Prático – Aula 05
## HTML5: Formatações e Mídias - Exercício Completo

### Contexto do exercício:
Você foi contratado para criar uma página informativa institucional, utilizando apenas HTML5, 
com foco em:
• Formatação semântica de texto
• Inserção correta de mídias
• Acessibilidade
• Boas práticas
• Uso de mensagens de fallback

### Importante:
• NÃO utilizar CSS
• NÃO utilizar JavaScript
• O objetivo é praticar somente o conteúdo visto nesta aula

### Tema da página
Página institucional:
"TechNova Solutions – Apresentação e Mídias"

### Requisitos obrigatórios

#### Estrutura básica do documento
Crie um arquivo chamado:
**midias.html**

O documento deve conter obrigatoriamente:
• `<!DOCTYPE html>`
• `<html lang="pt-BR">`
• `<head>` com:
  - `<meta charset="UTF-8">`
  - `<title>` com o nome da página
• `<body>` com todo o conteúdo

#### Conteúdo textual com formatação semântica
Crie um bloco de conteúdo principal contendo:
• Um título principal (`<h1>`)
• Um parágrafo (`<p>`) contendo:
  - Um trecho com `<strong>` (texto de forte importância)
  - Um trecho com `<em>` (ênfase)
  - Um termo destacado com `<mark>`

Exemplo de ideia (o texto pode variar):
"Atenção: nosso sistema está em atualização e é realmente importante acompanhar 
as mudanças."

#### Inserção de imagem com significado semântico
Insira uma imagem relacionada à empresa utilizando:
• `<figure>`
• `<img>`
• `<figcaption>`

A imagem deve conter obrigatoriamente:
• Atributo alt bem descritivo
• Uma legenda explicativa

A imagem pode ser fictícia (ex: empresa.jpg).

#### Inserção de áudio
Insira um áudio institucional utilizando a tag `<audio>` com:
• Atributo controls
• Pelo menos uma tag `<source>`
• Mensagem de fallback informando que o navegador não suporta áudio

O arquivo pode ser fictício (ex: audio.mp3).

#### Inserção de vídeo
Insira um vídeo institucional utilizando a tag `<video>` com:
• Atributo controls
• Definição de largura (width)
• Pelo menos uma tag `<source>`
• Mensagem de fallback

O arquivo pode ser fictício (ex: video.mp4).

#### Incorporação de conteúdo externo (`<iframe>`)
Incorpore um vídeo do YouTube OU um mapa do Google Maps, utilizando:
• A tag `<iframe>`
• O atributo title (obrigatório)
• Código copiado corretamente da plataforma

Não criar o link manualmente — usar o código de incorporação.

#### Uso de SVG
Insira um SVG diretamente no HTML (SVG inline), representando um ícone simples (ex: 
círculo, quadrado ou símbolo).

O SVG deve conter:
• Tag `<svg>`
• Pelo menos uma forma (`<circle>`, `<rect>`, etc.)
• Um texto acessível (`<title>` ou aria-label)

#### Mensagem de fallback (obrigatório)
Garanta que áudio, vídeo ou iframe contenham mensagem de fallback, explicando ao 
usuário o que ocorreu.

### Regras do exercício
✔ Utilizar formatação semântica (strong, em, mark)
✔ Utilizar atributo alt em imagens
✔ Usar `<figure>` quando a imagem tiver significado
✔ Inserir mensagens de fallback corretamente
✔ Código organizado e indentado
✔ NÃO utilizar CSS ou JavaScript

### O que será avaliado
| Critério | Descrição |
|----------|-----------|
| Estrutura HTML5 | Documento válido e bem formado |
| Formatação semântica | Uso correto de strong, em, mark |
| Inserção de mídias | Uso correto de img, audio, video, iframe |
| Acessibilidade | Uso de alt, title, fallback |
| Organização | Código limpo e indentado |
| Fidelidade à aula | Apenas conteúdos vistos |

### Ao finalizar, analise sua página e reflita:
- Se as mídias não carregarem, o usuário ainda entende o conteúdo
- As mensagens de fallback são claras e úteis
- A acessibilidade está garantida
- O código segue as boas práticas HTML5

---

## Solução Referência
O arquivo `midias.html` neste diretório contém uma implementação completa que atende a todos os requisitos deste exercício.
