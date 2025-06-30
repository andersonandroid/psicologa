import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Calendar, 
  Clock, 
  CreditCard, 
  CheckCircle, 
  User, 
  Phone, 
  Mail, 
  MessageSquare,
  ArrowRight,
  Shield,
  Star,
  Heart
} from 'lucide-react'

const AgendamentoOnline = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipoConsulta: '',
    observacoes: ''
  })

  // Horários disponíveis por dia da semana
  const horariosDisponiveis = {
    'segunda': ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'],
    'terca': ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'],
    'quarta': ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
    'quinta': ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'],
    'sexta': ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
    'sabado': ['09:00', '10:00', '11:00']
  }

  // Gerar próximos 30 dias úteis
  const gerarDatasDisponiveis = () => {
    const datas = []
    const hoje = new Date()
    let contador = 0
    let diasAdicionados = 0

    while (diasAdicionados < 30) {
      const data = new Date(hoje)
      data.setDate(hoje.getDate() + contador)
      
      const diaSemana = data.getDay()
      // 1-6 = Segunda a Sábado (excluir domingo = 0)
      if (diaSemana >= 1 && diaSemana <= 6) {
        const nomeDia = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'][diaSemana]
        datas.push({
          data: data,
          diaSemana: nomeDia,
          formatada: data.toLocaleDateString('pt-BR', { 
            weekday: 'short', 
            day: '2-digit', 
            month: 'short' 
          })
        })
        diasAdicionados++
      }
      contador++
    }
    return datas
  }

  const datasDisponiveis = gerarDatasDisponiveis()

  const tiposConsulta = [
    {
      id: 'primeira-consulta',
      nome: 'Primeira Consulta',
      duracao: '60 min',
      valor: 'R$ 150',
      descricao: 'Avaliação inicial completa',
      destaque: true
    },
    {
      id: 'consulta-individual',
      nome: 'Terapia Individual',
      duracao: '50 min',
      valor: 'R$ 180',
      descricao: 'Sessão de terapia individual'
    },
    {
      id: 'terapia-casal',
      nome: 'Terapia de Casal',
      duracao: '60 min',
      valor: 'R$ 220',
      descricao: 'Sessão para casais'
    },
    {
      id: 'terapia-infantil',
      nome: 'Terapia Infantil',
      duracao: '45 min',
      valor: 'R$ 160',
      descricao: 'Atendimento especializado para crianças'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleDateSelect = (dataObj) => {
    setSelectedDate(dataObj)
    setSelectedTime(null)
  }

  const handleTimeSelect = (horario) => {
    setSelectedTime(horario)
  }

  const handleTipoConsultaSelect = (tipo) => {
    setFormData(prev => ({
      ...prev,
      tipoConsulta: tipo
    }))
  }

  const nextStep = () => {
    setCurrentStep(prev => prev + 1)
  }

  const prevStep = () => {
    setCurrentStep(prev => prev - 1)
  }

  const finalizarAgendamento = () => {
    // Aqui seria integrado com sistema de pagamento
    const dadosAgendamento = {
      ...formData,
      data: selectedDate?.data,
      horario: selectedTime,
      tipoConsulta: tiposConsulta.find(t => t.id === formData.tipoConsulta)
    }
    
    console.log('Agendamento finalizado:', dadosAgendamento)
    
    // Simular sucesso
    setCurrentStep(5)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header com Progresso */}
      <div className="text-center space-y-4">
        <h2 className="font-serif text-3xl font-bold text-foreground">
          Agendamento Online
        </h2>
        <p className="text-muted-foreground">
          Agende sua consulta de forma rápida e segura
        </p>
        
        {/* Indicador de Progresso */}
        <div className="flex items-center justify-center space-x-4 mt-6">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                currentStep >= step 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 text-gray-500'
              }`}>
                {currentStep > step ? <CheckCircle className="w-4 h-4" /> : step}
              </div>
              {step < 4 && (
                <div className={`w-12 h-1 mx-2 ${
                  currentStep > step ? 'bg-primary' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
        
        <div className="text-sm text-muted-foreground">
          {currentStep === 1 && "Escolha o tipo de consulta"}
          {currentStep === 2 && "Selecione data e horário"}
          {currentStep === 3 && "Preencha seus dados"}
          {currentStep === 4 && "Confirme e finalize"}
          {currentStep === 5 && "Agendamento confirmado!"}
        </div>
      </div>

      {/* Conteúdo por Etapa */}
      <Card className="border-0 shadow-xl">
        <CardContent className="p-8">
          {/* Etapa 1: Tipo de Consulta */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="font-serif text-xl font-semibold">Escolha o Tipo de Consulta</h3>
                <p className="text-muted-foreground">Selecione a modalidade que melhor atende suas necessidades</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {tiposConsulta.map((tipo) => (
                  <Card 
                    key={tipo.id}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      formData.tipoConsulta === tipo.id 
                        ? 'ring-2 ring-primary bg-primary/5' 
                        : 'hover:bg-gray-50'
                    } ${tipo.destaque ? 'border-primary' : ''}`}
                    onClick={() => handleTipoConsultaSelect(tipo.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold text-foreground">{tipo.nome}</h4>
                        {tipo.destaque && (
                          <Badge className="bg-accent text-accent-foreground">Recomendado</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{tipo.descricao}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{tipo.duracao}</span>
                        </div>
                        <div className="text-lg font-bold text-primary">{tipo.valor}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-end">
                <Button 
                  onClick={nextStep}
                  disabled={!formData.tipoConsulta}
                  className="btn-primary text-white px-8 py-2 rounded-full"
                >
                  Continuar <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Etapa 2: Data e Horário */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="font-serif text-xl font-semibold">Selecione Data e Horário</h3>
                <p className="text-muted-foreground">Escolha o melhor dia e horário para sua consulta</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Calendário de Datas */}
                <div>
                  <h4 className="font-medium mb-4 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Datas Disponíveis
                  </h4>
                  <div className="grid grid-cols-2 gap-2 max-h-80 overflow-y-auto">
                    {datasDisponiveis.map((dataObj, index) => (
                      <Button
                        key={index}
                        variant={selectedDate?.data.getTime() === dataObj.data.getTime() ? "default" : "outline"}
                        className={`p-3 h-auto flex flex-col items-center ${
                          selectedDate?.data.getTime() === dataObj.data.getTime() 
                            ? 'bg-primary text-white' 
                            : 'hover:bg-primary/10'
                        }`}
                        onClick={() => handleDateSelect(dataObj)}
                      >
                        <span className="text-xs opacity-75 capitalize">{dataObj.formatada.split(',')[0]}</span>
                        <span className="font-medium">{dataObj.formatada.split(',')[1]}</span>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Horários Disponíveis */}
                <div>
                  <h4 className="font-medium mb-4 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Horários Disponíveis
                  </h4>
                  {selectedDate ? (
                    <div className="grid grid-cols-3 gap-2">
                      {horariosDisponiveis[selectedDate.diaSemana]?.map((horario) => (
                        <Button
                          key={horario}
                          variant={selectedTime === horario ? "default" : "outline"}
                          className={`p-2 ${
                            selectedTime === horario 
                              ? 'bg-primary text-white' 
                              : 'hover:bg-primary/10'
                          }`}
                          onClick={() => handleTimeSelect(horario)}
                        >
                          {horario}
                        </Button>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <Clock className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p>Selecione uma data para ver os horários disponíveis</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-between">
                <Button 
                  onClick={prevStep}
                  variant="outline"
                  className="px-8 py-2 rounded-full"
                >
                  Voltar
                </Button>
                <Button 
                  onClick={nextStep}
                  disabled={!selectedDate || !selectedTime}
                  className="btn-primary text-white px-8 py-2 rounded-full"
                >
                  Continuar <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Etapa 3: Dados Pessoais */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="font-serif text-xl font-semibold">Seus Dados</h3>
                <p className="text-muted-foreground">Preencha suas informações para confirmar o agendamento</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Nome Completo *
                  </label>
                  <Input
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Telefone *
                  </label>
                  <Input
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    placeholder="(11) 99999-9999"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    E-mail *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Observações (opcional)
                  </label>
                  <Textarea
                    name="observacoes"
                    value={formData.observacoes}
                    onChange={handleInputChange}
                    placeholder="Conte-me um pouco sobre o que você gostaria de trabalhar..."
                    rows={3}
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <Button 
                  onClick={prevStep}
                  variant="outline"
                  className="px-8 py-2 rounded-full"
                >
                  Voltar
                </Button>
                <Button 
                  onClick={nextStep}
                  disabled={!formData.nome || !formData.email || !formData.telefone}
                  className="btn-primary text-white px-8 py-2 rounded-full"
                >
                  Continuar <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Etapa 4: Confirmação e Pagamento */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="font-serif text-xl font-semibold">Confirme seu Agendamento</h3>
                <p className="text-muted-foreground">Revise os dados e finalize seu agendamento</p>
              </div>

              {/* Resumo do Agendamento */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                    Resumo do Agendamento
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Tipo de Consulta</p>
                      <p className="font-medium">{tiposConsulta.find(t => t.id === formData.tipoConsulta)?.nome}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Valor</p>
                      <p className="font-medium text-primary">{tiposConsulta.find(t => t.id === formData.tipoConsulta)?.valor}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Data</p>
                      <p className="font-medium">{selectedDate?.data.toLocaleDateString('pt-BR', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Horário</p>
                      <p className="font-medium">{selectedTime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Nome</p>
                      <p className="font-medium">{formData.nome}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Contato</p>
                      <p className="font-medium">{formData.telefone}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Opções de Pagamento */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Formas de Pagamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="pix" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="pix">PIX</TabsTrigger>
                      <TabsTrigger value="cartao">Cartão</TabsTrigger>
                      <TabsTrigger value="presencial">Presencial</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="pix" className="space-y-4">
                      <div className="text-center py-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                          <CreditCard className="w-8 h-8 text-primary" />
                        </div>
                        <h4 className="font-medium mb-2">Pagamento via PIX</h4>
                        <p className="text-sm text-muted-foreground">
                          Após confirmar, você receberá o QR Code para pagamento instantâneo
                        </p>
                        <Badge className="mt-2 bg-green-100 text-green-800">Desconto de 5%</Badge>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="cartao" className="space-y-4">
                      <div className="text-center py-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                          <CreditCard className="w-8 h-8 text-primary" />
                        </div>
                        <h4 className="font-medium mb-2">Cartão de Crédito/Débito</h4>
                        <p className="text-sm text-muted-foreground">
                          Pagamento seguro processado pela nossa plataforma
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Parcelamento em até 3x sem juros
                        </p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="presencial" className="space-y-4">
                      <div className="text-center py-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Heart className="w-8 h-8 text-primary" />
                        </div>
                        <h4 className="font-medium mb-2">Pagamento Presencial</h4>
                        <p className="text-sm text-muted-foreground">
                          Pague diretamente no consultório (dinheiro, cartão ou PIX)
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Agendamento será confirmado por WhatsApp
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Política e Termos */}
              <div className="bg-gray-50 rounded-lg p-4 text-sm text-muted-foreground">
                <div className="flex items-start space-x-2">
                  <Shield className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground mb-1">Política de Cancelamento</p>
                    <p>Cancelamentos podem ser feitos até 24h antes da consulta sem cobrança. 
                    Cancelamentos com menos de 24h terão cobrança de 50% do valor.</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Button 
                  onClick={prevStep}
                  variant="outline"
                  className="px-8 py-2 rounded-full"
                >
                  Voltar
                </Button>
                <Button 
                  onClick={finalizarAgendamento}
                  className="btn-primary text-white px-8 py-2 rounded-full"
                >
                  Confirmar Agendamento <CheckCircle className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Etapa 5: Sucesso */}
          {currentStep === 5 && (
            <div className="text-center space-y-6 py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Agendamento Confirmado!
                </h3>
                <p className="text-muted-foreground">
                  Seu agendamento foi realizado com sucesso. Você receberá uma confirmação por e-mail e WhatsApp.
                </p>
              </div>

              <Card className="bg-primary/5 border-primary/20 max-w-md mx-auto">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Próximos Passos:</h4>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Confirmação será enviada por e-mail</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Lembrete 24h antes da consulta</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Link para consulta online (se aplicável)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                  className="btn-primary text-white px-6 py-2 rounded-full"
                >
                  Falar no WhatsApp
                </Button>
                <Button 
                  onClick={() => setCurrentStep(1)}
                  variant="outline"
                  className="px-6 py-2 rounded-full"
                >
                  Novo Agendamento
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Informações Adicionais */}
      {currentStep < 5 && (
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Seguro e Confiável</h4>
              <p className="text-sm text-muted-foreground">
                Seus dados são protegidos e o pagamento é processado com segurança
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Flexibilidade</h4>
              <p className="text-sm text-muted-foreground">
                Reagende ou cancele até 24h antes sem cobrança adicional
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Atendimento Especializado</h4>
              <p className="text-sm text-muted-foreground">
                Mais de 8 anos de experiência em terapia cognitivo-comportamental
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

export default AgendamentoOnline