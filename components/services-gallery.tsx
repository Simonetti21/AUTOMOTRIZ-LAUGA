"use client"

export default function ServicesGallery() {
  const services = [
    {
      title: "Scanner Automotriz",
      description: "Diagnóstico computarizado avanzado",
      icon: "🔧",
      image: "/automotive-scanner-diagnostic.jpg",
    },
    {
      title: "Lubricentro",
      description: "Cambio de aceite y lubricantes",
      icon: "🛢️",
      image: "/oil-change-service.jpg",
    },
    {
      title: "Mantenciones",
      description: "Mantenimientos preventivos",
      icon: "🔍",
      image: "/car-maintenance.jpg",
    },
    {
      title: "Afinamientos",
      description: "Optimización del motor",
      icon: "⚙️",
      image: "/engine-tuning.jpg",
    },
    {
      title: "Frenos",
      description: "Reparación de sistemas de frenos",
      icon: "🛑",
      image: "/brake-service.jpg",
    },
    {
      title: "Revisiones Técnicas",
      description: "Preparación completa",
      icon: "✅",
      image: "/technical-inspection.jpg",
    },
    {
      title: "Vulcanización",
      description: "Cambio de neumáticos",
      icon: "🛞",
      image: "/tire-service.jpg",
    },
    {
      title: "Balanceo",
      description: "Balanceo y alineación",
      icon: "⚖️",
      image: "/wheel-balancing.jpg",
    },
    {
      title: "Lavado Completo",
      description: "Motor, chasis, carrocería e interior",
      icon: "💧",
      image: "/car-wash-detailing.jpg",
    },
  ]

  return (
    <section id="servicios" className="py-12 md:py-20 px-4 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Nuestros Servicios y Especialidades</h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 border border-border"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <div className="text-3xl mb-2">{service.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-foreground/70 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
