
export const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-luxury-black text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2070&q=80"
          alt="Luxury Car"
          className="w-full h-full object-cover opacity-50"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 h-screen flex flex-col justify-center">
        <div className="max-w-3xl">
          <span className="text-luxury-gold uppercase mb-4 inline-flex rounded-3xl bg-white/10 backdrop-blur-sm shadow-lg border border-white/10 px-4 py-2">
            Premium Car Rental Service
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Drive in Style, Rent with Ease
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Discover our exclusive collection of premium vehicles for an unforgettable journey.
          </p>
          <div className="flex gap-4 justify-start">
            <button className="bg-luxury-gold text-luxury-black px-8 py-3 rounded-md hover:bg-white transition-colors duration-200">
              Book Now
            </button>
            <button className="border border-white px-8 py-3 rounded-md hover:bg-white hover:text-luxury-black transition-colors duration-200">
              Explore Cars
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
