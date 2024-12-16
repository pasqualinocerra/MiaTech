import CardExercise from "./components/cardExercise"

const imagine = 'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const imagine2 = 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const imagine3 = 'https://images.pexels.com/photos/14092973/pexels-photo-14092973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const imagine4 = 'https://images.pexels.com/photos/17217435/pexels-photo-17217435/free-photo-of-acqua-inverno-montagna-ghiaccio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const imagine5 = 'https://images.pexels.com/photos/96387/pexels-photo-96387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const imagine6 = 'https://images.pexels.com/photos/8905097/pexels-photo-8905097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const title = 'Card Uno';
const title2 = 'Card Due';
const title3 = 'Card Tre';
const title4 = 'Card Quattro';
const title5 = 'Card Cinque';
const title6 = 'Card Sei';
const text = 'Questa è la prima card';
const text2 = 'Questa è la seconda card';
const text3 = 'Questa è la terza card';
const text4 = 'Questa è la quarta card';
const text5 = 'Questa è la quinta card';
const text6 = 'Questa è la sesta card';

const App = () => {
  
   return(
    <>
    <div className="container">
      <CardExercise img = {imagine} h1 = {title} p = {text}/>
      <CardExercise img = {imagine2} h1 = {title2} p = {text2}/>
      <CardExercise img = {imagine3} h1 = {title3} p = {text3}/>
      <CardExercise img = {imagine4} h1 = {title4} p = {text4}/>
      <CardExercise img = {imagine5} h1 = {title5} p = {text5}/>
      <CardExercise img = {imagine6} h1 = {title6} p = {text6}/>
    </div>
    </>
  )
}

export default App
