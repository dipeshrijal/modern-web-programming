import LikeComponent from "./LikeComponent";

const component = new LikeComponent();

component.onClick(); // 1
component.onClick(); // 2
component.active = true;
component.onClick(); // 1
component.active = false;
component.onClick(); // 2


console.log(component.likesCount);