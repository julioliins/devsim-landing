# DevSim Studios - Landing Page

**Etapa 4 - Projeto UniPiaget**

Landing page profissional para a DevSim Studios, uma plataforma educacional de simuladores para desenvolvimento de software.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🎯 Sobre o Projeto

A **DevSim Studios** resolve um problema real na educação técnica: a lacuna entre teoria e prática. Nossa plataforma oferece simuladores virtuais web-based, acessíveis e focados em cenários reais de desenvolvimento de software.

Esta Landing Page apresenta:
- ✅ Identidade visual profissional
- ✅ Seções de apresentação (Quem Somos, Produto, Benefícios)
- ✅ Formulário de contato funcional
- ✅ Design totalmente responsivo
- ✅ Performance otimizada

---

## 🚀 Quick Start

### Pré-requisitos
- Node.js 18+
- pnpm (recomendado) ou npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/julioliins/devsim-studios-landing-page.git
cd devsim-studios-landing-page

# Instale as dependências
pnpm install
# ou
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
pnpm dev
# ou
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

### Build para Produção

```bash
# Gere o build otimizado
pnpm build
# ou
npm run build

# Visualize o build localmente
pnpm preview
# ou
npm run preview
```

---

## 📁 Estrutura do Projeto

```
startup_landing_page/
├── client/
│   ├── public/              # Arquivos estáticos
│   ├── src/
│   │   ├── pages/          # Páginas (Home, NotFound)
│   │   ├── components/     # Componentes reutilizáveis (shadcn/ui)
│   │   ├── contexts/       # Contextos React (Theme)
│   │   ├── hooks/          # Custom hooks
│   │   ├── lib/            # Utilitários
│   │   ├── App.tsx         # Componente raiz
│   │   ├── main.tsx        # Entrada React
│   │   └── index.css       # Estilos globais (Tailwind)
│   └── index.html          # HTML principal
├── server/                  # Backend Express (opcional)
├── shared/                  # Código compartilhado
├── vite.config.ts          # Configuração Vite
├── package.json            # Dependências
├── tsconfig.json           # Configuração TypeScript
└── README.md               # Este arquivo
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **React** | 19 | Framework UI |
| **Tailwind CSS** | 4 | Estilização utilitária |
| **Vite** | 7 | Build tool e dev server |
| **TypeScript** | 5.6 | Type safety |
| **shadcn/ui** | Latest | Componentes prontos |
| **Wouter** | 3.3 | Roteamento leve |
| **Lucide React** | 0.453 | Ícones |
| **Express** | 4.21 | Backend (opcional) |

---

## 📄 Seções da Landing Page

### 1. **Header**
- Logo e nome da empresa
- Navegação com links internos
- Botão CTA "Comece Grátis"

### 2. **Hero Section**
- Headline impactante
- Subtítulo descritivo
- Dois CTAs principais

### 3. **Quem Somos**
- História da empresa
- Missão e Visão
- Apresentação da equipe

### 4. **Produto**
- 4 funcionalidades principais
- Ícones descritivos
- Descrições concisas

### 5. **Como Usar**
- 3 passos simples
- Numeração visual
- Instruções claras

### 6. **Benefícios**
- Benefícios para estudantes
- Benefícios para educadores
- Benefícios para empresas

### 7. **Contato**
- Formulário de contato
- Informações de contato direto
- Links para redes sociais

### 8. **Footer**
- Links rápidos
- Informações legais
- Copyright

---

## 🎨 Design & Styling

- **Framework CSS:** Tailwind CSS 4
- **Componentes:** shadcn/ui
- **Tema:** Light (padrão)
- **Cores Principais:**
  - Primary: `#2563eb` (Azul)
  - Background: `#ffffff` (Branco)
  - Foreground: `#1e293b` (Cinza escuro)

### Customização de Cores

Edite `client/src/index.css` na seção `:root`:

```css
:root {
  --primary: #2563eb;
  --background: #ffffff;
  --foreground: #1e293b;
  /* ... mais cores */
}
```

---

## 📱 Responsividade

O projeto é totalmente responsivo:

| Breakpoint | Tamanho |
|-----------|--------|
| Mobile | 320px - 767px |
| Tablet | 768px - 1023px |
| Desktop | 1024px+ |

Testado em:
- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge

---

## 🚀 Deploy

### Opção 1: Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Opção 2: Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist/public
```

### Opção 3: Railway

1. Conecte seu repositório GitHub
2. Railway detectará automaticamente e fará o deploy

### Opção 4: Render

1. Conecte seu repositório
2. Configure build command: `pnpm build`
3. Configure publish directory: `dist/public`

### Opção 5: AWS Amplify

1. Conecte seu repositório GitHub
2. Amplify fará o build e deploy automaticamente

### Opção 6: Servidor Próprio

```bash
# Build
pnpm build

# Copie dist/public para seu servidor
# Configure nginx/apache como reverse proxy
```

---

## 📊 Performance

- **Build Size:** ~50KB (gzipped)
- **Lighthouse Score:** 95+
- **First Contentful Paint:** <1s
- **Largest Contentful Paint:** <2s

---

## 🔧 Scripts Disponíveis

```bash
pnpm dev          # Inicia servidor de desenvolvimento
pnpm build        # Build para produção
pnpm start        # Executa servidor de produção
pnpm preview      # Preview do build
pnpm check        # Verifica tipos TypeScript
pnpm format       # Formata código com Prettier
```

---

## 🐛 Troubleshooting

### Erro: "Cannot find module"
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Porta 3000 já está em uso
```bash
pnpm dev -- --port 3001
```

### Build falha
```bash
pnpm check  # Verifica tipos TypeScript
```

---

## 📝 Conteúdo

### Missão
Democratizar o acesso a ambientes de prática profissional seguros e realistas.

### Visão
Ser a plataforma educacional de referência para simulação em desenvolvimento de software.

### Valores
- Acessibilidade
- Qualidade
- Inovação
- Impacto Social

---

## 👥 Equipe

| Nome | Cargo |
|------|-------|
| Alexandre Fernandes | CEO & Estratégia |
| Carlos Eduardo | CTO & Desenvolvimento |
| Julio Lins | COO & Operações |

---

## 📞 Contato

- **Email:** contato@devsimstudios.com
- **Website:** [devsimstudios.com](https://devsimstudios.com)
- **LinkedIn:** [DevSim Studios](https://linkedin.com)
- **GitHub:** [DevSim Studios](https://github.com/julioliins)

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📚 Recursos Úteis

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)
- [shadcn/ui Components](https://ui.shadcn.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 🎓 Projeto Acadêmico

Este projeto foi desenvolvido como parte da **Etapa 4 - Desenvolvimento de Sistemas** do programa de **Engenharia e Modelagem de Software** da **Universidade Piaget**.

---

## 📅 Histórico de Versões

### v1.0.0 (Abril 2026)
- ✅ Landing page completa
- ✅ Design responsivo
- ✅ Formulário de contato
- ✅ Otimizado para produção

---

## ✅ Checklist de Implantação

- [ ] Projeto clonado e dependências instaladas
- [ ] Testado localmente (`pnpm dev`)
- [ ] Build gerado com sucesso (`pnpm build`)
- [ ] Domínio configurado
- [ ] SSL/HTTPS ativado
- [ ] Variáveis de ambiente configuradas
- [ ] Deploy realizado
- [ ] Site acessível em produção
- [ ] Redes sociais linkadas
- [ ] Formulário de contato testado

---

**Desenvolvido com ❤️ para a DevSim Studios**

*Última atualização: Abril 2026*
