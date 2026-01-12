"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    brand: "",
    model: "",
    service: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Cotización:", formData)
    setSubmitted(true)
    setFormData({ name: "", phone: "", email: "", brand: "", model: "", service: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div id="cotizacion" className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-border">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Solicita tu Cotización</h2>

      {submitted && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
          ✓ Cotización enviada. Te contactaremos pronto.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Nombre *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Teléfono *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
            placeholder="+56 9 ..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Marca del Vehículo *</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
            placeholder="Ej: Toyota, Ford"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Modelo y Año</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
            placeholder="Ej: Corolla 2020"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Servicio *</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
          >
            <option value="">Selecciona un servicio</option>
            <option value="scanner">Scanner Automotriz</option>
            <option value="lubricentro">Lubricentro</option>
            <option value="mantenciones">Mantenciones</option>
            <option value="afinamientos">Afinamientos</option>
            <option value="frenos">Frenos</option>
            <option value="revision">Revisión Técnica</option>
            <option value="vulcanizacion">Vulcanización</option>
            <option value="balanceo">Balanceo</option>
            <option value="lavado">Lavado Completo</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Descripción</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
            rows={4}
            placeholder="Cuéntanos más detalles..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
        >
          <Send size={18} />
          Solicitar Cotización
        </button>
      </form>
    </div>
  )
}
