export function updateSphereAndAnimations({
  movingSphere,
  sphereVelocity,
  boundary,
  shapes,
  animations,
  originalScales
}, delta) {
  // Move sphere
  movingSphere.position.addScaledVector(sphereVelocity, delta * 60);

  // Bounce at scene boundaries
  if (Math.abs(movingSphere.position.x) > boundary) {
    movingSphere.position.x = Math.sign(movingSphere.position.x) * boundary;
    sphereVelocity.x *= -1;
  }
  if (Math.abs(movingSphere.position.y) > boundary) {
    movingSphere.position.y = Math.sign(movingSphere.position.y) * boundary;
    sphereVelocity.y *= -1;
  }
  if (Math.abs(movingSphere.position.z) > boundary) {
    movingSphere.position.z = Math.sign(movingSphere.position.z) * boundary;
    sphereVelocity.z *= -1;
  }

  // Pulsing animation
  shapes.forEach((shape, index) => {
    if (animations[index].isPulsing) {
      animations[index].pulseTime += delta;
      const t = animations[index].pulseTime / animations[index].pulseDuration;
      if (t < 1) {
        const scaleFactor = 1 + 0.3 * Math.sin(t * Math.PI);
        shape.scale.copy(originalScales[index]).multiplyScalar(scaleFactor);
      } else {
        animations[index].isPulsing = false;
        shape.scale.copy(originalScales[index]);
      }
    }
  });
}
