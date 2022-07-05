import { v4 as uuid4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Rooftop Breeze",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/05/42878bcb02c1a3613f4913b226674cd36bac9830-1024x1024.jpg",
      artist: "Smile High, Richard Vagner",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=32865",
      color: ["#C69400", "#9EA89A"],
      id: uuid4(),
      active: true,
    },
    {
      name: "Full Circle ",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/05/3aaa079444cf9c1d4e0a1f53947321b29ff554c0-1024x1024.jpg",
      artist: "Moods ",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=35507",
      color: ["#557840", "#435F86"],
      id: uuid4(),
      active: false,
    },
    {
      name: "A Reminder",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/05/c0c6175640eb9aa14b955ae91e255b3175de1c32-1024x1024.jpg",
      artist: "Sleepy Fish, coa",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=36925",
      color: ["#B50404", "#ECBA6E"],
      id: uuid4(),
      active: false,
    },
    {
      name: "Nectarine",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/06/2b9d337d372db542748e2643dc90af62dd3418e2-1024x1024.jpg",
      artist: "Es-K, Danny James, John Culbreth",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=34242",
      color: ["#5A6D3E", "#AD0100"],
      id: uuid4(),
      active: false,
    },
    {
      name: "Glow",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/03/efb56e836d82d26e857b341a951f0337ace66b8b-1024x1024.jpg",
      artist: "Tesk",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=31525",
      color: ["#2C3965", "#C12C4B"],
      id: uuid4(),
      active: false,
    },
    {
      name: "Night Fishing ",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/03/1a32362ec1ba749448678975a905ae2b66caf80f-1024x1024.jpg",
      artist: "C Y G N",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=31591",
      color: ["#AEBBDB", "#4A976D"],
      id: uuid4(),
      active: false,
    },
  ];
}

export default chillHop;
