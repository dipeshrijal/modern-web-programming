import LikeComponent from "./LikeComponent";

const component = new LikeComponent();

component.active = true;
component.onClick();
component.onClick();


console.log(component.likesCount);