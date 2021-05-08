import {
  Engine,
  Scene,
  ArcRotateCamera,
  SceneLoader,
  Vector3,
  Color4,
} from '@babylonjs/core'
import type { Nullable, ISceneLoaderPlugin, ISceneLoaderPluginAsync } from '@babylonjs/core'
import "@babylonjs/loaders";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const engine = new Engine(canvas, true);

const createScene = () => {
  const scene: Scene = new Scene(engine);
  scene.clearColor = new Color4(0, 0, 0, 1);

  const camera: ArcRotateCamera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), scene);
  camera.attachControl(canvas, true);

  const skull: Nullable<ISceneLoaderPlugin | ISceneLoaderPluginAsync> = SceneLoader.ImportMesh("", "../../skull/", "skull.babylon", scene, (newMeshes) => {
    scene.createDefaultCameraOrLight(true, true, true);
  })

  return scene;
}

const scene: Scene = createScene();

engine.runRenderLoop(() => {
  scene.render();
});
