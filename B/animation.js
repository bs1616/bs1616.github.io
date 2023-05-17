import * as THREE from "https://cdn.skypack.dev/three@0.136.0";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#appbg")
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight)

const spaceTexture = new THREE.TextureLoader().load("space.jpg");
scene.background = spaceTexture;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate()