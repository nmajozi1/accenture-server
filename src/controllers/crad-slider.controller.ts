import { getListSlides } from "../services/card-slider.service";

export const getSliderController = async ({}, res: any) => {
  try {
    const sliders = await getListSlides();
    res.status(200).send(sliders.data);
  } catch (error) {
    console.log('Error getting the list of slides: ', error);
    res.status(503).send(`${error}`);
  }
}