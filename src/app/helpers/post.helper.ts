export const changePicture = (
  dir: any,
  pictures: any,
  setPictures: Function
) => {
  var pics = pictures;
  const currIndex = pics.findIndex((pic: any) => pic?.current);
  pics[currIndex].current = false;
  if (dir === "right") {
    if (currIndex === pics?.length - 1) {
      pics[0].current = true;
    } else {
      pics[currIndex + 1].current = true;
    }
  } else if (dir === "left") {
    if (currIndex === 0) {
      pics[pics.length - 1].current = true;
    } else {
      pics[currIndex - 1].current = true;
    }
  }
  setPictures([...pics]);
};
