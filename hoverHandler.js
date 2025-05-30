export function handleMouseMove(event, raycaster, mouse, camera, shapes, originalScales, setCurrentlyHovered, getCurrentlyHovered) {
  // Normalize mouse coordinates to [-1, 1]
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Update raycaster
  raycaster.setFromCamera(mouse, camera);

  // Check for intersections with shapes
  const intersects = raycaster.intersectObjects(shapes);

  let currentlyHovered = getCurrentlyHovered();

  if (intersects.length > 0) {
    const intersectedMesh = intersects[0].object;
    if (currentlyHovered !== intersectedMesh) {
      // Revert previous hovered shape to original scale
      if (currentlyHovered) {
        const index = shapes.indexOf(currentlyHovered);
        currentlyHovered.scale.copy(originalScales[index]);
      }

      // Scale up the new hovered shape
      const index = shapes.indexOf(intersectedMesh);
      const originalScale = originalScales[index];
      intersectedMesh.scale.set(
        originalScale.x * 1.2,
        originalScale.y * 1.2,
        originalScale.z * 1.2
      );

      setCurrentlyHovered(intersectedMesh);
    }
  } else {
    // Revert if nothing is hovered
    if (currentlyHovered) {
      const index = shapes.indexOf(currentlyHovered);
      currentlyHovered.scale.copy(originalScales[index]);
      setCurrentlyHovered(null);
    }
  }
}
