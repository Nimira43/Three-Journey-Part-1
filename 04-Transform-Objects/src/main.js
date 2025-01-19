import * as THREE from 'three'
import './main.css'

const canvas = document.querySelector('.canvas')
const scene = new THREE.Scene()

const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

const group = new THREE.Group()
group.scale.y = 2.1
group.rotation.y = 0.6
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff4500 })
)
cube1.position.x = - 1.7
cube1.rotation.y = 3.4
cube1.rotation.x = 2.5
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x87ceeb })
)
cube2.position.y = 0.2
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x012222 })
)
cube3.position.z = 1.3
group.add(cube3)

const sizes = {
    width: 1100,
    height: 650
}

const camera = new THREE.PerspectiveCamera(
    75, 
    sizes.width / sizes.height
)
camera.position.z = 3
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)