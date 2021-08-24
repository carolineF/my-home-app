import * as THREE from "three";

let renderer;
let scene, camera, skybox;

export const init = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        45,
        30000
    );
    camera.position.set(1200, -250, 20000);

    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.id = "canvas";
    document.body.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight( 0xff0000);
    light.position.set( 1000, 10000, 10000 );
    scene.add( light );

    const materialArray = createMaterialArray();
    const skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
    skybox = new THREE.Mesh(skyboxGeo, materialArray);
    scene.add(skybox);

    animate();
}

function createPathStrings() {
    const basePath = "./static/skybox/";
    const fileType = ".jpeg";
    const sides = ["ft", "bk", "up", "dn", "rt", "lf"];
    const pathStings = sides.map(side => {
        return basePath + side + fileType;
    });

    return pathStings;
}


function createMaterialArray() {
    const skyboxImagepaths = createPathStrings();
    const materialArray = skyboxImagepaths.map(image => {
        let texture = new THREE.TextureLoader().load(image);

        return new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide
        }); 
    });
    return materialArray;
}

export const animate = () => {
    skybox.rotation.x += 0.005;
    skybox.rotation.y += 0.005;
    skybox.rotation.z += 0.005;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}