import Card from "./components/Card";
import "./App.css"

function App() {
  const data = [
    {
      "imageUrl": "https://ds6yc8t7pnx74.cloudfront.net/content/dam/alexa/alexa-brand-guidelines-2021-refresh-/Alexa_Logo_RGB_BLUE.png",
      "heading": "Alexa",
      "description": "This is Amazon Alexa"
    },
    {
      "imageUrl": "https://1000logos.net/wp-content/uploads/2021/12/Google-Home-Logo-768x432.png",
      "heading": "Google Home Mini",
      "description": "This is Google Home Mini"
    },
    {
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Siri_new_logo.png/180px-Siri_new_logo.png",
      "heading": "Siri",
      "description": "This is Apple Siri"
    }
]

  return (
    <div className="App">
      {data.map((card) => (
        <Card imageUrl={card.imageUrl} heading={card.heading} description={card.description}/>
      ))}
    </div>
  );
}

export default App;
