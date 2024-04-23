// Scene is where you add the object (cube), camera 



// TOP LEVEL HIERARCHICAL ELEMENTS

// Defines scene
var scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

// Sets camera starting angle?
    var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
    camera.position.set( 0, 0, 100 );
    camera.lookAt( 0, 0, 0 );
    camera.position.z = 7;

// Renders whatever is available to render?
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

// Animates cube? How is this different from rendering?
function animate() {
    requestAnimationFrame( animate );
    Dodecahedron.rotation.x += 0.20;
    TorusKnot.rotation.z += 0.06;
    TorusKnot.rotation.y -= 0.02;
    renderer.render( scene, camera );
}



// MID LEVEL HIERARCHICAL ELEMENTS

// Create Dodecahedron
var geometry = new THREE.DodecahedronGeometry();
var material = new THREE.MeshBasicMaterial({
    color: 0x9EF68E
});
var Dodecahedron = new THREE.Mesh(geometry, material);
scene.add(Dodecahedron);
// Border
var geo = new THREE.EdgesGeometry( Dodecahedron.geometry );
var mat = new THREE.LineBasicMaterial( { color: 0x000000 } );
var wireframe = new THREE.LineSegments( geo, mat );
Dodecahedron.add( wireframe );

// Create Torus Knot
var geometry = new THREE.TorusKnotGeometry();
var material = new THREE.MeshBasicMaterial({
    color: 0xB2B4F0
});
var TorusKnot = new THREE.Mesh(geometry, material);
scene.add(TorusKnot);
TorusKnot.position.set(3.25, 0, 0)
//Border
var geo = new THREE.EdgesGeometry( TorusKnot.geometry );
var mat = new THREE.LineBasicMaterial( { color: 0x000000} );
var wireframe = new THREE.LineSegments( geo, mat );
TorusKnot.add( wireframe );

// Object (Tree)
loader = new THREE.OBJLoader();
loader.load('object/tree.obj', function (object) {
    object.position.set(-3.25, 0, 0)
    object.rotation.x = 0.05;
    modelObject = object;
    scene.add(object);
    animateModel();
});

// Animate Model (Object)
function animateModel() {
    requestAnimationFrame(animateModel);
    modelObject.rotation.x += 0.05;
    modelObject.rotation.y += 0.05;
}



// BOTTOM LEVEL HIERARCHICAL ELEMENTS

// Execute function
animate();