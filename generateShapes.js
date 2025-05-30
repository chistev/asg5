import * as THREE from 'three';

export function generateShapes(scene, geometries, texturedMaterial, standardMaterial) {
  const shapes = [];

  for (let i = 0; i < 20; i++) {
    const geometry = geometries[i % geometries.length];
    const material = i === 0 ? texturedMaterial : standardMaterial;
    const mesh = new THREE.Mesh(geometry, material);

    let x = (Math.random() - 0.5) * 30;
    let y = (Math.random() - 0.5) * 30;
    let z = (Math.random() - 0.5) * 30;
    if (Math.abs(x) < 5) x += x < 0 ? -5 : 5;
    if (Math.abs(y) < 5) y += y < 0 ? -5 : 5;
    if (Math.abs(z) < 5) z += z < 0 ? -5 : 5;
    mesh.position.set(x, y, z);

    // Random rotation
    mesh.rotation.set(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    );

    const scale = 0.5 + Math.random() * 1.5;
    mesh.scale.set(scale, scale, scale);

    scene.add(mesh);
    shapes.push(mesh);
  }

  return shapes;
}
