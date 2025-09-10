/* Generated from SiteSpec */
import SimpleSideBySide from "@/sections/SimpleSideBySide";
import OffsetWithFeatureList from "@/sections/OffsetWithFeatureList";
import ThreeTiersWithToggle from "@/sections/ThreeTiersWithToggle";
import WithTestimonial from "@/sections/WithTestimonial";

export default function home(){
  return (<main>
    <SimpleSideBySide {...{
  headline: "Transform Your Online Presence",
  subhead: "Discover how URL Fix Test can enhance your website's performance and visibility.",
  imageUrl: "https://example.com/image.jpg",
  primaryCta: {
    text: "Get Started Now",
    href: "/get-started"
  },
  secondaryCta: {
    text: "Learn More",
    href: "/services"
  }
}} />
    <OffsetWithFeatureList {...{
  title: "Key Features of URL Fix Test",
  subtitle: "Discover what sets us apart",
  items: [
    {
      title: "Fast URL Fixing",
      body: "Our advanced algorithms ensure your URLs are fixed in seconds, saving you time and hassle.",
      icon: "speed"
    },
    {
      title: "User-Friendly Interface",
      body: "Navigate our platform with ease, designed for both beginners and experts.",
      icon: "user-friendly"
    },
    {
      title: "24/7 Customer Support",
      body: "Our dedicated support team is available around the clock to assist you with any issues.",
      icon: "support"
    },
    {
      title: "Secure and Reliable",
      body: "We prioritize your data security, ensuring a safe experience every time you use our service.",
      icon: "security"
    }
  ]
}} />
    <ThreeTiersWithToggle {...{
  title: "Choose Your Plan",
  subtitle: "Flexible pricing to suit your needs",
  showToggle: true,
  tiers: [
    {
      name: "Basic Plan",
      id: "basic-plan",
      href: "/pricing/basic",
      price: {
        monthly: "$10",
        annually: "$100"
      },
      description: "Perfect for individuals starting out.",
      features: [
        "1 Website",
        "Basic Support",
        "Limited Features"
      ],
      mostPopular: false
    },
    {
      name: "Standard Plan",
      id: "standard-plan",
      href: "/pricing/standard",
      price: {
        monthly: "$20",
        annually: "$200"
      },
      description: "Ideal for small businesses.",
      features: [
        "5 Websites",
        "Priority Support",
        "Advanced Features"
      ],
      mostPopular: true
    },
    {
      name: "Premium Plan",
      id: "premium-plan",
      href: "/pricing/premium",
      price: {
        monthly: "$30",
        annually: "$300"
      },
      description: "Best for large enterprises.",
      features: [
        "Unlimited Websites",
        "24/7 Support",
        "All Features Included"
      ],
      mostPopular: false
    }
  ]
}} />
    <WithTestimonial {...{
  headline: "What Our Customers Say",
  subhead: "Real experiences from satisfied clients",
  imageUrl: "https://example.com/testimonial-image.jpg",
  primaryCta: {
    text: "Read More Testimonials",
    href: "/testimonials"
  },
  secondaryCta: {
    text: "Share Your Experience",
    href: "/share-testimonial"
  }
}} />
  </main>);
}
