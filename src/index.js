import "./index.html";
import "./index.scss";
import { mult, sum } from "./modules/calk";
import plant from "./img/third.jpg";

const img = new Image();
img.src = plant;
console.log(mult(2, 4));
console.log(sum(2, 4));
