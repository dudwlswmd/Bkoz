import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.



const ParticlesComponent = (props) => {

  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };


  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#110726",// 파티클의 배경 색상 설정
        },
      },
      fullScreen:{
        enable:false,
      },
      fpsLimit: 120,// 프레임 제한 설정
      interactivity: {
        events: {
          onClick: {
            enable: true,// 클릭 시 파티클이 밀려나는 효과 활성화
            mode: "repulse",
          },
          onHover: {
            enable: true,// 마우스 호버 시 파티클이 잡히는 효과 활성화
            mode: 'grab',
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,// 클릭 시 밀려나는 파티클의 거리와 지속 시간 설정
          },
          grab: {
            distance: 150,// 호버 시 파티클이 반응하는 거리 설정
          },
        },
      },
      particles: {
        color: {
          value: "#B100E8",// 파티클 색상 설정
        },
        links: {
          color: "#B100E8", // 파티클 간 연결선 색상
          distance:300, // 연결선 최대 거리
          enable: true, // 연결선 활성화 여부
          opacity: 1, // 연결선 투명도
          width: 1, // 연결선 너비
        },
        move: {
          // direction: "none", // 파티클 이동 방향
          enable: true, // 파티클 이동 활성화 여부
          outModes: {
            default: "bounce", // 경계에서의 파티클 반응 형태 (튕겨나오기)
          },
          random: true, // 무작위 이동 활성화
          speed: 0.9, // 이동 속도
          straight: false, // 직진 이동 여부
        },
        number: {
          density: {
            enable: true,// 밀도 자동 조절 활성화
          },
          value: 200,//화면에 표될 파클 수
        },
        opacity: {
          value: 1,//파티클 투명도
        },
        shape: {
          type: "circle",//파티클 모양
        },
        size: {
          value: { min: 1, max: 4 },//파티클 최소최대 수
        },
      },
      detectRetina: false,// 레티나 디스플레이 최적화 여부
    }),
    [],
  );


  return <Particles id={props.id} init={particlesLoaded} options={options} />; 
};

export default ParticlesComponent;