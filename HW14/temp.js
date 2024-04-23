// Importing library, required to define THREE as three.min.js is depreciated
import * as THREE from './lib/three.module.min.js';

// Scene is where you add the object (cube), camera 



// TOP LEVEL HIERARCHICAL ELEMENTS

// Defines scene, whatever the hell that means
var scene = new THREE.Scene();

// Sets camera starting angle?
//var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

// Renders whatever is available to render?
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Animates cube? How is this different from rendering?
function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}



// MID LEVEL HIERARCHICAL ELEMENTS

// Create cube?
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// Create line
var material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
var points = [];
points.push( new THREE.Vector3( - 10, 20, 0 ) );
points.push( new THREE.Vector3( 0, 30, 0 ) );
points.push( new THREE.Vector3( 10, 20, 0 ) );

var geometry = new THREE.BufferGeometry().setFromPoints( points );
var line = new THREE.Line( geometry, material );
scene.add(line);
renderer.render( scene, camera );

//Create text?



// BOTTOM LEVEL HIERARCHICAL ELEMENTS

// Execute function
animate();