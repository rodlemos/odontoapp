const appointments = [
  {
    id: "1",
    date: new Date("06/28/2022"),
    hour: "08:30",
    patient: "Renan Lima",
    avatar:
      "https://media.istockphoto.com/photos/portrait-of-real-caucasian-man-with-happy-expression-picture-id1131350065?k=20&m=1131350065&s=612x612&w=0&h=EjNLORTpi95tmFCWV0fjgAUCPvjYnUtUHKQdxQcc624=",
    procedure: "Manutenção",
  },
  {
    id: "2",
    date: new Date("06/28/2022"),
    hour: "09:00",
    patient: "Franciele M.",
    avatar:
      "https://media.istockphoto.com/photos/glasses-girl-in-white-picture-id1089633230?k=20&m=1089633230&s=612x612&w=0&h=LNxo51TlLc-a8hNjJk5foJC9CI842yor3RvgNosIuKw=",
    procedure: "Avaliação",
  },
  {
    id: "3",
    date: new Date("06/28/2022"),
    hour: "09:30",
    patient: "Amanda Souza",
    avatar:
      "https://t4.ftcdn.net/jpg/02/56/19/69/360_F_256196954_lmcu4nMFri6REiLjHGeHkkjFq2ywzsVa.jpg",
    procedure: "Extração",
  },
  {
    id: "4",
    date: new Date("06/28/2022"),
    hour: "16:30",
    patient: "Henrique Martins",
    avatar:
      "https://t4.ftcdn.net/jpg/02/97/24/51/360_F_297245133_gBPfK0h10UM3y7vfoEiBC3ZXt559KZar.jpg",
    procedure: "Clareamento",
  },
  {
    id: "5",
    date: new Date("06/29/2022"),
    hour: "08:30",
    patient: "João Pereira",
    avatar:
      "https://thumbs.dreamstime.com/b/smug-young-suited-man-19746592.jpg",
    procedure: "Extração",
  },
  {
    id: "6",
    date: new Date("06/29/2022"),
    hour: "11:00",
    patient: "Suzana Andrade",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAfi_n9967kBmtkbPfHvVKDXHKX_TwfhktTw&usqp=CAU",
    procedure: "Manutenção",
  },
  {
    id: "7",
    date: new Date("06/29/2022"),
    hour: "14:30",
    patient: "Marcelo Silva",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG5CPz89vwuDB4H5EsXhkpKz0_koS-0HK0Yg&usqp=CAU",
    procedure: "Manutenção",
  },
];

const history = [
  {
    id: "1",
    date: "12/06/2021",
    procedure: "Cirurgia",
  },
  {
    id: "2",
    date: "27/08/2021",
    procedure: "Limpeza",
  },
  {
    id: "3",
    date: "06/09/2021",
    procedure: "Clareamento",
  },
  {
    id: "4",
    date: "13/09/2021",
    procedure: "Clareamento",
  },
  {
    id: "5",
    date: "24/09/2021",
    procedure: "Clareamento",
  },
  {
    id: "6",
    date: "15/03/2022",
    procedure: "Limpeza",
  },
];

export { appointments, history };
