import * as THREE from "three";


export const init = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55,
        window.innerWidth / window.innerHeight,
        45,
        30000);
    const renderer = new THREE.WebGLRenderer({
            antialias: true
        }); 
    renderer.setSize(window.innerWidth, window.innerHeight);
    const canvas = document.querySelector('#three');
    canvas.appendChild(renderer.domElement);
    renderer.render(scene, camera);
}