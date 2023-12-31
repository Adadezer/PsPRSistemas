import { prisma } from "../lib/prisma";
async function main() {
  await prisma.contact.createMany({
    data: [
      {
        name: "João da Silva",
        nickname: "João",
        cpf: "123.456.789-00",
        phone: "(11) 98765-4321",
        email: "joao.silva@email.com",
        photo:
          "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Ana Luisa de Oliveira",
        nickname: "Ana Lu",
        cpf: "987.654.321-00",
        phone: "(22) 12345-6789",
        email: "anaLu.oliv@email.com",
        photo:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Carlos Santos",
        nickname: "Carlos",
        cpf: "654.321.987-00",
        phone: "(33) 98765-4321",
        email: "carlos.santos@email.com",
        photo:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Ana Costa",
        nickname: "Ana",
        cpf: "111.222.333-44",
        phone: "(44) 12345-6789",
        email: "ana.costa@email.com",
        photo:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Pedro Oliveira",
        nickname: "",
        cpf: "555.666.777-88",
        phone: "(55) 98765-4321",
        email: "pedro.oliv@email.com",
        photo: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Luiza Rodrigues",
        nickname: "Luiza",
        cpf: "999.888.777-66",
        phone: "(66) 12345-6789",
        email: "luisarodrig@email.com",
        photo:
          "https://images.unsplash.com/photo-1499887142886-791eca5918cd?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Fernanda Almeida",
        nickname: "Fer",
        cpf: "848.864.241-55",
        phone: "(77) 98765-4321",
        email: "fer.almeida@email.com",
        photo:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Ricardo Silva",
        nickname: "Rick",
        cpf: "222.333.444-55",
        phone: "(88) 12345-6789",
        email: "rick.silva@email.com",
        photo:
          "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Aline Santos",
        nickname: "Aline",
        cpf: "333.444.555-66",
        phone: "(99) 98765-4321",
        email: "alinesantos@email.com",
        photo:
          "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Gabriel Oliveira",
        nickname: "Gabriel",
        cpf: "444.555.666-77",
        phone: "(00) 12345-6789",
        email: "gabriel.oliveira@email.com",
        photo:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Laura Lima",
        nickname: "",
        cpf: "426.702.141-42",
        phone: "(11) 98765-4321",
        email: "laura.lima@email.com",
        photo:"",
      },
      {
        name: "Eduardo Rodrigues",
        nickname: "Edu",
        cpf: "666.777.888-99",
        phone: "(22) 12345-6789",
        email: "eduardo.rodrigues@email.com",
        photo:
          "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Damares M. L. de Ortiz",
        nickname: "Daria",
        cpf: "010.881.100-02",
        phone: "(32) 3626-6386",
        email: "damares.maria@email.com",
        photo: "",
      },
      {
        name: "Ciro Dominato de Assunção",
        nickname: "",
        cpf: "357.847.010-45",
        phone: "(71) 2628-5485",
        email: "ciro.domom@email.com",
        photo:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Carla Lutero de Barbosa",
        nickname: "Carlinha",
        cpf: "546.789.827-28",
        phone: "(74) 3438-1886",
        email: "carlinha@email.com",
        photo: "",
      },
      {
        name: "Michele Carrara de Duarte",
        nickname: "",
        cpf: "743.837.280-49",
        phone: "(65) 2827-1544",
        email: "micarrara@email.com",
        photo:
          "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Omar Otaviano Ferminiano",
        nickname: "",
        cpf: "531.169.132-85",
        phone: "(85) 3175-0943",
        email: "omar@email.com",
        photo:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Leonardo Álvaro Ferraz",
        nickname: "Léo",
        cpf: "810.094.523-39",
        phone: "(63) 3773-8151",
        email: "leo.ferraz@email.com",
        photo: "",
      },
      {
        name: "Karin Abreu Faria",
        nickname: "Ka Faria",
        cpf: "403.070.107-83",
        phone: "(61) 2882-8253",
        email: "kabreua@email.com",
        photo:
          "https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Celina Galeno Garcia",
        nickname: "Celina",
        cpf: "276.778.651-51",
        phone: "(85) 2335-9236",
        email: "cel.garcia@email.com",
        photo:
          "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Margarida Roberta Serrano",
        nickname: "Maflor",
        cpf: "220.265.772-00",
        phone: "(82) 3826-6515",
        email: "mar.serrano@email.com",
        photo:
          "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Antônio Kim Jimenes Var",
        nickname: "Tonho",
        cpf: "485.508.891-99",
        phone: "(95) 2970-8498",
        email: "tonho.var@email.com",
        photo:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Thales Emanoel Nobrega",
        nickname: "Thales",
        cpf: "709.850.432-70",
        phone: "(97) 3164-7881",
        email: "tha.nobrega@email.com",
        photo:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Beatriz Albuquerque Costa",
        nickname: "Bia",
        cpf: "753.139.608-23",
        phone: "(11) 5979-5559",
        email: "bia.costa@email.com",
        photo:
          "https://images.unsplash.com/photo-1574701148212-8518049c7b2c?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });