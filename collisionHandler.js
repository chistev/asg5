// collisionHandler.js
import * as THREE from 'three';

export function checkCollisions({
  movingSphere,
  shapes,
  texturedMaterial,
  animations,
  rotationDirections,
  sphereVelocity
}) {
  const sphereBox = new THREE.Box3().setFromObject(movingSphere);
  shapes.forEach((shape, index) => {
    const shapeBox = new THREE.Box3().setFromObject(shape);
    if (sphereBox.intersectsBox(shapeBox) && !animations[index].isPulsing) {
      if (shape.material !== texturedMaterial) {
        // Change color
        shape.material = new THREE.MeshStandardMaterial({
          color: Math.random() * 0xffffff,
          metalness: 0.5,
          roughness: 0.3
        });

        // Reverse rotation direction
        rotationDirections[index].x *= -1;
        rotationDirections[index].y *= -1;

        // Start pulse animation
        animations[index].isPulsing = true;
        animations[index].pulseTime = 0;
      }

      // Bounce the sphere
      const normal = new THREE.Vector3();
      const spherePos = movingSphere.position;
      const shapePos = shape.position;
      normal.subVectors(spherePos, shapePos).normalize();
      const dot = sphereVelocity.dot(normal);
      sphereVelocity.sub(normal.multiplyScalar(2 * dot));
    }
  });
}
