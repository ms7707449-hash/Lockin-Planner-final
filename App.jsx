import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const BRAND = {
  name: "LOCK IN Planner",
  accent: "#C8F55A",
  accentSoft: "rgba(200,245,90,0.10)",
};

const CTA_LINK = "https://lockinplanner12.gumroad.com/l/ahfzc?wanted=true";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.05,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function Glow() {
  return (
    <>
      <div
        className="absolute top-[-6rem] left-1/2 -translate-x-1/2 h-[20rem] w-[20rem] md:h-[24rem] md:w-[24rem] rounded-full blur-[110px] pointer-events-none"
        style={{ background: "rgba(200,245,90,0.07)" }}
      />
      <div
        className="absolute top-[18rem] right-[8%] h-[12rem] w-[12rem] md:h-[16rem] md:w-[16rem] rounded-full blur-[100px] pointer-events-none hidden md:block"
        style={{ background: "rgba(200,245,90,0.04)" }}
      />
    </>
  );
}

function LogoMark() {
  return (
    <div className="relative w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 bg-white/[0.04] shadow-[0_0_0_1px_rgba(200,245,90,0.10)] shrink-0">
      <div className="grid grid-cols-2 gap-1.5">
        <div
          className="w-2.5 h-2.5 rounded-[4px]"
          style={{ background: BRAND.accent }}
        />
        <div className="w-2.5 h-2.5 rounded-[4px] bg-white/18" />
        <div className="w-2.5 h-2.5 rounded-[4px] bg-white/18" />
        <div
          className="w-2.5 h-2.5 rounded-[4px]"
          style={{ background: BRAND.accent }}
        />
      </div>
    </div>
  );
}

function Button({
  children,
  light = false,
  className = "",
  href = CTA_LINK,
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.985 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 h-14 text-[15px] font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${
        light
          ? "text-black shadow-[0_0_0_1px_rgba(200,245,90,0.14),0_12px_34px_rgba(200,245,90,0.16)] hover:shadow-[0_0_0_1px_rgba(200,245,90,0.18),0_16px_44px_rgba(200,245,90,0.22)]"
          : "bg-black/80 text-white border border-white/10 hover:border-white/20 hover:bg-white/6 hover:shadow-[0_10px_30px_rgba(255,255,255,0.05)]"
      } ${className}`}
      style={light ? { background: BRAND.accent } : undefined}
      aria-label="Get the planner"
    >
      {children}
    </motion.a>
  );
}

function SectionTitle({ title, text, center = true, eyebrow = "" }) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl mb-10`}>
      {eyebrow ? (
        <p
          className="mb-3 text-[0.98rem] md:text-[1.03rem] font-medium"
          style={{ color: BRAND.accent }}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-[2.05rem] md:text-[4.2rem] tracking-[-0.07em] leading-[0.94] font-semibold text-white">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-[1rem] md:text-[1.1rem] text-white/62 leading-relaxed">
          {text}
        </p>
      ) : null}
    </div>
  );
}

function OfferStrip() {
  return (
    <div className="relative z-30 border-b border-white/8 bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 text-center flex items-center justify-center gap-3 md:gap-4 flex-wrap">
        <span className="uppercase tracking-[0.22em] text-white/55 text-[11px] md:text-xs font-medium">
          Launch Offer
        </span>
        <span className="text-white/25">•</span>
        <span className="text-white/35 line-through text-[15px] md:text-base">
          $29
        </span>
        <span className="font-semibold text-white text-[18px] md:text-[20px]">
          $19
        </span>
        <span className="text-white/70 text-[14px] md:text-[15px]">
          Offer ending soon
        </span>
      </div>
    </div>
  );
}

function MediaMockup({
  title = "Planner media",
  line = "",
  src = "",
  type = "image",
  compact = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.99 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] backdrop-blur-[2px] p-3 md:p-4 shadow-[0_16px_50px_rgba(200,245,90,0.04)]"
    >
      <div
        className={`rounded-[1.1rem] border border-white/10 bg-[#0a0a0a] overflow-hidden relative flex items-center justify-center ${
          compact
            ? "aspect-[4/5] sm:aspect-[5/6] md:aspect-[4/5] max-h-[380px] md:max-h-[420px]"
            : "aspect-[16/10] md:aspect-[16/9] max-h-[460px]"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,245,90,0.07),transparent_50%)] pointer-events-none" />
        {src ? (
          type === "video" ? (
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              className="relative z-10 w-full h-full object-contain"
            />
          ) : (
            <img
              src={src}
              alt={title}
              className="relative z-10 w-full h-full object-contain"
            />
          )
        ) : (
          <div className="relative z-10 text-center px-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.2rem] mx-auto border border-white/10 bg-white/[0.03] shadow-[0_0_0_1px_rgba(200,245,90,0.08)]" />
            <p className="mt-4 text-[10px] uppercase tracking-[0.22em] text-white/26">
              Add your media here
            </p>
            <h3 className="mt-3 text-lg md:text-2xl tracking-[-0.05em] font-semibold text-white">
              {title}
            </h3>
            <p className="mt-2 text-white/36 text-sm md:text-base">
              Image or video will auto-fit inside this frame.
            </p>
          </div>
        )}
      </div>
      {line ? (
        <p className="mt-3 text-center text-[0.95rem] md:text-[1rem] text-white/60 leading-relaxed max-w-3xl mx-auto">
          {line}
        </p>
      ) : null}
    </motion.div>
  );
}

function HorizontalMockups() {
  const railRef = useRef(null);
  const [index, setIndex] = useState(0);

  const items = [
    {
      title: "Planner walkthrough",
      line: "Replace this with your daily mockup image or video.",
      src: "/mockups/Mockupvid.mp4",
      type: "video",
    },
    {
      title: "Daily planner preview",
      line: "Replace this with your monthly mockup image or video.",
      src: "/mockups/Mockup1.jpeg",
      type: "image",
    },
    {
      title: "Monthly planner preview",
      line: "Replace this with your yearly mockup image or video.",
      src: "/mockups/Mockup2.jpeg",
      type: "image",
    },
    {
      title: "Yearly planner preview",
      line: "Replace this with your planner video mockup.",
      src: "/mockups/Mockup3.jpeg",
      type: "image",
    },
  ];

  const scrollToCard = (direction) => {
    const next = Math.max(0, Math.min(items.length - 1, index + direction));
    setIndex(next);
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.children[next];
    if (card) {
      card.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  return (
    <div className="relative">
      <div className="overflow-x-auto pb-3 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div ref={railRef} className="flex gap-4 min-w-max px-1">
          {items.map((item, i) => (
            <div
              key={i}
              className="w-[82vw] sm:w-[66vw] md:w-[340px] lg:w-[360px] snap-center shrink-0"
            >
              <MediaMockup
                title={item.title}
                line={item.line}
                src={item.src}
                type={item.type}
                compact
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollToCard(-1)}
        className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-white/10 bg-black/72 backdrop-blur-md flex items-center justify-center shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
        aria-label="Previous mockup"
      >
        <ChevronLeft className="w-5 h-5 text-white/80" />
      </button>

      <button
        type="button"
        onClick={() => scrollToCard(1)}
        className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-white/10 bg-black/72 backdrop-blur-md flex items-center justify-center shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
        aria-label="Next mockup"
      >
        <ChevronRight className="w-5 h-5 text-white/80" />
      </button>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }) {
  const list = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y border-white/8 bg-white/[0.02] py-3.5">
      <motion.div
        animate={{ x: reverse ? ["-33.33%", "0%"] : ["0%", "-33.33%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex w-max"
      >
        {list.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-4 px-7 md:px-10 whitespace-nowrap"
          >
            <span className="text-white/72 text-base md:text-[1.06rem] tracking-[0.16em] uppercase font-medium">
              {item}
            </span>
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: BRAND.accent }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const problemItems = [
  "You start with motivation, ready to change everything.",
  "Then the work feels overwhelming, unclear, and heavier than you expected.",
  "You fall back into scrolling, distractions, and cheap dopamine.",
  "A proper system makes the right work easier to come back to.",
];

const insideImages = [
  {
    title: "Daily planner",
    text: "See your full daily system in two clean screens so planning feels clearer and action feels easier.",
    slides: ["/mockups/Daily1.jpeg", "/mockups/Daily2.jpeg"],
  },
  {
    title: "Monthly planner",
    text: "Keep the whole month visible, stay aligned with priorities, and stop drifting through your weeks.",
    slides: ["/mockups/Monthly1.jpeg", "/mockups/Monthly2.jpeg"],
  },
  {
    title: "Yearly planner",
    text: "Track your bigger direction, review progress clearly, and keep long-term goals in front of you.",
    slides: ["/mockups/Yearly1.jpeg", "/mockups/Yearly2.jpeg"],
  },
];

const transformationItems = [
  {
    title: "Your work actually gets done",
    text: "You stop wasting time deciding and start executing what matters.",
  },
  {
    title: "You stay disciplined longer",
    text: "Consistency starts feeling real because the system keeps you on track.",
  },
  {
    title: "You feel less mentally crowded",
    text: "Everything important stays in one place, so your mind feels clearer.",
  },
  {
    title: "You start seeing real progress",
    text: "You keep showing up, and that finally turns effort into visible results.",
  },
];

const faqs = [
  {
    q: "Is this beginner friendly?",
    a: "Yes. You can duplicate it into Notion and start using it immediately with the default setup.",
  },
  {
    q: "Will this work if I always stop using planners?",
    a: "That is exactly what this planner is designed for. It helps you restart quickly instead of quitting completely.",
  },
  {
    q: "Is this only for 2026?",
    a: "No. This planner is built for lifetime use, so you can keep using it year after year.",
  },
  {
    q: "What happens after buying?",
    a: "You get instant access and can duplicate the planner directly into your Notion workspace.",
  },
];

function InsidePlannerSlider({ title, text, slides = [] }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const goPrev = () => {
    if (!slides.length) return;
    setSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goNext = () => {
    if (!slides.length) return;
    setSlideIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const hasImage = slides?.length > 0 && slides[slideIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.99 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-[1.45rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-3 md:p-4 shadow-[0_16px_50px_rgba(200,245,90,0.04)]"
    >
      <div className="relative rounded-[1.15rem] border border-white/10 bg-[#0a0a0a] overflow-hidden aspect-[4/5] sm:aspect-[5/6] md:aspect-[16/10] max-h-[440px] md:max-h-[460px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,245,90,0.07),transparent_50%)] pointer-events-none" />

        {hasImage ? (
          <img
            src={slides[slideIndex]}
            alt={`${title} preview ${slideIndex + 1}`}
            className="relative z-10 w-full h-full object-contain"
          />
        ) : (
          <div className="relative z-10 text-center px-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.2rem] mx-auto border border-white/10 bg-white/[0.03] shadow-[0_0_0_1px_rgba(200,245,90,0.08)]" />
            <p className="mt-4 text-[10px] uppercase tracking-[0.22em] text-white/26">
              Add your images here
            </p>
            <h3 className="mt-3 text-lg md:text-2xl tracking-[-0.05em] font-semibold text-white">
              {title}
            </h3>
          </div>
        )}

        <button
          type="button"
          onClick={goPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full border border-white/10 bg-black/72 backdrop-blur-md flex items-center justify-center shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
          aria-label={`Previous ${title} slide`}
        >
          <ChevronLeft className="w-5 h-5 text-white/80" />
        </button>

        <button
          type="button"
          onClick={goNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full border border-white/10 bg-black/72 backdrop-blur-md flex items-center justify-center shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
          aria-label={`Next ${title} slide`}
        >
          <ChevronRight className="w-5 h-5 text-white/80" />
        </button>
      </div>

      <div className="mt-4 flex items-start gap-3 md:gap-4">
        <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_0_1px_rgba(200,245,90,0.10)]">
          <Check className="w-4 h-4" style={{ color: BRAND.accent }} />
        </div>
        <div>
          <h3 className="text-[1.12rem] md:text-[1.3rem] tracking-[-0.03em] font-semibold text-white">
            {title}
          </h3>
          <p className="mt-1.5 text-white/62 text-[0.96rem] md:text-[1.02rem] leading-relaxed max-w-3xl">
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
      className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] overflow-hidden shadow-[0_12px_30px_rgba(200,245,90,0.04)]"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 md:px-6 py-4.5 flex items-start justify-between gap-5"
      >
        <div>
          <h3 className="text-[1rem] md:text-[1.16rem] tracking-[-0.03em] font-semibold text-white">
            {q}
          </h3>
          {open ? (
            <p className="mt-3 text-white/58 text-[0.98rem] leading-relaxed">
              {a}
            </p>
          ) : null}
        </div>
        <ChevronDown
          className={`w-5 h-5 shrink-0 mt-1 text-white/34 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
    </motion.div>
  );
}

export default function LockInPlannerLandingPage() {
  return (
    <div className="min-h-screen bg-[#060606] text-white overflow-x-hidden selection:bg-white selection:text-black">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(200,245,90,0.08),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_20%),linear-gradient(180deg,#050505_0%,#090909_45%,#040404_100%)]" />
      <Glow />

      <OfferStrip />

      <header className="sticky top-0 z-20 backdrop-blur-xl bg-black/55 border-b border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-18 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <LogoMark />
            <div className="min-w-0">
              <p className="font-semibold text-[15px] text-white truncate">
                LOCK IN Planner
              </p>
              <p className="text-xs text-white/34 mt-0.5 truncate">
                Plan clearly. Follow through.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="relative pt-8 md:pt-10 pb-8 md:pb-10 overflow-hidden min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-9rem)] flex items-start">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              className="max-w-5xl mx-auto text-center relative"
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="text-white/62 text-sm md:text-base mb-4"
              >
                Make 2026 the year you finally stay consistent.
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-1 text-[2.55rem] sm:text-[2.9rem] md:text-[5.4rem] leading-[0.92] tracking-[-0.08em] font-semibold text-white"
              >
                You don’t need more motivation.
                <br />
                <span style={{ color: BRAND.accent }}>
                  You need a system that works.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-3xl mx-auto mt-5 text-[1rem] md:text-[1.14rem] leading-relaxed text-white/68"
              >
                A complete planning system designed to help you think clearly,
                stay organized, and actually follow through.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-6 flex items-center justify-center"
              >
                <Button light>
                  Get the planner — $19 <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>

              <p className="mt-3 text-[0.96rem] md:text-[1rem] text-white/72 font-medium">
                Offer ending soon • Was $29, now $19
              </p>

              <p className="mt-2 text-[1.02rem] md:text-[1.08rem] text-white font-medium">
                Instant access • One-time payment • Use it for life
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-8 md:pb-12">
          <MarqueeRow
            items={[
              "PLAN CLEARLY",
              "STAY CONSISTENT",
              "RESET FAST",
              "WRITE + REFLECT",
              "LESS OVERWHELM",
            ]}
          />
        </section>

        <section className="pb-12 md:pb-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <HorizontalMockups />
          </div>
        </section>

        <section id="problem" className="py-14 md:py-18">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title={
                <>
                  You’re not lazy.
                  <br />
                  <span style={{ color: BRAND.accent }}>
                    You just need a system that works with you.
                  </span>
                </>
              }
              text={null}
            />

            <div className="grid md:grid-cols-2 gap-4">
              {problemItems.map((item, index) => (
                <motion.div
                  key={item}
                  custom={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5 md:p-6 shadow-[0_14px_45px_rgba(200,245,90,0.03)]"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4" style={{ color: BRAND.accent }} />
                    </div>
                    <p className="text-[1.08rem] md:text-[1.34rem] tracking-[-0.03em] leading-[1.16] text-white/86">
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-14 border-y border-white/8 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="What’s inside" text={null} />

            <div className="space-y-5 md:space-y-6">
              {insideImages.map((item) => (
                <InsidePlannerSlider
                  key={item.title}
                  title={item.title}
                  text={item.text}
                  slides={item.slides}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              eyebrow="What you get"
              title="Staying disciplined starts feeling easier here."
              text="This is where you stop feeling stuck and start seeing real progress."
            />

            <div className="grid md:grid-cols-2 gap-4">
              {transformationItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  custom={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5 md:p-6 shadow-[0_14px_45px_rgba(200,245,90,0.03)]"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4" style={{ color: BRAND.accent }} />
                    </div>
                    <div>
                      <h3 className="text-[1.18rem] md:text-[1.32rem] tracking-[-0.03em] font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-white/58 text-[0.96rem] md:text-[0.98rem] leading-relaxed max-w-[30ch]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-14 md:py-18">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative rounded-[2rem] border border-white/10 p-7 md:p-10 text-center overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-[3px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at top, rgba(200,245,90,0.08), transparent 38%)",
                }}
              />

              <div className="relative z-10">
                <p className="text-[11px] uppercase tracking-[0.26em] text-white/34">
                  Launch pricing
                </p>
                <h2 className="mt-4 text-[2.5rem] md:text-[4.2rem] leading-[0.96] tracking-[-0.06em] font-semibold text-white">
                  Get the planner today.
                </h2>
                <p className="mt-3 text-white/60 text-[0.98rem] md:text-[1.06rem] max-w-xl mx-auto leading-relaxed">
                  Offer ending soon.
                </p>

                <div className="mt-7 flex items-end justify-center gap-4 flex-wrap">
                  <h3
                    className="text-[3.8rem] md:text-[5.6rem] tracking-[-0.08em] leading-none font-semibold"
                    style={{ color: BRAND.accent }}
                  >
                    $19
                  </h3>
                  <div className="pb-2 text-left">
                    <div className="text-xl md:text-2xl text-white/24 line-through">
                      $29
                    </div>
                    <div
                      className="mt-1 inline-flex items-center rounded-xl border border-[rgba(200,245,90,0.22)] px-3 py-1 text-xs tracking-[0.14em] uppercase"
                      style={{ color: BRAND.accent }}
                    >
                      Save $10
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-[11px] uppercase tracking-[0.24em] text-white/34">
                  Offer ending soon
                </p>

                <div className="mt-7 max-w-xl mx-auto grid gap-3 text-left">
                  {[
                    "Daily Planner system",
                    "12 Monthly Planner pages",
                    "Yearly goals dashboard",
                    "Habit tracker built in",
                    "Reset journal every day",
                    "Notes on every page",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-white/82 text-[1rem] md:text-[1.04rem]"
                    >
                      <div className="w-7 h-7 rounded-lg border border-[rgba(200,245,90,0.22)] flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4" style={{ color: BRAND.accent }} />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-center">
                  <Button light className="min-w-[260px] md:min-w-[340px]">
                    Get the planner — $19 <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>

                <p className="mt-3 text-[0.96rem] md:text-[1rem] text-white/72 font-medium">
                  Offer ending soon • Was $29, now $19
                </p>

                <p className="mt-2 text-[1rem] text-white font-medium">
                  Instant access • One-time payment • Use it for life
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="faq" className="py-14 md:py-18 border-t border-white/8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="FAQ"
              text="Clear answers to the things people usually want to know before buying."
            />
            <div className="space-y-3">
              {faqs.map((item, index) => (
                <FAQItem key={item.q} q={item.q} a={item.a} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="pt-14 md:pt-18 pb-24 md:pb-30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 md:p-10 shadow-[0_18px_60px_rgba(200,245,90,0.04)]"
            >
              <h2 className="text-[2.4rem] md:text-[4.3rem] tracking-[-0.07em] leading-[0.94] font-semibold text-white">
                Plan with clarity.
                <br />
                <span style={{ color: BRAND.accent }}>
                  Stay consistent longer.
                </span>
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-white/58 text-[1rem] md:text-[1.08rem] leading-relaxed">
                Get the planner now for $19 and turn planning into something you
                actually keep using.
              </p>
              <div className="mt-7 flex items-center justify-center">
                <Button light>
                  Get the planner — $19 <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <p className="mt-3 text-[0.96rem] md:text-[1rem] text-white/72 font-medium">
                Offer ending soon • Was $29, now $19
              </p>
              <p className="mt-2 text-[1rem] text-white font-medium">
                Offer ending soon • Use it for life
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}