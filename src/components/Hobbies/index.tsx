import Image from "next/image";
import React from "react";
import HobbiesCard from "./HobbiesCard";

const hobbies = [
  {
    title: "Watching Movies 🎬",
    img: "",
    description:
      "I grew up with movies , from classic movies like 'shop in the corner' to 'Avengers' . I enjoy watching movies and It's my 1st hobbie in the world! Also i have a project called movie fight which you can find it in my github (it's about comparing to movies) ..!there are many different types of movies to choose from, and I enjoy exploring a wide variety of genres. Some of my favorites include dramas, comedies, thrillers, and science fiction. I also enjoy watching foreign films, as they often provide a unique perspective and offer a glimpse into different cultures and ways of life.Another aspect of movie-watching that I appreciate is the communal experience. There's something special about watching a movie with a group of friends or family members and experiencing the story together. Whether we're laughing at a comedy or holding our breath during a suspenseful scene, sharing the experience with others can make it even more memorable.",
  },
  {
    title: "Playing Football ⚽",
    img: "",
    description:
      "I always dreamt of being a football player since i was a little boy , and Playing football makes me feel that I'm still  a little boy with who all of his mind is to play football and nothing more... ,there's also the thrill of competition that comes with playing soccer. I love the feeling of going head-to-head with another team and pushing myself to be the best player I can be. Whether we're playing in a local league or just having a pickup game, there's always an element of excitement and challenge that keeps me coming back for more.Overall, I believe that soccer is a sport that can teach us a lot about life. It teaches us the value of teamwork, discipline, and determination. It also reminds us that sometimes we have to take risks and be willing to fail in order to succeed. As someone who loves to play soccer, I feel lucky to have found a sport that not only challenges me physically and mentally but also helps me grow as a person. ",
  },
  {
    title: "Reading Book 📚",
    img: "",
    description:
      "As a matter of fact I began to read in my college years and I notice that feel more mindfull and much more relax when I'm reading. I start with a book called '1984' and last book that I read was 'The Gambler, I find that there's nothing quite like getting lost in a good book. Whether I'm reading fiction or non-fiction, I always feel like I'm learning something new and expanding my understanding of the world. Reading is a great way to escape from the stresses of everyday life and immerse yourself in a different world or perspective. Plus, there's something incredibly satisfying about finishing a book and feeling like you've accomplished something meaningful. Overall, I believe that reading is one of the most rewarding and enriching activities a person can engage in, and I feel grateful for the opportunity to do so.'",
  },
  {
    title: "Not A gamer but I play 🎮",
    img: "",
    description: "You know if you know!",
  },
];

export default function index() {
  return (
    <div className="max-w-5xl w-5/6 lg:w-fit mx-auto space-y-3 my-4">
      <h2 className="text-center text-5xl">My Hobbies</h2>
      {hobbies.map((item, idx) => {
        return (
          <HobbiesCard
            key={idx}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </div>
  );
}
