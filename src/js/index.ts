import {
  Engine,
  Scene,
  HemisphericLight,
  ArcRotateCamera,
  SceneLoader,
  Vector3,
  Color4,
  Color3
} from '@babylonjs/core'
import type { Nullable, ISceneLoaderPlugin, ISceneLoaderPluginAsync } from '@babylonjs/core'
import "@babylonjs/loaders/glTF";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const engine = new Engine(canvas, true);

const createScene = () => {
  const scene: Scene = new Scene(engine);
  scene.clearColor = new Color4(0, 0, 0, 1);

  const camera: ArcRotateCamera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), scene);
  camera.attachControl(canvas, true);

  const light: HemisphericLight = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);
  light.diffuse = new Color3(0, 0, 1);
	light.specular = new Color3(0, 0, 0);
  const logo: Nullable<ISceneLoaderPlugin | ISceneLoaderPluginAsync> = SceneLoader.Append("../../", "ExtrudeMXMthin.glb", scene, (newMeshes) => {})

  return scene;
}

const scene: Scene = createScene();

engine.runRenderLoop(() => {
  scene.render();
});
