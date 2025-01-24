import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/framer-animations";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const Newsletter = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-luxury-black/95 to-luxury-black" />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div variants={fadeInUp}>
            <div className="inline-block p-3 bg-luxury-gold/10 rounded-full mb-8">
              <Mail className="w-8 h-8 text-luxury-gold" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Join Our Newsletter
            </h2>
            <p className="text-gray-300 mb-8">
              Stay updated with our latest luxury car additions and exclusive offers
            </p>
          </motion.div>
          
          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 bg-white/10 border-luxury-gold/20 text-white placeholder:text-gray-400"
            />
            <Button
              type="submit"
              className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-black font-semibold"
            >
              Subscribe
            </Button>
          </motion.form>
          
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-sm text-gray-400"
          >
            By subscribing, you agree to receive our marketing emails. You can unsubscribe at any time.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};