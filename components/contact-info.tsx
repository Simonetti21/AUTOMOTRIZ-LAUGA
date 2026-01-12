export default function ContactInfo() {
  const contactItems = [
    {
      icon: "📍",
      title: "Ubicación",
      content: "13 Norte, #1252\nViña del Mar",
    },
    {
      icon: "📞",
      title: "Teléfono",
      content: "+56 9 6341 1497",
    },
    {
      icon: "⏰",
      title: "Horario",
      content: "Lunes a Viernes\n9:00 - 18:00",
    },
  ]

  return (
    <section className="py-12 md:py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-lg text-primary mb-2">{item.title}</h3>
              <p className="text-foreground/70 whitespace-pre-line text-sm">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
