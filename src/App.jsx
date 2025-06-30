import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Heart, Brain, Users, Phone, Mail, MapPin, Clock, Star, MessageCircle, Play, Pause } from 'lucide-react'
import psicologaFoto from './assets/psicologa-foto.jpg'
import terapiaCriancasImg from './assets/terapia-criancas-real copy.jpg'
import terapiaInfantilVideo from './assets/Terapia_Infantil_Criado.mp4'
import mulherCriancaVideo from './assets/Pronto_Mulher_e_Criança.mp4'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  })

  const [isVideo1Playing, setIsVideo1Playing] = useState(false)
  const [isVideo2Playing, setIsVideo2Playing] = useState(false)

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
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleVideo = (videoNumber) => {
    const video1 = document.getElementById('therapy-video-1')
    const video2 = document.getElementById('therapy-video-2')
    
    if (videoNumber === 1) {
      // Pause video 2 if playing
      if (!video2.paused) {
        video2.pause()
        setIsVideo2Playing(false)
      }
      
      if (video1.paused) {
        video1.play()
        setIsVideo1Playing(true)
      } else {
        video1.pause()
        setIsVideo1Playing(false)
      }
    } else {
      // Pause video 1 if playing
      if (!video1.paused) {
        video1.pause()
        setIsVideo1Playing(false)
      }
      
      if (video2.paused) {
        video2.play()
        setIsVideo2Playing(true)
      } else {
        video2.pause()
        setIsVideo2Playing(false)
      }
    }
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
                onClick={() => scrollToSection('video')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Vídeos
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
              <Button 
                onClick={() => scrollToSection('contato')}
                className="btn-primary text-white px-6 py-2 rounded-full"
              >
                Agendar Consulta
              </Button>
            </nav>
            <Button 
              onClick={() => scrollToSection('contato')}
              className="md:hidden btn-primary text-white px-4 py-2 rounded-full"
            >
              Contato
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero-gradient pt-24 section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-serif text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Bem-vinda ao seu espaço de 
                  <span className="text-gradient"> cura e crescimento</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Sou a Dra. Michelle Pitangueira, psicóloga especialista em terapia cognitivo-comportamental. 
                  Aqui você encontrará um ambiente seguro e acolhedor para sua jornada de autoconhecimento.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('contato')}
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-serif text-4xl font-bold text-foreground">
                Serviços
              </h2>
              <p className="text-xl text-muted-foreground">
                Oferecemos diferentes modalidades de atendimento para melhor atender suas necessidades
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card: Terapia Individual */}
              <Card className="card-hover border-0 shadow-lg bg-white">
                <CardContent className="p-8 space-y-6">
                  <img 
                    src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Terapia Individual" 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl font-semibold text-foreground">
                      Terapia Individual
                    </h3>
                    <p className="text-muted-foreground">
                      Atendimento personalizado focado em suas necessidades específicas. 
                      Trabalhamos juntos para identificar padrões, desenvolver estratégias 
                      e promover mudanças positivas em sua vida.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Sessões de 50 minutos</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Presencial ou online</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Horários flexíveis</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card: Terapia de Casal */}
              <Card className="card-hover border-0 shadow-lg bg-white">
                <CardContent className="p-8 space-y-6">
                  <img 
                    src="https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Terapia de Casal" 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl font-semibold text-foreground">
                      Terapia de Casal
                    </h3>
                    <p className="text-muted-foreground">
                      Espaço seguro para casais trabalharem questões relacionais, 
                      melhorarem a comunicação e fortalecerem vínculos afetivos.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Sessões de 60 minutos</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Abordagem sistêmica</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Foco na comunicação</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card: Terapia Infantil */}
              <Card className="card-hover border-0 shadow-lg bg-white">
                <CardContent className="p-8 space-y-6">
                  <img 
                    src={terapiaCriancasImg} 
                    alt="Terapia Infantil" 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl font-semibold text-foreground">
                      Terapia Infantil
                    </h3>
                    <p className="text-muted-foreground">
                      Atendimento lúdico e adaptado para crianças, 
                      ajudando-as a expressar emoções e desenvolver habilidades sociais 
                      em um ambiente seguro e divertido.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Sessões adaptadas à idade</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Terapia através do brincar</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Orientação para pais</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vídeos Section */}
      <section id="video" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-serif text-4xl font-bold text-foreground">
                Conheça Meu Trabalho
              </h2>
              <p className="text-xl text-muted-foreground">
                Veja como a terapia pode transformar vidas através de técnicas especializadas
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Primeiro Vídeo - Terapia Infantil */}
              <div className="space-y-6">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black">
                  <video
                    id="therapy-video-1"
                    className="w-full h-auto"
                    poster={terapiaCriancasImg}
                    controls={false}
                    preload="metadata"
                    onPlay={() => setIsVideo1Playing(true)}
                    onPause={() => setIsVideo1Playing(false)}
                    onEnded={() => setIsVideo1Playing(false)}
                  >
                    <source src={terapiaInfantilVideo} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                  
                  {/* Custom Play Button Overlay */}
                  {!isVideo1Playing && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 hover:bg-black/30">
                      <button
                        onClick={() => toggleVideo(1)}
                        className="bg-white/90 hover:bg-white text-primary rounded-full p-4 transition-all duration-300 hover:scale-110 shadow-2xl"
                      >
                        <Play className="w-8 h-8 ml-1" />
                      </button>
                    </div>
                  )}
                  
                  {/* Pause Button when playing */}
                  {isVideo1Playing && (
                    <div className="absolute top-4 right-4">
                      <button
                        onClick={() => toggleVideo(1)}
                        className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300"
                      >
                        <Pause className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>

                <Card className="border-0 shadow-lg bg-primary/5">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                      Terapia Infantil Especializada
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Através de técnicas lúdicas e adaptadas para cada faixa etária, 
                      ajudo crianças a desenvolverem habilidades emocionais e sociais.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Ambiente acolhedor</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Técnicas lúdicas</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Segundo Vídeo - Foco na Ajuda e no Aprendizado */}
              <div className="space-y-6">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black">
                  <video
                    id="therapy-video-2"
                    className="w-full h-auto"
                    poster={terapiaCriancasImg}
                    controls={false}
                    preload="metadata"
                    onPlay={() => setIsVideo2Playing(true)}
                    onPause={() => setIsVideo2Playing(false)}
                    onEnded={() => setIsVideo2Playing(false)}
                  >
                    <source src={mulherCriancaVideo} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                  
                  {/* Custom Play Button Overlay */}
                  {!isVideo2Playing && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 hover:bg-black/30">
                      <button
                        onClick={() => toggleVideo(2)}
                        className="bg-white/90 hover:bg-white text-primary rounded-full p-4 transition-all duration-300 hover:scale-110 shadow-2xl"
                      >
                        <Play className="w-8 h-8 ml-1" />
                      </button>
                    </div>
                  )}
                  
                  {/* Pause Button when playing */}
                  {isVideo2Playing && (
                    <div className="absolute top-4 right-4">
                      <button
                        onClick={() => toggleVideo(2)}
                        className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300"
                      >
                        <Pause className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>

                <Card className="border-0 shadow-lg bg-primary/5">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                      Foco na Ajuda e no Aprendizado
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Veja como o aprendizado pode ser divertido e acolhedor! Neste vídeo, você acompanha um momento de apoio e orientação, onde o incentivo faz toda a diferença no desenvolvimento de uma criança.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Foco na Orientação</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Descoberta</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="section-padding hero-gradient">
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
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center">
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
                    onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
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