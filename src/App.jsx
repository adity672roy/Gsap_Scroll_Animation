import React, { useRef } from "react";
import bg from "./images/bg.avif";
import img1 from "./images/img-1.jpg";
import img2 from "./images/img-2.jpg";
import img3 from "./images/img-3.jpg";
import img4 from "./images/img-4.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const bg1 = useRef(null);
  const img_container = useRef(null);
  const img = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const container = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: bg1.current,
        pin: bg1.current,
        pinSpacing: false,
        start: "top top",
        endTrigger: ".last",
        end: "bottom bottom",
      });
      gsap.set(container.current, {
        marginTop: -container.current.offsetHeight,
      });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: img_container.current,
            pin: img_container.current,
            scrub: 1,
            start: "0% 0%",
          },
        })
        .to(img.current, { transform: "translateZ(2200px)" }, 0)
        .to(text1.current, { y: -800 }, 0.05, "<")
        .to(text2.current, { y: -800 }, 0.08, "<")
        .fromTo(
          container.current,
          { yPercent: 100, scaleY: 2 },
          { yPercent: 0, scaleY: 1 }
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      <div
        ref={bg1}
        className="bg bg-[#141414] absolute h-screen w-screen z-[-1]"
      ></div>

      <section>
        <div  ref={img_container} className="img-container perspective flex items-center justify-center h-screen w-screen ">
          <img ref={img} src={bg} alt="" className="image" />
          <div className="absolute flex flex-col items-center justify-center text-white">
            <h1 ref={text1} className="text-[150px] text-center">
              <span className="text-stroke">Explore</span> More
            </h1>
            <p ref={text2} className="opacity-50 w-48 text-center text-sm">
              A showcase of the World's best aerial photography.
            </p>
          </div>
        </div>

        <div
          ref={container}
          className="container py-12 flex flex-wrap items-center justify-around"
        >
          <div
           
            className="col-1 flex flex-col gap-16 translate-y-[30%] pb-8"
          >
            <img src={img2} alt="" className="w-[450px] h-[350px]" />
            <img src={img1} alt="" className="w-[400px] h-[400px]" />
          </div>
          <div className="col-2 flex flex-col gap-16">
            <img src={img3} alt="" className="w-[600px] h-[400px]" />
            <img src={img4} alt="" className="w-[400px] h-[400px] last" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;

// import React, { useRef } from "react";
// import bg from "./images/bg.avif";
// import img1 from "./images/img-1.jpg";
// import img2 from "./images/img-2.jpg";
// import img3 from "./images/img-3.jpg";
// import img4 from "./images/img-4.jpg";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useLayoutEffect } from "react";
// gsap.registerPlugin(ScrollTrigger);

// const App = () => {
//   const bg1 = useRef(null);
//   const img_container = useRef(null);
//   const img = useRef(null);
//   const text1 = useRef(null);
//   const text2 = useRef(null);
//   const container = useRef(null);

//   useLayoutEffect(() => {
//     let ctx = gsap.context(() => {
//       ScrollTrigger.create({
//         trigger: bg1.current,
//         pin: bg1.current,
//         pinSpacing: false,
//         start: "top top",
//         endTrigger: ".last",
//         end: "bottom bottom",
//       });

//       // Setting up the container's initial margin dynamically
//       gsap.set(container.current, {
//         marginTop: -container.current.offsetHeight,
//       });

//       // Creating a timeline with ScrollTrigger for the img_container
//       gsap
//         .timeline({
//           scrollTrigger: {
//             trigger: img_container.current,
//             pin: img_container.current,
//             scrub: 1,
//             start: "0% 0%",
//           },
//         })
//         .to(img.current, { scale: 1.5, transform: "translateZ(2200px)" }, 0)
//         .to(text1.current, { y: -800 }, 0.05)
//         .to(text2.current, { y: -800 }, 0.08)
//         .fromTo(
//           container.current,
//           { yPercent: 100, scaleY: 2 },
//           { yPercent: 0, scaleY: 1 }
//         );
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="relative">
//       <div
//         ref={bg1}
//         className="bg bg-[#141414] absolute h-screen w-screen z-[-1]"
//       ></div>

//       <section>
//         <div
//           ref={img_container}
//           className="img-container perspective flex items-center justify-center h-screen w-screen"
//         >
//           <img ref={img} src={bg} alt="" className="image" />
//           <div className="absolute flex flex-col items-center justify-center text-white">
//             <h1 ref={text1} className="text-[150px] text-center">
//               <span className="text-stroke">Explore</span> More
//             </h1>
//             <p ref={text2} className="opacity-50 w-48 text-center text-sm">
//               A showcase of the World's best aerial photography.
//             </p>
//           </div>
//         </div>

//         <div
//           ref={container}
//           className="container py-12 flex flex-wrap items-center justify-around"
//         >
//           <div className="col-1 flex flex-col gap-16 translate-y-[30%] pb-8">
//             <img src={img2} alt="" className="w-[450px] h-[350px]" />
//             <img src={img1} alt="" className="w-[400px] h-[400px]" />
//           </div>
//           <div className="col-2 flex flex-col gap-16">
//             <img src={img3} alt="" className="w-[600px] h-[400px]" />
//             <img src={img4} alt="" className="w-[400px] h-[400px] last" />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default App;
