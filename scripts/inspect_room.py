from pathlib import Path
import trimesh

root = Path(__file__).resolve().parents[1]
model = root / "src" / "assets" / "models" / "room.glb"
scene = trimesh.load(model, force="scene")

print("bounds", scene.bounds)
for node_name in sorted(scene.graph.nodes_geometry):
    transform, geometry_name = scene.graph[node_name]
    geometry = scene.geometry[geometry_name]
    translation = tuple(round(value, 3) for value in transform[:3, 3])
    extents = tuple(round(value, 3) for value in geometry.extents)
    print(f"{node_name:28} geo={geometry_name:28} loc={translation} ext={extents}")
