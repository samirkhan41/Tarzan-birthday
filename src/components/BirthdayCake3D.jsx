import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * BirthdayCake3D
 * Photorealistic 3D Two-Tier Birthday Cake in Three.js:
 * - Glazed white ceramic pedestal cake stand with soft contact shadows
 * - Lower tier: Smooth pastel lavender buttercream with spatula marks & pearl base
 * - Upper tier: Soft strawberry-pink buttercream with glossy dripping strawberry icing
 * - Toppings: French macarons, fresh strawberries with green leaves, piped meringues
 * - 5 TALL, THICK, BOLD birthday candles with realistic teardrop-shaped glowing flames
 * - Authentic wind bending, progressive extinguishing, glowing red wick embers, and delicate rising smoke
 * - Continuous 360° rotation (gentle frontal focus in candle blowing mode)
 */
export default function BirthdayCake3D({
  isBlowing = false,
  flameBendAngle = 0,
  extinguishedCount = 0, // 0 to 5
  scale = 1,
  focusedMode = false, // Zoom in on candles for Screen 4 (The Candles)
  className = "",
}) {
  const containerRef = useRef(null);
  const flamesRef = useRef([]);
  const pointLightsRef = useRef([]);
  const smokePuffsRef = useRef([]);
  const embersRef = useRef([]);
  const cakeGroupRef = useRef(null);

  const propsRef = useRef({ isBlowing, flameBendAngle, extinguishedCount, focusedMode });
  useEffect(() => {
    propsRef.current = { isBlowing, flameBendAngle, extinguishedCount, focusedMode };
  }, [isBlowing, flameBendAngle, extinguishedCount, focusedMode]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 340;
    const height = container.clientHeight || 360;

    // 1. Scene
    const scene = new THREE.Scene();

    // 2. Camera: Framed with generous headroom so candles, flames, and smoke are never cut off
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    if (focusedMode) {
      // Screen 4: Slightly elevated, looking right at the upper tier & candles with clear space above
      camera.position.set(0, 3.0, 5.1);
      camera.lookAt(0, 1.95, 0);
    } else {
      // Full view of cake & pedestal stand, centered with flames in upper third
      camera.position.set(0, 2.4, 7.2);
      camera.lookAt(0, 1.25, 0);
    }

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 4. Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xfff5eb, 1.15);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff8ee, 2.6);
    keyLight.position.set(3.5, 7, 4.5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.001;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xf4e2fb, 1.3);
    fillLight.position.set(-4, 3.5, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffe2cf, 2.8);
    rimLight.position.set(0, 6, -4.5);
    scene.add(rimLight);

    // Procedural Frosting Bump Texture
    const createFrostingBumpTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#808080';
      ctx.fillRect(0, 0, 256, 256);

      for (let i = 0; i < 400; i++) {
        const x = Math.random() * 256;
        const y = Math.random() * 256;
        const r = Math.random() * 15 + 4;
        const alpha = Math.random() * 0.08;
        ctx.fillStyle = Math.random() > 0.5 ? `rgba(255,255,255,${alpha})` : `rgba(0,0,0,${alpha})`;
        ctx.beginPath();
        ctx.ellipse(x, y, r, r * 0.4, Math.random() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(2, 2);
      return texture;
    };

    // Helper for Spiral Candy Stripes on Candles
    const createCandleStripeTexture = (baseColorHex) => {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = `#${baseColorHex.toString(16).padStart(6, '0')}`;
      ctx.fillRect(0, 0, 128, 256);

      ctx.fillStyle = '#ffffff';
      for (let y = -128; y < 384; y += 36) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(128, y + 62);
        ctx.lineTo(128, y + 80);
        ctx.lineTo(0, y + 18);
        ctx.closePath();
        ctx.fill();
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      return texture;
    };

    const frostingBump = createFrostingBumpTexture();

    // 5. Master Cake Assembly Group
    const cakeGroup = new THREE.Group();
    cakeGroupRef.current = cakeGroup;
    scene.add(cakeGroup);

    // ==========================================
    // A. CERAMIC CAKE PEDESTAL STAND
    // ==========================================
    const standMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.16,
      metalness: 0.05,
    });

    const standGroup = new THREE.Group();

    const platterGeo = new THREE.CylinderGeometry(2.35, 2.35, 0.1, 64);
    const platter = new THREE.Mesh(platterGeo, standMaterial);
    platter.position.y = -0.05;
    platter.receiveShadow = true;
    standGroup.add(platter);

    const platterRimGeo = new THREE.TorusGeometry(2.33, 0.05, 16, 64);
    platterRimGeo.rotateX(Math.PI / 2);
    const platterRim = new THREE.Mesh(platterRimGeo, standMaterial);
    platterRim.position.y = -0.05;
    standGroup.add(platterRim);

    const stemGeo = new THREE.CylinderGeometry(0.38, 0.72, 0.85, 48);
    const stem = new THREE.Mesh(stemGeo, standMaterial);
    stem.position.y = -0.52;
    stem.castShadow = true;
    stem.receiveShadow = true;
    standGroup.add(stem);

    const baseGeo = new THREE.CylinderGeometry(0.85, 1.48, 0.22, 64);
    const base = new THREE.Mesh(baseGeo, standMaterial);
    base.position.y = -1.02;
    base.castShadow = true;
    base.receiveShadow = true;
    standGroup.add(base);

    const baseRimGeo = new THREE.TorusGeometry(1.48, 0.06, 16, 64);
    baseRimGeo.rotateX(Math.PI / 2);
    const baseRim = new THREE.Mesh(baseRimGeo, standMaterial);
    baseRim.position.y = -1.13;
    standGroup.add(baseRim);

    cakeGroup.add(standGroup);

    // Shadow Plane
    const shadowGeo = new THREE.PlaneGeometry(3.8, 3.8);
    shadowGeo.rotateX(-Math.PI / 2);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.22 });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.position.y = -1.18;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // ==========================================
    // B. LOWER TIER (LAVENDER BUTTERCREAM)
    // ==========================================
    const lowerTierMat = new THREE.MeshStandardMaterial({
      color: 0xcbb0f1,
      roughness: 0.65,
      metalness: 0.02,
      bumpMap: frostingBump,
      bumpScale: 0.015,
    });

    const lowerTierGeo = new THREE.CylinderGeometry(1.95, 1.95, 1.1, 64);
    const lowerTier = new THREE.Mesh(lowerTierGeo, lowerTierMat);
    lowerTier.position.y = 0.55;
    lowerTier.castShadow = true;
    lowerTier.receiveShadow = true;
    cakeGroup.add(lowerTier);

    // Pearl base border
    const pearlMat = new THREE.MeshStandardMaterial({ color: 0xe0ccfa, roughness: 0.45 });
    const pearlGeo = new THREE.SphereGeometry(0.08, 16, 16);
    for (let i = 0; i < 38; i++) {
      const angle = (i / 38) * Math.PI * 2;
      const pearl = new THREE.Mesh(pearlGeo, pearlMat);
      pearl.position.set(Math.cos(angle) * 1.95, 0.05, Math.sin(angle) * 1.95);
      pearl.scale.set(1, 0.9, 1);
      pearl.castShadow = true;
      cakeGroup.add(pearl);
    }

    // Sprinkles
    const sprinkleColors = [0xff85a2, 0xffeaa7, 0x96e6d2, 0xffffff, 0xd7b8f8];
    const sprinkleGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.08, 8);
    for (let i = 0; i < 65; i++) {
      const angle = Math.random() * Math.PI * 2;
      const h = Math.random() * 0.95 + 0.1;
      const color = sprinkleColors[Math.floor(Math.random() * sprinkleColors.length)];
      const sMat = new THREE.MeshStandardMaterial({ color, roughness: 0.4 });
      const sp = new THREE.Mesh(sprinkleGeo, sMat);
      sp.position.set(Math.cos(angle) * 1.96, h, Math.sin(angle) * 1.96);
      sp.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      cakeGroup.add(sp);
    }

    // ==========================================
    // C. UPPER TIER (STRAWBERRY-PINK BUTTERCREAM)
    // ==========================================
    const upperTierMat = new THREE.MeshStandardMaterial({
      color: 0xffadc2,
      roughness: 0.6,
      metalness: 0.02,
      bumpMap: frostingBump,
      bumpScale: 0.012,
    });

    const upperTierGeo = new THREE.CylinderGeometry(1.42, 1.42, 0.95, 64);
    const upperTier = new THREE.Mesh(upperTierGeo, upperTierMat);
    upperTier.position.y = 1.57;
    upperTier.castShadow = true;
    upperTier.receiveShadow = true;
    cakeGroup.add(upperTier);

    // ==========================================
    // D. GLOSSY STRAWBERRY DRIP ICING
    // ==========================================
    const dripMat = new THREE.MeshStandardMaterial({
      color: 0xd91f55,
      roughness: 0.22,
      metalness: 0.08,
    });

    const dripTopGeo = new THREE.CylinderGeometry(1.44, 1.44, 0.07, 64);
    const dripTop = new THREE.Mesh(dripTopGeo, dripMat);
    dripTop.position.y = 2.06;
    dripTop.castShadow = true;
    cakeGroup.add(dripTop);

    for (let i = 0; i < 24; i++) {
      const angle = (i / 24) * Math.PI * 2 + (Math.random() * 0.1 - 0.05);
      const dripLength = 0.22 + Math.sin(i * 1.8) * 0.16 + Math.random() * 0.12;
      const rad = 1.43;

      const dripGeo = new THREE.CapsuleGeometry(0.065, dripLength, 8, 16);
      const drip = new THREE.Mesh(dripGeo, dripMat);
      drip.position.set(Math.cos(angle) * rad, 2.02 - dripLength / 2, Math.sin(angle) * rad);
      drip.castShadow = true;
      cakeGroup.add(drip);

      const bulbGeo = new THREE.SphereGeometry(0.08, 14, 14);
      const bulb = new THREE.Mesh(bulbGeo, dripMat);
      bulb.position.set(Math.cos(angle) * (rad + 0.015), 2.02 - dripLength, Math.sin(angle) * (rad + 0.015));
      bulb.scale.set(1, 1.25, 0.9);
      bulb.castShadow = true;
      cakeGroup.add(bulb);
    }

    // ==========================================
    // E. TOPPINGS: MACARONS & STRAWBERRIES
    // ==========================================
    const createMacaron = (colorHex, fillingColorHex = 0xffffff) => {
      const macGroup = new THREE.Group();
      const shellMat = new THREE.MeshStandardMaterial({ color: colorHex, roughness: 0.35 });

      const topShellGeo = new THREE.SphereGeometry(0.24, 24, 16);
      topShellGeo.scale(1, 0.45, 1);
      const topShell = new THREE.Mesh(topShellGeo, shellMat);
      topShell.position.y = 0.08;
      topShell.castShadow = true;
      macGroup.add(topShell);

      const btmShellGeo = new THREE.SphereGeometry(0.24, 24, 16);
      btmShellGeo.scale(1, 0.45, 1);
      const btmShell = new THREE.Mesh(btmShellGeo, shellMat);
      btmShell.position.y = -0.08;
      btmShell.castShadow = true;
      macGroup.add(btmShell);

      const fillMat = new THREE.MeshStandardMaterial({ color: fillingColorHex, roughness: 0.6 });
      const fillGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.06, 24);
      const filling = new THREE.Mesh(fillGeo, fillMat);
      macGroup.add(filling);

      return macGroup;
    };

    const mac1 = createMacaron(0xd7b8f8);
    mac1.position.set(-0.85, 2.18, 0.35);
    mac1.rotation.set(0.3, 0.5, 0.25);
    cakeGroup.add(mac1);

    const mac2 = createMacaron(0xffeaa7);
    mac2.position.set(0.85, 2.18, -0.3);
    mac2.rotation.set(-0.25, -0.6, -0.3);
    cakeGroup.add(mac2);

    const createStrawberry = () => {
      const strawGroup = new THREE.Group();
      const bodyGeo = new THREE.ConeGeometry(0.2, 0.38, 24);
      bodyGeo.rotateX(Math.PI);
      const bodyMat = new THREE.MeshStandardMaterial({ color: 0xd91638, roughness: 0.28 });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      body.castShadow = true;
      strawGroup.add(body);

      const leafMat = new THREE.MeshStandardMaterial({ color: 0x27ae60, roughness: 0.4 });
      for (let j = 0; j < 5; j++) {
        const leafAngle = (j / 5) * Math.PI * 2;
        const leafGeo = new THREE.ConeGeometry(0.06, 0.14, 4);
        leafGeo.rotateX(Math.PI / 2.2);
        const leaf = new THREE.Mesh(leafGeo, leafMat);
        leaf.position.set(Math.cos(leafAngle) * 0.07, 0.18, Math.sin(leafAngle) * 0.07);
        leaf.rotation.y = leafAngle;
        strawGroup.add(leaf);
      }
      return strawGroup;
    };

    const straw1 = createStrawberry();
    straw1.position.set(0.8, 2.24, 0.35);
    straw1.rotation.set(-0.2, 0.4, 0.15);
    cakeGroup.add(straw1);

    // ==============================================================
    // F. FIVE TALL CANDLES WITH ORGANIC TEARDROP FLAMES & WISPY SMOKE
    // ==============================================================
    const candleColors = [0xff4071, 0x0284c7, 0xeab308, 0x9333ea, 0x10b981];
    // Arc across the top tier, heights tuned for perfect composition
    const candlePositions = [
      { x: -0.66, z: 0.06, h: 0.90 },
      { x: -0.33, z: 0.20, h: 1.00 },
      { x: 0.0, z: 0.24, h: 1.06 },
      { x: 0.33, z: 0.20, h: 1.00 },
      { x: 0.66, z: 0.06, h: 0.90 },
    ];

    // Authentic organic curved teardrop flame profiles
    const outerProfile = [
      new THREE.Vector2(0.001, 0.0),
      new THREE.Vector2(0.045, 0.03),
      new THREE.Vector2(0.082, 0.09),
      new THREE.Vector2(0.086, 0.15),
      new THREE.Vector2(0.064, 0.23),
      new THREE.Vector2(0.030, 0.30),
      new THREE.Vector2(0.001, 0.35),
    ];
    const outerFlameGeo = new THREE.LatheGeometry(outerProfile, 24);

    const innerProfile = [
      new THREE.Vector2(0.001, 0.0),
      new THREE.Vector2(0.030, 0.02),
      new THREE.Vector2(0.052, 0.07),
      new THREE.Vector2(0.054, 0.12),
      new THREE.Vector2(0.038, 0.17),
      new THREE.Vector2(0.016, 0.22),
      new THREE.Vector2(0.001, 0.25),
    ];
    const innerFlameGeo = new THREE.LatheGeometry(innerProfile, 24);

    const flames = [];
    const pointLights = [];
    const smokePuffs = [];
    const embers = [];
    const candleTextures = [];

    candlePositions.forEach((pos, idx) => {
      const candleGroup = new THREE.Group();
      candleGroup.position.set(pos.x, 2.06, pos.z);

      // Spiral Candy Stripe Texture
      const cTex = createCandleStripeTexture(candleColors[idx]);
      candleTextures.push(cTex);

      const cMat = new THREE.MeshStandardMaterial({
        map: cTex,
        roughness: 0.3,
        metalness: 0.05,
      });

      // Prominent candle cylinder (radius 0.076)
      const cGeo = new THREE.CylinderGeometry(0.076, 0.076, pos.h, 24);
      const candleMesh = new THREE.Mesh(cGeo, cMat);
      candleMesh.position.y = pos.h / 2;
      candleMesh.castShadow = true;
      candleGroup.add(candleMesh);

      // Black Cotton Wick
      const wickMat = new THREE.MeshBasicMaterial({ color: 0x141414 });
      const wickGeo = new THREE.CylinderGeometry(0.014, 0.014, 0.11, 8);
      const wick = new THREE.Mesh(wickGeo, wickMat);
      wick.position.y = pos.h + 0.055;
      candleGroup.add(wick);

      // Glowing Ember on Wick Tip (glows when extinguished)
      const emberMat = new THREE.MeshBasicMaterial({
        color: 0xff3300,
        transparent: true,
        opacity: 0,
      });
      const emberGeo = new THREE.SphereGeometry(0.022, 8, 8);
      const emberMesh = new THREE.Mesh(emberGeo, emberMat);
      emberMesh.position.y = pos.h + 0.11;
      candleGroup.add(emberMesh);
      embers.push({ mesh: emberMesh, material: emberMat });

      // ================= ORGANIC TEARDROP GLOWING FLAME =================
      const flameContainer = new THREE.Group();
      flameContainer.position.y = pos.h + 0.08;

      // Outer Golden-Orange Flame
      const outerFlameMat = new THREE.MeshBasicMaterial({
        color: 0xff6b00,
        transparent: true,
        opacity: 0.94,
      });
      const outerFlame = new THREE.Mesh(outerFlameGeo, outerFlameMat);
      flameContainer.add(outerFlame);

      // Inner White-Hot Core
      const innerFlameMat = new THREE.MeshBasicMaterial({
        color: 0xfffaea,
        transparent: true,
        opacity: 0.98,
      });
      const innerFlame = new THREE.Mesh(innerFlameGeo, innerFlameMat);
      flameContainer.add(innerFlame);

      // Blue-cyan base flame ring
      const baseFlameGeo = new THREE.SphereGeometry(0.052, 16, 16);
      const baseFlameMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.85 });
      const baseFlame = new THREE.Mesh(baseFlameGeo, baseFlameMat);
      baseFlame.position.y = 0.025;
      baseFlame.scale.set(1, 0.65, 1);
      flameContainer.add(baseFlame);

      candleGroup.add(flameContainer);

      flames.push({
        container: flameContainer,
        baseY: pos.h + 0.08,
      });

      // Warm Point Light
      const pLight = new THREE.PointLight(0xff9922, 2.5, 4.2, 1.8);
      pLight.position.set(pos.x, 2.06 + pos.h + 0.25, pos.z);
      scene.add(pLight);
      pointLights.push(pLight);

      // ================= DELICATE WISPY SMOKE (In candleGroup local coordinates) =================
      const smokeGroup = new THREE.Group();
      smokeGroup.position.set(0, pos.h + 0.12, 0);

      const smokeMat = new THREE.MeshBasicMaterial({
        color: 0xded8e6,
        transparent: true,
        opacity: 0,
        depthWrite: false,
      });

      // Subtle whispy smoke particles (smaller, softer, never dense)
      const puffMeshes = [];
      for (let s = 0; s < 3; s++) {
        const puffGeo = new THREE.SphereGeometry(0.045 + s * 0.022, 10, 10);
        const puff = new THREE.Mesh(puffGeo, smokeMat);
        puff.position.y = s * 0.09;
        smokeGroup.add(puff);
        puffMeshes.push(puff);
      }

      candleGroup.add(smokeGroup);
      smokePuffs.push({
        group: smokeGroup,
        puffs: puffMeshes,
        material: smokeMat,
        baseLocalY: pos.h + 0.12,
      });

      cakeGroup.add(candleGroup);
    });

    flamesRef.current = flames;
    pointLightsRef.current = pointLights;
    smokePuffsRef.current = smokePuffs;
    embersRef.current = embers;

    // ==========================================
    // G. CONTINUOUS ROTATION & ANIMATION LOOP
    // ==========================================
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const { isBlowing: blowing, flameBendAngle: bendAngle, extinguishedCount: extCount, focusedMode: isFocused } = propsRef.current;

      // Cake rotation:
      // In normal mode: continuous full 360° rotation (~14s/rev).
      // In focusedMode: subtle gentle frontal sway (+/- 8°) so user has full view of all candles.
      if (!isFocused) {
        cakeGroup.rotation.y = (elapsedTime * (Math.PI * 2)) / 14;
        cakeGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.04;
      } else {
        cakeGroup.rotation.y = Math.sin(elapsedTime * 0.5) * 0.12;
        // Position cake slightly down in focusedMode so flame tips have generous headspace
        cakeGroup.position.y = -0.12 + Math.sin(elapsedTime * 1.5) * 0.03;
      }

      // Flame & Smoke Animation Loop
      flamesRef.current.forEach((flameObj, i) => {
        const isExtinguished = i < extCount;
        const pLight = pointLightsRef.current[i];
        const smokeData = smokePuffsRef.current[i];
        const emberData = embersRef.current[i];

        if (!isExtinguished) {
          // Flame is LIT: Organic gentle flicker
          const flicker = 0.95 + Math.sin(elapsedTime * 16 + i * 2) * 0.08 + Math.cos(elapsedTime * 28 + i) * 0.05;

          // If user is blowing / holding: BEND FLAME STRONGLY IN WIND!
          if (blowing) {
            // Rapid wind fluttering
            const flutterZ = Math.sin(elapsedTime * 45 + i * 5) * 0.20;
            const flutterX = Math.cos(elapsedTime * 40 + i * 4) * 0.14;

            // Flame bends back significantly (away from viewer)
            flameObj.container.rotation.z = -0.75 + flutterZ - (bendAngle * 0.025);
            flameObj.container.rotation.x = -0.40 + flutterX;

            // Flame squashes and flickers wildly in the wind gust
            flameObj.container.scale.set(flicker * 1.3, flicker * 0.58, flicker * 0.85);

            if (pLight) {
              pLight.intensity = 1.3 + Math.sin(elapsedTime * 32 + i) * 0.8;
            }
          } else {
            // Gentle ambient candle flicker
            flameObj.container.rotation.z = Math.sin(elapsedTime * 6 + i) * 0.08;
            flameObj.container.rotation.x = Math.cos(elapsedTime * 5 + i) * 0.05;
            flameObj.container.scale.set(flicker, flicker * 1.04, flicker);

            if (pLight) {
              pLight.intensity = 2.5 + Math.sin(elapsedTime * 18 + i * 3) * 0.5;
            }
          }

          // Hide smoke and ember while candle is lit
          if (smokeData) smokeData.material.opacity = 0;
          if (emberData) emberData.material.opacity = 0;

        } else {
          // ================= FLAME IS EXTINGUISHED =================
          // Instantly shrink flame to 0
          flameObj.container.scale.lerp(new THREE.Vector3(0, 0, 0), 0.35);

          // Turn off candle light
          if (pLight) {
            pLight.intensity = 0;
          }

          // Glowing Red Ember on the wick tip: glows bright red then slowly cools
          if (emberData) {
            const emberTime = (elapsedTime * 1.2 + i * 0.4) % 2.5;
            emberData.material.opacity = Math.max(0, 0.85 - emberTime * 0.35);
          }

          // Delicate Whispy Smoke wafting gracefully:
          if (smokeData) {
            const smokeCycle = (elapsedTime * 0.9 + i * 0.35) % 1.5;
            const progress = smokeCycle / 1.5; // 0 to 1

            // Soft translucent smoke opacity (max 0.28, fading to 0)
            smokeData.material.opacity = Math.max(0, 0.28 * (1 - Math.pow(progress, 1.2)));

            // Rises gently only 0.36 units above wick
            smokeData.group.position.y = smokeData.baseLocalY + progress * 0.36;
            // Curling sway as smoke billows in the air
            smokeData.group.position.x = Math.sin(elapsedTime * 3.2 + i) * (0.03 + progress * 0.08);
            smokeData.group.position.z = Math.cos(elapsedTime * 2.8 + i) * (0.02 + progress * 0.06);

            // Smoke puffs expand gently as they dissipate
            smokeData.puffs.forEach((puff, pIdx) => {
              const expand = 1 + progress * 1.8 + pIdx * 0.25;
              puff.scale.set(expand, expand * 1.1, expand);
            });
          }
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 340;
      const h = container.clientHeight || 360;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      scene.traverse((obj) => {
        if (obj.isMesh) {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            if (Array.isArray(obj.material)) {
              obj.material.forEach((m) => m.dispose());
            } else {
              obj.material.dispose();
            }
          }
        }
      });

      frostingBump.dispose();
      outerFlameGeo.dispose();
      innerFlameGeo.dispose();
      candleTextures.forEach((t) => t.dispose());
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [focusedMode]);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center overflow-visible select-none ${className}`}
      style={{
        width: focusedMode ? '340px' : '330px',
        height: focusedMode ? '340px' : '350px',
        maxWidth: '100vw',
        transform: `scale(${scale})`,
        touchAction: 'none',
      }}
    />
  );
}
