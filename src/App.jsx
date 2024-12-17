import { useState } from "react";
import CardExercise from "./components/cardExercise"

const App = () => {
  
  const [cards ,setCard] = useState ([
    {
      imagine : 'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title : 'Card Uno',
      text : 'Questa è la prima card',
    },
    {
      imagine : 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title : 'Card Due',
      text : 'Questa è la seconda card',
    },
    {
      imagine : 'https://images.pexels.com/photos/14092973/pexels-photo-14092973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title : 'Card Tre',
      text : 'Questa è la terza card',
    },
    {
      imagine : 'https://images.pexels.com/photos/17217435/pexels-photo-17217435/free-photo-of-acqua-inverno-montagna-ghiaccio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title : 'Card Quattro',
      text : 'Questa è la quarta card',
    },
    {
      imagine : 'https://images.pexels.com/photos/96387/pexels-photo-96387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title : 'Card Cinque',
      text : 'Questa è la quinta card',
    },
    {
      imagine : 'https://images.pexels.com/photos/8905097/pexels-photo-8905097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title : 'Card Sei',
      text : 'Questa è la sesta card',
    }
  ])

  return (
    <>
      <div className="container">
        <CardExercise
          img={cards[0].imagine}
          h1={cards[0].title}
          p={cards[0].text}
        />
        <CardExercise
          img={cards[1].imagine}
          h1={cards[1].title}
          p={cards[1].text}
        />
        <CardExercise
          img={cards[2].imagine}
          h1={cards[2].title}
          p={cards[2].text}
        />
        <CardExercise
          img={cards[3].imagine}
          h1={cards[3].title}
          p={cards[3].text}
        />
        <CardExercise
          img={cards[4].imagine}
          h1={cards[4].title}
          p={cards[4].text}
        />
        <CardExercise
          img={cards[5].imagine}
          h1={cards[5].title}
          p={cards[5].text}
        />
      </div>
    </>
  );
};

export default App;