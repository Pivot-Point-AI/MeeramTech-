import Image from "next/image";
import styles from "./TechPartners.module.css";

const circles = [
  { size: 107.33, xOffset: -737.02, imgSrc: "/images/partners/huawei.png",    imgW: 57,  imgH: 43  },
  { size: 143.11, xOffset: -556.94, imgSrc: "/images/partners/microsoft.png", imgW: 88,  imgH: 88  },
  { size: 214.67, xOffset: -323.19, imgSrc: "/images/partners/dell.png",      imgW: 120, imgH: 120 },
  { size: 322,    xOffset: 0,       imgSrc: "/images/partners/huawei.png",    imgW: 177, imgH: 134 },
  { size: 214.67, xOffset: +323.19, imgSrc: "/images/partners/microsoft.png", imgW: 144, imgH: 144 },
  { size: 143.11, xOffset: +556.94, imgSrc: "/images/partners/partner.png",   imgW: 88,  imgH: 88  },
  { size: 107.33, xOffset: +737.02, imgSrc: "/images/partners/dell.png",      imgW: 57,  imgH: 43  },
];

const mobilePartners = [
  { imgSrc: "/images/partners/huawei.png",    imgW: 57,  imgH: 43,  label: "Huawei"    },
  { imgSrc: "/images/partners/microsoft.png", imgW: 88,  imgH: 88,  label: "Microsoft" },
  { imgSrc: "/images/partners/dell.png",      imgW: 120, imgH: 120, label: "Dell"      },
  { imgSrc: "/images/partners/partner.png",   imgW: 88,  imgH: 88,  label: "Partner"   },
];

export default function TechPartners() {
  return (
    <>
    {/* ── MOBILE ── */}
    <section id="technologies" className="relative block md:hidden w-full bg-black px-5 py-14 text-center overflow-hidden">
      <span className="relative inline-block px-5 py-2 rounded-full border border-white/20 bg-white/10 text-white text-xs tracking-widest uppercase mb-5">Collaborations</span>
      <h2 className="relative text-white font-bold uppercase text-2xl mb-10">Technology Partners</h2>

      {/* Orbital layout — 4 logos at 90° intervals on a circle */}
      <div className="relative mx-auto" style={{ width: 280, height: 280 }}>
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 280 280" aria-hidden="true">
          <circle cx="140" cy="140" r="100" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2"/>
          <circle cx="140" cy="140" r="130" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
        </svg>

        {/* Top — Huawei */}
        <div className="absolute rounded-full bg-[#181818] flex items-center justify-center" style={{ width: 72, height: 72, left: 104, top: 4 }}>
          <Image src="/images/partners/huawei.png" alt="Huawei" width={57} height={43} className="object-contain w-10 h-8" />
        </div>
        {/* Right — Microsoft */}
        <div className="absolute rounded-full bg-[#181818] flex items-center justify-center" style={{ width: 72, height: 72, left: 204, top: 104 }}>
          <Image src="/images/partners/microsoft.png" alt="Microsoft" width={88} height={88} className="object-contain w-10 h-10" />
        </div>
        {/* Bottom — Dell */}
        <div className="absolute rounded-full bg-[#181818] flex items-center justify-center" style={{ width: 72, height: 72, left: 104, top: 204 }}>
          <Image src="/images/partners/dell.png" alt="Dell" width={120} height={120} className="object-contain w-10 h-10" />
        </div>
        {/* Left — Kaspersky */}
        <div className="absolute rounded-full bg-[#181818] flex items-center justify-center" style={{ width: 72, height: 72, left: 4, top: 104 }}>
          <Image src="/images/partners/partner.png" alt="Partner" width={88} height={88} className="object-contain w-10 h-10" />
        </div>
      </div>
    </section>

    {/* ── DESKTOP ── */}
    <section
      id="technologies"
      className={`hidden md:block relative w-full overflow-hidden bg-black ${styles.desktopSection}`}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1920 917"
        aria-hidden="true"
      >
        <circle cx="954.5" cy="458.5" r="299" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
        <circle cx="954.5" cy="458.5" r="498" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
        <circle cx="954.5" cy="458.5" r="777" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1"/>
      </svg>

      <div className={`absolute left-1/2 -translate-x-1/2 flex items-center justify-center ${styles.collaborationsBadge}`}>
        <span className={`text-white font-normal text-center ${styles.collaborationsText}`}>
          Collaborations
        </span>
      </div>

      <h2 className={`absolute left-1/2 -translate-x-1/2 text-white font-bold uppercase flex items-center justify-center ${styles.heading}`}>
        Technology Partners
      </h2>

      {/* Partner circles — positions/sizes are computed from data, kept inline */}
      {circles.map(({ size, xOffset, imgSrc, imgW, imgH }) => {
        const leftPx  = 960 - size / 2 + xOffset;
        const topPx   = 616 - size / 2;
        const sizeVw  = (size  / 1920 * 100).toFixed(3);
        const leftVw  = (leftPx / 1920 * 100).toFixed(3);
        const topVw   = (topPx  / 1920 * 100).toFixed(3);
        const imgWVw  = (imgW   / 1920 * 100).toFixed(3);
        const imgHVw  = (imgH   / 1920 * 100).toFixed(3);
        return (
          <div
            key={`${size}-${xOffset}`}
            className="absolute rounded-full bg-[#181818] flex items-center justify-center"
            style={{
              left:   `${leftVw}vw`,
              top:    `${topVw}vw`,
              width:  `${sizeVw}vw`,
              height: `${sizeVw}vw`,
            }}
          >
            <Image
              src={imgSrc}
              alt="Technology partner"
              width={imgW}
              height={imgH}
              className="object-contain"
              style={{ width: `${imgWVw}vw`, height: `${imgHVw}vw` }}
            />
          </div>
        );
      })}

    </section>
    </>
  );
}
