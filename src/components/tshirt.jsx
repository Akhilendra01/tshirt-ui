// import { Box } from "@mantine/core";
import classes from "./styles.module.css";
import { Carousel } from "@mantine/carousel";

export default function Tshirt() {
  return (
    <Carousel withIndicators height={'auto'} className={classes.imgContainer}>
      <Carousel.Slide>
        <img
          src="tshirt.jpg"
          alt="tshirt image"
          className={classes.tshirtImg}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          src="tshirt.jpg"
          alt="tshirt image"
          className={classes.tshirtImg}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          src="tshirt.jpg"
          alt="tshirt image"
          className={classes.tshirtImg}
        />
      </Carousel.Slide>
    </Carousel>
  );
}
