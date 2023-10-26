// import { Box } from "@mantine/core";
import classes from "./styles.module.css";
import { Carousel } from "@mantine/carousel";

export default function Tshirt() {
  return (
    <Carousel withIndicators height={'auto'} className={classes.imgContainer}>
      <Carousel.Slide>
        <img
          src="static_poter_8.png"
          alt="tshirt image"
          className={classes.tshirtImg}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          src="static_poter_4.png"
          alt="tshirt image"
          className={classes.tshirtImg}
        />
      </Carousel.Slide>
    </Carousel>
  );
}
