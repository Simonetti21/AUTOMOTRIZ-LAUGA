export default function HeroSection() {
  return (
    <section className="relative h-96 md:h-[500px] bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/automotive-garage.jpg')] bg-cover bg-center opacity-40"></div>

      <div className="relative max-w-6xl mx-auto h-full flex items-center justify-center px-4">
        <div className="text-center space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-primary text-balance">Automotriz Lauga</h1>
          <p className="text-lg md:text-xl text-foreground/80 font-medium">Mecánica General Multimarca</p>
          <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
            Servicios profesionales de mantenimiento y reparación para todos los vehículos
          </p>

          <div className="pt-4 space-y-2">
            <p className="text-sm md:text-base font-medium text-primary flex items-center justify-center gap-2">
              📍 13 Norte, #1252, Viña del Mar
            </p>
            <p className="text-sm md:text-base font-medium text-primary flex items-center justify-center gap-2">
              📞 +56 9 6341 1497
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
