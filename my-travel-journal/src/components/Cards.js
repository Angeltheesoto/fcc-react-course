import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Data from './data'

function Cards(props) {
  return (
   <div className='space'>
    <Card style={{ width: '30rem', margin: '0 auto' }}>
      <Card.Img variant="top" src={props.item.image} />
      <Card.Body>
        <Card.Title>
          <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/twitter/322/round-pushpin_1f4cd.png" style={{'width': '20px'}}/>
          {props.item.title}</Card.Title>
        <p className='date'>{props.item.date.start}  •  {props.item.date.end}</p>
        <Card.Text>
          {props.item.description}
        </Card.Text>
        <a href={props.item.link} target="_Blank">
         <Button variant="primary">Link to {props.item.title}</Button>
        </a>
      </Card.Body>
    </Card>
   </div>
  );
}

export default Cards;