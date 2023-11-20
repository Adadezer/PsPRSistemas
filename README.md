# Processo Seletivo Pr Sistemas

## 🌐 O que é a Aplicação
Desafio técnico desenvolvido para o processo seletivo da Pr Sistemas.

A aplicação consiste em desenvolver um template para uma agenda de contatos com as seguintes informações:

 - Main, com menus para navegação.
 - Grid de pesquisa com paginação.
 - Cadastro com:
	 - Nome
	 - Apelido
	 - Cpf
	 - Telefone
	 - Email

Sugestões:

✓Utilizar pelo menos 4 cores no template;

✓ Criar validações para campos obrigatórios (Nome, Telefone);

✓ Utilização de ícones e imagens. 


## 💻 Tecnologias Utilizadas
- JavaScript
- React
- NextJS
- Tailwind
- PrismaORM
- Postgresql


# 🖥️ Aplicação
Acesse a aplicação <a href="https://ps-pr-sistemas.vercel.app/" target="_blank" rel="noopener noreferrer">clicando aqui</a>

Clique com o botão direito do mouse no link e escolha a opção "Abrir link em uma nova aba/janela".

Ou segure `Ctrl` e click no link para abrir em uma nova aba e não sair dessa página.

## ⚙️ Como Utilizar

1- Para rodar a aplicação localmente, abra o terminal, clone o projeto e entre em sua pasta:

 - `https://github.com/Adadezer/PsPRSistemas.git` ou `git@github.com:Adadezer/PsPRSistemas.git`
 
 - `cd PsPRSistemas`

2- Execute o comando `npm install` para instalar pacotes e dependências:

3- A aplicação usa o postgresql como banco de dados, crie um banco de dados com qualquer nome ('psprsistemas' por exemplo) no postgresql.

4- Configure a variável de ambiente:

 - Com o banco de dados criado, crie na pasta raiz do teste um arquivo `.env` e coloque as informações do seu banco de dados na variável DATABASE_URL:
> DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"

Na pasta existe um arquivo chamado `.env.example` com um exemplo de como deve ser preenchido.

5- Execute o comando `npx prisma migrate reset` para o banco de dados ser populado automaticamente com informações de contatos fictícios. Logo após executar o comando, uma mensagem de confirmação será exibida, dizendo que o banco de dados será resetado e as informações contidas nele serão perdidas, escolha sim para continuar.

Obs: Como o banco acabou de ser criado e está vazio, não tem problema realizar esse passo, caso o comando seja executado novamente, os dados serão perdidos.

6- Execute o comando `npm run dev` , uma aba no navegador será aberta automaticamente, e iniciará a aplicação.

## 📌 Considerações
Não é possivel editar, adicionar, ou deletar um contato.

O foco deste teste técnico está mais em seu layout do que em sua funcionalidade.

Futuramente essas e outras funcionalidades poderão ser implementadas caso pedido.
