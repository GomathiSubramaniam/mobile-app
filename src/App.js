import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const data = [
    {
      productImage: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/iphone14promax_1.jpg?VersionId=TF0EiCCvxCMCnvSN4R5Z2FfnkoH.u51l&size=690:388",
      productName: "IPhone 14 promax",
      price: 100000,
      rating: 90,

    },
    {
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgqihkdYacUqeFylNeaSXcOL6XSPjktK9bRw3AhJEU1g&usqp=CAU&ec=48600113",
      productName: "Samsung Galaxy",
      price: 50000,
      rating: 60,

    },
    {
      productImage: "https://static.toiimg.com/thumb/msid-94048824,width-400,resizemode-4/94048824.jpg",
      productName: "Google Pixel 7pro",
      price: 70000,
      rating: 70,

    },
    {
      productImage: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61FAi3RI3pL._SY355_.jpg",
      productName: "Oneplus 11",
      price: 40000,
      rating: 80,

    }

  ];
  const show = true;
  return (
    <div className="App">
      <div className= "card-container">
      {data.map((prod, idx) => (
        <Card key = {idx} style={{ width: '18rem' }}>
          <Card.Img variant="top" src= {prod.productImage} />
          <Card.Body>
            <Card.Title>{prod.productName}</Card.Title>
            <Card.Text>{prod.price} Rs </Card.Text>
            <Card.Text>{prod.rating} ⭐ </Card.Text>
            <Button variant="primary">Buy Now</Button>{" "}
            {show ?<Button variant="danger">Remove Now</Button> : "" }
            
          </Card.Body>
        </Card>
      ))}
     
    </div>
    </div>
  );
}

export default App;
