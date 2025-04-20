import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialCard from "@/components/SocialCard";
import StatCard from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Twitch, Youtube, Twitter, Instagram, Users, Eye, Heart, Trophy, ArrowRight, ShoppingBag } from "lucide-react";
const Index = () => {
  return <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="hero-gradient py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                <span className="text-gradient">FLIXIFY</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Join the community of gamers, creators, and fans built around positivity and fun.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Twitch className="h-5 w-5" />
                  Watch Live
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Content Platforms Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">CONTENT PLATFORMS</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Follow Flixify across all platforms for streams, videos, updates, and more.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <SocialCard icon={<Twitch className="h-8 w-8" />} title="Twitch" description="Live streams multiple times a week. Gaming, reactions, and more." stats="2+" statsLabel="Followers" linkUrl="https://www.twitch.tv/ttvflixify" linkText="Follow on Twitch" bgColor="bg-purple-600" />
              
              <SocialCard icon={<Youtube className="h-8 w-8" />} title="YouTube" description="Daily uploads of stream highlights, gameplay, and original content." stats="58+" statsLabel="Subscribers" linkUrl="https://www.youtube.com/@ytflixify" linkText="Subscribe on YouTube" bgColor="bg-red-600" />
              
              <SocialCard icon={<Twitter className="h-8 w-8" />} title="Twitter" description="Updates, announcements, and hot takes on gaming and life." stats="13+" statsLabel="Followers" linkUrl="https://twitter.com/TheFlixify" linkText="Follow on Twitter" bgColor="bg-blue-500" />
              
              <SocialCard icon={<Instagram className="h-8 w-8" />} title="Instagram" description="Behind-the-scenes content, photos, and daily life updates." stats="460+" statsLabel="Followers" linkUrl="https://www.instagram.com/theflixify/" linkText="Follow on Instagram" bgColor="bg-pink-500" />
            </div>
          </div>
        </section>
        
        {/* Community Section */}
        <section id="community" className="py-20 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR COMMUNITY</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join thousands of fans who make up the Flixify community across multiple platforms.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <StatCard icon={<Users className="h-8 w-8" />} value="564+" label="Total Followers" />
              
              <StatCard icon={<Eye className="h-8 w-8" />} value="61K+" label="Content Views" />
              
              <StatCard icon={<Heart className="h-8 w-8" />} value="3+" label="Discord Members" />
            </div>
            
            <div className="mt-16 text-center">
              <Button variant="outline" size="lg" onclick="location.href='https://discord.gg/fDHHRgezst'" className="gap-2">
                Join Discord
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-20 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">ABOUT FLIXIFY</h2>
                <p className="text-muted-foreground mb-6">
                  Flixify is one of gaming's most recognizable personalities. As a member of 100 Thieves, 
                  Flixify has built a dedicated community across Twitch, YouTube, and other social platforms.
                </p>
                <p className="text-muted-foreground mb-6">
                  Known for high-energy content and competitive gameplay, Flixify continues to entertain millions with 
                  gameplay, commentary, and real-life content.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a target="_blank" href="https://www.twitch.tv/ttvflixify">
                  <Button variant="outline" className="gap-2">
                    <Twitch className="h-4 w-4" />
                    Twitch
                  </Button></a>
                  <a target="_blank" href="https://youtube.com/@YTFlixify">
                  <Button variant="outline" className="gap-2">
                    <Youtube className="h-4 w-4" />
                    YouTube
                  </Button></a>
                  <a target="_blank" href="https://x.com/TheFlixify">
                  <Button variant="outline" className="gap-2">
                    <Twitter className="h-4 w-4" />
                    Twitter
                  </Button></a>
                  <a target="_blank" href="https://instagram.com/TheFlixify">
                  <Button variant="outline" className="gap-2">
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </Button></a>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden">
                <img src="https://placehold.co/600x400/23232B/FFFFFF?text=Flixify" alt="Flixify" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden hero-gradient">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">JOIN THE FLIXIFY FAMILY</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Be part of a welcoming community of gamers, content creators, and fans. Follow, subscribe, and stay connected.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a target="_blank" href="https://www.twitch.tv/ttvflixify">
                <Button size="lg" className="gap-2">
                  <Twitch className="h-5 w-5" />
                  Watch Live
                </Button></a>
                <a target="_blank" href="https://www.youtube.com/@YTFlixify">
                <Button size="lg" variant="outline" className="gap-2">
                  <Youtube className="h-5 w-5" />
                  Subscribe
                </Button></a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default Index;
