import _ from 'lodash';
import './styles.scss';
import hotel1 from './hotel-1.jpg'

function component() {
  let element = document.createElement('div');


  element.innerHTML = _.join(['Hello', 'webpack', 'Get ready to rumble!'], ' ');
  element.classList.add('hello');

  var myHotel = new Image();
  myHotel.src = hotel1;

  element.appendChild(myHotel);

  return element;
}

document.body.appendChild(component());
