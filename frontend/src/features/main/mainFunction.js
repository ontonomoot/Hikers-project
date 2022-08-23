export default function iconSwitch(e, setGetDownCat, setGetUpCat, setTitleUp) {
  e.preventDefault();
  const tik = Number(e.target.id);
  switch (tik) {
    case 1:
      setGetDownCat(5);
      setGetUpCat(0);
      setTitleUp(1);
      break;
    case 2:
      setGetDownCat(0);
      setGetUpCat(1);
      setTitleUp(2);
      break;
    case 3:
      setGetDownCat(1);
      setGetUpCat(2);
      setTitleUp(3);
      break;
    case 4:
      setGetDownCat(2);
      setGetUpCat(3);
      setTitleUp(4);
      break;
    case 5:
      setGetDownCat(3);
      setGetUpCat(4);
      setTitleUp(5);
      break;
    case 6:
      setGetDownCat(4);
      setGetUpCat(5);
      setTitleUp(0);
      break;
    default:
      break;
  }
}
