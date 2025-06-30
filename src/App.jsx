import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Heart, Brain, Users, Phone, Mail, MapPin, Clock, Star, MessageCircle, Smartphone, Database, Users2, Shield, CheckCircle, Award, FileText, Download, Play, Calendar, CreditCard, Menu, X } from 'lucide-react'
import psicologaFoto from './assets/psicologa-foto.jpg'
import AgendamentoOnline from './components/AgendamentoOnline.jsx'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  })

  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui seria implementada a lógica de envio do formulário
    console.log('Formulário enviado:', formData)
    alert('Mensagem enviada com sucesso! Entrarei em contato em breve.')
    setFormData({ nome: '', email: '', telefone: '', mensagem: '' })
  }

  const scrollToSection = (sectionId) => {
    setActiveSection('home')
    setMobileMenuOpen(false) // Fechar menu mobile ao navegar
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const showAgendamento = () => {
    setActiveSection('agendamento')
    setMobileMenuOpen(false) // Fechar menu mobile
  }

  const showGuia = () => {
    setActiveSection('guia')
    setMobileMenuOpen(false) // Fechar menu mobile
  }

  const showHome = () => {
    setActiveSection('home')
    setMobileMenuOpen(false) // Fechar menu mobile
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  if (activeSection === 'agendamento') {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <button 
                onClick={showHome}
                className="font-serif text-2xl font-semibold text-foreground hover:text-primary transition-colors"
              >
                Dra. Michelle Pitangueira
              </button>
              <nav className="hidden md:flex items-center space-x-8">
                <button 
                  onClick={showHome}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Voltar ao Site
                </button>
                <Button 
                  onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                  className="btn-primary text-white px-6 py-2 rounded-full"
                >
                  WhatsApp
                </Button>
              </nav>
              
              {/* Menu Mobile */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMobileMenu}
                  className="relative z-50"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Menu Mobile Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm border-b border-border shadow-lg">
              <nav className="container mx-auto px-4 py-4 space-y-4">
                <button 
                  onClick={showHome}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
                >
                  Voltar ao Site
                </button>
                <Button 
                  onClick={() => {
                    window.open('https://wa.me/5511999999999', '_blank')
                    setMobileMenuOpen(false)
                  }}
                  className="btn-primary text-white px-6 py-2 rounded-full w-full"
                >
                  WhatsApp
                </Button>
              </nav>
            </div>
          )}
        </header>

        {/* Conteúdo do Agendamento */}
        <main className="pt-24 section-padding">
          <div className="container mx-auto px-4">
            <AgendamentoOnline />
          </div>
        </main>
      </div>
    )
  }

  if (activeSection === 'guia') {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <button 
                onClick={showHome}
                className="font-serif text-2xl font-semibold text-foreground hover:text-primary transition-colors"
              >
                Dra. Michelle Pitangueira
              </button>
              <nav className="hidden md:flex items-center space-x-8">
                <button 
                  onClick={showHome}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Voltar ao Site
                </button>
                <Button 
                  onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                  className="btn-primary text-white px-6 py-2 rounded-full"
                >
                  WhatsApp
                </Button>
              </nav>
              
              {/* Menu Mobile */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMobileMenu}
                  className="relative z-50"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Menu Mobile Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm border-b border-border shadow-lg">
              <nav className="container mx-auto px-4 py-4 space-y-4">
                <button 
                  onClick={showHome}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
                >
                  Voltar ao Site
                </button>
                <Button 
                  onClick={() => {
                    window.open('https://wa.me/5511999999999', '_blank')
                    setMobileMenuOpen(false)
                  }}
                  className="btn-primary text-white px-6 py-2 rounded-full w-full"
                >
                  WhatsApp
                </Button>
              </nav>
            </div>
          )}
        </header>

        {/* Conteúdo do Guia */}
        <main className="pt-24 section-padding">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Header do Guia */}
            <div className="text-center space-y-6 mb-12">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <FileText className="w-4 h-4" />
                <span>Guia Gratuito para Pais</span>
              </div>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">
                Foco na Ajuda e no Aprendizado
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Um guia prático para pais que desejam apoiar o desenvolvimento emocional e educacional de seus filhos
              </p>
            </div>

            {/* Preview com Criança */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12">
              <img 
                src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Criança aprendendo com apoio dos pais" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="font-serif text-2xl font-bold mb-2">
                  Transforme a Relação com seu Filho
                </h3>
                <p className="text-white/90">
                  Estratégias práticas para fortalecer vínculos e promover o desenvolvimento saudável
                </p>
              </div>
            </div>

            {/* Conteúdo do Guia */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Conteúdo Principal */}
              <div className="lg:col-span-2 space-y-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                      O que você encontrará neste guia:
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-bold text-sm">1</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Comunicação Efetiva</h3>
                          <p className="text-muted-foreground">
                            Aprenda técnicas de comunicação que fortalecem o vínculo e promovem o diálogo aberto com seu filho.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-bold text-sm">2</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Gestão de Emoções</h3>
                          <p className="text-muted-foreground">
                            Estratégias para ajudar seu filho a identificar, compreender e regular suas emoções de forma saudável.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-bold text-sm">3</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Apoio ao Aprendizado</h3>
                          <p className="text-muted-foreground">
                            Dicas práticas para criar um ambiente favorável ao aprendizado e ao desenvolvimento cognitivo.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-bold text-sm">4</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Estabelecimento de Limites</h3>
                          <p className="text-muted-foreground">
                            Como estabelecer limites claros e consistentes que promovem segurança e desenvolvimento.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-bold text-sm">5</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Sinais de Alerta</h3>
                          <p className="text-muted-foreground">
                            Reconheça quando é importante buscar ajuda profissional para o desenvolvimento de seu filho.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Benefícios */}
                <Card className="border-0 shadow-lg bg-primary/5">
                  <CardContent className="p-8">
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                      Benefícios para sua família:
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">Melhora na comunicação familiar</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">Redução de conflitos</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">Fortalecimento dos vínculos</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">Desenvolvimento emocional saudável</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">Melhora no desempenho escolar</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">Maior autoestima da criança</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Download do Guia */}
                <Card className="border-primary shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Download className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      Download Gratuito
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Baixe agora o guia completo em PDF e tenha acesso a todas as estratégias e dicas práticas.
                    </p>
                    <Button 
                      onClick={() => {
                        // Simular download do PDF
                        const link = document.createElement('a')
                        link.href = '/src/assets/Guia Rápido_ Foco na Ajuda e no Aprendizado para Pais.pdf'
                        link.download = 'Guia_Foco_Ajuda_Aprendizado_Pais.pdf'
                        link.click()
                      }}
                      className="btn-primary text-white w-full rounded-full mb-3"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Baixar Guia PDF
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      100% gratuito • Sem spam • Acesso imediato
                    </p>
                  </CardContent>
                </Card>

                {/* Sobre a Autora */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <img 
                        src={psicologaFoto} 
                        alt="Dra. Michelle Pitangueira" 
                        className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                      />
                      <h3 className="font-serif text-lg font-bold text-foreground">
                        Dra. Michelle Pitangueira
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Psicóloga Especialista
                      </p>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>8+ anos de experiência</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Brain className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>Especialista em TCC</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>500+ famílias atendidas</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Depoimento */}
                <Card className="border-0 shadow-lg bg-accent/5">
                  <CardContent className="p-6">
                    <div className="text-center mb-3">
                      <div className="flex justify-center space-x-1 mb-2">
                        {[1,2,3,4,5].map((star) => (
                          <Star key={star} className="w-4 h-4 text-accent fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground italic">
                        "O guia da Dra. Michelle transformou nossa relação familiar. 
                        As estratégias são práticas e realmente funcionam!"
                      </p>
                      <p className="text-xs text-muted-foreground mt-2 font-medium">
                        - Ana Paula, mãe de 2 filhos
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Final */}
            <Card className="border-0 shadow-xl bg-gradient-to-r from-primary/10 to-accent/10">
              <CardContent className="p-8 text-center">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                  Precisa de Ajuda Personalizada?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Se você tem dúvidas específicas sobre o desenvolvimento do seu filho ou gostaria de um acompanhamento 
                  profissional personalizado, estou aqui para ajudar.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={showAgendamento}
                    className="btn-primary text-white px-8 py-3 rounded-full text-lg"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Agendar Consulta
                  </Button>
                  <Button 
                    onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full text-lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Tirar Dúvidas no WhatsApp
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground mt-4">
                  Primeira consulta com desconto especial para quem baixou o guia
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="font-serif text-2xl font-semibold text-foreground">
              Dra. Michelle Pitangueira
            </div>
            
            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={showGuia}
                className="text-foreground hover:text-primary transition-colors"
              >
                Guia Gratuito
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
              <Button 
                onClick={showAgendamento}
                className="btn-primary text-white px-6 py-2 rounded-full"
              >
                Agendar Consulta
              </Button>
            </nav>
            
            {/* Menu Mobile */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="relative z-50"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm border-b border-border shadow-lg">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Serviços
              </button>
              <button 
                onClick={showGuia}
                className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Guia Gratuito
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Contato
              </button>
              <Button 
                onClick={showAgendamento}
                className="btn-primary text-white px-6 py-2 rounded-full w-full mt-4"
              >
                Agendar Consulta
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero-gradient pt-24 section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-serif text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Seu bem-estar emocional 
                  <span className="text-gradient"> começa aqui</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Sou a Dra. Michelle Pitangueira, psicóloga especialista em terapia cognitivo-comportamental. 
                  Aqui você encontrará um ambiente seguro e acolhedor para sua jornada de autoconhecimento.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={showAgendamento}
                  className="btn-primary text-white px-8 py-3 rounded-full text-lg"
                >
                  Agendar Consulta
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('sobre')}
                  className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full text-lg"
                >
                  Saiba Mais
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-accent fill-current" />
                  <span>Atendimento personalizado</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <span>Horários flexíveis</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={psicologaFoto} 
                  alt="Dra. Michelle Pitangueira - Psicóloga" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Pacientes atendidos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl font-bold text-foreground">
                Sobre Mim
              </h2>
              <p className="text-xl text-muted-foreground">
                Minha missão é acompanhar você em sua jornada de autoconhecimento e bem-estar emocional
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="card-hover border-0 shadow-lg">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold">Formação</h3>
                  <p className="text-muted-foreground">
                    Graduada em Psicologia pela USP, especialista em Terapia Cognitivo-Comportamental 
                    com mais de 8 anos de experiência clínica.
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover border-0 shadow-lg">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold">Abordagem</h3>
                  <p className="text-muted-foreground">
                    Utilizo técnicas baseadas em evidências científicas, sempre respeitando 
                    a individualidade e o ritmo de cada paciente.
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover border-0 shadow-lg">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold">Especialidades</h3>
                  <p className="text-muted-foreground">
                    Ansiedade, depressão, relacionamentos, autoestima, 
                    transtornos alimentares e desenvolvimento pessoal.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="section-padding hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-serif text-4xl font-bold text-foreground">
                Nosso Diferencial
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Oferecemos um acompanhamento psicopedagógico inovador que integra família, escola e tecnologia 
                para o desenvolvimento completo da criança
              </p>
            </div>

            {/* Card Principal - Acompanhamento Psicopedagógico */}
            <Card className="card-hover border-0 shadow-2xl bg-white overflow-hidden">
              {/* Imagem Horizontal no Topo */}
              <div className="relative h-64 md:h-80">
                <img 
                  src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                  alt="Acompanhamento Psicopedagógico Integrado - Escola e Família" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <Badge className="bg-primary text-white">Tecnologia Moderna</Badge>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-2">
                    Acompanhamento Psicopedagógico Integrado
                  </h3>
                  <p className="text-white/90 text-lg">
                    Escola e Família de Mãos Dadas
                  </p>
                </div>
              </div>

              {/* Conteúdo */}
              <CardContent className="p-8 lg:p-12 space-y-8">
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    No desenvolvimento de uma criança, a parceria entre a família e a escola é fundamental. 
                    Na Clínica Michelle Pitangueira, vamos além do atendimento individual, oferecendo um 
                    acompanhamento psicopedagógico estratégico e conectado, que garante uma visão 360° do universo da criança.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Compreendemos que o ambiente escolar é um pilar no crescimento de seu filho(a), e um bom 
                    diálogo entre todos os envolvidos potencializa os resultados terapêuticos.
                  </p>
                </div>

                {/* Diferenciais Tecnológicos */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Comunicação Integrada */}
                  <div className="bg-primary/5 rounded-xl p-6 space-y-4">
                    <h4 className="font-semibold text-foreground flex items-center">
                      <Users2 className="w-5 h-5 mr-3 text-primary" />
                      Comunicação Integrada e Segura com a Escola
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Utilizamos um canal de comunicação dedicado e criptografado, permitindo um intercâmbio 
                      de informações eficiente e respeitoso com os educadores (com sua prévia autorização).
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Monitoramento contínuo do desempenho escolar</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Estratégias alinhadas entre consultório e escola</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Identificação rápida de desafios</span>
                      </li>
                    </ul>
                  </div>

                  {/* Prontuário Eletrônico */}
                  <div className="bg-accent/5 rounded-xl p-6 space-y-4">
                    <h4 className="font-semibold text-foreground flex items-center">
                      <Database className="w-5 h-5 mr-3 text-primary" />
                      Prontuário Eletrônico Avançado
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Todos os registros são mantidos em um prontuário eletrônico seguro, 
                      com a mais alta tecnologia de proteção de dados.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Acesso organizado ao histórico completo</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Padronização e excelência no acompanhamento</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Proteção total dos dados (LGPD)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Benefícios */}
                <div className="space-y-6">
                  <h4 className="font-serif text-xl font-semibold text-foreground text-center">
                    Benefícios para a Criança e a Família
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">Intervenções mais assertivas</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">Agilidade na identificação</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">Consistência nas estratégias</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">Melhora acadêmica</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">Tranquilidade para os pais</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">Desenvolvimento social</span>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    onClick={showAgendamento}
                    className="btn-primary text-white px-8 py-3 rounded-full flex-1 text-lg"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Agendar Avaliação
                  </Button>
                  <Button 
                    onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full flex-1 text-lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Saiba Mais no WhatsApp
                  </Button>
                </div>

                {/* Selos de Confiança */}
                <div className="flex flex-wrap justify-center gap-4 pt-6 border-t border-gray-100">
                  <Badge variant="outline" className="text-sm px-4 py-2">
                    <Shield className="w-4 h-4 mr-2" />
                    Proteção LGPD
                  </Badge>
                  <Badge variant="outline" className="text-sm px-4 py-2">
                    <Award className="w-4 h-4 mr-2" />
                    CFP Certificado
                  </Badge>
                  <Badge variant="outline" className="text-sm px-4 py-2">
                    <Database className="w-4 h-4 mr-2" />
                    Dados Seguros
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-serif text-4xl font-bold text-foreground">
                Entre em Contato
              </h2>
              <p className="text-xl text-muted-foreground">
                Estou aqui para ajudar você. Entre em contato e agende sua consulta
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-foreground mb-2">
                        Nome completo
                      </label>
                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefone" className="block text-sm font-medium text-foreground mb-2">
                        Telefone
                      </label>
                      <Input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-foreground mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full"
                      placeholder="Conte-me um pouco sobre o que você gostaria de trabalhar..."
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="btn-primary text-white px-8 py-3 rounded-full text-lg w-full"
                  >
                    Enviar Mensagem
                  </Button>
                </form>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                      <p className="text-muted-foreground">(11) 99999-9999</p>
                      <p className="text-sm text-muted-foreground">WhatsApp disponível</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                      <p className="text-muted-foreground">contato@michellepitangueira.com.br</p>
                      <p className="text-sm text-muted-foreground">Resposta em até 24h</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Localização</h3>
                      <p className="text-muted-foreground">Rua das Flores, 123 - Jardins</p>
                      <p className="text-muted-foreground">São Paulo - SP</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Horários</h3>
                      <p className="text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-muted-foreground">Sábado: 8h às 12h</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-2xl p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    Primeira Consulta
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Na primeira sessão, faremos uma avaliação inicial para entender 
                    suas necessidades e definir o melhor caminho para o seu tratamento.
                  </p>
                  <Button 
                    onClick={showAgendamento}
                    className="btn-primary text-white px-6 py-2 rounded-full"
                  >
                    Agendar Agora
                  </Button>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-auto">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.08091208986!2d-46.65809718447816!3d-23.5658088675459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7b1f2e1b7%3A0x8f7e1b7e1b7e1b7e!2sRua%20das%20Flores%2C%20123%20-%20Jardins%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001419-000!5e0!3m2!1spt-BR!2sbr!4v1678901234567!5m2!1spt-BR!2sbr"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="font-serif text-2xl font-semibold mb-4">
            Dra. Michelle Pitangueira
          </div>
          <p className="text-muted-foreground mb-2">
            Psicóloga Especialista em Terapia Cognitivo-Comportamental
          </p>
          <p className="text-muted-foreground mb-4">
            CRP 06/XXXXX | Atendimento Online e Presencial
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="tel:+5511999999999" className="text-white hover:text-primary transition-colors">
              <Phone className="w-6 h-6" />
            </a>
            <a href="mailto:contato@michellepitangueira.com.br" className="text-white hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://wa.me/5511999999999" className="text-white hover:text-primary transition-colors">
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dra. Michelle Pitangueira. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App