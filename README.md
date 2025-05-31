**WOW IMPLEMENTATIONS**

**1. Interactive Color Change**

Users can click on shapes in the scene to change their colors randomly, adding an interactive and engaging layer to exploration.

Raycasting is used to detect object intersections under the mouse.
Event handling dynamically updates the material color of clicked objects.
This feature enhances: 
Engagement: Users interact directly with the 3D elements.
Visual Variety: Randomized colors refresh the appearance without overwhelming the aesthetic.
Technical Depth: Demonstrates proficiency with Raycaster and scene graph manipulation.

**2. Hover-to-Scale Effect**

Hovering over any shape causes it to subtly scale up, providing real-time visual feedback.
Raycaster detects hovered objects on mousemove. A scale state is managed to avoid flickering or constant resizing.
Adds polish and responsiveness. 
Enhances the feeling of depth and user presence in the scene.
Fully compatible with the color change feature—each responds to different events (click vs. mousemove).

**Collision-Triggered Reactions**

A bouncing sphere moves autonomously throughout the scene. When it collides with any of the 20+ shapes, it triggers a visual reaction—such as:
Changing the shape’s color,
Flipping its rotation direction,
Scaling it briefly.

The sphere's movement is physics-inspired (basic velocity and boundary reflection).
Upon impact, the intersected shape responds dynamically.

Adds non-user-driven interaction and continuous variability to the scene.
Demonstrates understanding of animation loops, bounding box physics, and scene graph manipulation.
