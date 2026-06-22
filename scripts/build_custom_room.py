from pathlib import Path
import numpy as np
import trimesh

root = Path(__file__).resolve().parents[1]
output = root / "src" / "assets" / "models" / "room-custom.glb"
scene = trimesh.Scene()

COLORS = {
    "wood": [181, 125, 72, 255],
    "wood_light": [218, 170, 109, 255],
    "blue": [73, 101, 142, 255],
    "blue_light": [120, 145, 179, 255],
    "cream": [245, 236, 218, 255],
    "white": [250, 248, 241, 255],
    "green": [92, 139, 54, 255],
    "dark": [39, 43, 52, 255],
    "yellow": [245, 190, 72, 255],
}


def add_mesh(name, mesh, color, translation=(0, 0, 0), scale=None):
    if scale is not None:
        mesh.apply_scale(scale)
    mesh.visual.vertex_colors = np.tile(np.array(COLORS[color], dtype=np.uint8), (len(mesh.vertices), 1))
    transform = np.eye(4)
    transform[:3, 3] = translation
    scene.add_geometry(mesh, node_name=name, geom_name=name, transform=transform)


def box(name, size, position, color):
    add_mesh(name, trimesh.creation.box(extents=size), color, position)


def sphere(name, position, scale, color, subdivisions=2):
    add_mesh(name, trimesh.creation.icosphere(subdivisions=subdivisions, radius=1), color, position, scale)


# Bed frame and mattress, placed behind and to the left of the workstation.
box("custom-wood-bed-base", (2.25, 0.32, 4.25), (-2.55, 0.45, -0.15), "wood")
box("custom-wood-headboard", (2.35, 1.55, 0.22), (-2.55, 1.1, -2.18), "wood")
for x in (-3.55, -1.55):
    for z in (-2.0, 1.7):
        box(f"custom-wood-bed-post-{x}-{z}", (0.16, 1.25, 0.16), (x, 0.72, z), "wood_light")
box("custom-cream-mattress", (2.12, 0.38, 3.85), (-2.55, 0.78, -0.05), "cream")
box("custom-blue-blanket", (2.18, 0.16, 2.45), (-2.55, 1.03, 0.58), "blue")
sphere("custom-blue-pillow", (-3.05, 1.15, -1.37), (0.72, 0.18, 0.48), "blue_light")
sphere("custom-white-pillow", (-2.18, 1.17, -1.38), (0.68, 0.18, 0.45), "white")

# Bedside table and warm orb lamp.
box("custom-wood-nightstand", (1.05, 0.72, 0.95), (-4.0, 0.4, 1.45), "wood_light")
box("custom-dark-drawer", (0.55, 0.08, 0.03), (-4.0, 0.48, 0.96), "dark")
sphere("custom-yellow-lamp", (-4.0, 1.05, 1.45), (0.38, 0.38, 0.38), "yellow")
box("custom-wood-lamp-base", (0.42, 0.12, 0.42), (-4.0, 0.73, 1.45), "wood")

# Floating shelf with books and a compact plant.
box("custom-wood-wall-shelf", (2.15, 0.16, 0.48), (-2.7, 3.75, -2.35), "wood_light")
for index, (x, color, height) in enumerate(((-3.35, "yellow", 0.72), (-3.05, "blue", 0.84), (-2.76, "cream", 0.66))):
    box(f"custom-book-{index}", (0.22, height, 0.42), (x, 3.75 + height / 2, -2.35), color)
box("custom-white-plant-pot", (0.48, 0.42, 0.48), (-2.25, 4.0, -2.35), "white")
for index, offset in enumerate(((-0.16, 0.0), (0.0, -0.08), (0.16, 0.02))):
    sphere(f"custom-green-leaf-{index}", (-2.25 + offset[0], 4.45, -2.35 + offset[1]), (0.13, 0.42, 0.13), "green")

# Soft beanbag in the foreground.
sphere("custom-blue-beanbag", (-2.7, 0.45, 2.75), (0.95, 0.48, 0.95), "blue")

output.write_bytes(scene.export(file_type="glb"))
print(f"Wrote {output} ({output.stat().st_size} bytes)")
