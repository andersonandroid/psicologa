import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowLeft, CheckCircle, Star, Shield, Clock } from 'lucide-react'
import AgendamentoOnline from '../components/AgendamentoOnline.jsx'
import '../App.css'

const AgendamentoPage = () => {
  const navigate = useNavigate()

  const voltar = () => {
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header Simples */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={voltar}
                className="flex items-center space-x-2 text-gray-600 hover:text-primary"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar</span>
              </Button>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="font-serif text-xl font-semibold text-primary">
                Dra. Michelle Pitangueira
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Agendamento Seguro</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-6 mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4" />
              <span>Atendimento Especializado</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Agende sua consulta
              <span className="block text-primary">de forma simples e segura</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Escolha o melhor horário para você e comece sua jornada de autoconhecimento 
              com acompanhamento psicológico especializado.
            </p>
          </div>

          {/* Features Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Confirmação Imediata</h3>
              <p className="text-gray-600 text-sm">
                Receba confirmação instantânea do seu agendamento por email e WhatsApp
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Horários Flexíveis</h3>
              <p className="text-gray-600 text-sm">
                Escolha entre manhã, tarde ou noite. Horários adaptados à sua rotina
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">100% Seguro</h3>
              <p className="text-gray-600 text-sm">
                Seus dados são protegidos com criptografia e total sigilo profissional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Agendamento */}
      <section className="pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-blue-600 px-8 py-6">
              <h2 className="font-serif text-2xl font-bold text-white mb-2">
                Formulário de Agendamento
              </h2>
              <p className="text-blue-100">
                Preencha os dados abaixo para agendar sua consulta
              </p>
            </div>
            
            <div className="p-8">
              <AgendamentoOnline />
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé Simples */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <span>© 2024 Dra. Michelle Pitangueira</span>
            <span>•</span>
            <span>CRP 06/XXXXX</span>
            <span>•</span>
            <span>Atendimento Presencial e Online</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AgendamentoPage