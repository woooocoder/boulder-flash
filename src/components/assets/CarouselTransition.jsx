import { Carousel } from "@material-tailwind/react";
import Video from "./Video";
 

// session.map(session => <CsTrs climbs={session.climbs} />) 
const CarouselTransition = ({ climbs }) => {
  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl">
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-[80vh] w-min object-cover"
      />
      
      { climbs.map((climb, index) => (
          <div key={index}>
            { JSON.stringify(`${climb}, ${++index}`)}
            <Video url={climb.video} />
          </div>
      ))}
    </Carousel>
  );
}

export default CarouselTransition