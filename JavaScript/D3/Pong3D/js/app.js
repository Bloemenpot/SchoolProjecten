let gameStarted = false;

const scene = new THREE.Scene();

var ySpeed = 0.4;

//Add Cube 1
    const cube1Geomatry = new THREE.BoxGeometry(0.5, 2.5, 0.5);
    const cube1Material = new THREE.MeshLambertMaterial({ color: 0x33f0ff });
    const cube1Mesh = new THREE.Mesh(cube1Geomatry, cube1Material)
    cube1Mesh.position.set(-8, 0, -20);
    scene.add(cube1Mesh);

//Add Cube 2
    const cube2Geomatry = new THREE.BoxGeometry(0.5, 2.5, 0.5);
    const cube2Material = new THREE.MeshLambertMaterial({ color: 0xff534b });
    const cube2Mesh = new THREE.Mesh(cube2Geomatry, cube2Material)
    cube2Mesh.position.set(8, 0, -20);
    scene.add(cube2Mesh);

//Add Sphere
    const sphereGeometry = new THREE.SphereGeometry( 0.15, 32, 32 );
    const sphereMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
    sphere.position.set(0, 0, 0);
    scene.add(sphere);

//Set up Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(10, 20, 0);
scene.add(directionalLight);

//Camera
//Orthographic
// const aspect = window.innerWidth / window.innerHeight;
// const width = 10;
// const height = width * (window.innerHeight / window.innerWidth);
// const camera = new THREE.OrthographicCamera(
//     width / -2, // Left side
//     width / 2, // Right side
//     height / 2, // 
//     height / -2,
//     1,
//     100
// );
//
//Perspective
const aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(
    20, //FOV
    aspect, //Aspect Ratio
    1, //Near plane
    100 // Far plane
);
//Position
camera.position.set(0, 0, 10);
camera.lookAt(0, 0, 0);

//Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

render();

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    //Left Box
    if (keyCode == 87) {
        cube1Mesh.position.y += ySpeed;
        console.log("w");
    } else if (keyCode == 83) {
        cube1Mesh.position.y -= ySpeed;
        console.log("s");
    }//Right Box
    else if (keyCode == 38) {
        cube2Mesh.position.y += ySpeed;
        console.log("up arrow");
    }else if (keyCode == 40) {
        cube2Mesh.position.y -= ySpeed;
        console.log("down arrow");
    }
    render();
};

function render(){
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
    if(document.body.childNodes.length >= 1){
        console.log(document.body.childNodes.length);
        document.documentElement.innerHTML = '';
    }
    document.body.appendChild(renderer.domElement);
    console.log(document.body.childNodes.length);
}

//Adding to HTML