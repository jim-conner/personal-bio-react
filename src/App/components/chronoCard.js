import React from 'react';
import {
  CardImg,
  Card,
} from 'reactstrap';
import CardModal from './forms/CardModal';

function ChronoCard() {
  return (
    <div>
      <Card body inverse
        className='customizedCard'
        color='transparent'
      >
        <CardImg
        //   src={projectObj.image} alt={projectObj.title}
        // />
        // <CardModal
        //   {...projectObj}
        />
      </Card>
    </div>
  );
}

export default ChronoCard;

// {
//   title: 'May 1940',
//   cardTitle: 'Dunkirk',
//   url: 'http://www.history.com',
//   cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
//   cardDetailedText: 'Men of the British Expeditionary Force (BEF) wade out to..',
//   media: {
//     type: 'IMAGE',
//     source: {
//       url: 'https://api.time.com/wp-content/uploads/2018/06/dinosaurs-jurassic-world-fact-check-3.jpg?w=800&quality=85'
//     }
//   }
// }
