import click from "../assets/music/click.mp3";
import pop from "../assets/music/pop.mp3";
import scratch from "../assets/music/scratch.mp3";

export function playClick() {
  new Audio(click).play();
}

export function playPop() {
  new Audio(pop).play();
}

export function playScratch() {
  new Audio(scratch).play();
}