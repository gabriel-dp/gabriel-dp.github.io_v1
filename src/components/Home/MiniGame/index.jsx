import { useEffect } from 'react';
import * as THREE from 'three';

const MiniGame = () => {
    useEffect (() => {
        //SCENE
        var scene = new THREE.Scene();
        
        //#region RENDERER
            var renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
            const show = document.getElementById('minigame');
            if (show.childNodes[0] === undefined) show.appendChild( renderer.domElement );
            
            function renderConfig () {
                const showData = show.getBoundingClientRect();
                renderer.setSize(showData.width, showData.height);
            }
            renderConfig();
            //#endregion
            
            //region CAMERA
            var aspect = 1.25;
            var d = 50;
            const camera = new THREE.OrthographicCamera( - d * aspect, d * aspect, d, - d, 1, 1000 );
            
            camera.position.set(50, 50, 50); 
            camera.lookAt(scene.position); 
            console.log(camera)
        //#endregion

        //BACKGROUND
        renderer.setClearColor(0x000000, 0);

        //LIGHTS
        const lightCentral = new THREE.DirectionalLight(0x777777, 2);
        scene.add( lightCentral );
        lightCentral.position.set(-50, 25 , 10);

        //#region OBJECTS
            //3D OBJECTS
            const longGeometry = new THREE.BoxGeometry(300, 5, 14);
            const blueMaterial = new THREE.MeshPhongMaterial({color: 0x206E8C, emissive: 0x024059, wireframe: false});
            const littleCube = new THREE.BoxGeometry(7, 12, 7);
            const greenMaterial = new THREE.MeshPhongMaterial({color: 0x777777, emissive: 0x777777, wireframe: false});
            
            const track = new THREE.Mesh( longGeometry, blueMaterial ); 
            const runner = new THREE.Mesh( littleCube, greenMaterial ); 
            
            
            const wall = new THREE.BoxGeometry(1, 7, 14);
            const redMaterial = new THREE.MeshPhongMaterial({color: 0xff2638, emissive: 0xff2638, wireframe: false});
            
            const barrier1 = new THREE.Mesh( wall, redMaterial ); 
            const barrier2 = new THREE.Mesh( wall, redMaterial ); 
            const barrier3 = new THREE.Mesh( wall, redMaterial ); 
            const barriers = [barrier1, barrier2, barrier3];
            
            function setScene() {
                const initialDistance = 100;
                let distance = 100;
                barriers.forEach ((barrier, index) => {
                    scene.add(barriers[index]);
                    barriers[index].position.set(initialDistance+(distance*index), -20, -30);
                });
                scene.add(track, runner);
                track.position.set(0,-26, -30);
                runner.position.set(-35,-17.5, -30);
            }
            setScene();
        //#endregion

        //RENDER
        renderer.render(scene, camera);

        //Animation Variables
        var startJump = 0;
        var startFall = 0;
        var isGameOn = false;
        const Kjump = 0.01;
        const Kfall = -0.2;

        function render () {
            renderer.render(scene, camera);

            //#region ANIMATIONS
                function checkTouching(a, d) {
                    let b1 = a.position.y - a.geometry.parameters.height / 2;
                    let t1 = a.position.y + a.geometry.parameters.height / 2;
                    let r1 = a.position.x + a.geometry.parameters.width / 2;
                    let l1 = a.position.x - a.geometry.parameters.width / 2;
                    let f1 = a.position.z - a.geometry.parameters.depth / 2;
                    let B1 = a.position.z + a.geometry.parameters.depth / 2;
                    let b2 = d.position.y - d.geometry.parameters.height / 2;
                    let t2 = d.position.y + d.geometry.parameters.height / 2;
                    let r2 = d.position.x + d.geometry.parameters.width / 2;
                    let l2 = d.position.x - d.geometry.parameters.width / 2;
                    let f2 = d.position.z - d.geometry.parameters.depth / 2;
                    let B2 = d.position.z + d.geometry.parameters.depth / 2;
                    if (t1 < b2 || r1 < l2 || b1 > t2 || l1 > r2 || f1 > B2 || B1 < f2) {
                        return false;
                    }
                    return true;
                }
            
                function jump () {
                    if (runner.position.y <= -17) {
                        startJump = performance.now();
                    }
                }

                if (isGameOn) {
                    barriers.forEach ((barrier, index) => {
                        barriers[index].position.x -= 1;
                        if (checkTouching(runner, barriers[index])) {
                            setScene();
                            isGameOn = false;
                        }
                        if (barriers[index].position.x <= -200) {
                            barriers[index].position.set(100, -20, -30);
                        }
                    })
                    

                    if (performance.now() < startJump + 250) {
                        runner.position.y += (performance.now() - startJump)**Kjump;
                        startFall = performance.now(); 
                    } else {
                        if (!checkTouching(runner, track)) {
                            runner.position.y -= 1-((performance.now() - startFall)**Kfall);
                        }
                    }
                }

                function handleClick () {
                    isGameOn = true;
                    jump();
                }

                show.addEventListener('click', () => handleClick());
                //show.addEventListener('keydown', (event) => {console.log(event)})

            //#endregion

            renderConfig();
            requestAnimationFrame( render );
        };
        render();

    })

    return (
        <div style={{width: '100%', height: '100%'}} id='minigame'/>
    );
}

export default MiniGame;