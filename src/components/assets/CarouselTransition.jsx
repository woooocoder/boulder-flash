import { Carousel } from "@material-tailwind/react";
import Video from "./Video";
 
const CarouselTransition = ({ climbs }) => {
  return (
    <Carousel
      transition={{ duration: 2 }}
      className="rounded-xl h-[50vh] w-full overflow-hidden"
    >
      {climbs.map((climb, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <Video
            url={climb.video}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselTransition;
