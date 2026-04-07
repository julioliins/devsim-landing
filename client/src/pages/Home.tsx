import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code2, Users, Zap, Shield, BookOpen, Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
              &lt;/&gt;
            </div>
            <span className="font-bold text-lg text-foreground">DevSim Studios</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition">Sobre</a>
            <a href="#product" className="text-sm text-muted-foreground hover:text-foreground transition">Produto</a>
            <a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition">Benefícios</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition">Contato</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">Comece Grátis</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full">
              <span className="text-sm font-medium text-primary">🚀 Educação em Tecnologia</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Transforme Teoria em Prática com Simuladores Reais
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Pratique desenvolvimento de software em ambientes seguros e realistas. Aprenda fazendo, erre sem medo, cresça com confiança.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Comece a Praticar Gratuitamente
              </Button>
              <Button size="lg" variant="outline">
                Solicite uma Demonstração
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Quem Somos</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Fundada em 2026, a DevSim Studios resolve um problema real: a lacuna entre teoria e prática em educação técnica.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Estudantes e profissionais em formação enfrentam dificuldades para desenvolver competências práticas. O ensino ainda é fortemente teórico e não oferece ambientes seguros para experimentação.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A DevSim Studios surge como resposta: criamos simuladores virtuais web-based, acessíveis e focados em cenários reais de desenvolvimento de software.
                </p>
                <div className="space-y-3 pt-4">
                  <div className="flex gap-3">
                    <div className="w-1 bg-primary rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Missão</h4>
                      <p className="text-sm text-muted-foreground">Democratizar o acesso a ambientes de prática profissional seguros e realistas.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1 bg-primary rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Visão</h4>
                      <p className="text-sm text-muted-foreground">Ser a plataforma educacional de referência para simulação em desenvolvimento de software.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-8 space-y-6">
                <h3 className="text-xl font-bold text-foreground">Nossa Equipe</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">Alexandre Fernandes</h4>
                    <p className="text-sm text-muted-foreground">CEO & Estratégia</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Carlos Eduardo</h4>
                    <p className="text-sm text-muted-foreground">CTO & Desenvolvimento</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Julio Lins</h4>
                    <p className="text-sm text-muted-foreground">COO & Operações</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-20 md:py-32 bg-card/50">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">DevSim: Simuladores para Desenvolvimento</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Pratique o ciclo completo de desenvolvimento em ambientes realistas, com feedback imediato e repetição ilimitada.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border border-border hover:border-primary/50 transition">
                <Code2 className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Cenários Realistas</h3>
                <p className="text-sm text-muted-foreground">Ambientes que reproduzem situações autênticas de desenvolvimento, com requisitos, restrições e objetivos claros.</p>
              </Card>
              <Card className="p-6 border border-border hover:border-primary/50 transition">
                <Zap className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Feedback Inteligente</h3>
                <p className="text-sm text-muted-foreground">Receba feedback em tempo real sobre decisões técnicas, qualidade de código e conformidade com requisitos.</p>
              </Card>
              <Card className="p-6 border border-border hover:border-primary/50 transition">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Colaboração em Equipe</h3>
                <p className="text-sm text-muted-foreground">Trabalhe com outros usuários em simuladores colaborativos que reproduzem dinâmicas reais de equipes.</p>
              </Card>
              <Card className="p-6 border border-border hover:border-primary/50 transition">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Ambiente Seguro</h3>
                <p className="text-sm text-muted-foreground">Cometer erros sem consequências reais. Praticar quantas vezes forem necessárias para dominar.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-20 md:py-32">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Comece em 3 Passos</h2>
              <p className="text-muted-foreground text-lg">Simples, rápido e intuitivo.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto">1</div>
                <h3 className="font-semibold text-foreground">Criar Conta</h3>
                <p className="text-sm text-muted-foreground">Acesse e crie sua conta em menos de 1 minuto. Use seu e-mail institucional para acesso simplificado.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto">2</div>
                <h3 className="font-semibold text-foreground">Escolher Simulador</h3>
                <p className="text-sm text-muted-foreground">Navegue pela biblioteca de simuladores. Cada um inclui descrição, dificuldade e competências.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto">3</div>
                <h3 className="font-semibold text-foreground">Começar a Praticar</h3>
                <p className="text-sm text-muted-foreground">Entre no simulador, receba os requisitos e comece a trabalhar com todas as ferramentas necessárias.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 md:py-32 bg-card/50">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Benefícios para Cada Público</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 border border-border">
                <BookOpen className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-4">Para Estudantes</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Prática segura sem consequências reais</li>
                  <li>✓ Aprendizado acelerado com feedback imediato</li>
                  <li>✓ Portfólio real para impressionar empregadores</li>
                  <li>✓ Ingressar no mercado com confiança</li>
                </ul>
              </Card>
              <Card className="p-8 border border-border">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-4">Para Educadores</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Ferramenta pedagógica comprovada</li>
                  <li>✓ Flexibilidade na integração curricular</li>
                  <li>✓ Dashboard para acompanhar alunos</li>
                  <li>✓ Cenários customizáveis</li>
                </ul>
              </Card>
              <Card className="p-8 border border-border">
                <Rocket className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-4">Para Empresas</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Treinamento eficiente de equipes</li>
                  <li>✓ Redução de riscos em produção</li>
                  <li>✓ Escalabilidade para múltiplos times</li>
                  <li>✓ ROI comprovado</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32">
        <div className="container max-w-2xl">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Entre em Contato</h2>
              <p className="text-muted-foreground text-lg">Tire suas dúvidas ou solicite uma demonstração.</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Nome Completo</label>
                <input type="text" placeholder="Seu nome" className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">E-mail</label>
                <input type="email" placeholder="seu@email.com" className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Tipo de Usuário</label>
                <select className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Selecione uma opção</option>
                  <option>Estudante</option>
                  <option>Educador</option>
                  <option>Empresa</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Mensagem</label>
                <textarea placeholder="Sua mensagem..." rows={4} className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Enviar Mensagem</Button>
            </div>
            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Contato Direto</h4>
                <p className="text-muted-foreground text-sm">contato@devsimstudios.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Redes Sociais</h4>
                <div className="flex gap-4">
                  <a href="#" className="text-primary hover:text-primary/80 text-sm">LinkedIn</a>
                  <a href="#" className="text-primary hover:text-primary/80 text-sm">Instagram</a>
                  <a href="#" className="text-primary hover:text-primary/80 text-sm">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">DevSim Studios</h4>
              <p className="text-sm text-muted-foreground">Transformando teoria em prática através de simuladores educacionais.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-foreground transition">Sobre</a></li>
                <li><a href="#product" className="hover:text-foreground transition">Produto</a></li>
                <li><a href="#benefits" className="hover:text-foreground transition">Benefícios</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Termos de Serviço</a></li>
                <li><a href="#" className="hover:text-foreground transition">Privacidade</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contato</h4>
              <p className="text-sm text-muted-foreground">contato@devsimstudios.com</p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 DevSim Studios. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
