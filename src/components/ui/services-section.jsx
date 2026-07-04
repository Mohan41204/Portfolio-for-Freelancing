import { useRef } from "react";
import { Check } from "lucide-react";
import { services } from "@/data";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { TimelineContent } from "@/components/ui/timeline-animation";

const revealVariants = {
  visible: (i) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.4,
      duration: 0.5,
    },
  }),
  hidden: {
    filter: "blur(10px)",
    y: -20,
    opacity: 0,
  },
};

export default function ServicesSection() {
  const timelineRef = useRef(null);

  return (
    <section
      id="services"
      ref={timelineRef}
      className="relative bg-zinc-950 py-24 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,140,0,0.08),transparent_55%)]" />

      <div className="relative mx-auto max-w-screen-2xl px-4 md:px-6">
        <article className="mx-auto max-w-3xl space-y-6 text-center">
          <TimelineContent
            as="div"
            animationNum={1}
            timelineRef={timelineRef}
            customVariants={revealVariants}
            className="mx-auto flex w-fit items-center gap-1 rounded-full border-4 border-orange-500/30 bg-orange-600 py-0.5 pl-0.5 pr-3 text-xs"
          >
            <div className="rounded-full bg-[#fcfdff] px-2 py-1 text-xs font-medium text-black">
              What I Offer
            </div>
            <p className="inline-block text-xs text-white sm:text-sm">
              Full-stack solutions from idea to deployment
            </p>
          </TimelineContent>

          <TimelineContent
            as="h2"
            animationNum={2}
            timelineRef={timelineRef}
            customVariants={revealVariants}
            className="text-4xl leading-[100%] text-white sm:text-5xl xl:text-6xl 2xl:text-7xl"
          >
            Services I{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text font-semibold text-transparent">
              Provide
            </span>
          </TimelineContent>

          <TimelineContent
            as="p"
            animationNum={3}
            timelineRef={timelineRef}
            customVariants={revealVariants}
            className="mx-auto max-w-2xl text-sm text-zinc-400 sm:text-lg lg:text-xl"
          >
            From a clean landing page to a full web + mobile app with cloud
            deployment — I handle the whole journey so you don&apos;t have to.
          </TimelineContent>
        </article>

        <div className="grid grid-cols-1 gap-6 pt-16 md:grid-cols-3 md:pt-20">
          {services.map((service, index) => (
            <TimelineContent
              as="article"
              key={service.title}
              animationNum={index + 4}
              timelineRef={timelineRef}
              customVariants={revealVariants}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/30 hover:shadow-[0_20px_60px_-20px_rgba(255,140,0,0.35)]"
            >
              <figure className="relative h-full w-full">
                {service.imgSrc && (
                  <img
                    src={service.imgSrc}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </figure>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <ProgressiveBlur
                className="pointer-events-none absolute bottom-0 left-0 h-[55%] w-full"
                blurIntensity={0.5}
              />

              <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-2xl" aria-hidden="true">
                    {service.icon}
                  </span>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium text-orange-300">
                    {service.features.length} features
                  </span>
                </div>

                <h3 className="text-lg font-semibold capitalize leading-tight text-white sm:text-xl 2xl:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-300">
                  {service.description}
                </p>

                <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-xs text-zinc-300 sm:text-sm"
                    >
                      <Check
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-400"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TimelineContent>
          ))}
        </div>
      </div>
    </section>
  );
}
