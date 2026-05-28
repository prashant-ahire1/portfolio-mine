import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const w = mount.clientWidth;
    const h = mount.clientHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Scene & camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    camera.position.z = 5;

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambient);
    const light1 = new THREE.PointLight(0x00fff0, 3, 20);
    light1.position.set(3, 3, 3);
    scene.add(light1);
    const light2 = new THREE.PointLight(0xbf00ff, 2, 20);
    light2.position.set(-3, -2, 2);
    scene.add(light2);
    const light3 = new THREE.PointLight(0xff2d78, 1.5, 15);
    light3.position.set(0, -4, 1);
    scene.add(light3);

    // Main icosahedron
    const geo = new THREE.IcosahedronGeometry(1.4, 1);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x020408,
      metalness: 0.9,
      roughness: 0.1,
      wireframe: false,
    });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    // Wireframe overlay
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00fff0,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const wireMesh = new THREE.Mesh(geo, wireMat);
    wireMesh.scale.setScalar(1.01);
    scene.add(wireMesh);

    // Outer glow ring
    const ringGeo = new THREE.TorusGeometry(2.2, 0.015, 8, 120);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x00fff0, transparent: true, opacity: 0.4 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    scene.add(ring);

    const ringGeo2 = new THREE.TorusGeometry(1.8, 0.01, 8, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0xbf00ff, transparent: true, opacity: 0.3 });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = Math.PI / 6;
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    // Floating dots
    const dotGeo = new THREE.BufferGeometry();
    const dotCount = 200;
    const positions = new Float32Array(dotCount * 3);
    for (let i = 0; i < dotCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.5 + Math.random() * 1.5;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    dotGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const dotMat = new THREE.PointsMaterial({ color: 0x00fff0, size: 0.025, transparent: true, opacity: 0.6 });
    const dots = new THREE.Points(dotGeo, dotMat);
    scene.add(dots);

    // Mouse interaction
    let mx = 0, my = 0;
    const onMouseMove = (e) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Resize
    const onResize = () => {
      const nw = mount.clientWidth, nh = mount.clientHeight;
      renderer.setSize(nw, nh);
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    // Animate
    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = Date.now() * 0.001;

      mesh.rotation.x += 0.004;
      mesh.rotation.y += 0.006;
      wireMesh.rotation.x = mesh.rotation.x;
      wireMesh.rotation.y = mesh.rotation.y;

      ring.rotation.z += 0.003;
      ring2.rotation.y += 0.004;
      ring2.rotation.x += 0.002;

      dots.rotation.y += 0.001;

      // Subtle camera follow mouse
      camera.position.x += (mx * 0.3 - camera.position.x) * 0.05;
      camera.position.y += (my * 0.3 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Light orbit
      light1.position.x = Math.sin(t * 0.7) * 4;
      light1.position.y = Math.cos(t * 0.5) * 3;
      light2.position.x = Math.cos(t * 0.6) * 4;
      light2.position.y = Math.sin(t * 0.4) * 3;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }} />;
}
