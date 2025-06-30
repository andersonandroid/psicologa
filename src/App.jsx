import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Heart, Brain, Users, Phone, Mail, MapPin, Clock, Star, MessageCircle, Menu, X, Download, CheckCircle, Calendar, Shield, Award } from 'lucide-react'
import psicologaFoto from './assets/psicologa-foto.jpg'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  })

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
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false) // Fecha o menu mobile após navegar
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
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
            
            {/* Desktop Navigation */}
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

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden relative z-50 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-6 h-6 relative flex flex-col justify-center items-center">
                <span 
                  className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ease-in-out ${
                    mobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                  }`}
                />
                <span 
                  className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ease-in-out ${
                    mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span 
                  className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ease-in-out ${
                    mobileMenuOpen ? '-rotate-45 -translate-y-0' : 'translate-y-1.5'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div 
          className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header do Menu Mobile */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="font-serif text-lg font-semibold text-foreground">
              Menu
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Navegação Mobile */}
          <nav className="flex flex-col p-6 space-y-1">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="flex items-center px-4 py-3 text-left text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200"
            >
              <span className="text-base font-medium">Início</span>
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="flex items-center px-4 py-3 text-left text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200"
            >
              <span className="text-base font-medium">Sobre</span>
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="flex items-center px-4 py-3 text-left text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200"
            >
              <span className="text-base font-medium">Serviços</span>
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="flex items-center px-4 py-3 text-left text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200"
            >
              <span className="text-base font-medium">Contato</span>
            </button>
            
            {/* Separador */}
            <div className="my-4 border-t border-gray-100"></div>
            
            {/* Botão CTA */}
            <Button 
              onClick={() => scrollToSection('contato')}
              className="btn-primary text-white px-6 py-3 rounded-lg text-base font-medium w-full"
            >
              Agendar Consulta
            </Button>
          </nav>

          {/* Informações de Contato no Menu Mobile */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-gray-50">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>contato@michellepitangueira.com.br</span>
              </div>
            </div>
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
                Minha Missão é humanizar cada jornada infantil, construindo pontes para a Inclusão e semeando a semente da Qualidade de Vida desde cedo.
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
                Serviços
              </h2>
              <p className="text-xl text-muted-foreground">
                Oferecemos diferentes modalidades de atendimento para melhor atender suas necessidades
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Terapia Individual */}
              <Card className="card-hover border-0 shadow-lg bg-white">
                <CardContent className="p-8 space-y-6">
                  <img 
                    src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
                    alt="Terapia Individual - Sessão de terapia em consultório acolhedor" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Heart className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-serif text-2xl font-semibold text-foreground">
                        Terapia Individual
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      Sessões personalizadas focadas no seu bem-estar emocional e desenvolvimento pessoal. 
                      Utilizamos abordagens baseadas em evidências para ajudar você a superar desafios e alcançar seus objetivos.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Ansiedade e depressão</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Autoestima e autoconhecimento</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Relacionamentos interpessoais</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Terapia de Casal */}
              <Card className="card-hover border-0 shadow-lg bg-white">
                <CardContent className="p-8 space-y-6">
                  <img 
                    src="https://images.pexels.com/photos/8471919/pexels-photo-8471919.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
                    alt="Terapia de Casal - Casal em sessão de terapia" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-serif text-2xl font-semibold text-foreground">
                        Terapia de Casal
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      Fortalecimento dos vínculos afetivos através de técnicas especializadas em comunicação 
                      e resolução de conflitos. Ajudamos casais a reconstruir a intimidade e confiança.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Comunicação efetiva</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Resolução de conflitos</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Reconstrução da intimidade</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Acompanhamento Psicopedagógico - Card Principal */}
            <div className="flex justify-center">
              <Card className="card-hover border-0 shadow-lg bg-white max-w-4xl">
                <CardContent className="p-8 space-y-6">
                  <img 
                    src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop" 
                    alt="Acompanhamento Psicopedagógico - Sala colorida com criança e legos" 
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Brain className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-serif text-2xl font-semibold text-foreground">
                        Acompanhamento Psicopedagógico Integrado: Escola e Família de Mãos Dadas
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      No desenvolvimento de uma criança, a parceria entre a família e a escola é fundamental. Na Clínica Michelle Pitangueira, vamos além do atendimento individual, oferecendo um acompanhamento psicopedagógico estratégico e conectado, que garante uma visão 360° do universo da criança.
                    </p>
                    <p className="text-muted-foreground">
                      Compreendemos que o ambiente escolar é um pilar no crescimento de seu filho(a), e um bom diálogo entre todos os envolvidos potencializa os resultados terapêuticos.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-foreground">Comunicação Integrada e Segura com a Escola:</h4>
                    <p className="text-muted-foreground">
                      Utilizamos um canal de comunicação dedicado e criptografado, permitindo um intercâmbio de informações eficiente e respeitoso com os educadores (com sua prévia autorização). Isso nos possibilita:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Monitorar o desempenho e o comportamento da criança em sala de aula de forma contínua.</span>
                      </div>
                      <div className="flex items-start space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Compartilhar estratégias e intervenções alinhadas entre o consultório e o ambiente escolar.</span>
                      </div>
                      <div className="flex items-start space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Identificar e abordar rapidamente quaisquer desafios que surjam, trabalhando em conjunto para superá-los.</span>
                      </div>
                      <div className="flex items-start space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Garantir a privacidade e o sigilo de todas as informações trocadas, conforme as diretrizes do Conselho Federal de Psicologia (CFP).</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-foreground">Prontuário Eletrônico Avançado e Confidencial:</h4>
                    <p className="text-muted-foreground">
                      Todos os registros do acompanhamento são mantidos em um prontuário eletrônico seguro, com a mais alta tecnologia de proteção de dados. Isso assegura:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Acesso rápido e organizado ao histórico de desenvolvimento, avaliações e intervenções.</span>
                      </div>
                      <div className="flex items-start space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Padronização das informações, garantindo um acompanhamento de excelência.</span>
                      </div>
                      <div className="flex items-start space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Confidencialidade total, com acesso restrito e protegido, respeitando rigorosamente a Lei Geral de Proteção de Dados (LGPD) e o Código de Ética da Psicologia.</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-foreground">Benefícios para a Criança e a Família:</h4>
                    <p className="text-muted-foreground">
                      Ao integrar o acompanhamento psicológico com a rotina escolar por meio de ferramentas modernas e seguras, garantimos:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span><strong>Intervenções mais assertivas:</strong> Com um panorama completo do desenvolvimento da criança em diferentes ambientes.</span>
                      </div>
                      <div className="flex items-start space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span><strong>Agilidade na identificação de necessidades:</strong> Permitindo ações rápidas e eficazes.</span>
                      </div>
                      <div className="flex items-start space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span><strong>Consistência nas estratégias:</strong> Pais, psicólogos e escola trabalhando em sintonia.</span>
                      </div>
                      <div className="flex items-start space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span><strong>Melhora no desempenho acadêmico e social:</strong> Com um suporte contínuo e alinhado.</span>
                      </div>
                      <div className="flex items-start space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span><strong>Tranquilidade e segurança:</strong> Para os pais, sabendo que o acompanhamento do seu filho(a) é feito com o máximo de cuidado e profissionalismo, utilizando o que há de mais moderno em gestão de informações.</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Guia Gratuito Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                          <Download className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-foreground">
                          Guia Gratuito para Pais
                        </h3>
                      </div>
                      <h4 className="text-xl font-semibold text-primary">
                        "Foco na Ajuda e no Aprendizado"
                      </h4>
                      <p className="text-muted-foreground">
                        Um guia prático e completo para ajudar pais a compreenderem melhor o desenvolvimento 
                        emocional de seus filhos e como apoiá-los em cada fase da vida.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <h5 className="font-semibold text-foreground">O que você vai encontrar:</h5>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>Técnicas de comunicação efetiva com crianças</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>Como identificar sinais de ansiedade infantil</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>Estratégias para fortalecer a autoestima</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>Atividades práticas para o dia a dia</span>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => window.open('/src/assets/Guia Rápido_ Foco na Ajuda e no Aprendizado para Pais.pdf', '_blank')}
                      className="btn-primary text-white px-8 py-3 rounded-full text-lg w-full md:w-auto"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Baixar Guia Gratuito
                    </Button>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Award className="w-8 h-8 text-primary" />
                          <div>
                            <h6 className="font-semibold text-foreground">Material Exclusivo</h6>
                            <p className="text-sm text-muted-foreground">Desenvolvido por especialista</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Shield className="w-8 h-8 text-primary" />
                          <div>
                            <h6 className="font-semibold text-foreground">100% Gratuito</h6>
                            <p className="text-sm text-muted-foreground">Sem custos ou compromissos</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-8 h-8 text-primary" />
                          <div>
                            <h6 className="font-semibold text-foreground">Acesso Imediato</h6>
                            <p className="text-sm text-muted-foreground">Download instantâneo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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