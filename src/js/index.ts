import {
  Engine,
  Scene,
  HemisphericLight,
  ArcRotateCamera,
  SceneLoader,
  Vector3
} from '@babylonjs/core'

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const engine = new Engine(canvas, true);

const createScene = () => {
  const scene: Scene = new Scene(engine);
  const camera: ArcRotateCamera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), scene);

  camera.attachControl(canvas, true);

  const light1: HemisphericLight = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);
  const logo = SceneLoader.Append("./", "ExtrudeMXMthin.glb", scene, (newMeshes) => {})

  return scene;
}

const scene: Scene = createScene();

engine.runRenderLoop(() => {
  scene.render();
});
