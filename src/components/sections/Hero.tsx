import { GlowButton } from "@/components/ui/glow-button";
import CountUp from "@/components/ui/count-up";
import novaImage from "@/assets/nova.png";
export const Hero = () => {
  return <section className="section-container section-padding min-h-screen flex items-center relative overflow-hidden" style={{
    background: 'transparent'
  }}>
      {/* Background Video */}
      <video className="absolute inset-0 w-full h-full object-cover -z-10 brightness-125 contrast-110" autoPlay muted loop playsInline controls={false}>
        <source src="https://res.cloudinary.com/dqd4dvem7/video/upload/v1758619344/CleanShot_2025-09-23_at_16.11.06_p8utke.mp4" type="video/mp4" />
      </video>
      <div className="w-full max-w-4xl relative z-10 mx-[162px]">
        {/* Decorative Image */}
        <img src={novaImage} alt="Nova decoration" className="absolute top-0 right-0 w-64 h-64 object-contain opacity-80" />
        {/* Main Content */}
        <div className="space-y-6 mb-16">
          {/* Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <CountUp to={3500} from={0} duration={2.5} className="gradient-text-primary text-9xl" />
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text-accent">Followers</span>
            </h1>
          </div>

          {/* Description */}
          <div className="max-w-md">
            <p className="text-lg text-muted-foreground font-medium leading-relaxed">
              Next stop: 4000 and beyond
            </p>
          </div>
        </div>

        {/* CTA and Testimonial */}
        <div className="flex flex-row items-center justify-between gap-8">
          {/* CTA Button */}
          <div className="w-fit">
            <GlowButton href="https://bima.framer.media/?utm_source=veloxthemes&utm_campaign=landbook%3Fref%3Dland-book.com#contact">
              Get a Free AI Strategy Session
            </GlowButton>
          </div>

          {/* Testimonial */}
          <div className="lg:ml-8 w-fit">
            <div className="space-y-2 text-right">
              <p className="text-sm text-purple-300 font-medium">Big thanks to everyone who liked or followed</p>
              <div className="flex justify-end items-center gap-1 text-sm text-muted-foreground">
                <span>
              </span>
                <span>Truly grateful.</span>
                <span>
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};