import { Carousel } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

import { images } from './src/images'

export default function CarouselDesign() {
    return(
        <div className="lg:m-4">
            <Carousel interval={5000} variant="dark">
                <Carousel.Item>
                    <img 
                    style={{maxHeight:'100vh'}}
                    className='d-block w-100' src='https://images.pexels.com/photos/6858618/pexels-photo-6858618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/>
                    <Carousel.Caption>
                        <p className="h1">Today's Big Deal..</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{maxHeight:'100vh'}} className='d-block w-100' src='https://images.pexels.com/photos/4295985/pexels-photo-4295985.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
                    <Carousel.Caption>
                        <p className="h1">Today's Big Deal..</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

