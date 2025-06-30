import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'

import { Heart, Brain, Users, Phone, Mail, MapPin, Clock, Star, MessageCircle, Menu, X, Download, CheckCircle, Calendar, Shield, Award, Play, Home, School, Lock, FileText, Target, UserCheck } from 'lucide-react'
import psicologaFoto from './assets/psicologa-foto.jpg'
import terapiaInfantilVideo from './assets/Terapia_Infantil_Criado.mp4'
import consultorioVideo from './assets/Pronto_Mulher_e_Criança.mp4'
import './App.css'

function App() {
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  })

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

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

  const abrirAgendamento = () => {
    // Navega para a página dedicada de agendamento
    navigate('/agendamento')
  }

  // Detectar se é mobile
  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileDevice = window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(isMobileDevice)
      
      // Aplicar classe ao body para CSS global
      if (isMobileDevice) {
        document.body.classList.add('is-mobile')
      } else {
        document.body.classList.remove('is-mobile')
      }
    }

    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)

    return () => {
      window.removeEventListener('resize', checkIfMobile)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className={`flex items-center ${isMobile || window.innerWidth <= 768 ? 'justify-center' : 'justify-between'}`}>
            <div className="font-serif text-2xl font-semibold text-foreground">
              Dra. Michelle Pitangueira
            </div>
            
            {/* Desktop Navigation */}
            {!isMobile && window.innerWidth > 768 && (
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
                onClick={() => scrollToSection('videos')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Vídeos
              </button>
              <button 
                onClick={() => scrollToSection('guia')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Guia
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
              <Button 
                onClick={abrirAgendamento}
                className="btn-primary text-white px-6 py-2 rounded-full"
              >
                Agendar Consulta
              </Button>
              </nav>
            )}

            {/* Mobile Menu Button */}
            {!isMobile && window.innerWidth > 768 && (
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
            )}
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {!isMobile && window.innerWidth > 768 && (
          <div 
            className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
              mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Navigation Menu */}
        {!isMobile && window.innerWidth > 768 && (
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
              onClick={() => scrollToSection('videos')}
              className="flex items-center px-4 py-3 text-left text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200"
            >
              <span className="text-base font-medium">Vídeos</span>
            </button>
                          <button 
                onClick={() => scrollToSection('guia')}
                className="flex items-center px-4 py-3 text-left text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200"
              >
                <span className="text-base font-medium">Guia</span>
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
              onClick={abrirAgendamento}
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
                  onClick={abrirAgendamento}
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
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Imagem */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAFoAoADASIAAhEBAxEB/8QAHQABAAIDAQEBAQAAAAAAAAAAAAYHBAUIAwIJAf/EAE4QAAEDAwMCBAMGBAQEBAMHBQABAgMEBREGEiExQVEHEyJhMnGBkQgUQqGxwdHh8BUjUmIVJDNygpKiwtIXQ1OTshY0Y3ODs/EmJTQ//EAAZgEBAAMBAQAAAAAAAAAAAAAAAAABAgMEBf/EACURAAICAgICAgMBAQEAAAAAAAABAhEDIRIxBEFRYRNxgSKhkf/aAAwDAQACEQMRAD8A+1qiKAAAAAAAAAAAAAAAAAAAAAAAAAAA8pJo48GR7Wq7A+Sf3wYY5crtLs6oQc3UQzAAO+UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHLzrdthw+pcyNjuNz3q3H2VFvjxOW3ol8efE5VtlI/LtrGOyFN74yzI/VjxXZyXx5G+Jm8vHo5i6Nme7LbXFfpOPfXfhDcNHUMmqtOWFdTUWnfKVqRrNLM3e7C5XbsRO2Omp01Eo+yR+W7R1r7IaWWPDJVjd2LVGqrJcriKnMgZtNvqHU2I9yyOIkvKo7mQcyS3EldZu6I66iEqiInCgAAggkbdNg6Yr44DdqS10jquqaxuY9wy5F3YzjjPWI9lkdtjC4ZY9IxYW6aAABg9j1mGk2SWoobdTXF1XJUKvp7f3D0jDcuNT4K5J8Y31sMiSxBrCPUiAAAAAAAAAAAAAAAOQLrW/j8+VdKI5q2+1z1MKrxmZzfTn4hJGnUK6J2aL5M9W6O+W5KOtdI+mtsdAj0bwjpPiVPnPOJDdWpZyPBdcnKfEypjKMhP2rY8O7O5Pr9lUv+EvUVJj+CzbJ/wAHvvI0xdP3XTpbbyqIrVj3YRe/KH0k3TJM4ZelNe9PpgopEbWZ96NxO6dElGKaZBqmhj1W/wB02S2S2+KTzqCrbW1Urls3Rc9K25aqq3OQNh1xdKevmnrZqOemr2xzSbtqI5yb1wiL6vU1Fwq8hDLHKGmdM05oRhiXAY3xp8Hp7W0J0FtMQPHTVoVZaGFkjklknhje7d6XquOrVRO19aR+Xya47+qhBVBCQqZYySjxNTHG2qCNLHCVe0ACdmbIYMqgM2iJ5eiJ4JsQlJJkHmqgNTSoZMqk1mU+AAAAAAAOUkAA5AADhBBMAAOQAA5AAOWAAAAMWQABAB5AAEdUIo3iqKqghjKQzJxfLCgKQkp+GaIjnpBGPKACPzI/D7tZV1G6Bq0fEFhg6Td9aK3rRE3HI+Y0kc6RlJt6Zxx5NK6KJiWKRWXy5KrWYgKAABBA8kzNgCnSgQAAGKAB5yyRwxukkcjGMTc5yu2onuVTR3fWVst82K2Kt9U1yxrHStVd6L2yh7jjyZJVB6LQwZsj4wjZcPvVGZZCJ3NXIy+PQjopJ9I9sMc4SZK9pJGe5fepDkjd9kHl0FXO1bRU9W1jWskkjkSPbu2oqKnPOOv6kvFE9nGPbNZPKkvaAAJOQCuuk6b7qW2OTrRTIv8A+x/6JW1+wRGFwm7OZRdVUalGcCOlnrtG6N0wZKKkfaI6J9Rq6nrXzLKrsqkUqe3l+n8JGqZUWLu6LQnJ1VqO9T2yfU9PcrZRWyiq3QrdqxjIrffJHLnzLlJhzaiKruuX71T4sK1E6cFbkkqrpG9NLiUW3adwzlc8Yr7fTRs23OSpfOqZxF9iL+PaZTa2xbRDbSQ1Zr6pSGqdUOiWGKv2VvOd2VPUh7b1S9VTLSOfvj/SJwrqnXaZFntfNdYKKutOrrjXtp63y50hqnsR3pVrkX8KJ6lyo7dUqtttLp1+1w01Rp6tgTpuqI3Sq5O4bkdoRr2k7k6kH3XXXd1ey/3fT13VrJERW+iVL7bqKj/1xxtzx1pj8oPxr0Zp7Te1s25vW09JUpKisn8Vj2yseuP3xznHuJH0Qzua+qfDbr9kGUlwkmTq6WZvr6VXJirqqKw2dTl2/wCTI/t/uw16vPktulHZLY9SzShJLUAAKgAAAAAGAokrKRsqyS7GJxucucJyiq4Xe8fWr5vKgd8eXH1UOOGSMuaZJSxh7cjb6eNR5Vqp8k0hS6r8A/vdJM6fKmfHjPf1ZdLZT2EUxIkgIhOkLe9RM7PxBJZ3x6o7PZjxl04+qJF4maGtc8Rq9O/nTBUOakbYlOKlGnJ8OIqc1dGNZ5jdqKjUwvoMuopXZq2KzYhm0VqNuBJnDSRw4JJJqzGhj4v5VWghlZpUl7ZGEGVUNMKZZJHlHo1tKS3qJlbOIujpFAAGj2gDG4m+d9yFwZA8e8ZOiinDnNJnP5nQAAUAgAAYAAAgAAcgAByAAHCKGAAAoABQAAAOEAAAAAABQgAAHEAAQBmZGCLYUhSaQqNIhYkGZo0kdFFxFzKQWEAAqQAAKAzv6JFlFjO3Y9UqHjj9BI/GJq6Xsek7eQ3RVtNBJH/qcZ0yGVo64sflx4oiwdF8PaVoJr7tOhTlQmfqd5gH5OqM83fCDR+q9P0OvRZ56SmVtNFT1LmeQqxQrKiqu5z3L6FXK8+VVL1u9ztFvhqYbrS07mVKOi3ylWKKdI/Uf8AQu1C1vCdvOCUtK/Rqb+c/wBzOl6Y+j/Z5L2kxKGpobzTQpKbz5XSY5rOJfGSZD03/qaqGqRhOJi4mMeSzxo2i8KORvNO7JTgggkxOQAADVkNYw4rQqQBOEDQQ3SmW3tNH4gAefXuNO0nJPZOKvkqd72vkVcPjSF35W+QfFoAAOAJRaivLI2q7bN8XTVcNE6rjmfWxxzOWWNjPvC7Hbtjdo/U5O9vcqFdHfG8Pj+v5lCu6mYWW45d0kfG+rFy10j3P4+t5WcK41Hc9Rt0lSbqt9TK7S1M6OhqJklWP8U9rirxq8xq9yzJOu0i7F2IitP7eJfKvO7gx7qgDgOQKPvpF0bUpWm5VdoS6PnvFqrrbNKlLUtfcHeZDJ5aOarGq2N3JdlcYVe5l6M8LdD09X6urL+01Nq9c7LV4vTTXGh1TQWmyTWqOQnayNtK5r5U7/idKe3PKYGbYNQ6kmnWKnpNHRzuRj1VlTF5yOPJPKbcY6JVWc8H5dNd6cslgrJrbpG2OqKOKqfH591LnH3RXJyqU5qPZoiX9nG6Pq4SZMORe4B6QGpgpbdR3GJlJe6eKspFbWcjJFj+TG3u+v8A19cCa7RnhnrLs9cWGVSI6MmKRJHo7emFKl3AZT1NNcdNQ3LZUVFZa6qz3FirKu2RIZpWvfK1j3vc7c18L1emU+9MHoTkU7TNLr5vpPKv9N07Z3fpZ/Sjkp1Tv6sWtX2+FmkKe80l+qbXJPJSyVElT+HfVUbHRzSSPlcqO+WpjjI9nfGF5Km7Oe1Qil6PeOGG/Sk2zZrb9dVdLa6Onkqn02p7Uw4jqo5G16xr/wAdB+EhWb7FhNYk5zfW8ctT4bfGHVOqfDi56es2g5aKe+S2eo1o2mp1YtE+1wyKxqJC1U8xoq7VTJJPDJJrsRrW5/PsSkYgOySOz7pLdqOCgfcUvN3iWjqKRrGOXOtJGKiKv1KaOb/b4s7t1nVWrLbp+36guVHJcaiW3ww07XVzEn2r97ik2Rv3etEb6dwyfN0SG41C3rUIqLclqrpbUh9Nqq/yy+ZGqJLI9jEXJWFVD6S9xQ0PV2l9X3Cy2fU9ruNz1VDfYvJqJ5KqF8vJYlVrlPGStGq8lhSVvH4VCMo17kpYdZjzOhGVLhv39L8J4xm1pLhJdoWOOORPFPRDJv3BKKbXXhZXPkXdPVNrKZYlb/pvDi40c2LUWYVNe6vVllRFRG1GcFLaQPLfIqMfvO06KkbdVVvFPTvjYk9D0XbJ24WYpXx9p3nUQ5ue5f1SJJVS/wCN8KTrFNrJZe7ht2nQAAGAAA9AABAAAAFCAAAeAAADgAAOEAAAOBQAADgUAAAOEEAAAAAAAOAAAXLCBDAl6gBGKOPUKwEAKJGjGzHqLJWUqr02yVdOvk5nf4n0OjFkjPqNr+dXHJNI/4JhGIAOPNkc2zOklOWRdTdJVJpbCTpb9gMKbL9g8QTrIbHEABOGZAQZHAAgqkPPqKJ8wOkpJQaABiJq4fgP6CkLN2e/FVBIY5R6BZZnXLgHHWmAHDRfZOI8khpNfG9PlmhJLFa6l1VqqqWpirYXOiVGuaxuxOyL1MPSlTSW6xQJe7gklqSRj0lVqRZTLm4zkTNVKX0Y0qBYAAZSPEAAAUlUBXQlJo1lIQ5KQJhpYQu6lYhBBAAAEAAZAAjyUElOI5Nh9xTkZGWcXABaKYAoyAAATNAAAUIAGwAAA4FA4oYAA4AAAAAAAAAAAAoI4AIJIyAICJCAnYUgBkEABQAAAVCNASNjCcZICzlJDI2QAAz6wZJ9DHLMHqKiLAAAY9TxABTOK2qmepLWpS1LKmNYjMSqr2gBGNe2wQ1LFkrLWVNJLUIxFl2VLdT0tPHWUE1ZF8r6tSZz9yd3jNyZOkdNaP0ra6OGhbbKqTUpLI+WlpnVKMfvyfnJzv8Av1H5dpdT6jstNLJUaxtULHRPyy10dRWRrj5yyv8AuC5V8FtuV7uu63vd27U2qrja4uL9TvlrSh+bXBbfF25GY3TKh4grsLpySZtXX3TenbaKi9ai05aKRslRTQU1VSOfFH8MjJJKm2w4T5FcY+0O0xI1uV8A6q6lxkgCXi+X2+QOkxNrGT4q3T3u9Wm4f/h2r5Kds9KxHpNcNJo7OWz3C16vtlztdwjq6lKWojexkTPW5i7j6fy+CYbWt8o9LpP0RZuytpe6vvnir70b7bQVS50wgpZJ4qOZ9TIk7UR06N9LXJ6f6slyJd9l5FdnGQbNZdQaYq5qynHv/wAdKGkmnqG6k1F4W2Kj0lZLnYW0scEhubPv7vOinWuutNP8yCPo4s7nIjPKqL4/bpJ9XZT3mpKykdM3Zb2xSzRyPhRr44K2rmpL5N3q3GcP1JD2gOGOVx6Zt5dGM8aOuK/q43z++6Sge6zW2qf6cIzS3k6b28eqrfVUKqYqXHNaYseFQcYs3P3gV0j5vqzl8KdXXKk23VqUCjJe1PN8lp5VYmhpLqRKh1K/5aOi/K7ooKftBWqxtSE9yqX8QiVl+xnSMiooRaOzEqRqK5z18f8AjOkFaTjLrPjcAMvJGk6Fht3Ga2ZJABbY6AAAAAAAAAAAAAAAAAAAAAAAAAAAAOQL54A1dDUaG1a9K+vg8NZA2EAAEoAAAggkqQAAAQAAAAAAAAEoAAAQAAABAAEZCCKACaGgAAhAAAEEAQAAABAAAEEVAAgkgAGZVQvGDwJQGmhksz9LpXLJVxFYGxKRJKEfpLuUlZFN7D9zHtJ4KTF3UKqQUjqqEhJZfT2fWf6AKQykJTKJj9JdylpKyKhyqz2gALLCBwyAAeYAAPMAAGkpLyj4mGZTCaW0V1FIgLJGNbD+iOkDSRjJu2BAAjhAAAEAAAQAABkIKg+Y3FGzL7Ou/BHxEhiTT2lprT4p0dpuWlbJUWyv+4VMNNNUMa3eujJZHwqjG7dmfdoqP4D2ycHy7V/0cfrvx61xRN8K1aHjlOa1A1M+uMrq7CUcrLbRzuH6fqNZJt1mKLdj1mMdPIzFy/OPDk0W0nnI1KdBQJ7CAAAAAAAAAAAAAAAAAAAAA/UJKvdCAAEI5iO2pkiVlY+b64R2TlxYDvukOrdKXC36Y1YO3+2VVzNOUbVqr7F23arFiqkrq1FUiYyPcmFr/Jxql+RaZJ9hkkpAAMK4JR5QHZlS0qYjywZdR2CskrZpapxzfX7/iKVlF4h1+lNQzV73atdM6pbCKlx4JEtKEXUAqLLREO5T0h7qfJ5Ae0PBfU8F9RcfJIexzHqrv04xrfKtepqmulJQ0j9d0lGzXklJ91Wvu9K1KOlgklrJ3VD9qqkJHlQyO5t3o7rKgCy5X3q7VTfKHR8tTDayeYx1WJ3LNpXaGkKigHo1YIBdIu8YHZyq2RKzagYNvl0c6oq06XqjqLdUU1E6Ol8tGGITkFe5qCkqtqJI1hMGdO2q26/zqDyI1JaNvPW8TA3bJnzN7E3QnEsJr7fL0Y7aeSzacauvVkzYAJSsAAYhkAIgAAAAAHAWjNi7BjJ9YMhXYxmgpNkSEJeRJGAAEXsjyAAaAAAIAABoAAAADAAAOEAEgAAAAIAAAAGQAABAAAB8JYzNiO5sDGCzHZyACgAFBAEdGWZPklUJeRJGAAEXsjyAAA4AAAAAAFYLqVBRFiBAAHlAAHmnfHrP7wBqJZEzsKhYAAIvZDxwAAjIAAlAAK9HAAB//9k=" 
                    alt="Psicóloga realizando terapia infantil com blocos coloridos"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Conteúdo */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-serif text-3xl font-bold text-foreground">
                    Acompanhamento Psicopedagógico Integrado
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Escola e Família de Mãos Dadas para o desenvolvimento completo da criança
                  </p>
                </div>

                {/* Cards com ícones */}
                <div className="grid gap-6">
                  
                  {/* Comunicação Integrada */}
                  <Card className="border-0 shadow-md bg-white/80">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <School className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">Comunicação Integrada com a Escola</h4>
                          <p className="text-sm text-muted-foreground">
                            Canal dedicado e criptografado para intercâmbio eficiente com educadores
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                              <Target className="w-3 h-3 mr-1" />
                              Monitoramento contínuo
                            </span>
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                              <UserCheck className="w-3 h-3 mr-1" />
                              Estratégias alinhadas
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Prontuário Eletrônico */}
                  <Card className="border-0 shadow-md bg-white/80">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <FileText className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">Prontuário Eletrônico Avançado</h4>
                          <p className="text-sm text-muted-foreground">
                            Registros seguros com tecnologia de proteção de dados
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-800">
                              <Clock className="w-3 h-3 mr-1" />
                              Acesso rápido
                            </span>
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">
                              <Lock className="w-3 h-3 mr-1" />
                              LGPD Compliant
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Benefícios */}
                  <Card className="border-0 shadow-md bg-white/80">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Home className="w-6 h-6 text-orange-600" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">Benefícios para Criança e Família</h4>
                          <p className="text-sm text-muted-foreground">
                            Intervenções assertivas com panorama completo do desenvolvimento
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                              <Star className="w-3 h-3 mr-1" />
                              Resultados rápidos
                            </span>
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-indigo-100 text-indigo-800">
                              <Heart className="w-3 h-3 mr-1" />
                              Tranquilidade
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                </div>

                <div className="pt-4">
                  <Button 
                    onClick={() => scrollToSection('contato')}
                    className="btn-primary text-white px-8 py-3 rounded-full text-lg"
                  >
                    Saiba Mais Sobre Nossos Serviços
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vídeos Section */}
      <section id="videos" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-serif text-4xl font-bold text-foreground">
                Vídeos
              </h2>
              <p className="text-xl text-muted-foreground">
                Veja como desenvolvemos um ambiente acolhedor e especializado para cada tipo de atendimento
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vídeo 1 - Terapia Infantil */}
              <Card className="card-hover border-0 shadow-lg bg-white overflow-hidden">
                <div className="relative">
                  <video 
                    className="w-full aspect-video object-cover"
                    controls
                    poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDY0MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJiZyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzY2NjZmMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2Y5OGE5YSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSI2NDAiIGhlaWdodD0iMzYwIiBmaWxsPSJ1cmwoI2JnKSIvPjxjaXJjbGUgY3g9IjMyMCIgY3k9IjE0MCIgcj0iNDAiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjkiLz48cGF0aCBkPSJtMzMwIDEzMCAyMCAxMC0yMCAxMHYtMjBaIiBmaWxsPSIjNjY2NmYxIi8+PHRleHQgeD0iMzIwIiB5PSIyMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSI2MDAiPlRlcmFwaWEgSW5mYW50aWwgRXNwZWNpYWxpemFkYTwvdGV4dD48dGV4dCB4PSIzMjAiIHk9IjIyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgb3BhY2l0eT0iMC44Ij5BbWJpZW50ZSBsw7pkaWNvIGUgYWNvbGhlZG9yPC90ZXh0Pjx0ZXh0IHg9IjMyMCIgeT0iMjQ1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBvcGFjaXR5PSIwLjciPkNsaXF1ZSBwYXJhIGFzc2lzdGlyPC90ZXh0PjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iI2ZmYzEwNyIgb3BhY2l0eT0iMC44Ii8+PHRleHQgeD0iODAiIHk9IjczIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMzMzIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZvbnQtd2VpZ2h0PSI2MDAiPkzDmmRJQ088L3RleHQ+PHJlY3QgeD0iNTMwIiB5PSI1MCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzM0ZDE5OSIgb3BhY2l0eT0iMC44Ii8+PHRleHQgeD0iNTYwIiB5PSI3MyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMCIgZm9udC13ZWlnaHQ9IjYwMCI+QUZFVElWTzwvdGV4dD48Y2lyY2xlIGN4PSIxMDAiIGN5PSIzMDAiIHI9IjI1IiBmaWxsPSIjZmY2ZGI2IiBvcGFjaXR5PSIwLjYiLz48cGF0aCBkPSJNOTAgMzAwIGgxNSBtLTcuNSAtNyB2MTQiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjxjaXJjbGUgY3g9IjU0MCIgY3k9IjMwMCIgcj0iMjUiIGZpbGw9IiM4NzhmZjEiIG9wYWNpdHk9IjAuNiIvPjxwYXRoIGQ9Ik01MzAgMzAwIGgxNSBtLTcuNSAtNyB2MTQiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg=="
                  >
                    <source src={terapiaInfantilVideo} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Terapia Infantil Especializada</h3>
                  <p className="text-muted-foreground">
                    Através de técnicas lúdicas e adaptadas para cada faixa etária, ajudo crianças a desenvolverem habilidades emocionais e sociais.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Ambiente acolhedor</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Técnicas lúdicas</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vídeo 2 - Foco na Ajuda e no Aprendizado */}
              <Card className="card-hover border-0 shadow-lg bg-white overflow-hidden">
                <div className="relative">
                  <video 
                    className="w-full aspect-video object-cover"
                    controls
                    poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDY0MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJiZzIiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzNGQzOTkiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmOGJiZDAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNjQwIiBoZWlnaHQ9IjM2MCIgZmlsbD0idXJsKCNiZzIpIi8+PGNpcmNsZSBjeD0iMzIwIiBjeT0iMTQwIiByPSI0MCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOSIvPjxwYXRoIGQ9Im0zMzAgMTMwIDIwIDEwLTIwIDEwdi0yMFoiIGZpbGw9IiMzNGQzOTkiLz48dGV4dCB4PSIzMjAiIHk9IjIwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9IjYwMCI+Rm9jbyBuYSBBanVkYSBlIG5vIEFwcmVuZGl6YWRvPC90ZXh0Pjx0ZXh0IHg9IjMyMCIgeT0iMjI1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBvcGFjaXR5PSIwLjgiPkFwb2lvIGUgb3JpZW50YcOnw6NvIG5vIGRlc2Vudm9sdmltZW50bzwvdGV4dD48dGV4dCB4PSIzMjAiIHk9IjI0NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgb3BhY2l0eT0iMC43Ij5DbGlxdWUgcGFyYSBhc3Npc3RpcjwvdGV4dD48cmVjdCB4PSI1MCIgeT0iNTAiIHdpZHRoPSI3MCIgaGVpZ2h0PSI0MCIgcng9IjgiIGZpbGw9IiNmZjY2NGQiIG9wYWNpdHk9IjAuOCIvPjx0ZXh0IHg9Ijg1IiB5PSI3MyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMCIgZm9udC13ZWlnaHQ9IjYwMCI+T1JJRU5UQcOHw4NPPC90ZXh0PjxyZWN0IHg9IjUyMCIgeT0iNTAiIHdpZHRoPSI3MCIgaGVpZ2h0PSI0MCIgcng9IjgiIGZpbGw9IiM4NzhmZjEiIG9wYWNpdHk9IjAuOCIvPjx0ZXh0IHg9IjU1NSIgeT0iNzMiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZvbnQtd2VpZ2h0PSI2MDAiPkFQUkVORElaQURPPC90ZXh0PjxjaXJjbGUgY3g9IjEyMCIgY3k9IjI4MCIgcj0iMzAiIGZpbGw9IiNmZjY2NGQiIG9wYWNpdHk9IjAuNiIvPjxwYXRoIGQ9Ik0xMDUgMjgwIGgyNSBtLTEyLjUgLTEwIHYyMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIi8+PGNpcmNsZSBjeD0iNTIwIiBjeT0iMjgwIiByPSIzMCIgZmlsbD0iIzM0ZDM5OSIgb3BhY2l0eT0iMC42Ii8+PHBhdGggZD0ibTUwNSAyNzAgMTAgMTAtMTAgMTAgbTE1IC0xMCBoLTE1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiLz48L3N2Zz4="
                  >
                    <source src={consultorioVideo} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Foco na Ajuda e no Aprendizado</h3>
                  <p className="text-muted-foreground">
                    O aprendizado pode ser divertido e acolhedor, acompanhado com momento de apoio e orientação, onde o incentivo faz toda a diferença no desenvolvimento de uma criança.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Foco na Orientação</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Descoberta</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Guia Gratuito Section */}
      <section id="guia" className="section-padding hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl bg-white">
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
                      onClick={() => {
                        // Criar um link temporário para download
                        const link = document.createElement('a')
                        link.href = '/src/assets/Guia Rápido_ Foco na Ajuda e no Aprendizado para Pais.pdf'
                        link.download = 'Guia_Foco_na_Ajuda_e_Aprendizado_para_Pais.pdf'
                        link.target = '_blank'
                        document.body.appendChild(link)
                        link.click()
                        document.body.removeChild(link)
                      }}
                      className="btn-primary text-white px-8 py-3 rounded-full text-lg w-full md:w-auto"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Baixar Guia Gratuito
                    </Button>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 shadow-lg">
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
                    onClick={abrirAgendamento}
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